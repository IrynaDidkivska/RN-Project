import { View, TouchableOpacity, Image, TextInput, Text } from 'react-native'
import { useEffect, useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import * as ImagePicker from 'expo-image-picker'
import * as MediaLibrary from 'expo-media-library'
import * as Location from 'expo-location'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { Feather, FontAwesome } from '@expo/vector-icons'

import { selectUser } from '../../redux/auth/authSelectors'
import { addPost } from '../../redux/posts/postsOperations'
import { createPostsStyles } from './CreatePostsScreenStyles'

const defaultMapLocation = {
  isLoading: false,
  latitude: null,
  longitude: null
}

export default function CreatePostScreen() {
  const [isCameraPermissionDenied, setCameraDenied] = useState(false)
  const [image, setImage] = useState(null)
  const [title, setTitle] = useState('')
  const [place, setPlace] = useState('')
  const [mapLocation, setMapLocation] = useState({ ...defaultMapLocation })
  const isDataFullFilled = image && title && place && !mapLocation.isLoading

  const { uid } = useSelector(selectUser)
  const { navigate } = useNavigation()
  const dispatch = useDispatch()

  useEffect(() => {
    getMapLocation()
  }, [])

  async function makePhoto() {
    const { granted } = await ImagePicker.requestCameraPermissionsAsync()
    if (!granted) {
      setCameraDenied(true)
      return alert('Permission to camera access was denied')
    }

    await MediaLibrary.requestPermissionsAsync()
    const { canceled, assets } = await ImagePicker.launchCameraAsync({
      quality: 1,
      allowsEditing: true,
      allowsMultipleSelection: false
    })
    if (!canceled) {
      await MediaLibrary.createAssetAsync(assets[0].uri)
      setImage(assets[0].uri)
      setCameraDenied(false)
    }
  }

  function removePhoto() {
    setImage(null)
  }

  async function getMapLocation() {
    const { status } = await Location.requestForegroundPermissionsAsync()
    if (status !== 'granted') {
      return setMapLocation({ ...defaultMapLocation })
    }

    setMapLocation((state) => ({ ...state, isLoading: true }))
    const {
      coords: { latitude, longitude }
    } = await Location.getCurrentPositionAsync({
      accuracy: Location.LocationAccuracy.Low
    })
    setMapLocation((state) => ({
      ...state,
      isLoading: false,
      latitude,
      longitude
    }))
  }

  function handleSubmit() {
    dispatch(
      addPost({
        authorID: uid,
        image,
        title: title.trim(),
        place: place.trim(),
        mapLocation: {
          latitude: mapLocation.latitude,
          longitude: mapLocation.longitude
        },
        comments: [],
        likes: 0
      })
    )
    resetData()
    navigate('PostsScreen')
  }

  function resetData() {
    setImage(null)
    setTitle('')
    setPlace('')
    setMapLocation({ ...defaultMapLocation })
  }

  console.log(mapLocation)

  return (
    <KeyboardAwareScrollView style={createPostsStyles.container}>
      <TouchableOpacity style={createPostsStyles.imgWrapper} onPress={image ? removePhoto : makePhoto}>
        {image && <Image style={createPostsStyles.imgSize} source={{ uri: image }} />}
        <View style={[createPostsStyles.cameraBtn, image && createPostsStyles.transparent]}>
          <FontAwesome name='camera' size={24} color={image ? '#fff' : '#BDBDBD'} />
        </View>
      </TouchableOpacity>
      {isCameraPermissionDenied ? (
        <Text style={createPostsStyles.warning}>
          To create a new post, please allow access to your camera.
        </Text>
      ) : (
        <Text style={createPostsStyles.cameraText}>{image ? 'Редагувати фото' : 'Завантажте фото'}</Text>
      )}

      <View style={createPostsStyles.inputsList}>
        <View style={createPostsStyles.inputWrapper}>
          <TextInput
            placeholder='Назва...'
            style={createPostsStyles.input}
            value={title}
            onChangeText={(value) => setTitle(value)}
            placeholderTextColor='#BDBDBD'
          />
        </View>
        <View style={createPostsStyles.inputWrapper}>
          <Feather name='map-pin' size={24} color='#BDBDBD' />
          <TextInput
            placeholder={mapLocation.isLoading ? 'Location is updating . . .' : ''}
            style={createPostsStyles.input}
            value={place}
            onChangeText={(value) => setPlace(value)}
            placeholderTextColor='#BDBDBD'
          />
        </View>
        <Text>{`latitude: ${mapLocation.latitude}, longitude: ${mapLocation.longitude}`}</Text>
      </View>

      <TouchableOpacity
        style={[createPostsStyles.submitBtn, isDataFullFilled && createPostsStyles.activeBtn]}
        disabled={!isDataFullFilled}
        onPress={handleSubmit}
      >
        <Text style={[createPostsStyles.submitBtnText, isDataFullFilled && createPostsStyles.activeText]}>
          Опубліковати
        </Text>
      </TouchableOpacity>

      <TouchableOpacity style={createPostsStyles.resetBtn} onPress={resetData}>
        <Feather name='trash-2' size={24} color='#BDBDBD' />
      </TouchableOpacity>
    </KeyboardAwareScrollView>
  )
}

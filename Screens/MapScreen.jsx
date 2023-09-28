import { useLayoutEffect } from "react";
import { useNavigation, useRoute } from "@react-navigation/native";
import { View, TouchableOpacity, Dimensions, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";
import { Feather } from "@expo/vector-icons";

export default function MapScreen() {
  const navigation = useNavigation();
  const { canGoBack, goBack, navigate } = navigation;
  const {
    params: {
      mapLocation: { longitude, latitude },
    },
  } = useRoute();

  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{ marginLeft: 16 }}
          hitSlop={{ left: 16, right: 32 }}
          onPress={() => (canGoBack() ? goBack() : navigate("Home"))}
        >
          <Feather name="arrow-left" size={24} color="#212121" />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        mapType="standard"
        region={{
          latitude,
          longitude,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      >
        <Marker title="I am here" coordinate={{ latitude, longitude }} />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});

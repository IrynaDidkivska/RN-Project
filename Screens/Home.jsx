import { TouchableOpacity, Alert } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import PostsScreen from "../Screens/PostsScreen/PostsScreen";
import CreatePostsScreen from "../Screens/CreatePostsScreen/CreatePostsScreen";
import ProfileScreen from "../Screens/ProfileScreen/ProfileScreen";

const Tabs = createBottomTabNavigator();

const Home = () => {
  const { navigate, goBack } = useNavigation();

  const headerIcon = (name, color) => (
    <Feather name={name} size={24} color={color} />
  );

  const goBackBtn = (
    <TouchableOpacity
      style={{ marginLeft: 16 }}
      hitSlop={{ left: 16, right: 32 }}
      onPress={goBack}
    >
      {headerIcon("arrow-left", "#212121")}
    </TouchableOpacity>
  );

  const logOutButton = (
    <TouchableOpacity
      style={{ marginRight: 16 }}
      hitSlop={{ left: 32, right: 16 }}
      onPress={() => Alert.alert("Logout")}
    >
      {headerIcon("log-out", "#BDBDBD")}
    </TouchableOpacity>
  );

  return (
    <Tabs.Navigator
      initialRouteName="PostsScreen"
      screenOptions={{
        tabBarStyle: {
          height: 70,
          paddingHorizontal: 70,
          paddingTop: 10,
        },
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: "#FF6C00",
        tabBarActiveTintColor: "#ffffff",
        tabBarInactiveTintColor: "rgba(33, 33, 33, 0.8)",
        tabBarItemStyle: {
          width: 70,
          height: 40,
          borderRadius: 20,
        },
        headerTitleStyle: {
          fontSize: 17,
          fontWeight: 500,
        },
      }}
    >
      <Tabs.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          title: "Публікації",
          headerRight: () => logOutButton,
          tabBarIcon: ({ color }) => headerIcon("grid", color),
        }}
      />
      <Tabs.Screen
        name="CreatePostsScreen"
        component={CreatePostsScreen}
        options={{
          title: "Створити публікацію",
          headerLeft: () => goBackBtn,
          tabBarIcon: ({ color }) => headerIcon("plus", color),
        }}
      />
      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => headerIcon("user", color),
        }}
      />
    </Tabs.Navigator>
  );
};

export default Home;

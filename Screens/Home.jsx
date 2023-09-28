import { useEffect } from "react";
import { TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { selectIsLoggedIn } from "../redux/auth/authSelectors";
import { logOut } from "../redux/auth/authOperations";
import CreatePostScreen from "./CreatePostsScreen/CreatePostsScreen";
import ProfileScreen from "./ProfileScreen/ProfileScreen";
import PostsScreen from "./PostsScreen/PostsScreen";

const Tabs = createBottomTabNavigator();

export default function Home() {
  const { navigate, goBack } = useNavigation();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("LoginScreen");
    }
  }, [isLoggedIn]);

  const tabBarIcon = (name, color) => (
    <Feather name={name} size={24} color={color} />
  );

  const goBackBtn = (
    <TouchableOpacity
      style={{ marginLeft: 16 }}
      hitSlop={{ left: 16, right: 32 }}
      onPress={goBack}
    >
      {tabBarIcon("arrow-left", "#212121")}
    </TouchableOpacity>
  );

  const logOutButton = (
    <TouchableOpacity
      style={{ marginRight: 16 }}
      hitSlop={{ left: 32, right: 16 }}
      onPress={() => dispatch(logOut())}
    >
      {tabBarIcon("log-out", "#BDBDBD")}
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
          fontWeight: "bold",
        },
      }}
    >
      <Tabs.Screen
        name="PostsScreen"
        component={PostsScreen}
        options={{
          title: "Публікації",
          headerRight: () => logOutButton,
          tabBarIcon: ({ color }) => tabBarIcon("grid", color),
        }}
      />
      <Tabs.Screen
        name="CreatePostScreen"
        component={CreatePostScreen}
        options={{
          title: "Створити публікацію",
          tabBarStyle: {
            height: 0,
          },
          tabBarStyle: { display: "none" },
          headerLeft: () => goBackBtn,
          tabBarIcon: ({ color }) => tabBarIcon("plus", color),
        }}
      />
      <Tabs.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => tabBarIcon("user", color),
        }}
      />
    </Tabs.Navigator>
  );
}

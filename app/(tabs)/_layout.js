import { Tabs } from "expo-router";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from '@expo/vector-icons';
export default function Layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="profile"
        options={{
          title: "Profiles",
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Feather name="eye" size={24} color="black" />
            ) : (
              <Feather name="eye" size={24} color="gray" />
            ),
        }}
      />

      <Tabs.Screen
        name="chts"
        options={{
          title: "Chat",
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Entypo name="chat" 
                size={24}
                color="black"
              />
            ) : (
              <Entypo
                name="chat"
                size={24}
                color="gray"
              />
            ),
        }}
      />

      <Tabs.Screen
        name="bio"
        options={{
          title: "Account",
          headerShown: false,
          tabBarIcon: ({ focused }) =>
            focused ? (
              <MaterialCommunityIcons
                name="guy-fawkes-mask"
                size={24}
                color="black"
              />
            ) : (
              <MaterialCommunityIcons
                name="guy-fawkes-mask"
                size={24}
                color="gray"
              />
            ),
        }}
      />
    </Tabs>
  );
}
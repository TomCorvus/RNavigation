import { useState } from "react";
import { Alert, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Button } from "@react-navigation/elements";
import {
  GestureHandlerRootView,
  Pressable,
  TouchableHighlight,
} from "react-native-gesture-handler";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import PagerView from "react-native-pager-view";

const Tab = createMaterialTopTabNavigator();
const Stack = createNativeStackNavigator();
const UserStack = createNativeStackNavigator();

function Tab1() {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Tab 1</Text>

      <Pressable
        style={styles.button}
        onPress={() => {
          console.log("Parent");
        }}
      >
        <Pressable
          style={styles.button}
          onPress={() => {
            console.log("Child");
          }}
        >
          <Text>Click me!</Text>
        </Pressable>
      </Pressable>
    </View>
  );
}

function Tab2() {
  const navigation = useNavigation();
  const [isPressed, setIsPressed] = useState(false);
  const [whoPressed, setWhoPressed] = useState("");

  // console.log(JSON.stringify("isPressed"));
  // console.log(JSON.stringify(isPressed));

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Tab 2</Text>
      <Text>{whoPressed}</Text>
      <Text>{String(isPressed)}</Text>
      <Pressable
        style={styles.button}
        onPressIn={() => {
          console.log(JSON.stringify("onPressIn"));
          setIsPressed(true);
        }}
        onPress={() => {
          setWhoPressed("Pressable");
        }}
        onPressOut={() => {
          console.log(JSON.stringify("onPressOut"));
          setIsPressed(false);
        }}
      >
        <Text>Click me!</Text>
      </Pressable>
      <TouchableHighlight
        style={styles.button}
        onPressIn={() => setIsPressed(true)}
        onPress={() => {
          setWhoPressed("TouchableHighlight");
        }}
        onPressOut={() => setIsPressed(false)}
      >
        <Text>TouchableHighlight</Text>
      </TouchableHighlight>
      <TouchableOpacity
        style={styles.button}
        onPressIn={() => setIsPressed(true)}
        onPress={() => {
          setWhoPressed("TouchableOpacity");
        }}
        onPressOut={() => setIsPressed(false)}
      >
        <Text>TouchableOpacity</Text>
      </TouchableOpacity>
      {/* <Button onPress={() => navigation.navigate("UserPages")}>
        Go to Profile
      </Button> */}
    </View>
  );
}

function UserTabsNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Tab1" component={Tab1} />
      <Tab.Screen name="Tab2" component={Tab2} />
    </Tab.Navigator>
  );
}

function ProfileScreen() {
  return (
    <PagerView style={styles.pagerView} initialPage={0}>
      <View key="1">
        <Text>First page</Text>
      </View>
      <View key="2">
        <Text>Second page</Text>
      </View>
    </PagerView>
  );
}

const styles = StyleSheet.create({
  pagerView: {
    flex: 1,
  },
  button: {
    padding: 20,
    marginBottom: 10,
    backgroundColor: "grey",
  },
});

function UserPagesNavigator() {
  return (
    <Stack.Navigator>
      {/* Example */}
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <GestureHandlerRootView>
      <NavigationContainer>
        <UserStack.Navigator>
          <UserStack.Screen name="UserTabs" component={UserTabsNavigator} />
          <UserStack.Screen name="UserPages" component={UserPagesNavigator} />
        </UserStack.Navigator>
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}

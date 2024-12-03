import * as React from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { Button } from "@react-navigation/elements";
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
    </View>
  );
}

function Tab2() {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Tab 2</Text>
      <Button onPress={() => navigation.navigate("UserPages")}>
        Go to Profile
      </Button>
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
    <NavigationContainer>
      <UserStack.Navigator>
        <UserStack.Screen name="UserTabs" component={UserTabsNavigator} />
        <UserStack.Screen name="UserPages" component={UserPagesNavigator} />
      </UserStack.Navigator>
    </NavigationContainer>
  );
}

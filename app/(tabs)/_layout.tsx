
import * as Notifications from 'expo-notifications';
import { Tabs } from 'expo-router';
import { Text } from 'react-native';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldPlaySound: true,
    shouldSetBadge: false,
    shouldShowBanner: true,
    shouldShowList: true,
  }),
});

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#0099CC',
        tabBarInactiveTintColor: '#999999',
        headerStyle: {
          backgroundColor: '#FFFFFF',
        },
        headerTitleStyle: {
          fontWeight: 'bold',
        },
        tabBarStyle: {
          height: 65,
          paddingBottom: 8,
          paddingTop: 5,
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Reminder',
          tabBarIcon: () => <Text>⏰</Text>,
        }}
      />

      <Tabs.Screen
        name="tips"
        options={{
          title: 'Tips',
          tabBarIcon: () => <Text>💧</Text>,
        }}
      />

      <Tabs.Screen
        name="about"
        options={{
          title: 'About',
          tabBarIcon: () => <Text>ℹ️</Text>,
        }}
      />
    </Tabs>
  );
}

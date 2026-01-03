import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

const TabsLayout = () => {
  return (
    <Tabs
        screenOptions={{
            tabBarActiveTintColor: '#e91e63',
            tabBarInactiveTintColor: 'blue',
        }}
    >
        <Tabs.Screen
            name="index"
            options={{
                title: 'Todo',
                tabBarIcon: ({color, size}) => (
                    <Ionicons name='flash-outline' size={size} color={color} />
                )
            }}
        />
        <Tabs.Screen
            name="settings"
            options={{
                title: 'Settings',
                tabBarIcon: ({color, size}) => (
                    <Ionicons name='settings' size={size} color={color} />
                )
            }}
        />
    </Tabs>
  )
}

export default TabsLayout
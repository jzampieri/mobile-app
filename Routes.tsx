import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import Login from './Login';
import Home from './Home';
import Apoio from './Apoio';
import Adicionar from './Adicionar';
import Configuracoes from './Configuracoes';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: '#121122',
          height: 70,
          borderTopColor: '#19193b',
          paddingBottom: 8,
        },
        tabBarIcon: ({ color, size }) => {
          let iconName: string;

          if (route.name === 'Home') iconName = 'home-outline';
          else if (route.name === 'Apoio') iconName = 'chatbubble-ellipses-outline';
          else if (route.name === 'Adicionar') iconName = 'add-circle-outline';
          else iconName = 'settings-outline';

          return <Ionicons name={iconName as any} size={22} color={color} />;
        },
        tabBarLabelStyle: {
          fontSize: 12,
          paddingTop: 2,
        },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#888'
      })}
    >
      <Tab.Screen name="Home" component={Home} options={{ title: 'Início' }} />
      <Tab.Screen name="Apoio" component={Apoio} options={{ title: 'Apoio Emocional' }} />
      <Tab.Screen name="Adicionar" component={Adicionar} options={{ title: 'Nova Ação' }} />
      <Tab.Screen name="Configuracoes" component={Configuracoes} options={{ title: 'Configurações' }} />
    </Tab.Navigator>
  );
}

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Main" component={TabRoutes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


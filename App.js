import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Router, Drawer, Scene } from 'react-native-router-flux';
import HomeScreen from './screens/HomeScreen';
import DrawerIcon from './assets/drawer.png'
import { MaterialCommunityIcons } from '@expo/vector-icons'

export default function App() {
  return (
    <Router>
      <Drawer
        key="root"
        drawerIcon={<MaterialCommunityIcons name="menu" size={36} />}
      >
        <Scene
          key={"HomeScreen"}
          component={HomeScreen}
        />
      </Drawer>
    </Router>
  );
}

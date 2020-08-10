import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Router, Drawer, Scene } from 'react-native-router-flux';
import HomeScreen from './screens/HomeScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import DrawerContent from './components/DrawerContent';




export default function App() {


  console.disableYellowBox = true

  return (
    <Router>
      <Drawer
        key="root"
        drawerIcon={<MaterialCommunityIcons name="menu" size={36} />}
        contentComponent={() => <DrawerContent />}
      >
        <Scene
          key={"HomeScreen"}
          component={HomeScreen}
        />
      </Drawer>
    </Router>
  );
}

import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Router, Drawer, Scene } from 'react-native-router-flux';
import HomeScreen from './screens/HomeScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import DrawerContent from './components/DrawerContent';
import { setTestDeviceIDAsync } from 'expo-ads-admob';

export default function App() {


  useEffect(() => {

    setTestDeviceIDAsync("EMULATOR")



  }, [])

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

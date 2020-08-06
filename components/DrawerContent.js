import React from 'react'
import { StyleSheet, Text, View, Linking, BackHandler, Image, Share, Vibration } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { Entypo } from '@expo/vector-icons';

const DrawerContent = () => {


    const DrawerLink = ({ onPress, title, icon }) => {
        return (

            <TouchableOpacity
                onPress={onPress}
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    margin: 10,
                    marginLeft: '15%',

                }}>
                <MaterialCommunityIcons
                    name={icon}
                    size={24}
                />
                <Text
                    style={{
                        marginLeft: 10,
                        fontSize: 16
                    }}>{title}</Text>
            </TouchableOpacity>

        )
    }

    return (
        <View style={{ justifyContent: 'center', height: '100%' }}>

            <DrawerLink
                title="Rate Us"
                icon="star"
                onPress={() => {
                    Linking.openURL('https://expo.io')
                }}
            />

            <DrawerLink
                title="Share"
                icon="share-variant"
                onPress={() => {
                    Share.share({ message: `It's AWESOME! Vibration feels good`, url:"", title:"Vibration App" })
                }}
            />

            <DrawerLink
                title="Exit App"
                icon="exit-to-app"
                onPress={() => {
                    Vibration.cancel()
                    BackHandler.exitApp()
                }}
            />
        </View>
    )
}

export default DrawerContent

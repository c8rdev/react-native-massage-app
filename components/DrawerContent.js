import React from 'react'
import { StyleSheet, Text, View, Linking, BackHandler, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { Entypo } from '@expo/vector-icons'; 

const DrawerContent = () => {
    return (
        <View>
            <TouchableOpacity 
            style={styles.touchableButton}>
                <Text 
                style={styles.touchableButtonText}>Link 1</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.touchableButton}>
                <Text 
                style={styles.touchableButtonText}>Link 2</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.touchableButton}>
                <MaterialCommunityIcons name="exit-to-app" size={24} color="black" style={styles.iconStyle}/>
                <Text 
                style={styles.touchableButtonText}>Link 3</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.touchableButton}
            onPress={() => {Linking.openURL('https://expo.io');}}>
                <MaterialCommunityIcons name="star" size={24} color="yellow" style={styles.iconStyle}/>
                <Text style={styles.touchableButtonText}>Rate us</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.touchableButton}>
                <Entypo name="share" size={24} color="yellow" style={styles.iconStyle}/>
                <Text style={styles.touchableButtonText}></Text>
                <Text 
                style={styles.touchableButtonText}>Share</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.touchableButton}
            onPress={() => {BackHandler.exitApp();}}>
                <MaterialCommunityIcons name="exit-to-app" size={24} color="yellow" style={styles.iconStyle}/>
                <Text 
                style={styles.touchableButtonText}>Quit</Text>
            </TouchableOpacity>

        </View>
    )
}

export default DrawerContent

const styles = StyleSheet.create({
    touchableButton:{
        alignItems:"center",
        backgroundColor: "#690375",
        paddingVertical:30,
        flexDirection:"row",
        paddingStart:20
    },
    touchableButtonText:{
        fontSize:24,
        color:"#E7D7C1"
    },
    iconStyle:{
        marginRight:5
    }
})

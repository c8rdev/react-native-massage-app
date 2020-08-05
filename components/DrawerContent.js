import React from 'react'
import { StyleSheet, Text, View, Linking, BackHandler, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'


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
                <Text 
                style={styles.touchableButtonText}>Link 3</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.touchableButton}
            onPress={() => {Linking.openURL('https://expo.io');}}>
                <Image 
                source={require("../assets/star.png")}
                fadeDuration={0}
                style={styles.iconStyle}/>
                <Text style={styles.touchableButtonText}>Rate us</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.touchableButton}>
                <Image 
                source={require("../assets/share.png")}
                fadeDuration={0}
                style={styles.iconStyle}/>
                <Text style={styles.touchableButtonText}></Text>
                <Text 
                style={styles.touchableButtonText}>Share</Text>
            </TouchableOpacity>

            <TouchableOpacity 
            style={styles.touchableButton}
            onPress={() => {BackHandler.exitApp();}}>
                <Image 
                source={require("../assets/quit.png")}
                fadeDuration={0}
                style={styles.iconStyle}/>
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
        width:20,
        height:20,
        marginRight:5
    }
})

import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'

const DrawerContent = () => {
    return (
        <View>
            <TouchableOpacity style={styles.touchableButton}>
                <Text style={styles.touchableButtonText}>Link 1</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableButton}>
                <Text style={styles.touchableButtonText}>Link 2</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableButton}>
                <Text style={styles.touchableButtonText}>Link 3</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableButton}>
                <Text style={styles.touchableButtonText}>Rate us</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableButton}>
                <Text style={styles.touchableButtonText}>Share</Text>
            </TouchableOpacity>
        </View>
    )
}

export default DrawerContent

const styles = StyleSheet.create({
    touchableButton:{
        alignItems:"center",
        backgroundColor: "#F786AA",
        paddingVertical:30,
    },
    touchableButtonText:{
        fontSize:24,
        color:"#A14A76"
    }
})

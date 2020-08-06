import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Dimensions, Button, Vibration, Platform } from 'react-native'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import DropdownAlert from 'react-native-dropdownalert';
import {AdMobBanner, AdMobInterstitial } from "expo-ads-admob"


const HomeScreen = () => {
    const [dropDownAlertRef, setDropDownAlertRef] = useState(null)
    const PATTERN_SOFT = [
        1000,
        1000,
    ];
    const PATTERN_FASTER = [
        700,
        800,
    ];

    const PATTERN_HARD = [
        300,
        600,
    ];

    const PATTERN_GODLIKE = [
        30,
        300,
    ];

    const onSoftPress = async () => {
        //
        Vibration.vibrate(PATTERN_SOFT, true)
        dropDownAlertRef.alertWithType('success', '', 'Soft Mode Started');
    }

    const onFasterPress = async () => {
        //
        Vibration.vibrate(PATTERN_FASTER, true)
        dropDownAlertRef.alertWithType('success', '', 'Faster Mode Started');
    }

    const onHardPress = async () => {
        //
        Vibration.vibrate(PATTERN_HARD, true)
        dropDownAlertRef.alertWithType('success', '', 'Hard Mode Started');
    }

    const onGodlikePress = async () => {
        //

        await AdMobInterstitial.setAdUnitID('ca-app-pub-3940256099942544/1033173712'); // Test ID, Replace with your-admob-unit-id
        await AdMobInterstitial.requestAdAsync({ servePersonalizedAds: true });
        await AdMobInterstitial.showAdAsync();

  
    }

    const onStopPress = async () => {
        // vibration cancel
        Vibration.cancel()
        dropDownAlertRef.alertWithType('error', '', 'Vibration Stopped');
    }


    useEffect(() => {

        AdMobInterstitial.addEventListener('interstitialDidClose', () => {
            console.log("CLOSED")
            Vibration.vibrate(PATTERN_GODLIKE, true)
            dropDownAlertRef.alertWithType('success', '', 'Godlike Mode Started');
            
        })

        return () => {
            AdMobInterstitial.removeAllListeners()
        }
    }, [])



    const MassageButton = ({ backgroundColor = "pink", color = 'black', icon = "speedometer", text = "", onPress }) => {
        return <TouchableOpacity
            onPress={onPress}
            style={{
                width: Dimensions.get('window').width / 10 * 4,
                height: Dimensions.get('window').width / 10 * 4,
                backgroundColor: backgroundColor,
                marginTop: Dimensions.get('window').width / 10 * 1,
                borderRadius: 10,
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingVertical: 10
            }}
        >
            <MaterialCommunityIcons
                name={icon}
                size={Dimensions.get('window').width / 10 * 2}
                color={color}
            />

            <Text
                style={{
                    fontSize: 18,
                    color: color
                }}
            >{text}</Text>

        </TouchableOpacity>
    }

    return (
        <View style={{ height: '100%', backgroundColor: "#ededed", width: '100%', alignItems: 'center' }}>
            <DropdownAlert ref={ref => setDropDownAlertRef(ref)} />
            <ScrollView
                contentContainerStyle={{ flex: 1, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center', backgroundColor: '#ededed' }}
            >
                <MassageButton
                    backgroundColor="pink"
                    icon="speedometer-slow"
                    text="Soft"
                    onPress={onSoftPress}
                />
                <MassageButton
                    backgroundColor="#FF3A92"
                    icon="speedometer-medium"
                    text="Faster"
                    onPress={onFasterPress}
                />
                <MassageButton
                    backgroundColor="#FF3632"
                    icon="speedometer"
                    text="Hard"
                    onPress={onHardPress}
                />
                <MassageButton
                    backgroundColor="#353535"
                    color="orange"
                    icon="fire"
                    text="Godlike"
                    onPress={onGodlikePress}
                />

            </ScrollView>
            <TouchableOpacity
                style={styles.stopButton}
                onPress={onStopPress}
            >
                <Text style={styles.stopButtonText}>STOP</Text>
            </TouchableOpacity>
            <AdMobBanner
                bannerSize="banner"
                adUnitID="ca-app-pub-3940256099942544/6300978111"
                onDidFailToReceiveAdWithError={(e) => { console.log(e) }}
            />

        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    stopButton: {
        paddingVertical: 10,
        marginVertical: 10,
        borderRadius: 60,
        backgroundColor: "#EB5400",
        alignItems: "center",
        marginHorizontal: 50,
        paddingHorizontal: 50
    },
    stopButtonText: {
        color: "white",
    }
})

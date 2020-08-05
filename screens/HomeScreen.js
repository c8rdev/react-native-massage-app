import React from 'react'
import { StyleSheet, Text, View, Dimensions, Button, Vibration } from 'react-native'
import { TouchableOpacity, ScrollView } from 'react-native-gesture-handler'
import { MaterialCommunityIcons } from '@expo/vector-icons'



const HomeScreen = () => {
    const ONE_SECOND_IN_MS = 1000;
    const PATTERN = [
        2 * ONE_SECOND_IN_MS,
        4 * ONE_SECOND_IN_MS,
        8 * ONE_SECOND_IN_MS,
        16 * ONE_SECOND_IN_MS,
      ];
    
    const onSoftPress = async () => {
        //
        Vibration.vibrate(PATTERN[0])
    }

    const onFasterPress = async () => {
        //
        Vibration.vibrate(PATTERN[1])
    }

    const onHardPress = async () => {
        //
        Vibration.vibrate(PATTERN[2])
    }

    const onGodlikePress = async () => {
        //
        Vibration.vibrate(PATTERN[3])
    }

    const onStopPress = async () => {
        // vibration cancel
        Vibration.cancel()
    }




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
        <View style={{ height: '100%' }}>
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
            <Button
                title="Stop"
                color="#EB5400"
                onPress={onStopPress}
            />
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({})

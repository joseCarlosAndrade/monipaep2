// this file is read as a router to /settings route

import { Link } from 'expo-router';
import {View, Text, StyleSheet} from 'react-native';

export default function SettingsScreen() {
    return (
        <View style={styles.container}>
            <Text>this is Settings Page!</Text>
            <Link style={styles.link} href='/'>Return to home</Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center'
    },
    link : {
        backgroundColor : 'red',
        color : 'white',
        padding : 10,
        borderRadius : 15
    }
})
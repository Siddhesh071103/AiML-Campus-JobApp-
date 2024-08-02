import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import AntDesign from 'react-native-vector-icons/AntDesign';
import pic from "../../assets/pic.jpg"
import { useNavigation } from '@react-navigation/native'

const StartScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <Text style={[styles.text, styles.textWithMargin]}>Your search for</Text>
            <Text style={[styles.text, styles.textWithMargin]}>the next dream</Text>
            <Text style={styles.text}>job is over 🚀</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SearchScreen')} style={styles.bg}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={styles.start}>Start Searching</Text>
                    <AntDesign style={{ marginLeft: 10, marginTop: 3 }} name="arrowright" size={20} color="white" />
                </View>
            </TouchableOpacity>
            <Image style={styles.image} source={pic} />
        </View>
    )
}

export default StartScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#201f24',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 40,
        position: 'relative',
    },
    text: {
        marginBottom: 40,
        color: 'white',
        textAlign: 'center',
        fontSize: 40,
        fontFamily: 'Roboto-Bold'
    },
    start: {
        color: 'white',
        fontSize: 15,
        fontFamily: 'Roboto-Medium'
    },
    bg: {
        backgroundColor: '#5b21ff',
        padding: 10,
        borderRadius: 50,
        width: 300,
        alignItems: 'center',
    },
    textWithMargin: {
        marginBottom: 3,
    },
    image: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 400,
        resizeMode: 'cover',
    },
})
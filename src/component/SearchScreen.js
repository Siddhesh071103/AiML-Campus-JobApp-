import { Image, Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import person from '../../assets/person.jpg';
import { TextInput } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { useNavigation } from '@react-navigation/native'

const SearchScreen = () => {
    const navigation = useNavigation();
    const [expandedText, setExpandedText] = useState([false, false, false]);

    const handleReadMore = (index) => {
        const newExpandedText = [...expandedText];
        newExpandedText[index] = !newExpandedText[index];
        setExpandedText(newExpandedText);
    };

    const fullText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.";
    const truncatedText = fullText.slice(0, 100) + "... ";

    return (
        <View style={styles.container}>
            <View style={styles.position}>
                <Text style={styles.text}>Hello Kabira 👋</Text>
                <Image style={styles.image} source={person} />
            </View>
            <Text style={styles.job}>Find Jobs</Text>
            <View style={styles.border}>
                <Feather style={{ marginLeft: 12, alignSelf: 'center' }} name="search" size={26} color="grey" />
                <TextInput placeholder='Search for company or roles...' placeholderTextColor={"grey"} style={styles.input} />
            </View>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <View style={styles.cardContainer}>
                    <View style={{ marginTop: -10, marginRight: -20, height: 60, width: 120, backgroundColor: '#201f24', justifyContent: 'space-around', position: 'absolute', top: 10, right: 10, zIndex: 1, borderBottomLeftRadius: 25 }}>
                        <Pressable style={styles.viewbtn}>
                            <Text style={styles.viewButtonText}>View</Text>
                        </Pressable>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('JobDetails')} style={styles.card}>
                        <View style={{ padding: 15, flexDirection: 'row', gap: 15 }}>
                            <Image source={person} style={styles.compimage} />
                            <View>
                                <Text style={{ color: 'white', fontSize: 15, fontWeight: '600' }}>Sr. UX Designer</Text>
                                <Text style={{ color: 'white' }}>Google</Text>
                            </View>
                        </View>
                        <View style={styles.tabsContainer}>
                            <View style={styles.tab}>
                                <EvilIcons style={{ marginBottom: 5 }} name="location" size={20} color="white" />
                                <Text style={styles.tabText}>New York</Text>
                            </View>
                            <View style={styles.tab}>
                                <Entypo name="graduation-cap" size={20} color="white" />
                                <Text style={styles.tabText}>3 years exp.</Text>
                            </View>
                            <View style={styles.tab}>
                                <EvilIcons style={{ marginBottom: 5 }} name="clock" size={20} color="white" />
                                <Text style={styles.tabText}>Fulltime</Text>
                            </View>
                        </View>
                        <View style={{ padding: 15 }}>
                            <Text style={{ color: 'white', fontSize: 12 }}>
                                {expandedText[0] ? fullText : truncatedText}
                                <Text style={{ color: 'blue' }} onPress={() => handleReadMore(0)}>
                                    {expandedText[0] ? "Read less" : "Read more"}
                                </Text>
                            </Text>
                        </View>
                        <View style={styles.cardContent}>
                            <View style={styles.cardBottomWhite}>
                                <View style={styles.salary}>
                                    <View style={{ flexDirection: 'row', gap: 5 }}>
                                        <Entypo style={{ alignSelf: 'center' }} name="back-in-time" size={15} color="black" />
                                        <Text style={{ color: 'black', gap: 5, fontSize: 12, marginTop: 2 }}>Posted 2 days ago</Text>
                                    </View>
                                    <Text style={{ color: 'black', fontWeight: '800', fontSize: 15 }}>$50K/mo</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.cardContainer}>
                    <View style={{ marginTop: -10, marginRight: -20, height: 60, width: 120, backgroundColor: '#201f24', justifyContent: 'space-around', position: 'absolute', top: 10, right: 10, zIndex: 1, borderBottomLeftRadius: 25 }}>
                        <Pressable style={styles.viewbtn}>
                            <Text style={styles.viewButtonText}>View</Text>
                        </Pressable>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('JobDetails')} style={styles.thirdCard}>
                        <View style={{ padding: 15, flexDirection: 'row', gap: 15 }}>
                            <Image source={person} style={styles.compimage} />
                            <View>
                                <Text style={{ color: 'white', fontSize: 15, fontWeight: '600' }}>Project Manager</Text>
                                <Text style={{ color: 'white' }}>Airbnb</Text>
                            </View>
                        </View>
                        <View style={styles.tabsContainer}>
                            <View style={styles.tab}>
                                <EvilIcons style={{ marginBottom: 5 }} name="location" size={20} color="white" />
                                <Text style={styles.tabText}>Sydney</Text>
                            </View>
                            <View style={styles.tab}>
                                <Entypo name="graduation-cap" size={20} color="white" />
                                <Text style={styles.tabText}>1-5 years exp.</Text>
                            </View>
                            <View style={styles.tab}>
                                <EvilIcons style={{ marginBottom: 5 }} name="clock" size={20} color="white" />
                                <Text style={styles.tabText}>Part-time</Text>
                            </View>
                        </View>
                        <View style={{ padding: 15 }}>
                            <Text style={{ color: 'white', fontSize: 12 }}>
                                {expandedText[2] ? fullText : truncatedText}
                                <Text style={{ color: 'blue' }} onPress={() => handleReadMore(2)}>
                                    {expandedText[2] ? "Read less" : "Read more"}
                                </Text>
                            </Text>
                        </View>
                        <View style={styles.cardContent}>
                            <View style={styles.cardBottomWhite}>
                                <View style={styles.salary}>
                                    <View style={{ flexDirection: 'row', gap: 5 }}>
                                        <Entypo style={{ alignSelf: 'center' }} name="back-in-time" size={15} color="black" />
                                        <Text style={{ color: 'black', gap: 5, fontSize: 12, marginTop: 2 }}>Posted 5 days ago</Text>
                                    </View>
                                    <Text style={{ color: 'black', fontWeight: '800', fontSize: 15 }}>$25K/mo</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={styles.cardContainer}>
                    <View style={{ marginTop: -10, marginRight: -20, height: 60, width: 120, backgroundColor: '#201f24', justifyContent: 'space-around', position: 'absolute', top: 10, right: 10, zIndex: 1, borderBottomLeftRadius: 25 }}>
                        <Pressable style={styles.viewbtn}>
                            <Text style={styles.viewButtonText}>View</Text>
                        </Pressable>
                    </View>
                    <TouchableOpacity onPress={() => navigation.navigate('JobDetails')} style={styles.secCard}>
                        <View style={{ padding: 15, flexDirection: 'row', gap: 15 }}>
                            <Image source={person} style={styles.compimage} />
                            <View>
                                <Text style={{ color: 'white', fontSize: 15, fontWeight: '600' }}>Graphic Designer</Text>
                                <Text style={{ color: 'white' }}>Spotify</Text>
                            </View>
                        </View>
                        <View style={styles.tabsContainer}>
                            <View style={styles.tab}>
                                <EvilIcons style={{ marginBottom: 5 }} name="location" size={20} color="white" />
                                <Text style={styles.tabText}>Remote</Text>
                            </View>
                            <View style={styles.tab}>
                                <Entypo name="graduation-cap" size={20} color="white" />
                                <Text style={styles.tabText}>Freshers</Text>
                            </View>
                            <View style={styles.tab}>
                                <EvilIcons style={{ marginBottom: 5 }} name="clock" size={20} color="white" />
                                <Text style={styles.tabText}>Fulltime</Text>
                            </View>
                        </View>
                        <View style={{ padding: 15 }}>
                            <Text style={{ color: 'white', fontSize: 12 }}>
                                {expandedText[1] ? fullText : truncatedText}
                                <Text style={{ color: 'blue' }} onPress={() => handleReadMore(1)}>
                                    {expandedText[1] ? "Read less" : "Read more"}
                                </Text>
                            </Text>
                        </View>
                        <View style={styles.cardContent}>
                            <View style={styles.cardBottomWhite}>
                                <View style={styles.salary}>
                                    <View style={{ flexDirection: 'row', gap: 5 }}>
                                        <Entypo style={{ alignSelf: 'center' }} name="back-in-time" size={15} color="black" />
                                        <Text style={{ color: 'black', gap: 5, fontSize: 12, marginTop: 2 }}>Posted 2 days ago</Text>
                                    </View>
                                    <Text style={{ color: 'black', fontWeight: '800', fontSize: 15 }}>$50K/mo</Text>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </View>
    );
};

export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#201f24',
    },
    text: {
        color: 'white',
        padding: 15,
        fontSize: 18,
    },
    position: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        justifyContent: 'space-between',
        marginRight: 15,
        marginTop: -5,
    },
    image: {
        width: 40,
        height: 40,
        borderRadius: 50,
        borderColor: 'white',
    },
    job: {
        color: 'white',
        padding: 15,
        fontSize: 25,
        fontWeight: '500',
    },
    input: {
        color: 'grey',
        width: 300,
    },
    border: {
        marginTop: 5,
        flexDirection: 'row',
        gap: 5,
        width: '90%',
        borderRadius: 10,
        backgroundColor: 'rgba(211, 211, 211, 0.1)',
        marginLeft: 15,
    },
    scrollView: {
        flex: 1,
    },
    cardContainer: {
        marginTop: 25,
        marginLeft: 15,
        width: '90%',
        height: 250,
        position: 'relative',
    },
    card: {
        width: '100%',
        height: '100%',
        backgroundColor: '#5b21ff',
        borderRadius: 20,
        position: 'relative',
    },
    secCard: {
        width: '100%',
        height: '100%',
        backgroundColor: '#e91c23',
        borderRadius: 20,
        position: 'relative',
    },
    thirdCard: {
        width: '100%',
        height: '100%',
        backgroundColor: '#f5c641',
        borderRadius: 20,
        position: 'relative',
    },
    cardContent: {
        flex: 1,
        position: 'relative',
    },
    cardBottomWhite: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 60,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: 'white',
    },
    viewbtn: {
        width: 100,
        height: 50,
        borderColor: 'rgba(211, 211, 211, 0.8)',
        borderWidth: 1,
        borderRadius: 25,
        backgroundColor: 'rgba(240, 240, 240, 0.1)',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 10,
        right: 10,
        marginTop: -10
    },
    viewButtonText: {
        color: 'white',
        fontSize: 18,
        textAlign: 'center',
    },
    salary: {
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    compimage: {
        height: 45,
        width: 45,
        borderRadius: 5,
    },
    tabsContainer: {
        flexDirection: 'row',
        marginLeft: 15,
        marginTop: 10,
        gap: 10,
    },
    tab: {
        height: 30,
        width: 100,
        backgroundColor: 'rgba(240, 240, 240, 0.2)',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabText: {
        color: 'white',
        marginLeft: 5,
        fontSize: 10,
    },
});

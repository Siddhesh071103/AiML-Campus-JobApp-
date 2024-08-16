import { Image, Pressable, FlatList, StyleSheet, Text, TouchableOpacity, Linking, View, ScrollView } from 'react-native';
import React, { useState, useEffect } from 'react';
import person from '../../assets/person.jpg';
import { TextInput } from 'react-native-gesture-handler';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { useNavigation } from '@react-navigation/native';

const SearchScreen = () => {
    const handlePress = () => {
        Linking.openURL('https://www.google.com');
    };

    const navigation = useNavigation();
    const [expandedText, setExpandedText] = useState([false, false, false]);
    const [data, setData] = useState([]);
    const [page, setPage] = useState(1);

    const handleReadMore = (index) => {
        const newExpandedText = [...expandedText];
        newExpandedText[index] = !newExpandedText[index];
        setExpandedText(newExpandedText);
    };

    const fullText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";
    const truncatedText = fullText.slice(0, 50) + "... ";

    const loadMoreData = () => {
        // Simulate fetching more data from an API
        const newData = [
            {
                id: Math.random().toString(),
                jobTitle: 'Sr. UX Designer',
                companyName: 'Google',
                location: 'New York',
                experience: '3 years exp.',
                type: 'Fulltime',
                posted: '2 days ago',
                salary: '$50K/mo',
                color: '#5b21ff',
            },
            {
                id: Math.random().toString(),
                jobTitle: 'Project Manager',
                companyName: 'Airbnb',
                location: 'Sydney',
                experience: '1-5 years exp.',
                type: 'Part-time',
                posted: '5 days ago',
                salary: '$20K/mo',
                color: '#e91c23',
            },
            {
                id: Math.random().toString(),
                jobTitle: 'Graphic Designer',
                companyName: 'Spotify',
                location: 'Remote',
                experience: 'Freshers',
                type: 'Fulltime',
                posted: '2 days ago',
                salary: '$50K/mo',
                color: '#f5c641',
            },
        ];
        setData([...data, ...newData]);
        setPage(page + 1);
    };

    useEffect(() => {
        loadMoreData(); // Initial data load
    }, []);

    const renderItem = ({ item, index }) => (
        <View style={styles.cardContainer}>
            <View style={styles.viewContainer}>
                <Pressable style={styles.viewbtn} onPress={handlePress}>
                    <Text style={styles.viewButtonText}>View</Text>
                    <EvilIcons name="external-link" style={{ alignContent: 'center' }} size={20} color="white" />
                </Pressable>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate('JobDetails')} style={[styles.card, { backgroundColor: item.color }]}>
                <View style={styles.cardHeader}>
                    <Image source={person} style={styles.compimage} />
                    <View>
                        <Text style={styles.jobTitle}>{item.jobTitle}</Text>
                        <Text style={styles.companyName}>{item.companyName}</Text>
                    </View>
                </View>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={styles.tabsContainer}>
                    <View style={styles.tab}>
                        <EvilIcons style={{ marginBottom: 5 }} name="location" size={20} color="white" />
                        <Text style={styles.tabText}>{item.location}</Text>
                    </View>
                    <View style={styles.tab}>
                        <Entypo name="graduation-cap" size={20} color="white" />
                        <Text style={styles.tabText}>{item.experience}</Text>
                    </View>
                    <View style={styles.tab}>
                        <EvilIcons style={{ marginBottom: 5 }} name="clock" size={20} color="white" />
                        <Text style={styles.tabText}>{item.type}</Text>
                    </View>
                </ScrollView>
                <View style={styles.descriptionContainer}>
                    <Text style={styles.descriptionText}>
                        {expandedText[index] ? fullText : truncatedText}
                        <Text style={styles.readMore} onPress={() => handleReadMore(index)}>
                            {expandedText[index] ? "Read less" : "Read more"}
                        </Text>
                    </Text>
                </View>
                <View style={styles.cardBottom}>
                    <View style={styles.cardBottomWhite}>
                        <View style={styles.salaryContainer}>
                            <View style={styles.salaryInfo}>
                                <Entypo style={styles.icon} name="back-in-time" size={15} color="black" />
                                <Text style={styles.salaryText}>{item.posted}</Text>
                            </View>
                            <Text style={styles.salaryAmount}>{item.salary}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );

    return (
        <View style={styles.container}>
            <View style={styles.position}>
                <Text style={styles.text}>Hello Kabira 👋</Text>
                <Image style={styles.image} source={person} />
            </View>
            <Text style={styles.job}>Find Jobs</Text>
            <View style={styles.border}>
                <Feather style={{ marginLeft: 12, alignSelf: 'center' }} name="search" size={26} color="rgba(211, 211, 211, 0.8)" />
                <TextInput placeholder='Search for company or roles...' placeholderTextColor={"rgba(211, 211, 211, 0.8)"} style={styles.input} />
            </View>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                onEndReached={loadMoreData}
                onEndReachedThreshold={0.5}
                contentContainerStyle={styles.scrollViewContent}
            />
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
        marginLeft: 5,
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
        marginLeft: 5,
        fontSize: 25,
        fontWeight: '500',
    },
    input: {
        color: 'grey',
        width: '100%',
    },
    border: {
        marginTop: 5,
        flexDirection: 'row',
        gap: 5,
        alignSelf: 'center',
        width: '90%',
        borderRadius: 10,
        backgroundColor: 'rgba(211, 211, 211, 0.1)',
    },
    scrollViewContent: {
        paddingBottom: 20,
    },
    cardContainer: {
        marginTop: 15,
        alignSelf: 'center',
        width: '90%',
        height: 'auto',
        position: 'relative',
    },
    card: {
        width: '100%',
        backgroundColor: '#5b21ff',
        borderRadius: 20,
        position: 'relative',
        marginBottom: 15, // Adjusted margin
        overflow: 'hidden', // Ensure content doesn't overflow
    },
    viewContainer: {
        marginTop: -20,
        marginRight: -20,
        height: 70,
        width: 120,
        backgroundColor: '#201f24',
        justifyContent: 'space-around',
        position: 'absolute',
        top: 10,
        right: 10,
        zIndex: 1,
        borderBottomLeftRadius: 25,
    },
    viewbtn: {
        flexDirection: 'row',
        width: 100,
        height: 50,
        borderColor: 'rgba(211, 211, 211, 0.3)',
        borderWidth: 1,
        borderRadius: 25,
        backgroundColor: 'rgba(240, 240, 240, 0.1)',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        top: 10,
        right: 10,
    },
    viewButtonText: {
        color: 'white',
        fontSize: 12,
        textAlign: 'center',
    },
    cardHeader: {
        padding: 15,
        flexDirection: 'row',
        gap: 15,
    },
    compimage: {
        height: 45,
        width: 45,
        borderRadius: 5,
    },
    jobTitle: {
        color: 'white',
        fontSize: 15,
        fontWeight: '600',
    },
    companyName: {
        color: 'white',
    },
    tabsContainer: {
        flexDirection: 'row',
        paddingHorizontal: 15, // Padding inside the scroll view
        paddingVertical: 5, // Optional: Padding top and bottom
    },
    tab: {
        backgroundColor: 'rgba(240, 240, 240, 0.2)',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 50,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingHorizontal: 10,
        marginRight: 10,
    },
    tabText: {
        color: 'white',
        marginLeft: 5,
        fontSize: 10,
    },
    descriptionContainer: {
        padding: 15,
    },
    descriptionText: {
        color: 'white',
        fontSize: 12,
    },
    readMore: {
        color: 'white',
        textDecorationLine: 'underline',
    },
    cardBottom: {
        flex: 1,
        position: 'relative',
        paddingBottom: 60, // Ensures space for cardBottomWhite
    },
    cardBottomWhite: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: 60, // Adjust as needed
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: 'white',
        padding: 15,
    },
    salaryContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    salaryInfo: {
        flexDirection: 'row',
        gap: 5,
    },
    salaryText: {
        color: 'black',
        gap: 5,
        fontSize: 12,
        marginTop: 2,
    },
    salaryAmount: {
        color: 'black',
        fontWeight: '800',
        fontSize: 15,
    },
    icon: {
        alignSelf: 'center',
    },
});

import { StyleSheet, Text, View, Image, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import person from '../../assets/person.jpg';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { useNavigation } from '@react-navigation/native'


const JobDetails = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <View>
                <View style={styles.img}>
                    <View style={styles.nav}>
                        <AntDesign onPress={() => navigation.navigate('SearchScreen')} style={styles.back} name="arrowleft" size={24} color="white" />
                        <Text style={styles.text}>Job Details</Text>
                    </View>
                    <Image style={styles.image} source={person} />
                </View>
                <View style={styles.cardContainer}>
                    <View style={styles.card}>
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
                    </View>
                </View>
            </View>
            <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
                <View style={styles.details}>
                    <View style={styles.descriptionContainer}>
                        <View style={styles.pen}>
                            <MaterialCommunityIcons name="pencil-outline" size={26} color="white" />
                        </View>
                        <Text style={styles.descriptionText}>Job Description</Text>
                    </View>
                    <Text style={{ color: 'white', marginTop: 10, fontSize: 13 }}>In a UX Designer job, you'll need both types of skills to develop the next generation of products. You'll partner with Researchers and Designers to define and deliver new features.</Text>
                </View>
                <View style={styles.details}>
                    <View style={styles.descriptionContainer}>
                        <View style={styles.pen}>
                            <MaterialCommunityIcons name="checkbox-marked-circle-outline" size={26} color="white" />
                        </View>
                        <Text style={styles.descriptionText}>Skills & Requirements</Text>
                    </View>
                    <Text style={{ color: 'white', marginTop: 10, fontSize: 13 }}>In a UX Designer job, you'll need both types of skills to develop the next generation of products. You'll partner with Researchers and Designers to define and deliver new features.</Text>
                </View>
                <View style={styles.details}>
                    <View style={styles.descriptionContainer}>
                        <View style={styles.pen}>
                            <MaterialIcons name="person-outline" size={26} color="white" />
                        </View>
                        <Text style={styles.descriptionText}>Your Role</Text>
                    </View>
                    <Text style={{ color: 'white', marginTop: 10, fontSize: 13 }}>In a UX Designer job, you'll need both types of skills to develop the next generation of products. You'll partner with Researchers and Designers to define and deliver new features.</Text>
                </View>
                <View style={styles.bottomSpacing} />
            </ScrollView>
            <TouchableOpacity style={styles.applyButton}>
                <Text style={styles.applyButtonText}>Apply Now</Text>
                <AntDesign name="arrowright" size={20} color="white" />
            </TouchableOpacity>
        </View>
    );
};

export default JobDetails;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#201f24',
    },
    back: {
        padding: 15,
    },
    text: {
        color: 'white',
        fontSize: 18,
    },
    nav: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: 45,
        height: 45,
        borderRadius: 50,
    },
    img: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 5,
        marginRight: 15,
    },
    cardContainer: {
        marginTop: 25,
        marginLeft: 15,
        width: '90%',
        height: 195,
        position: 'relative',
    },
    card: {
        width: '100%',
        height: '100%',
        backgroundColor: '#5b21ff',
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
    details: {
        width: '90%',
        backgroundColor: 'rgba(240, 240, 240, 0.1)',
        borderRadius: 20,
        marginLeft: 15,
        marginTop: 15,
        padding: 15,
    },
    descriptionContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    pen: {
        height: 45,
        width: 45,
        borderRadius: 10,
        backgroundColor: 'rgba(240, 240, 240, 0.1)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    descriptionText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
        marginLeft: 10,
    },
    scrollView: {
        flex: 1,
        marginBottom: 70,
    },
    applyButton: {
        marginLeft: 20,
        borderRadius: 25,
        position: 'absolute',
        bottom: 10,
        left: 0,
        right: 0,
        backgroundColor: '#5b21ff',
        height: 50,
        width: '90%',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        gap: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.3,
        shadowRadius: 3,
        elevation: 5,
    },
    applyButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '600',
    },
    bottomSpacing: {
        height: 100, // Adjust this value if needed to prevent overlapping with the button
    },
});

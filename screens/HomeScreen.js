import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import Content from '../components/Home/Content';
const HomeScreen = () => {
    return (
        <View >
            <Header/>
            <Content/>
        </View>
    )
}



const styles = StyleSheet.create({})
export default HomeScreen;

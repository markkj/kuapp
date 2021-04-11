import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from '../components/Header';
import Content from '../components/Home/Content';
const HomeScreen = (props) => {
    return (
        <View >
            <Header {...props} />
            <Content/>
        </View>
    )
}



const styles = StyleSheet.create({})
export default HomeScreen;

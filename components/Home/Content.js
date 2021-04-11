import React from 'react';
import { StyleSheet, Text, ScrollView } from 'react-native';
import Card from './Card';


export default function Content() {
    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container:{
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        flexGrow: 1,
        marginTop:10,
        
        
    }
})

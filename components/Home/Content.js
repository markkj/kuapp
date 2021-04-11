import React from 'react';
import { StyleSheet, Text, ScrollView, SafeAreaView, View } from 'react-native';
import Card from './Card';


const Content = () => {
    return (

        <ScrollView style={styles.container} >
            <View style={styles.ListItem}>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </View>
        </ScrollView>


    )
}

const styles = StyleSheet.create({
    container: {
        paddingBottom:'50%',
        
        height:'50%',
        
    },
    ListItem: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom:25,
        marginTop:10,
    }
});

export default Content;
import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

import Content from './Content';

const Card = (props) => {
    const ContainerView = (components) => {
        if (props.selected) {
            return <LinearGradient
                style={{ width: '100%', height: '100%' }}
                colors={['rgba(25,55,254,1)', 'rgba(121,96,249,1)']}
            >
                <Content {...props}/>
            </LinearGradient>
        }
        else {
            return <View style={{borderColor:'#203CFA',borderWidth:1,borderRadius:15,paddingBottom:10}}>
                <Content {...props}/>
            </View>
        }
    }

    return (
        <View style={styles.container}>
            <ContainerView />
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        width: 200,
        height: 80,
        overflow: 'hidden',
        borderRadius: 15,
        marginVertical:5,
    }


})

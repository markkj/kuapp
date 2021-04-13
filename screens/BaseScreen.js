import React from 'react'
import { StyleSheet, Text, View, Dimensions, TextInput, SafeAreaView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

import BottomBar from '../components/BottomBar';


const BaseScreen = (props) => {


    return (
        <View style={styles.container}>
            <LinearGradient
                style={styles.gradient}
                colors={['#337DF1', '#00AEEE']}
            >
                
                {props.contentComponent}

            </LinearGradient>
            <BottomBar {...props} />
        </View>



    )
}

export default BaseScreen

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: Dimensions.get('window').height * 0.980,

    },
    gradient: {
        height: '100%',
        width: '100%',
    },
})

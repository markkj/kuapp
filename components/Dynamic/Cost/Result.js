import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Result = (props) => {
    const dataList = props.dataList
    
    
    return (
        <View>
            <Text>Result Data !</Text>
            <Text>{props.filter}</Text>
        </View>
    )
}

export default Result

const styles = StyleSheet.create({})

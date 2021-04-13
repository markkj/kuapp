import React from 'react'
import { StyleSheet, Text, View, Dimensions, TextInput, SafeAreaView } from 'react-native'
import Content from '../components/Dynamic/Content'
import CostContent from '../components/Dynamic/Cost/CostContent'
import BaseScreen from './BaseScreen';



const CostScreen = (props) => {
    
    const data = props.navigation.state.params.data;
    let showContent = null
    if(data.name == "ค่าใช้จ่าย"){
        showContent = <CostContent {...props} data={data} />
        
    }else{
        showContent = <Content {...props} data={data} />
    }
    
    
    return (

        <BaseScreen {...props} contentComponent={showContent} />


    )
}

export default CostScreen


import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import BottomBar from '../components/BottomBar';
import Header from '../components/Header';
import Content from '../components/Home/Content';
import { baseURL } from '../hook/base';
import axios from 'axios';



const HomeScreen = (props) => {
    // const [data, setData] = useState({});
    // console.log(baseURL + 'profile/1');
    // useEffect(() => {
    //     axios.get(baseURL + 'profile/1')
    //         .then((response) => {
    //             setData({data:response.data})
    //         })
    //         .catch((err) => { console.log(err) })
    // }, []);
    const data = props.navigation.state.params.data;

    const mapping_icon = props.navigation.state.params.mapping_icon;
    return (
        <View >

            <Header {...props} />
            <Content {...props} mapping_icon={mapping_icon} data={data} />
            <BottomBar {...props} mapping_icon={mapping_icon} data={data} />
        </View>
    )
}



const styles = StyleSheet.create({})
export default HomeScreen;

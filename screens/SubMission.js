import React from 'react'
import { StyleSheet, Text, View, Dimensions, TextInput, SafeAreaView } from 'react-native'
import Content from '../components/Mission/Content';
import BaseScreen from './BaseScreen';



const SubMission = (props) => {

    const data = props.navigation.state.params.data;
    const DataMapping = {
        daily: {
            name: "ภารกิจประจำวัน",
            img: require('../assets/dailyquest.png'),
            dataTransaction: [{ name: 'ค่าใช้จ่ายไม่เกิน 200 บาท/วัน', isFinish: true, point: 1, progress: 4, total: 4 ,isGet:false}, { name: 'เพิ่มรายการค่าใช้จ่าย', isFinish: false, point: 1, progress: 4, total: 4,isGet:false }, { name: 'เพิ่มรายการออมเงิน', isFinish: true, point: 0.5, progress: 2, total: 2 ,isGet:false}, { name: 'เพิ่มรายการเป้าหมาย', isFinish: false, point: 0.5, progress: 1, total: 1 ,isGet:false}],
            main:{ name: 'สำเร็จภารกิจทั้งหมด', point:2,isGet:false}
        },
        plan: {
            name: "ภารกิจประจำแผน",
            img: require('../assets/puzzle.png'),
            dataTransaction: [{ name: 'ค่าใช้จ่ายไม่เกิน 200 บาท/วัน', isFinish: true, point: 1, progress: 4, total: 4 ,isGet:false}, { name: 'เพิ่มรายการค่าใช้จ่าย', isFinish: false, point: 1, progress: 2, total: 4,isGet:false }, { name: 'เพิ่มรายการออมเงิน', isFinish: true, point: 0.5, progress: 2, total: 2 ,isGet:false}, { name: 'เพิ่มรายการเป้าหมาย', isFinish: false, point: 0.5, progress: 0, total: 1 ,isGet:false}],
            main:{ name: 'สำเร็จภารกิจทั้งหมด', point:2,isGet:false}
        },
        special: {
            name: "ภารกิจพิเศษ",
            img: require('../assets/star.png'),
            dataTransaction: [{ name: 'ค่าใช้จ่ายไม่เกิน 200 บาท/วัน', isFinish: true, point: 1, progress: 4, total: 4 ,isGet:false}, { name: 'เพิ่มรายการค่าใช้จ่าย', isFinish: false, point: 1, progress: 2, total: 4,isGet:false }, { name: 'เพิ่มรายการออมเงิน', isFinish: true, point: 0.5, progress: 2, total: 2 ,isGet:false}, { name: 'เพิ่มรายการเป้าหมาย', isFinish: false, point: 0.5, progress: 0, total: 1 ,isGet:false}],
            main:{ name: 'สำเร็จภารกิจทั้งหมด', point:2,isGet:false}
        }
    }

    return (

        <BaseScreen {...props} contentComponent={<Content {...props} data={DataMapping[data.name]} />} />


    )
}

export default SubMission


import React from 'react'
import { useState } from 'react'
import { StyleSheet, Text, View, Dimensions, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import List from './List'
import Result from './Result'
const CostContent = (props) => {
    const data = props.data
    let Comp = null
    const [comChange, setComChange] = useState({
        comp: 'list'
    })
    const [filter, setFilter] = useState('all')
    const [periodSelect, setPeriodSelect] = useState('วัน')
    const dataList = [
        {
            date: '8 มีนาคม 2021',
            description: 'วันนี้',
            transactions: [
                { type: 'IN', ps: 'แม่ให้เงิน', category: 'รายได้', value: '300' }, { type: 'EX', category: 'อาหาร', ps: 'ข้าวไข่เจียวหมูสับ', value: '35' }, { type: 'EX', category: 'เครื่องดื่ม', ps: 'น้ำเปล่า', value: '10' }, { type: 'EX', category: 'คมนาคม', ps: 'ค่ารถแท็กซี่', value: '105' }
            ],
            total_in: "300",
            total_ex: "150",
        },
        {
            date: '7 มีนาคม 2021',
            description: 'เมื่อวาน',
            transactions: [
                { type: 'EX', category: 'คมนาคม', ps: 'รถตู้', value: '40' }, { type: 'EX', category: 'อาหาร', ps: 'กะเพราหมูสับ ไข่เจียวพิเศษ', value: '45' }, { type: 'EX', category: 'อาหาร', ps: 'หมูผัดผงกระหรี่', value: '40' }
            ],
            total_in: "0",
            total_ex: "125"
        }
    ]
    const periodMenu = ['วัน', 'อาทิตย์', 'เดือน', 'ปี']
    const periodMenuShow = []
    if (comChange.comp === 'list') {
        Comp = <List filter={filter} dataList={dataList} />
        periodMenu.map((val, key) => {
            if (val !== 'ปี') {
                return periodMenuShow.push(
                    <TouchableOpacity onPress={() => setPeriodSelect(val)} key={key}>
                        <Text key={key} style={periodSelect == val ? styles.periodSelected : styles.periodUnSelected}>{val}</Text>
                    </TouchableOpacity>

                )
            }

        })
    } else if (comChange.comp === 'result') {
        Comp = <Result filter={filter} dataList={dataList} />
        periodMenu.map((val, key) => {

            return periodMenuShow.push(
                <TouchableOpacity onPress={() => setPeriodSelect(val)}  key={key}>
                    <Text key={key} style={periodSelect == val ? styles.periodSelected : styles.periodUnSelected}>{val}</Text>
                </TouchableOpacity>

            )


        })
    }

    return (
        <View >
            <View style={[styles.header, { paddingHorizontal: 20, paddingTop: 20 }]}>
                <Icon
                    name="left"
                    size={20}
                    color='white'
                    style={{ paddingRight: 20 }}
                    onPress={() => props.navigation.goBack()}
                />
                <Text style={[styles.text, { color: 'white', fontSize: Dimensions.get('window').width / 17 }]}>
                    {data.name}
                </Text>
                <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', width: '100%' }}>
                    <Icon
                        name="left"
                        size={15}
                        color='white'
                        style={{ paddingRight: 5 }}
                    />
                    <Text style={[styles.text, { color: 'white' }]}>8 มีนาคม 2021</Text>
                    <Icon
                        name="right"
                        size={15}
                        color='white'
                        style={{ paddingLeft: 5 }}

                    />
                </View>
            </View>
            <View style={[styles.wrapper]}>
                <View style={{ flexDirection: 'row', height: '13%', width: '85%', alignItems: 'center', paddingVertical: 15, paddingHorizontal: 25, backgroundColor: 'white', borderRadius: 10, justifyContent: 'space-between' }}>
                    <View style={{ alignItems: 'flex-start' }}>
                        <Text style={[styles.text, { color: "#898A8D" }]}>รายรับ</Text>
                        <Text style={[styles.text, { color: "#30C58B", fontSize: Dimensions.get('window').width / 20 }]}>320</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={[styles.text, { color: "#898A8D" }]}>รายจ่าย</Text>
                        <Text style={[styles.text, { color: "#F54D56", fontSize: Dimensions.get('window').width / 20 }]}>150</Text>
                    </View>
                    <View style={{ alignItems: 'flex-end' }}>
                        <Text style={[styles.text, { color: "#898A8D" }]}>คงเหลือ</Text>
                        <Text style={[styles.text, { color: "#337DF1", fontSize: Dimensions.get('window').width / 20 }]}>9,000</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', height: 40, alignItems: 'center', justifyContent: 'space-between', borderWidth: 0, width: '80%', paddingHorizontal: 20, marginVertical: 10 }}>
                    {
                        periodMenuShow
                    }
                </View>
                <View style={{ marginVertical: '0%', height: '100%', backgroundColor: 'white', width: '100%', padding: 20, borderTopRightRadius: 40, borderTopLeftRadius: 40 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: '20%' }}>
                        <TouchableOpacity onPress={() => setComChange({ comp: 'list' })}>
                            <Text style={comChange.comp === 'list' ? styles.menuSelected : styles.munuUnSelected}>รายการ</Text>
                        </TouchableOpacity>

                        <TouchableOpacity onPress={() => setComChange({ comp: 'result' })}>
                            <Text style={comChange.comp === 'result' ? styles.menuSelected : styles.munuUnSelected}>สรุปผล</Text>
                        </TouchableOpacity>

                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginHorizontal: '20%', marginTop: '4%' }}>
                        <TouchableOpacity onPress={() => setFilter('all')}>
                            <View style={filter === 'all' ? styles.filterSelected : styles.filterUnSelected}>
                                <Text style={filter === 'all' ? styles.filterFontSelected : styles.filterFontUnSeleted}>ทั้งหมด</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setFilter('IN')}>
                            <View style={filter === 'IN' ? styles.filterSelected : styles.filterUnSelected}>
                                <Text style={filter === 'IN' ? styles.filterFontSelected : styles.filterFontUnSeleted}>รายรับ</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setFilter('EX')}>
                            <View style={filter === 'EX' ? styles.filterSelected : styles.filterUnSelected}>
                                <Text style={filter === 'EX' ? styles.filterFontSelected : styles.filterFontUnSeleted}>รายจ่าย</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: '5%' }}>
                        {Comp}

                    </View>
                </View>

            </View>

        </View>
    )
}

export default CostContent

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'column',
        alignItems: 'center',
        height: Dimensions.get('window').height * 0.8,
    },
    gradient: {
        height: '100%',
        width: '100%',
        padding: 20,
    },
    text: {
        fontFamily: 'Kanit'
    },
    header: {
        flexDirection: 'row',
        marginTop: '10%',
        alignItems: 'center',
        marginBottom: '5%',
    },
    settings: {
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 15,
        padding: 22,
    },
    inputs: {
        fontFamily: 'Kanit',
        borderBottomWidth: 1,
        borderBottomColor: '#337DF1',
        marginHorizontal: '10%',
    },
    Boxing: { flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end', width: '80%', marginVertical: '4%' },
    unintText: { color: '#898A8D', fontSize: 13 },
    menuSelected: { fontFamily: 'Kanit-SemiBold', fontSize: Dimensions.get('window').width / 20, color: '#337DF1' },
    munuUnSelected: { fontFamily: 'Kanit', fontSize: Dimensions.get('window').width / 20, color: '#898A8D' },
    filterSelected: { backgroundColor: '#337DF1', paddingHorizontal: 12, paddingVertical: 2, borderRadius: 10 },
    filterFontSelected: { fontFamily: 'Kanit', fontSize: Dimensions.get('window').width / 35, color: 'white' },
    filterUnSelected: { backgroundColor: '#E5E5E5', paddingHorizontal: 12, paddingVertical: 2, borderRadius: 10 },
    filterFontUnSeleted: { fontFamily: 'Kanit', fontSize: Dimensions.get('window').width / 35, color: '#C4C4C4' },
    periodSelected: { fontFamily: 'Kanit-SemiBold', color: 'white', fontSize: Dimensions.get('window').width / 20 },
    periodUnSelected: { fontFamily: 'Kanit', color: 'white', fontSize: Dimensions.get('window').width / 25 },


})

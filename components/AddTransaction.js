import React from 'react'
import { useState, useEffect } from 'react'
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { TouchableWithoutFeedback } from 'react-native-gesture-handler'
import { color, set } from 'react-native-reanimated'
import Icon from 'react-native-vector-icons/AntDesign';
const AddTransaction = (props) => {

    const dataMapping = {
        "ค่าใช้จ่าย": {
            color: '',
            menu: [
                { name: 'รายรับ', color: '#30C58B', SubMenu: { name: 'หมวดหมู่ / ประเภท', list: ['เงินเดือน', 'รายได้พิเศษ', 'พ่อให้', 'แม่ให้'] } },
                { name: 'รายจ่าย', color: '#F54D56', SubMenu: { name: 'หมวดหมู่ / ประเภท', list: ['อาหาร', 'เครื่องดิ่ม', 'คมนาคม', 'ท่องเที่ยว', 'การศึกษา'] } }
            ],
        },
        "การลงทุน": {
            color: '#337DF1',
            menu: [
                { name: 'กองทุนรวม', color: '#337DF1', SubMenu: { name: 'กองทุนรวมของคุณ', list: ['กองทุน 1', 'กองทุน 2', 'กองทุน 3', 'กองทุน 4'] } },
                { name: 'หุ้น', color: '#337DF1', SubMenu: { name: 'หุ้นรวมของคุณ', list: ['OR', 'AIS'] } },
                { name: 'ตราสารหนี้', color: '#337DF1', SubMenu: { name: 'ตราสารหนี้รวมของคุณ', list: ['พันธบัตรรัฐบาล',] } },
            ],
        },
        "เงินออม": {
            color: '#30C58B',
            menu: [
                { name: 'กระปุก', color: '#30C58B', SubMenu: { name: 'กระปุกของคุณ', list: ['เศษเหรียญ', 'เกษียณอายุ'] } },
                { name: 'บัญชี', color: '#30C58B', SubMenu: { name: 'บัญชีของคุณ', list: ['บัญชีออมทรัพย์',] } },

            ],
        },
        "เป้าหมาย": {
            color: '#F6D55C',
            menu: [
                { name: 'ระยะสั้น', color: '#F6D55C', SubMenu: { name: 'เป้าหมายระยะสั้นของคุณ', list: ['กระเป๋า'] } },
                { name: 'ระยะยาว', color: '#F6D55C', SubMenu: { name: 'เป้าหมายระยะยาวของคุณ', list: ['โทรศัพท์',] } },

            ],
        },
    }
    const [categorySelect, setCategorySelect] = useState({ name: props.name, menuName: dataMapping[props.name].menu[0].name, index: 0, isReload: false })
    const [itemSelect, setItemSelect] = useState({ arr: [], isReload: false });
    if (categorySelect.name != props.name) {

        setCategorySelect({ name: props.name, menuName: dataMapping[props.name].menu[0].name, index: 0, isReload: true })
        setItemSelect({ arr: [], isReload: false })
    }

    const onHandlerItemSelect = (Items) => {
        var arr = itemSelect.arr
        if (arr.indexOf(Items) == -1) {
            arr.push(Items)
        } else {
            arr.splice(arr.indexOf(Items), 1)

        }
        setItemSelect({ arr: arr, isReload: true })
    }
    
    return (
        <View>
            <View>


                <View style={{ borderWidth: 0, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    {
                        dataMapping[props.name].menu.map((val, key) => {
                            return (

                                <View style={[styles.menuCategory, { borderColor: val.color }, categorySelect.menuName == val.name ? { backgroundColor: val.color } : {}]} key={key}>
                                    <TouchableOpacity onPress={() => setCategorySelect({ name: props.name, menuName: val.name, index: key, isReload: true })} >
                                        <Text style={categorySelect.menuName == val.name ? styles.categorySelect : [styles.text, { color: val.color }]}>{val.name}</Text>
                                    </TouchableOpacity>
                                </View>

                            )
                        })
                    }

                </View>
            </View>
            <View>
                <Text style={[styles.text, { textAlign: 'left', fontSize: 18, marginTop: 10 }]}>{dataMapping[props.name].menu[categorySelect.index].SubMenu.name}</Text>
            </View>
            <View style={{ borderWidth: 0, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', height: '30%', width: '80%', marginHorizontal: 35, marginTop: 10 }}>
                {
                    dataMapping[props.name].menu[categorySelect.index].SubMenu.list.map((val, key) => {
                        return (
                            <TouchableOpacity onPress={() => onHandlerItemSelect(val)} style={{ flexDirection: 'column', alignItems: 'center', borderWidth: 0, width: '25%' }} key={key}>
                                <View style={{ flexDirection: 'column', alignItems: 'center', borderWidth: 0, }}>

                                    <View style={[itemSelect.arr.indexOf(val) != -1 ? styles.iconLogoSelect : styles.iconLogoUnSelect, { backgroundColor: dataMapping[props.name].menu[categorySelect.index].color }]}>

                                    </View>
                                    <Text style={[{ fontFamily: 'Kanit' }, { fontSize: 16, marginTop: 10, textAlign: 'center' }]} >{val}</Text>
                                </View>
                            </TouchableOpacity>
                        )
                    })
                }
            </View>
            <View style={{ paddingHorizontal: 20, borderWidth: 0, alignItems: 'center', marginTop: 10, }}>
                <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                    <Text style={{ fontFamily: 'Kanit', fontSize: 20 }}>จำนวนเงิน</Text>
                    <TextInput
                        style={[styles.inputs, { width: '45%', textAlign: 'center', marginHorizontal: '5%' }]}

                    />
                    <Text style={{ fontFamily: 'Kanit', fontSize: 16 }}>บาท</Text>
                </View>
                <View style={{ flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'center', marginTop: 5 }}>
                    <Text style={{ fontFamily: 'Kanit', fontSize: 16 }}>บันทึกเพิ่มเติม</Text>
                    <TextInput
                        style={[styles.inputs, { width: '55%', textAlign: 'center', marginHorizontal: '5%' }]}

                    />
                    <Icon
                        name="staro"
                        size={20}
                        color='#F6D55C'
                    />
                </View>

            </View>
            <View style={{ paddingHorizontal: 20, borderWidth: 0, alignItems: 'center', marginTop: 35 }}>
                <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
                    <View style={[styles.menuCategory, { backgroundColor: dataMapping[props.name].menu[categorySelect.index].color, borderWidth: 0 }]} >
                        <Text style={[styles.text, { color: 'white' }]}>บันทึก</Text>
                    </View>
                    <TouchableOpacity onPress={() => props.onExist()} style={[styles.menuCategory, { backgroundColor: '#E5E5E5', borderWidth: 0 }]}>
                        <View >
                            <Text style={[styles.text, { color: 'white' }]}>ยกเลิก</Text>
                        </View>
                    </TouchableOpacity>
                </View>


            </View>
        </View>
    )
}

export default AddTransaction

const styles = StyleSheet.create({
    menuCategory: {
        paddingHorizontal: 15,
        paddingVertical: 5,

        borderWidth: 1,
        borderRadius: 30,
        width: '25%',
        marginHorizontal: 10
    },
    text: {
        fontFamily: 'Kanit',
        textAlign: 'center'
    },
    categorySelect: {
        fontFamily: 'Kanit',
        color: 'white',
        textAlign: 'center'
    },
    iconLogoSelect: {
        borderRadius: 60 / 2, width: 60, height: 60,
    },
    iconLogoUnSelect: {
        borderRadius: 50 / 2, width: 50, height: 50,
    }, inputs: {
        fontFamily: 'Kanit',
        borderBottomWidth: 1,
        borderBottomColor: 'black',
        marginHorizontal: '10%',
    },
})

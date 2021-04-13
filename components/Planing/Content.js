import React from 'react'
import { StyleSheet, Text, View, Dimensions, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign';
import Icon2 from 'react-native-vector-icons/Feather'
import Icon3 from 'react-native-vector-icons/Ionicons'
import Dot from 'react-native-vector-icons/Octicons';
const Content = (props) => {
    const data = {
        total: 15000,
        dataList: [
            {
                name: "ค่าใช้จ่าย",
                present: 8000,
                value: 9000,
                color: "#F54D56",
            },
            {
                name: "การลงทุน",
                present: 3000,
                value: 3000,
                color: "#337DF1",
            },
            {
                name: "เงินออม",
                present: 800,
                value: 1500,
                color: "#30C58B",
            },
            {
                name: "เป้าหมาย",
                present: 800,
                value: 1500,
                color: "#F6D55C",
            }
        ]
    };


    const settings = data.dataList.map((val, key) => {
        return <View style={[styles.Boxing, { justifyContent: 'space-between', alignItems: 'center', width: '100%', marginVertical: 0 }]} key={key}>
            <Dot
                name='primitive-dot'
                size={40}
                color={val.color} />
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '30%' }}>
                <Text style={[styles.text, { paddingRight: 10 }]}>{val.name}</Text>
                <Icon2
                    name="edit"
                    size={10}
                    color='black'
                />
            </View>
            <TextInput
                style={[styles.inputs, { width: '20%', textAlign: 'center', marginHorizontal: '2%' }]}
                value={String(val.value / data.total * 100)}
            />
            <Text style={[styles.text, styles.unintText]}>เปอร์เซ็นต์</Text>
        </View>
    })
    return (
        <View style={{padding:20}}> 
            <View style={styles.header}>
                <Icon
                    name="left"
                    size={20}
                    color='white'
                    style={{ paddingRight: 20 }}
                    onPress={() => props.navigation.goBack()}
                />
                <Text style={[styles.text, { color: 'white', fontSize: Dimensions.get('window').width / 17 }]}>
                    {"ปรับแต่งแผน"}
                </Text>
                {props.dataComponent}
            </View>
            <View style={styles.wrapper}>

                <View style={[styles.settings, { width: '100%', height: '30%' }]}>
                    <Text style={[styles.text, { fontSize: Dimensions.get('window').width / 20 }]}>ตั้งค่าข้อมูล</Text>
                    <View style={{ alignItems: 'flex-end', paddingRight: '10%' }}>
                        <View style={styles.Boxing}>
                            <Text style={[styles.text]}>ชื่อแผน</Text>
                            <TextInput
                                style={styles.inputs}
                                value='บริหารการเงิน'
                            />
                            <Text style={[styles.text, styles.unintText, { color: 'white' }]}>บาท</Text>
                        </View>

                        <View style={styles.Boxing}>
                            <Text style={[styles.text]}>ยอดเงินตั้งต้น</Text>
                            <TextInput
                                style={[styles.inputs, { fontSize: 18 }]}
                                value='15,000.00'
                            />
                            <Text style={[styles.text, styles.unintText]}>บาท</Text>
                        </View>
                    </View>
                </View>
                <View style={[styles.settings, { width: '100%', height: Dimensions.get('window').height / 2.3 }]}>
                    <Text style={[styles.text, { fontSize: Dimensions.get('window').width / 20 }]}>แบ่งสัดส่วน</Text>
                    <View style={{ flex: 1, flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between' }}>

                        <View style={{ alignItems: 'center', margin: '5%' }}>
                            {settings}

                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Icon3
                                name="add"
                                size={30}
                            />
                            <Text style={[styles.text, { fontSize: 18 }]}>เพิ่มสัดส่วน</Text>
                        </View>
                    </View>


                </View>
            </View>
        </View>

    )
}

export default Content

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: Dimensions.get('window').height * 0.980,

    },
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
})

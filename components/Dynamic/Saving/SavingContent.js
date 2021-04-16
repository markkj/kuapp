import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions, ScrollView } from 'react-native'
import TransactionCotent from '../TransactionCotent'
import { ProgressBar } from 'react-native-multicolor-progress-bar';
import numberWithCommas from '../../../utils/Functional';
import Icon from 'react-native-vector-icons/Entypo';

const SavingContent = () => {
    const dataItemList = [
        {
            name: "กระปุกเกษียณ",
            present: 500,
            img: require('../../../assets/piggy.png')
        },
        {
            name: "บัญชีออมทรัพย์",
            present: 500,
            img: require('../../../assets/money-bag.png')
        },
        {
            name: "กระปุกเศษเหรียญ",
            present: 500,
            img: require('../../../assets/piggy.png')
        }
    ]
    const dataTransaction = [
        {
            name: "กระปุกเกษียณ",
            date: "17 กุมภาพันธ์ 2021",
            amount: 500,
        },
        {
            name: "บัญชีออมทรัพย์",
            date: "17 กุมภาพันธ์ 2021",
            amount: 500,
        },
        {
            name: "โทรศัพท์",
            date: "17 กุมภาพันธ์ 2021",
            amount: 500,
        },

    ]
    return (
        <View style={{ width: '100%', marginTop: '2%', alignItems: 'center' }}>
            <View style={{ marginBottom: 5, borderWidth: 0, width: '85%', height: '45%' }}>

                <ScrollView>
                    <View style={styles.ListItem}>

                        {
                            dataItemList.map((val, key) => {
                                return (
                                    <View key={key} style={{

                                        paddingVertical: 10, paddingHorizontal: 10, backgroundColor: 'white', borderRadius: 20, width: '48%', marginBottom: 15,
                                        justifyContent: 'space-between', alignItems: "center", height: '45%'
                                    }}>
                                        <View style={{ paddingBottom: 15 }}>
                                            <Image
                                                style={{ height: Dimensions.get('window').height / 11, width: Dimensions.get('window').height / 11 }}
                                                source={val.img}
                                            />
                                        </View>
                                        <Text style={[styles.text, { marginBottom: 2 }]}>{val.name}</Text>
                                        <View style={{ padding: 2, backgroundColor: '#30C58B', paddingHorizontal: 10, borderRadius: 20 }}>
                                            <Text style={[styles.text, { color: 'white', fontSize: 18 }]}>{val.present}</Text>
                                        </View>
                                    </View>
                                )
                            })
                        }
                        <View style={{

                            paddingVertical: 10, paddingHorizontal: 10, backgroundColor: 'white', borderRadius: 20, width: '48%', marginBottom: 15,
                            justifyContent: 'center', alignItems: "center", height: '45%'
                        }}>
                            <View style={{ borderWidth: 0,justifyContent:'space-between',alignItems:'center' }}>
                                <Icon
                                    name="plus"
                                    size={Dimensions.get('window').height / 11}
                                    color="#30C58B"
                                />
                                
                            </View>
                            <Text style={[styles.text, { marginBottom: 2 }]}>กระปุก/บัญชี</Text>


                        </View>
                    </View>

                </ScrollView>


            </View>
            <TransactionCotent dataTransaction={dataTransaction} />
        </View >
    )
}

export default SavingContent

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Kanit'
    },
    ListItem: {
        flex: 1,
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: '10%',
        marginTop: 10,
    }
})

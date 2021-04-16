import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import TransactionCotent from '../TransactionCotent'
import { ProgressBar } from 'react-native-multicolor-progress-bar';
import numberWithCommas from '../../../utils/Functional';
import Icon from 'react-native-vector-icons/Entypo';

const GoalComponent = () => {
    const dataItemList = [
        {
            name: "กระเป๋าสะพาย",
            present: 1500,
            value: 3000,
            img: require('../../../assets/Bag.png')
        },
        {
            name: "โทรศัพท์",
            present: 1500,
            value: 3000,
            img: require('../../../assets/Phone.png')
        }
    ]
    const dataTransaction = [
        {
            name: "กระเป๋าสะพาย",
            date: "17 กุมภาพันธ์ 2021",
            amount: 750,
        },
        {
            name: "โทรศัพท์",
            date: "17 กุมภาพันธ์ 2021",
            amount: 750,
        },
        {
            name: "โทรศัพท์",
            date: "17 มกราคม 2021",
            amount: 750,
        },
        {
            name: "กระเป๋าสะพาย",
            date: "17 มกราคม 2021",
            amount: 750,
        },
    ]
    return (
        <View style={{ width: '100%', marginTop: '2%', alignItems: 'center' }}>
            <View style={{ marginVertical: 5, borderWidth: 0, width: '85%', borderWidth:0,marginBottom:20}}>
                <View style={{ flexDirection: "row",alignItems:"center",borderRadius: 10, backgroundColor: 'white', padding: 5, alignItems: 'center', justifyContent: 'center' ,marginBottom:10}}>
                    <Icon
                        name="plus"
                        size={25}
                        color="#F6D55C"
                    />
                    <Text style={[styles.text, { fontSize: 18 }]}> เป้าหมาย</Text>
                </View>
                {
                    dataItemList.map((val, key) => {
                        return (
                            <View style={{ flexDirection: 'row', marginVertical: '2%', backgroundColor: 'white', borderRadius: 20, padding: 15,marginBottom:10 }} key={key}>
                                <View style={{ width: '25%' }}>
                                    <Image

                                        source={val.img}
                                    />
                                </View>
                                <View style={{ flexDirection: 'column', width: "80%", borderWidth: 0, paddingHorizontal: 15, justifyContent: 'space-between' }}>
                                    <Text style={[styles.text, { fontSize: 18 }]}>
                                        {val.name}
                                    </Text>
                                    <Text style={[styles.text, { textAlign: 'right', fontSize: 20 }]}>
                                        {numberWithCommas(val.present)} / {numberWithCommas(val.value)}
                                    </Text>
                                    <ProgressBar
                                        arrayOfProgressObjects={[
                                            { color: '#F6D55C', value: val.present === val.value ? val.present / (val.value + 100) : val.present / val.value },
                                        ]}
                                        backgroundBarStyle={{
                                            backgroundColor: val.present === val.value ? '#F6D55C' : '#FBEAAD',
                                            height: Dimensions.get('window').height * 0.018,
                                            width: '100%'
                                        }}
                                    />
                                </View>
                            </View>
                        )
                    })
                }
            </View>
            <TransactionCotent dataTransaction={dataTransaction} />
        </View >
    )
}

export default GoalComponent

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Kanit'
    }
})

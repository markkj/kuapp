import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native';
import numberWithCommas from '../../utils/Functional';
import Icon from 'react-native-vector-icons/Ionicons';
const InvestCard = (props) => {
    const data = props.data
    const height = Dimensions.get('window').height * 0.15;
  
    return (
        <View style={{ flexDirection: 'column', alignItems: 'center', justifyContent: 'space-between', backgroundColor: 'white', width: height, height: height, paddingVertical: 10, borderRadius: 10 }}>
            <Text style={{ fontFamily: 'Kanit' }}>{data.name}</Text>
            <Text style={{ fontFamily: 'Kanit', fontSize: 25 }}>{numberWithCommas(data.amount)}</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderWidth: 0 }}>
                <Icon
                    name={data.profit > 0 ? "trending-up-sharp":"trending-down-sharp"}
                    size={22}
                    color={data.profit > 0 ? '#30C58B':'#F54D56'}
                    style={{marginRight:5}}
                />
                <View style={{ backgroundColor: data.profit > 0 ? '#30C58B':'#F54D56', paddingHorizontal: 10, paddingVertical: 2, borderRadius: 20 }}>
                    <Text style={{ fontFamily: 'Kanit', color: 'white' ,fontSize:10}}>{data.profit}%</Text>
                </View>
            </View>
        </View>
    )
}

export default InvestCard

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Kanit'
    }
})

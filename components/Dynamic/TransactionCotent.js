import React, { useState } from 'react'
import { StyleSheet, Text, View, Dimensions, ScrollView, LayoutAnimation, Platform, UIManager, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import numberWithCommas from '../../utils/Functional';

export default function TransactionCotent(props) {
    const dataTransaction = props.dataTransaction
    const [isExpand, setIsExpand] = useState(false);
    if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    const changeLayout = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setIsExpand(!isExpand);
    }
    return (
        <View style={{ position: isExpand ? 'absolute' : 'relative', marginVertical: '0%', height: isExpand ? Dimensions.get('window').height : '100%', backgroundColor: 'white', width: '100%', padding: 20, borderTopRightRadius: 40, borderTopLeftRadius: 40 }}>

            <View style={{ width: '100%', borderWidth: 0, height: Dimensions.get('window').height }}>
                <TouchableOpacity activeOpacity={0.8} onPress={changeLayout} style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Text style={[styles.textBold, { fontSize: 25, paddingHorizontal: 15 }]}>รายการ</Text>
                    <Icon
                        name={isExpand ? "chevron-thin-down" : "chevron-thin-up"}
                        size={30}
                        style={{ marginRight: 10 }}
                    />
                </TouchableOpacity>
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1, flexDirection: 'column' }}
                    style={{ borderWidth: 0, width: '100%', borderWidth: 0 }}>
                    {
                        dataTransaction.map((val, key) => {
                            return (
                                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 15, borderWidth: 0, height: '8%' }} key={key}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <View style={{ marginRight: 9, borderRadius: 30 / 2, width: 30, height: 30, backgroundColor: '#337DF1' }}>

                                        </View>
                                        <View>
                                            <Text style={[styles.text]}>{val.name}</Text>
                                            <Text style={[styles.text, { color: '#898A8D' }]}>{val.date}</Text>
                                        </View>
                                    </View>
                                    <View>
                                        <Text style={[styles.text, { fontSize: 16 }]}>{numberWithCommas(val.amount)}</Text>
                                    </View>
                                </View>
                            )
                        })
                    }

                </ScrollView>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Kanit'
    },
    textBold: {
        fontFamily: 'Kanit-SemiBold'
    }
})


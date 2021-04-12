import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
const Content = (props) => {
    let selectedIcon = null
    if (props.selected) {
        selectedIcon = <Icon
            name="md-checkbox-outline"
            size={15}
            color='white'

        />
    }
    return (
        <View>
            <View style={{ flexDirection: 'row', paddingLeft: 20, paddingRight: 20, paddingTop: 6, justifyContent: 'space-between', alignItems: 'center' }}>
                <View style={{ flexDirection: "row", alignItems: 'center' }}>
                    <Icon
                        name="wallet-outline"
                        size={25}
                        color={props.selected ? 'white':'#203CFA'}
                        style={{ marginRight: 10 }}
                    />
                    <Text style={[{ fontFamily: 'Kanit', fontSize: 15 },props.selected ? styles.colorTextSelected:styles.colorTextUnSelected]}>Plan 1</Text>
                </View>
                {
                    selectedIcon
                }

            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15 }}>
                <View style={{ flexDirection: 'column', alignItems: 'flex-end', marginHorizontal: 4 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={[styles.Dot, { backgroundColor: '#2B47FC', borderColor: 'white', borderWidth: 1, marginRight: 4 }]}></View>
                        <Text style={[styles.normalText,props.selected ? styles.colorTextSelected:styles.colorTextUnSelected]}>คงเหลือ</Text>
                    </View>
                    <Text style={[styles.textAmount,props.selected ? styles.colorTextSelected:styles.colorTextUnSelected]}>
                        6,500
                        </Text>
                </View>
                <View style={{ flexDirection: 'column', alignItems: 'flex-end', marginHorizontal: 4 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={[styles.Dot, { backgroundColor: '#30C58B', borderColor: 'white', borderWidth: 1, marginRight: 4 }]}></View>
                        <Text style={[styles.normalText,props.selected ? styles.colorTextSelected:styles.colorTextUnSelected]}>รายรับ</Text>
                    </View>
                    <Text style={[styles.textAmount,props.selected ? styles.colorTextSelected:styles.colorTextUnSelected]}>
                        10,000
                        </Text>
                </View>
                <View style={{ flexDirection: 'column', alignItems: 'flex-end', marginHorizontal: 4 }}>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={[styles.Dot, { backgroundColor: '#F54D56', borderColor: 'white', borderWidth: 1, marginRight: 4 }]}></View>
                        <Text style={[styles.normalText,props.selected ? styles.colorTextSelected:styles.colorTextUnSelected]}>รายจ่าย</Text>
                    </View>
                    <Text style={[styles.textAmount,props.selected ? styles.colorTextSelected:styles.colorTextUnSelected]}>
                        3,500
                        </Text>
                </View>
            </View>
        </View>
    )
}

export default Content

const styles = StyleSheet.create({
    Dot: {
        width: 11,
        height: 11,
        borderRadius: 11 / 2,

    },
    textAmount: {
        fontFamily: 'Kanit',
        fontSize: 12
    },
    normalText: {
        fontFamily: 'Kanit',
        fontSize: 11
    },
    colorTextSelected: {
        color: 'white'
    },
    colorTextUnSelected: {
        color: '#203CFA'
    }
})

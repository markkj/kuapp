import React from 'react'
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native'
import { ProgressBar } from 'react-native-multicolor-progress-bar';
import numberWithCommas from '../../utils/Functional';
import Icon from 'react-native-vector-icons/MaterialIcons'
const Card = (props) => {

    const data = props.data
    const progressBarData = [
        { color: data.color, value: data.present === data.value ? data.present / (data.value + 100) : data.present / data.value },
    ]

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingHorizontal: 15 }}>
                <Image
                    style={{ height: Dimensions.get('window').height / 13, width: Dimensions.get('window').height / 13 }}
                    source={props.icon}
                />

                <View style={styles.cycleNav}>
                    <Icon
                        name="navigate-next"
                        size={30}
                        onPress={() => props.navigation.navigate('Cost', { data: data })}
                    />
                </View>
            </View>
            <View style={styles.textData}>
                <View>
                    <Text style={{ fontFamily: 'Kanit', fontSize: 15 }}>
                        {data.name}
                    </Text>
                    <Text style={{ fontFamily: 'Kanit', fontSize: 15, lineHeight: 16, }}>
                        {numberWithCommas(data.present)}  / {numberWithCommas(data.value)}
                    </Text>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'flex-start', paddingTop: 4 }}>
                    <ProgressBar
                        arrayOfProgressObjects={progressBarData}
                        backgroundBarStyle={{
                            backgroundColor: data.present === data.value ? data.color : data.color2,
                            height: Dimensions.get('window').height * 0.018,
                            width: Dimensions.get('window').width * 0.33
                        }}
                    />
                </View>
            </View>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        borderRadius: 15,
        backgroundColor: '#FFFFFF',
        width: Dimensions.get('window').width / 2.4,
        height: Dimensions.get('window').height / 4.8,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 4,
        },
        shadowOpacity: 0.3,
        shadowRadius: 6.27,

        elevation: 10,
        paddingTop: 10,
        paddingBottom: 10,
        margin: 5,
    },
    cycleNav: {
        width: 30,
        height: 30,
        borderRadius: 30 / 2,

        backgroundColor: '#FFFFFF',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.15,
        shadowRadius: 10,
        elevation: 5,
    },
    textData: {
        marginTop: '1%',
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 15,
        justifyContent: 'center'
    }
})

import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { ProgressBar } from 'react-native-multicolor-progress-bar';
import { Dimensions } from "react-native";
import Icon from 'react-native-vector-icons/MaterialIcons'
const Card = (props) => {
    const data = {
        name: "ค่าใช้จ่าย",
        present: 8000,
        value: 9000,
        color: "#F54D56",
        color2:"#FAA6AB",
    };
    const progressBarData = [
        {color:data.color,value:data.present / data.value},
    ]
    
    
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', paddingRight: 15 }}>
                <Image
                    style={{ height: 50, width: 50 }}
                    source={require('../../assets/Home/Card/cost.png')}
                />

                <View style={styles.cycleNav}>
                    <Icon
                        name="navigate-next"
                        size={30}
                    />
                </View>


            </View>
            <View style={styles.textData}>
                <Text style={{ fontFamily: 'Kanit', fontSize: 15 }}>
                    ค่าใช้จ่าย
                </Text>
                <Text style={{ fontFamily: 'Kanit', fontSize: 15 }}>
                    8,000/9,000
                </Text>
                <View style={{ flexDirection: 'row', width: '100%', alignItems: 'center' }}>
                    <ProgressBar
                        arrayOfProgressObjects={progressBarData}
                        backgroundBarStyle={{ backgroundColor: data.color2 }}
                    />
                </View>
            </View>
        </View>
    )
}

export default Card

const styles = StyleSheet.create({
    container: {
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

        paddingLeft: 20,
        paddingTop: 15,
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
        marginTop: 3,
    }
})

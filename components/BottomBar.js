import React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import { LinearGradient } from 'expo-linear-gradient';
const BottomBar = (props) => {
    console.log(props.navigation.state);
    return (
        <View style={styles.wrapper}>
            <View style={styles.addButton}>
                <LinearGradient
                    colors={['#337DF1', '#00AEEE']}
                    style={{ width: 55, height: 55, borderRadius: 55 / 2 }}
                >
                    <Icon2
                        name="add"
                        size={50}
                        color='white'
                        style={{ padding: 2 }}
                    />
                </LinearGradient>

            </View>
            <View style={styles.container}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
                    <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                        <Icon
                            name="flag-checkered"
                            size={20}
                            color={props.navigation.state.key == "Home" ? '#337DF1' : '#C4C4C4'} />
                        <Text style={[styles.normalText, props.navigation.state.key == "Home" ? styles.colorSeleted : styles.colorUnSeleted]} >วางแผน</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => props.navigation.navigate('Mission')}>
                    <View style={{ flexDirection: 'column', alignItems: 'center' }} >
                        <Icon2
                            name="stars"
                            size={20}
                            color={props.navigation.state.key == "Mission" ? '#337DF1' : '#C4C4C4'} />
                        <Text style={[styles.normalText, props.navigation.state.key == "Mission" ? styles.colorSeleted : styles.colorUnSeleted]} >ภารกิจ</Text>
                    </View>
                </TouchableOpacity>

            </View>
        </View>

    )
}

export default BottomBar

const styles = StyleSheet.create({
    wrapper: {
        position: 'absolute',
        bottom: 0,
        height: 60,
        width: '100%'
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',

        backgroundColor: 'white',
        height: 40,
        width: '100%',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 8,
        },
        shadowOpacity: 0.46,
        shadowRadius: 11.14,
        elevation: 17,
        paddingHorizontal: 80,
        paddingTop: 5,
    },
    normalText: {
        fontFamily: 'Kanit',
        fontSize: 10,
    },
    colorSeleted: {
        color: '#337DF1'
    },
    colorUnSeleted: {
        color: '#C4C4C4'
    },
    addButton: {
        position: 'absolute',
        bottom: 30,
        zIndex: 1,
        marginHorizontal: '42.5%',

    },

})

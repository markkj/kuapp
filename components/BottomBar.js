import React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import { LinearGradient } from 'expo-linear-gradient';
const BottomBar = (props) => {

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
        height: Dimensions.get('window').height * 0.045,
        width: '100%'
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',

        backgroundColor: 'white',
        height: Dimensions.get('window').height * 0.4,
        width: '100%',
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 17,
        paddingHorizontal: 80,
        paddingTop:5,
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
        bottom: 2,
        elevation: 20,
        zIndex: 2,
        marginHorizontal: '42.5%',

    },

})

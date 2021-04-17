import React, { useState } from 'react'
import { StyleSheet, Text, View, Dimensions, Image, TouchableOpacity, TouchableWithoutFeedback, LayoutAnimation, Platform, UIManager, Animated, ScrollView } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import { LinearGradient } from 'expo-linear-gradient';
import AddTransaction from './AddTransaction';

const BottomBar = (props) => {

    const mapping_icon = props.mapping_icon
    const data = props.data
    const [isExpand, setIsExpand] = useState(false)
    const [categorySelect, setCategorySelect] = useState(props.name ? props.name : data.dataList[0].name)
    if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    const changeLayout = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setIsExpand(!isExpand);
    }
    let showAddingView = null

    if (isExpand) {
        showAddingView = <View style={{ height: '100%', width: '100%', zIndex: 2, elevation: 200, backgroundColor: 'rgba(0,0,0,0.5)' }}>
            <TouchableWithoutFeedback onPress={() => changeLayout()}>
                <View style={{ height: '35%' }}>

                </View>
            </TouchableWithoutFeedback>
            <View style={{ height: '100%', backgroundColor: 'white', borderTopRightRadius: 40, borderTopLeftRadius: 40, overflow: 'hidden', zIndex: 3 }}>
                <View style={{ borderWidth: 0, marginHorizontal: 50, marginVertical: 20, paddingTop: 20 }}>
                    <ScrollView
                        horizontal={true}
                        contentContainerStyle={{ flexGrow: 1, justifyContent: 'space-between' }}
                        style={{ borderWidth: 0, width: '100%' }}
                    >
                        {
                            data.dataList.map((val, key) => {
                                return (
                                    <TouchableOpacity onPress={() => setCategorySelect(val.name)} key={key}>
                                        <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                                            <Image
                                                source={mapping_icon[val.name]}
                                                style={{ width: 30, height: 30 }}
                                            />
                                            <Text style={[categorySelect == val.name ? styles.categorySelect : styles.categoryUnSelect]}>{val.name}</Text>
                                        </View>
                                    </TouchableOpacity>

                                )
                            })
                        }
                    </ScrollView>
                </View>
                <View style={{ paddingHorizontal: 20, paddingVertical: 10 }}>
                    <AddTransaction name={categorySelect} onExist={changeLayout}/>
                </View>
            </View>
        </View>
    }
    return (


        <View style={[styles.wrapper, isExpand ? { top: 0, height: '100%' } : {}]}>
            {
                showAddingView
            }
            <View style={isExpand ? { height: 0, width: 0 } : styles.addButton}>
                <LinearGradient
                    colors={['#337DF1', '#00AEEE']}
                    style={isExpand ? { height: 0, width: 0 } : { width: 55, height: 55, borderRadius: 55 / 2 }}
                >
                    <Icon2
                        name="add"
                        size={50}
                        color={'white'}
                        style={{ padding: 2 }}
                        onPress={() => changeLayout()}
                    />
                </LinearGradient>

            </View>
            <View style={isExpand ? { height: 0, width: 0 } : styles.container}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>
                    <View style={{ flexDirection: 'column', alignItems: 'center' }}>
                        <Icon
                            name="flag-checkered"
                            size={20}
                            color={props.navigation.state.routeName == "Home" ? '#337DF1' : '#C4C4C4'} />
                        <Text style={[styles.normalText, props.navigation.state.routeName == "Home" ? styles.colorSeleted : styles.colorUnSeleted]} >วางแผน</Text>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => props.navigation.navigate('Mission')}>
                    <View style={{ flexDirection: 'column', alignItems: 'center' }} >
                        <Icon2
                            name="stars"
                            size={20}
                            color={props.navigation.state.routeName == "Mission" ? '#337DF1' : '#C4C4C4'} />
                        <Text style={[styles.normalText, props.navigation.state.routeName == "Mission" ? styles.colorSeleted : styles.colorUnSeleted]} >ภารกิจ</Text>
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
        bottom: 2,
        elevation: 200,
        zIndex: 9,
        marginHorizontal: '42.5%',

    },
    categorySelect: { fontFamily: 'Kanit-SemiBold', color: 'black', fontSize: 14, marginTop: 10, borderBottomWidth: 2 },
    categoryUnSelect: { fontFamily: 'Kanit', fontSize: 12, marginTop: 10, color: 'rgba(0,0,0,0.5)' }
})

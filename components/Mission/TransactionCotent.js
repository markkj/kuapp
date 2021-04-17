import React, { useState, useRef } from 'react'
import { StyleSheet, Text, View, Dimensions, ScrollView, LayoutAnimation, Platform, UIManager, TouchableOpacity, Animated } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo';
import numberWithCommas from '../../utils/Functional';


export default function TransactionCotent(props) {
    const [dataTransaction, setDataTransaction] = useState({ data: props.dataTransaction, isReloading: false })
    const [dataMain, setDataMain] = useState({ data: props.main, isReloading: false })
    const [isExpand, setIsExpand] = useState(false);
    if (Platform.OS === 'android') {
        UIManager.setLayoutAnimationEnabledExperimental(true);
    }
    const changeLayout = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setIsExpand(!isExpand);
    }
    let totalFinish = 0
    dataTransaction.data.map(val => {
        if (val.isGet) {

            totalFinish += 1
        }
    })
    const fadeAnim = useRef(new Animated.Value(0)).current;

    const fadeIn = () => {
        // Will change fadeAnim value to 1 in 5 seconds
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 200,
            useNativeDriver: true // Add This line
        }).start();
    };
    const fadeOut = () => {
        // Will change fadeAnim value to 0 in 3 seconds
        Animated.timing(fadeAnim, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true // Add This line
        }).start();
    };
    const onDeleteHandler = (key) => {
        fadeOut();
        setTimeout(() => {
            let arr = dataTransaction.data
            arr[key].isGet = true
            setDataTransaction({ data: arr, isReloading: true })
        }, 200);

    }


    const onClearQuest = () => {
        fadeOut();
        setTimeout(() => {
            let arr = dataMain.data
            arr.isGet = true
            setDataMain({ data: arr, isReloading: true })
        }, 200);
    }
    const mainTotal = () => {
        if (totalFinish != dataTransaction.data.length) {
            return <Text style={[styles.text, { fontSize: 16 }]}>{totalFinish}/{dataTransaction.data.length}</Text>
        } else {
            return <TouchableOpacity onPress={() => onClearQuest()}><Text style={[styles.text, { fontSize: 16, color: '#F6D55C' }]}>รับรางวัล</Text></TouchableOpacity>
        }
    }
    const showMainQuest = () => {
        if (!dataMain.data.isGet) {
            return (
                <View style={{
                    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 15, borderWidth: 0, height: '8%',
                    borderWidth: 1, borderColor: '#F6D55C', borderRadius: 50, marginBottom: 10
                }} >
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <View style={{ marginRight: 20, borderRadius: 30 / 2, width: 30, height: 30, backgroundColor: '#F6D55C' }}>

                        </View>
                        <View>
                            <Text style={[styles.text, { fontSize: 14 }]}>{dataMain.data.name}</Text>
                            <Text style={[styles.text, { color: '#898A8D' }]}>{dataMain.data.point} คะแนน</Text>
                        </View>
                    </View>
                    <View>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={[styles.text, { color: '#898A8D' }]}>ความสำเร็จ</Text>
                            {mainTotal()}
                        </View>
                    </View>
                </View>
            )
        } else {
            return <View style={{ marginTop: '30%' }}>
                <Text style={[styles.text, { textAlign: 'center', fontSize: 30, color: '#898A8D' }]}>ยินดีด้วย</Text>
                <Text style={[styles.text, { textAlign: 'center', fontSize: 20, color: '#898A8D' }]}>คุณทำภารกิจของวันหมดแล้ว</Text>
            </View>
        }
    }
    fadeIn();

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
                    style={{ borderWidth: 0, width: '100%', borderWidth: 0, marginTop: 10 }}>
                    {showMainQuest()}
                    <Animated.View
                        style={[
                            {

                                opacity: fadeAnim,
                                flexDirection: 'column',
                            }
                        ]}
                    >
                        {
                            dataTransaction.data.map((val, key) => {

                                const checkProgress = () => {
                                    if (val.progress == val.total) {
                                        return <TouchableOpacity onPress={() => onDeleteHandler(key)}><Text style={[styles.text, { fontSize: 16, color: '#F6D55C' }]}>รับรางวัล</Text></TouchableOpacity>
                                    } else {
                                        return <Text style={[styles.text, { fontSize: 16 }]}>{val.progress}/{val.total}</Text>
                                    }
                                }
                                if (!val.isGet) {
                                    return (
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal: 15, borderWidth: 0, height: 55 }} key={key}>
                                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                                <View style={{ marginRight: 10, borderRadius: 30 / 2, width: 30, height: 30, backgroundColor: '#F6D55C' }}>

                                                </View>
                                                <View>
                                                    <Text style={[styles.text, { fontSize: 16 }]}>{val.name}</Text>
                                                    <Text style={[styles.text, { color: '#898A8D' }]}>{val.point} คะแนน</Text>
                                                </View>
                                            </View>
                                            <View style={{ alignItems: 'center' }}>
                                                <Text style={[styles.text, { color: '#898A8D' }]}>ความสำเร็จ</Text>
                                                {checkProgress()}
                                            </View>
                                        </View>
                                    )
                                }

                            })
                        }
                    </Animated.View>

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


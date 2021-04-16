import React from 'react'
import { StyleSheet, Text, View, Dimensions, Image, SafeAreaView, ScrollView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/AntDesign';
import BottomBar from '../components/BottomBar';
import { ProgressBar } from 'react-native-multicolor-progress-bar';

const MissionScreen = (props) => {


    return (
        <View style={styles.container}>
            <LinearGradient
                style={styles.gradient}
                colors={['#337DF1', '#00AEEE']}
            >
                <View style={[styles.header, { paddingHorizontal: 20, paddingTop: 60, alignItems: 'center' }]}>
                    <View style={{ justifyContent: 'center', backgroundColor: 'white', width: Dimensions.get('screen').width / 2, height: Dimensions.get('screen').width / 2, borderRadius: Dimensions.get('screen').width / 4 }}>

                        <View style={{ borderWidth: 0, alignItems: 'center', justifyContent: 'center', paddingTop: 30 }}>
                            <Text style={[styles.text, { fontSize: 18 }]}>คะแนนสะสม</Text>
                            <Text style={[styles.text, { fontSize: 90, lineHeight: 100 }]}>80</Text>
                            <View style={{ top: -30 }}><Text style={[styles.text, { fontSize: 18 }]}>คะแนน</Text></View>
                        </View>


                    </View>
                    <View style={[styles.cardBox, { marginVertical: '9%' }]}>
                        <View style={{ flexDirection: 'row' }}>
                            <Image
                                source={require('../assets/reward.png')}
                                style={{ marginRight: 20, width: 40, height: 40 }}
                            />

                            <View>
                                <Text style={[styles.text]}>แลกของรางวัล</Text>
                                <Text style={[styles.text, { color: '#898A8D' }]}>Gift {"&"} Voucher</Text>
                            </View>
                        </View>
                        <Icon
                            name="right"
                            size={30}

                        />
                    </View>
                    <ScrollView >
                        <View style={{ borderWidth: 0, width: '98%', height: '100%',alignItems:'center',marginBottom:80 }}>

                            <View style={[styles.cardBox, { width:'100%',marginBottom: 10 }]}>
                                <View style={{ flexDirection: 'row' ,alignItems:'center'}}>
                                    <Image
                                        source={require('../assets/dailyquest.png')}
                                        style={{ marginRight: 20, width: 40, height: 40 }}
                                    />

                                    <View>
                                        <View style={styles.subHeader}>
                                            <View>

                                                <Text style={[styles.text]}>ภารกิจประจำวัน</Text>
                                                <Text style={[styles.text, { color: '#898A8D', marginBottom: 10 }]}>Daily quests</Text>
                                            </View>
                                            <Icon
                                                name="right"
                                                size={25}
                                                onPress={() => props.navigation.navigate('SubMission', { data: {name:"daily"} })}
                                            />
                                        </View>
                                        <ProgressBar
                                            arrayOfProgressObjects={[
                                                { color: '#F6D55C', value: 0.8 },
                                            ]}
                                            backgroundBarStyle={styles.ProgressBar}
                                        />
                                    </View>
                                </View>

                            </View>
                            <View style={[styles.cardBox, { width:'100%',marginBottom: 10 }]}>
                                <View style={{ flexDirection: 'row',alignItems:'center' }}>
                                    <Image
                                        source={require('../assets/puzzle.png')}
                                        style={{ marginRight: 20, width: 40, height: 40 }}
                                    />

                                    <View>
                                        <View style={styles.subHeader}>
                                            <View>

                                                <Text style={[styles.text]}>ภารกิจประจำแผน</Text>
                                                <Text style={[styles.text, { color: '#898A8D', marginBottom: 10 }]}>Plan quests</Text>
                                            </View>
                                            <Icon
                                                name="right"
                                                size={25}
                                                onPress={() => props.navigation.navigate('SubMission', { data: {name:"plan"} })}
                                            />
                                        </View>
                                        <ProgressBar
                                            arrayOfProgressObjects={[
                                                { color: '#F6D55C', value: 0.8 },
                                            ]}
                                            backgroundBarStyle={styles.ProgressBar}
                                        />
                                    </View>
                                </View>

                            </View>
                            <View style={[styles.cardBox,{width:'100%'}]}>
                                <View style={{ flexDirection: 'row',alignItems:'center' }}>
                                    <Image
                                        source={require('../assets/star.png')}
                                        style={{ marginRight: 20, width: 40, height: 40 }}
                                    />

                                    <View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: Dimensions.get('window').width * 0.6, borderWidth: 0 }}>
                                            <View>

                                                <Text style={[styles.text]}>ภารกิจพิเศษ</Text>
                                                <Text style={[styles.text, { color: '#898A8D', marginBottom: 10 }]}>Special quests</Text>
                                            </View>
                                            <Icon
                                                name="right"
                                                size={25}
                                                onPress={() => props.navigation.navigate('SubMission', { data: {name:"special"} })}
                                            />
                                        </View>
                                        <ProgressBar
                                            arrayOfProgressObjects={[
                                                { color: '#F6D55C', value: 0.8 },
                                            ]}
                                            backgroundBarStyle={styles.ProgressBar}
                                        />
                                    </View>
                                </View>

                            </View>

                        </View>
                    </ScrollView>
                </View>



            </LinearGradient>
            <BottomBar {...props} />
        </View>



    )
}

export default MissionScreen

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: Dimensions.get('window').height * 0.980,

    },
    gradient: {
        height: '100%',
        width: '100%',
    },
    text: {
        fontFamily: 'Kanit'
    },
    cardBox: { flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', paddingHorizontal:20,paddingVertical:10 , backgroundColor: 'white', width: '90%', borderRadius: 15 },
    subHeader:{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: Dimensions.get('window').width * 0.6, borderWidth: 0 },
    ProgressBar:{
        backgroundColor: '#FBEAAD',
        height: Dimensions.get('window').height * 0.012,
        width: '95%'
    }
})

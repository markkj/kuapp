import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { VictoryPie } from 'victory-native';
import Dot from 'react-native-vector-icons/Octicons';
import Icon from 'react-native-vector-icons/Entypo';
const InvestPieChart = (props) => {
    const dataList = props.dataList
    const screenHight = Dimensions.get('window').height / 3.2;
    const categoryColor = ['#30C58B', '#337DF1', '#F6D55C']
    return (
        <View>
            <Text style={[styles.textBold, { fontSize: 20 }]}>พอร์ตปัจจุบัน</Text>


            <View style={{ flexDirection: 'row', width: Dimensions.get('window').width * 0.79, paddingHorizontal: 10, borderWidth: 0 }}>

                <View style={{ borderWidth: 0, width: '55%', }}>
                    <View style={{ borderWidth: 0, left: -125, top: -22, width: '50%', height: '20%' }}>
                        <VictoryPie
                            animate={{
                                duration: 2000,
                                onLoad: { duration: 100 }
                            }}
                            height={screenHight}

                            colorScale={categoryColor}
                            labelPosition="centroid"
                            labelRadius={() => 25}
                            data={dataList}
                            x="name"
                            y="percent"
                            labels={({ datum }) => { datum.percent }}
                            style={{ labels: { fill: "white", fontSize: 16 } }}
                        />
                    </View>
                </View>
                <View style={{ borderWidth: 0, width: '40%' }}>
                    <View style={{ flexDirection: "row", alignItems: 'center', borderWidth: 0 }}>
                        <Text style={[styles.text, { marginRight: 4 }]}>อัตราผลตอบแทน</Text>
                        <Icon
                            name="help-with-circle"
                            size={10}
                            color="rgba(51, 125, 241, 0.3)" />
                    </View>
                    <View style={{ flexDirection: 'column' }}>
                        <View style={{ flexDirection: 'row', alignItems: 'flex-end' }} >

                            <Text style={[{ fontFamily: 'Kanit-SemiBold', fontSize: 30 }]}>4.95 </Text>
                            <Text style={[styles.text, { fontSize: 20 }]}>%/ปี</Text>
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <Text style={[styles.text, { fontSize: 12, marginRight: 4 }]}>ความเสี่ยงปานกลาง</Text>
                        <Icon
                            name="help-with-circle"
                            size={10}
                            color="rgba(51, 125, 241, 0.3)" />
                    </View>
                    <View style={{ padding: 10, paddingHorizontal: 0, paddingBottom: 0 }}>
                        {
                            dataList.map((val, key) => {
                                return (
                                    <View style={{ flexDirection: 'row' }} key={key}>
                                        <Dot
                                            name='primitive-dot'
                                            size={25}
                                            color={categoryColor[key]} />
                                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', width: '80%' }}>
                                            <Text style={[styles.text, { marginLeft: 5 }]}>{val.name}</Text>
                                            <Text style={[styles.text, { fontSize: 10, marginLeft: 2 }]}>{val.percent}%</Text>
                                        </View>
                                    </View>
                                )
                            })
                        }
                    </View>
                </View>
            </View>
        </View>

    )
}

export default InvestPieChart


const styles = StyleSheet.create({
    text: {
        fontFamily: 'Kanit'
    },
    textBold: {
        fontFamily: 'Kanit-SemiBold'
    }
})


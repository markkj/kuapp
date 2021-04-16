import React from 'react'
import { StyleSheet, Text, View, Dimensions, TouchableOpacity, Button } from 'react-native'
import { VictoryChart, VictoryGroup, VictoryLine, VictoryTheme, VictoryArea } from 'victory-native';
import Dot from 'react-native-vector-icons/Octicons';
import Icon from 'react-native-vector-icons/Entypo';
import numberWithCommas from '../../utils/Functional';
import { useState } from 'react';
const InvestGraphChart = (props) => {

    const dataList = props.dataList
    const data = props.data
    const averageProfit = 104.95 / 100
    let dataLineNormal = []
    let dataLineInvestOnlyStart = []
    let dataLineInvestAll = []
    const CalculateFeature = (years) => {
        const total = data.value
        dataLineNormal.push({ x: 0, y: total })
        dataLineInvestOnlyStart.push({ x: 0, y: total })
        dataLineInvestAll.push({ x: 0, y: total })
        for (var i = 1; i <= years; i++) {
            var start = total * i
            var startandend = dataLineInvestAll[dataLineInvestAll.length - 1].y
            dataLineNormal.push({ x: i, y: start })
            dataLineInvestOnlyStart.push({ x: i, y: (start * averageProfit) })
            if (i != 1) {
                dataLineInvestAll.push({ x: i, y: (startandend * averageProfit) + total })
            } else {
                dataLineInvestAll.push({ x: i, y: (startandend * averageProfit) })
            }


        }

    }


    const categoryColor = ['#30C58B', '#337DF1', '#F6D55C']


    const menuSeleteYears = [['1y', 1], ['2y', 2], ['5y', 5], ['10y', 10], ['20y', 20], ['30y', 30]]
    const [yearsSelect, setYearsSelect] = useState(menuSeleteYears[0])
    CalculateFeature(yearsSelect[1])
    console.log(dataLineInvestAll);
    return (

        <View style={{ width: Dimensions.get('window').width * 0.75, borderWidth: 0 }}>


            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', zIndex: 999, elevation: 1000 }}>
                <Text style={[styles.textBold, { fontSize: 20 }]}>ผลตอบแทน</Text>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: '58%', borderWidth: 0 }}>
                    {
                        menuSeleteYears.map((val, key) => {
                            return (
                                <TouchableOpacity onPress={() => setYearsSelect(menuSeleteYears[key])} key={key} >
                                    <View style={{ flexDirection: 'column', justifyContent: 'space-between' }}>
                                        <Text style={{ fontFamily: 'Kanit', color: yearsSelect[0] == val[0] ? '#337DF1' : '#99BEF8', fontSize: 13 }}>{val[0]}</Text>
                                    </View>
                                </TouchableOpacity>

                            )
                        })
                    }

                </View>
            </View>
            <View style={{ flexDirection: 'row', width: Dimensions.get('window').width * 0.79, paddingHorizontal: 10, borderWidth: 0 }}>
                <View style={{ left: -15, top: -Dimensions.get('window').height / 18, height: Dimensions.get('window').height / 4.2 }}>
                    <VictoryChart

                        theme={VictoryTheme.material}

                        height={Dimensions.get('window').height * 0.25}
                        width={Dimensions.get('window').width * 0.86}

                    >
                        <VictoryGroup

                            animate={{
                                duration: 100,
                                onLoad: { duration: 100 }
                            }}

                        >


                            <VictoryLine
                                style={{
                                    data: { stroke: "#540707" },
                                }}

                                interpolation="natural"
                                data={dataLineNormal}
                            />
                            <VictoryLine
                                style={{
                                    data: { stroke: "#F54D56" },
                                }}
                                interpolation="natural"
                                data={dataLineInvestOnlyStart}
                            />
                            <VictoryLine
                                style={{
                                    data: { stroke: "#337DF1" }
                                }}
                                interpolation="natural"
                                data={dataLineInvestAll}

                            />



                        </VictoryGroup>
                    </VictoryChart>
                    <View style={{ borderWidth: 0, top: -15, width: '86%', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '90%' }}>
                            <View style={{ flexDirection: "column" }}>
                                <Text style={[styles.text, { fontSize: 12 }]}>ปกติ</Text>
                                <View style={{ backgroundColor: '#540707', paddingHorizontal: 10, paddingVertical: 2, borderRadius: 5 }}>
                                    <Text style={{ fontFamily: 'Kanit', color: 'white',fontSize:12 }}>{String(numberWithCommas((dataLineNormal[dataLineNormal.length - 1].y).toFixed(2)))} </Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: "column" }}>
                                <Text style={[styles.text, { fontSize: 12 }]}>ทบต้น</Text>
                                <View style={{ backgroundColor: '#F54D56', paddingHorizontal: 10, paddingVertical: 2, borderRadius: 5 }}>
                                    <Text style={{ fontFamily: 'Kanit', color: 'white',fontSize:12 }}>{String(numberWithCommas((dataLineInvestOnlyStart[dataLineInvestOnlyStart.length - 1].y).toFixed(2)))} </Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: "column", width: '30%' }}>
                                <Text style={[styles.text, { fontSize: 12 }]}>ทบต้นทบดอก</Text>
                                <View style={{ backgroundColor: '#337DF1', paddingHorizontal: 10, paddingVertical: 2, borderRadius: 5 }}>
                                    <Text style={{ fontFamily: 'Kanit', color: 'white',fontSize:12 }}>{String(numberWithCommas((dataLineInvestAll[dataLineInvestAll.length - 1].y).toFixed(2)))} </Text>
                                </View>
                            </View>
                        </View>

                    </View>
                </View>

            </View>
        </View>

    )
}

export default InvestGraphChart


const styles = StyleSheet.create({
    text: {
        fontFamily: 'Kanit'
    },
    textBold: {
        fontFamily: 'Kanit-SemiBold'
    }
})


import React from 'react';
import { Dimensions, StyleSheet, Text, View, ScrollView } from 'react-native';
import { VictoryChart, VictoryGroup, VictoryBar, VictoryTheme, VictoryPie } from 'victory-native';
const Result = (props) => {
    const dataList = props.dataList
    const filter = props.filter
    const data = {
        income: [{ x: '2', y: 100 }, { x: '3', y: 50 }, { x: '4', y: 0 }, { x: '5', y: 100 }, { x: '6', y: 300 }, { x: '7', y: 0 }, { x: '8', y: 150 }],
        expense: [{ x: '2', y: 200 }, { x: '3', y: 300 }, { x: '4', y: 140 }, { x: '5', y: 100 }, { x: '6', y: 200 }, { x: '7', y: 100 }, { x: '8', y: 200 }]
    }
    let showBarChart = null
    let showTotal = null
    if (filter == 'IN') {
        showBarChart = <VictoryGroup
            offset={13}
            animate={{
                duration: 1000,
                onLoad: { duration: 100 }
            }}
        >
            <VictoryBar data={data.income} cornerRadius={{ topLeft: ({ datum }) => 5, topRight: ({ datum }) => 5 }} style={{ data: { fill: '#30C58B', width: 13 } }} />
        </VictoryGroup>

        showTotal = <View style={{ backgroundColor: '#32C68B', paddingVertical: 2, paddingHorizontal: 15, borderRadius: 10, marginLeft: 10 }}>
            <Text style={[styles.text, { color: 'white', fontSize: 13, width: '100%', textAlign: 'center' }]}>800</Text>
        </View>

    } else if (filter == 'EX') {
        showBarChart = <VictoryGroup
            offset={13}
            animate={{
                duration: 1000,
                onLoad: { duration: 100 }
            }}
        >
            <VictoryBar data={data.expense} cornerRadius={{ topLeft: ({ datum }) => 5, topRight: ({ datum }) => 5 }} style={{ data: { fill: '#F54D56', width: 13 } }} />
        </VictoryGroup>
        showTotal = <View style={{ backgroundColor: '#F54F57', paddingVertical: 2, paddingHorizontal: 15, borderRadius: 10, marginLeft: 10 }}>
            <Text style={[styles.text, { color: 'white', fontSize: 13, width: '100%', textAlign: 'center' }]}>1,300</Text>
        </View>
    } else {

        showBarChart = <VictoryGroup
            offset={13}
            animate={{
                duration: 1000,
                onLoad: { duration: 100 }
            }}
        ><VictoryBar data={data.income} cornerRadius={{ topLeft: ({ datum }) => 5, topRight: ({ datum }) => 5 }} style={{ data: { fill: '#30C58B', width: 13 } }} />
            <VictoryBar data={data.expense} cornerRadius={{ topLeft: ({ datum }) => 5, topRight: ({ datum }) => 5 }} style={{ data: { fill: '#F54D56', width: 13 } }} /></VictoryGroup>
        showTotal = <View style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
            <View style={{ backgroundColor: '#32C68B', paddingVertical: 2, paddingHorizontal: 15, borderRadius: 10, marginLeft: 10 }}>
                <Text style={[styles.text, { color: 'white', fontSize: 13, width: '100%', textAlign: 'center' }]}>800</Text>
            </View>
            <View style={{ backgroundColor: '#F54F57', paddingVertical: 2, paddingHorizontal: 15, borderRadius: 10, marginLeft: 10 }}>
                <Text style={[styles.text, { color: 'white', fontSize: 13, width: '100%', textAlign: 'center' }]}>1,300</Text>
            </View>
        </View>
    }

    const categoryColorMap = {
        'อาหาร': '#337DF1',
        'คมนาคม': '#30C58B',
        'เครื่องดื่ม': '#F54D56',
        'สาธารณูปโภค': '#FFB125',
        'การศึกษา': '#F6D55C',
        'อื่นๆ': '#C4C4C4'
    }

    const dataCategory = [
        { category: 'อาหาร', 'amount': 650, 'totalList': '32' },
        { category: 'คมนาคม', 'amount': 195, 'totalList': '25' },
        { category: 'เครื่องดื่ม', 'amount': 130, 'totalList': '16' },
        { category: 'สาธารณูปโภค', 'amount': 130, 'totalList': '1' },
        { category: 'การศึกษา', 'amount': 130, 'totalList': '1' },
        { category: 'อื่นๆ', 'amount': 75, 'totalList': '12' }
    ]
    const categoryColor = []
    dataCategory.map((data) => {
        return categoryColor.push(categoryColorMap[data.category])

    })
    return (
        <ScrollView style={{ marginBottom: 85 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingVertical: '2%', borderWidth: 0 }}>
                <Text style={styles.text}>สัปดาห์นี้, 2 - 8 มีนาคม 2021</Text>

                {
                    showTotal
                }

            </View>
            <View >
                <View style={{ top: -Dimensions.get('window').height / 15, height: Dimensions.get('window').height / 4.2 }}>
                    <VictoryChart
                        domainPadding={25}
                        theme={VictoryTheme.material}
                        height={Dimensions.get('window').height / 3}
                    >

                        {
                            showBarChart
                        }

                    </VictoryChart>

                </View>
            </View>
            <View>
                <Text style={[styles.text, { fontSize: 18 }]}>การจัดอันดับประเภท</Text>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ borderWidth: 0, width: '50%' }}>
                        <View style={{ left: -4, top: 40, elevation: 2, zIndex: 1 }}>
                            <View style={{ flexDirection: "column", alignItems: 'center' }}>
                                <Text style={[styles.text, { fontSize: 40 }]}> 87 </Text>
                                <Text style={[styles.text, { lineHeight: 15, fontSize: 15 }]}> รายการ</Text>
                            </View>
                        </View>
                        <View style={{ left: -110, top: -90 }}>
                            <VictoryPie
                                animate={{
                                    duration: 2000,
                                    onLoad: { duration: 100 }
                                }}
                                innerRadius={66}
                                height={195}
                                colorScale={categoryColor}
                                data={dataCategory}
                                x="category"
                                y="amount"
                                style={{ labels: { fill: (d) => { } } }}
                            />
                        </View>

                    </View>
                    <View style={{ flexDirection: 'column', paddingVertical: 10 }}>
                        {
                            dataCategory.map((val, key) => {
                                return <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '59%', alignItems: 'center' }} key={key}>
                                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                        <Text style={[styles.text, { color: categoryColorMap[val.category] }]}>{val.category} </Text>
                                        <Text style={[styles.text, { fontSize: 10, color: '#898A8D' }]}>({val.totalList} รายการ)</Text>
                                    </View>
                                    <View style={{ backgroundColor: categoryColorMap[val.category], paddingHorizontal: 5, paddingVertical: 2, borderRadius: 10, width: '20%', alignItems: 'center' }}>
                                        <Text style={[styles.text, { fontSize: 10, color: 'white', }]}>{val.amount}</Text>
                                    </View>
                                </View>
                            })
                        }

                    </View>
                </View>
            </View>
        </ScrollView >



    )
}

export default Result

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Kanit'
    }
})

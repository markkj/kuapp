import React from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import { VictoryChart, VictoryLine, VictoryTheme } from 'victory-native';
import Dot from 'react-native-vector-icons/Octicons';
import Icon from 'react-native-vector-icons/Entypo';
const InvestGraphChart = (props) => {
    const dataList = props.dataList
    const data = props.data
    const averageProfit = 4.95
    const dataLineNormal = []
    const CalculateFeature = (years) => {
        const total = data.value 
        
        for(var i=1;i<=years;i++){
            dataLineNormal.push({x:i,y:total*averageProfit})
        }

    }
    CalculateFeature(1)
    console.log(dataLineNormal);
    const categoryColor = ['#30C58B', '#337DF1', '#F6D55C']
    
    return (

        <View>
            <Text style={[styles.textBold, { fontSize: 20 }]}>ผลตอบแทน</Text>
            <View style={{ flexDirection: 'row', width: Dimensions.get('window').width * 0.79, paddingHorizontal: 10, borderWidth: 0 }}>
                <View style={{ left: -10, top: -Dimensions.get('window').height / 18, height: Dimensions.get('window').height / 4.2 }}>
                    <VictoryChart
                        theme={VictoryTheme.material}
                        height={Dimensions.get('window').height * 0.27}
                        width={Dimensions.get('window').width * 0.85}
                    >
                        <VictoryLine
                            style={{
                                data: { stroke: "#c43a31" },
                            }}
                            interpolation="natural"
                            data={[
                                { x: 1, y: 2 },
                                { x: 2, y: 3 },
                                { x: 3, y: 5 },
                                { x: 4, y: 4 },
                                { x: 5, y: 7 }
                            ]}
                        />
                        
                    </VictoryChart>
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


import React from 'react';
import { StyleSheet, Text, ScrollView, SafeAreaView, View } from 'react-native';
import Card from './Card';


const Content = (props) => {
    const mapping_icon = {
        "ค่าใช้จ่าย": require('../../assets/Home/Card/cost.png'),
        "การลงทุน": require('../../assets/Home/Card/invest.png'),
        "เงินออม": require('../../assets/Home/Card/piggy.png'),
        "เป้าหมาย": require('../../assets/Home/Card/goal.png'),
    }
    const data = {
        total: 15000,
        dataList: [
            {
                name: "ค่าใช้จ่าย",
                present: 8000,
                value: 9000,
                color: "rgba(245, 77, 86, 1)",
                color2: "rgba(245, 77, 86, 0.5)",
            },
            {
                name: "การลงทุน",
                present: 3000,
                value: 3000,
                color: "rgba(51, 125, 241, 1)",
                color2: "rgba(51, 125, 241, 0.5)",
            },
            {
                name: "เงินออม",
                present: 800,
                value: 1500,
                color: "rgba(48, 197, 139, 1)",
                color2: "rgba(48, 197, 139, 0.5)",
            },
            {
                name: "เป้าหมาย",
                present: 800,
                value: 1500,
                color: "rgba(246, 213, 92, 1)",
                color2: "rgba(246, 213, 92, 0.5)",
            }
        ]
    };

    return (

        <ScrollView style={styles.container} >
            <View style={styles.ListItem}>
                {
                    data.dataList.map((val, key) => {
                        return <Card {...props} icon={mapping_icon[val.name]} data={val} />
                    })
                }


            </View>
        </ScrollView>


    )
}

const styles = StyleSheet.create({
    container: {
        paddingBottom: '50%',

        height: '50%',

    },
    ListItem: {
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom: '10%',
        marginTop: 10,
    }
});

export default Content;
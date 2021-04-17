import React from 'react'
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native'


const List = (props) => {
    const dataList = props.dataList
    const ListItem = (props) => {
        const data = props.data
        const filter = props.filter
        let in_val = null
        let ex_val = null
        if (data.type == "IN" && filter == 'all') {
            in_val = <View style={{ paddingVertical: 2, paddingHorizontal: 15 }}>
                <Text style={[styles.text, { fontSize: 16 }]}>{data.value}</Text>
            </View>
            ex_val = <View style={{ paddingVertical: 2, paddingHorizontal: 15 }}>
                <Text style={[styles.text, { fontSize: 16 }]}>{ }</Text>
            </View>
        } else if (data.type == "EX" && filter == 'all') {
            ex_val = <View style={{ paddingVertical: 2, paddingHorizontal: 15 }}>
                <Text style={[styles.text, { fontSize: 16 }]}>{data.value}</Text>
            </View>
            in_val = <View style={{ paddingVertical: 2, paddingHorizontal: 15 }}>
                <Text style={[styles.text, { fontSize: 16 }]}>{ }</Text>
            </View>
        } else {
            ex_val = <View style={{ paddingVertical: 2, paddingHorizontal: 15 }}>
                <Text style={[styles.text, { fontSize: 16 }]}>{data.value}</Text>
            </View>
            in_val = <View style={{ paddingVertical: 2, paddingHorizontal: 15 }}>
                <Text style={[styles.text, { fontSize: 16 }]}>{ }</Text>
            </View>
        }
        return <View style={{ paddingHorizontal: 20, paddingVertical: 0,marginTop:10 }}>
            <View style={{ alignItems: 'center', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

                <View style={{ flexDirection: 'row', width: '50%',alignItems:'center' }}>
                    <View style={{ marginRight: 20, borderRadius: 30 / 2, width: 30, height: 30, backgroundColor: data.type == "IN" ? '#32C68B':'#F54F57' }}>

                    </View>
                    <View style={{ flexDirection: 'column', justifyContent: 'center' }}>

                        <Text style={[styles.text]}>{data.ps}</Text>
                        <Text style={[styles.text, { color: "#898A8D" }]}>{data.category}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderRadius: 1, width: '42%' }}>
                    {in_val}
                    {ex_val}

                </View>

            </View>
        </View>


    }
    return (
        <ScrollView style={{ marginBottom: '54%' }}>
            {
                dataList.map(data => {
                    let total_in = null
                    let total_ex = null
                    if (props.filter == 'IN') {
                        total_in = <View style={{ backgroundColor: '#32C68B', paddingVertical: 2, paddingHorizontal: 15, borderRadius: 10, marginLeft: 10 }}>
                            <Text style={[styles.text, { color: 'white', fontSize: 16, width: '100%', textAlign: 'center' }]}>{data.total_in}</Text>
                        </View>
                    } else if (props.filter == 'EX') {
                        total_ex = <View style={{ backgroundColor: '#F54F57', paddingVertical: 2, paddingHorizontal: 15, borderRadius: 10, marginLeft: 10 }}>
                            <Text style={[styles.text, { color: 'white', fontSize: 16, width: '100%', textAlign: 'center' }]}>{data.total_ex}</Text>
                        </View>
                    } else {
                        total_in = <View style={{ backgroundColor: '#32C68B', paddingVertical: 2, paddingHorizontal: 15, borderRadius: 10, marginLeft: 10 }}>
                            <Text style={[styles.text, { color: 'white', fontSize: 16, width: '100%', textAlign: 'center' }]}>{data.total_in}</Text>
                        </View>
                        total_ex = <View style={{ backgroundColor: '#F54F57', paddingVertical: 2, paddingHorizontal: 15, borderRadius: 10, marginLeft: 10 }}>
                            <Text style={[styles.text, { color: 'white', fontSize: 16, width: '100%', textAlign: 'center' }]}>{data.total_ex}</Text>
                        </View>
                    }
                    return <View style={{ marginBottom: '2%' }}>
                        <View style={{ borderWidth: 1, borderColor: '#337DF1', borderRadius: 20, paddingHorizontal: 20, alignItems: 'center', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>

                            <View style={{ flexDirection: 'row' }}>
                                <Text style={[styles.text, { fontSize: Dimensions.get('window').width / 10, paddingRight: 10 }]}>{data.date.split(" ")[0]}</Text>
                                <View style={{ flexDirection: 'column', justifyContent: 'center' }}>

                                    <Text style={[styles.text]}>{data.description}</Text>
                                    <Text style={[styles.text, { lineHeight: 18, color: "#898A8D" }]}>{data.date.split(" ").slice(1, 2)} {data.date.split(" ").slice(2, 3)}</Text>
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', borderRadius: 1, alignItems: 'center' }}>
                                {total_in}
                                {total_ex}
                            </View>

                        </View>
                        {
                            data.transactions.map(val => {
                                if (val.type === props.filter) {
                                    return <ListItem data={val} filter={props.filter} />
                                } else if (props.filter == 'all') {
                                    return <ListItem data={val} filter={props.filter} />
                                }
                            })
                        }
                    </View>
                })
            }
        </ScrollView>
    )
}

export default List

const styles = StyleSheet.create({
    text: {
        fontFamily: 'Kanit'
    }
})

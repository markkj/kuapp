import React from 'react'
import { StyleSheet, Text, View, Dimensions, TextInput } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import InvestConent from './InvestConent'
import numberWithCommas from '../../utils/Functional';
const Content = (props) => {
    // const data = props.navigation.state.params.data;
    const data = props.data
    const ComponentShow = () => {
        if(data.name == "การลงทุน"){
            return <InvestConent {...props} data={data} />
        }
    }
    return (
        <View >
            <View style={[styles.header, { paddingHorizontal: 20, paddingTop: 20 }]}>
                <Icon
                    name="left"
                    size={20}
                    color='white'
                    style={{ paddingRight: 20 }}
                    onPress={() => props.navigation.goBack()}
                />
                <Text style={[styles.text, { color: 'white', fontSize: Dimensions.get('window').width / 17 }]}>
                    {data.name}
                </Text>
            </View>
            <View style={[styles.wrapper]}>
                <View style={{ flexDirection: 'row', height: '13%', width: '85%', alignItems: 'center', paddingVertical: 15, paddingHorizontal: 25, backgroundColor: 'white', borderRadius: 10, justifyContent: 'space-between' }}>
                    <View style={{ alignItems: 'flex-start' }}>
                        <Text style={[styles.text, { color: "#898A8D" }]}>สัดส่วน</Text>
                        <Text style={[styles.text, { color: "#337DF1", fontSize: Dimensions.get('window').width / 20 }]}>{data.percent} %</Text>
                    </View>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={[styles.text, { color: "#898A8D" }]}>เฉลี่ยต่อเดือน</Text>
                        <Text style={[styles.text, { color: "#337DF1", fontSize: Dimensions.get('window').width / 20 }]}>
                            {numberWithCommas(data.value)}
                            </Text>
                    </View>
                    <View style={{ alignItems: 'flex-end' }}>
                        <Text style={[styles.text, { color: "#898A8D" }]}>ทั้งหมด</Text>
                        <Text style={[styles.text, { color: "#337DF1", fontSize: Dimensions.get('window').width / 20 }]}> {numberWithCommas(data.present)}</Text>
                    </View>
                </View>
                {
                    ComponentShow()
                }
            </View>

        </View>
    )
}

export default Content

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: Dimensions.get('window').height * 0.980,

    },
    wrapper: {
        flexDirection: 'column',
        alignItems: 'center',
        height: Dimensions.get('window').height * 0.8,
    },
    gradient: {
        height: '100%',
        width: '100%',
        padding: 20,
    },
    text: {
        fontFamily: 'Kanit'
    },
    header: {
        flexDirection: 'row',
        marginTop: '10%',
        alignItems: 'center',
        marginBottom: '5%',
    },
    settings: {
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 15,
        padding: 22,
    },
    inputs: {
        fontFamily: 'Kanit',
        borderBottomWidth: 1,
        borderBottomColor: '#337DF1',
        marginHorizontal: '10%',
    },
    Boxing: { flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'flex-end', width: '80%', marginVertical: '4%' },
    unintText: { color: '#898A8D', fontSize: 13 },
})

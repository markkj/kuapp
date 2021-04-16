import React from 'react';
import { StyleSheet, Text, ScrollView, SafeAreaView, View, Dimensions, Image } from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign'
import TransactionCotent from './TransactionCotent';


const Content = (props) => {
    const data = props.data
    return (
        <View>


            <View style={[styles.header, { paddingHorizontal: 20, paddingTop: 5 }]}>
                <Icon
                    name="left"
                    size={20}
                    color='white'
                    style={{ paddingRight: 20 }}
                    onPress={() => props.navigation.goBack()}
                />
                <Text style={[styles.text, { color: 'white', fontSize: Dimensions.get('window').width / 17 }]}>
                    ย้อนกลับ
            </Text>

            </View>
            <View style={[styles.wrapper]}>
                <Image
                    source={data.img}
                    style={{ width: 150, height: 150, marginVertical: 15 }}
                />
                <Text style={[styles.text, { color: 'white', fontSize: 39 ,marginBottom:15}]}>{data.name}</Text>
                <TransactionCotent dataTransaction={data.dataTransaction} main={data.main} />
            </View>

        </View>


    )
}

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
});


export default Content;
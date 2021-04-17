import React from 'react';
import { StyleSheet, Text, ScrollView, SafeAreaView, View } from 'react-native';
import Card from './Card';


const Content = (props) => {
    const mapping_icon = props.mapping_icon
    const data = props.data

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
import React from 'react'

import { StyleSheet, View, Text } from 'react-native'


export default function Header({ TextTitle }) {

    return (
        <View style={styles.HeaderStyle}>
            <Text style={styles.TextStyle}>
                {TextTitle}
            </Text>
        </View>
    )
}


const styles = StyleSheet.create({

    HeaderStyle:{
        backgroundColor: '#d64e50'
    },

    TextStyle:{
        fontSize: 20,
        padding:15,
        color: 'white'
    }

})
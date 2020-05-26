import React from 'react'
import {View, Text, StyleSheet} from 'react-native'


export default function Greating({UserName}){
    return(
    <View>
        <Text style={styles.UserStyle}>
            Hello, {UserName}
        </Text>
    </View>
    )
}


const styles = StyleSheet.create({
    UserStyle:{
        padding:10,
        color:'white',
        fontSize:18
    }
})
import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'

export default function Command({
    OrderName, OrderPrice, OrderDescription, OrderDate, OrderImage
}) {

    return (

        <View style={styles.CommandContainer}>
            <View style={styles.ImageStyle} >
                <Image 
                    source={{uri: `${OrderImage}`}}
                    style={styles.ImageStyle}
                />           

            </View>
            
            <View style={styles.OrderInfo}>
                <Text style={styles.PriceStyle}>
                    {OrderPrice}
                </Text>

                <Text style={styles.NameStyle}>
                    {OrderName}
                </Text>
                
                <Text numberOfLines={3} style={styles.DescriptionStyle}>
                    {OrderDescription}
                </Text>
                <Text style={styles.DateStyle}>
                    {OrderDate}
                </Text>
            </View>
        </View>        

    )
}

const styles = StyleSheet.create({
    CommandContainer:{
        flexDirection:"row",
        backgroundColor: '#e64e50',
        margin:4,
        padding:8
        
    },
    ImageStyle:{
        width: 80, 
        height: 80,
        borderRadius:50,
        marginTop:12
    },
    OrderInfo:{
        height:115,
        margin:8
    },
    PriceStyle:{
        color: 'white',
        marginLeft:235,
        

    },
    NameStyle:{
        fontWeight: 'bold',
        color: 'white',
        fontSize: 18
    },
    DescriptionStyle:{
        fontStyle:'italic',
        color: 'white',
        alignContent:'space-between',
        width:300

    },
    DateStyle:{
        marginLeft:140,
        marginTop: 20,
        color: 'white',

    }
})
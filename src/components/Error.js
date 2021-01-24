import React from "react";
import {Text,StyleSheet} from "react-native"
const Error =({error} )=>{
    return (
    <Text style={styles.text}>
        {error}
    </Text>
    )
}
const styles=StyleSheet.create({
    container:{
        paddingVertical:8
    },
    text:{
        color:'red',
        fontWeight:'bold'
    }
})
export default Error;
import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native'



import colors from '../utils/colors'

export default function CreateContacts(){
    return (
        <View style={styles.formContainer}>
            <TextInput  placeholder="Name"  style={styles.input}/>
            <TextInput  placeholder="Email" keyboardType="email-address" style={styles.input} />
            <TextInput  placeholder="Phone" keyboardType="numeric" style={styles.input} />
            <TouchableOpacity style={[,{backgroundColor:colors.primary}]}>
                <Text style={styles.buttonTxt}>
                    Save
                </Text>
                </TouchableOpacity>
            <TouchableOpacity style={styles.button}>
                <Text style={[styles.buttonTxt,{backgroundColor:'red'}]}>
                   Close
                </Text>
            </TouchableOpacity>

        </View>
    )
}
const styles = StyleSheet.create({

    formContainer:{
        borderRadius:30,
        marginTop:60,
        paddingVertical:20,
        paddingHorizontal:40, 
        backgroundColor: colors.white, 

    },
    input:{
        paddingBottom:10,
        marginBottom:10,
        borderBottomColor: colors.secondry,
        borderWidth:1,
    },
    bottom:{
        padding:20,
        marginTop:20,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
    },
    buttonTxt:{
        color: colors.white,
    }
    
})
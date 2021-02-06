import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableOpacity
} from 'react-native'



import colors from '../utils/colors'

export default function SearchScreen(){
    return (
         <View style={styles.searchCotainar}>
             <TextInput placeholder="Search......." style={styles.searchInput}>

             </TextInput>
         </View>
       
    )
}
const styles = StyleSheet.create({
    searchCotainar:{
        backgroundColor:colors.secondary,
    },
    searchInput:{
        borderRadius:10,
        paddingVertical: 10,
        paddingHorizontal:20,
        margin:20,
        backgroundColor: colors.white,
    }

})
import React from 'react'
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

import colors from '../utils/colors'
import ContactListItem from '../components/ContactListItem'

const contacts=[
    {id: '1', name:'samira', phone:'0477849289', email:'samira@gmail.com'},
    {id: '2', name:'shabnam', phone:'044778489', email:'sana@gmail.com'},
    {id: '3', name:'fariba', phone:'2345678', email:'semaseta@gmail.com'},
    {id: '4', name:'seta', phone:'077887849289', email:'fahima@gmail.com'},
    {id: '5', name:'faizi', phone:'0777849289', email:'faizi@gmail.com'}
]

export default function Contacts(navigation){
   return(
    <FlatList
    data={contacts}
    keyExtractor={(item)=>item.id}
    renderItem={({item}) =>{
        return <ContactListItem name={item.name} phone={item.phone}onpress={()=>navigation.navigate('profile'),{item:item}} />
    }}
   />

   )
  
} 
<TouchableOpacity style={styles.floatbutton} onPress={()=>navigation.navigate('creatcontact')}>

</TouchableOpacity>
const styles = StyleSheet.create({
  

})
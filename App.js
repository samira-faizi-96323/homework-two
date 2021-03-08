import React from 'react';
import { StyleSheet, Text,Touchable,TouchableOpacity, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import{MaterialIcons} from '@expo/vector-icons'
import { creatstacknavigator } from "@react-navigation/stack";
const stack = creatstacknavigator();
import contact from './screens/contact'
import creatcontact from './screens/creatcontact'
import profile from './ screens/profile'
import SearchScreen from './screens/SearchScreen'

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name= "contacts" component ={contact}
       options={({navigation})=>({
        headerRight:()=>(
        <TouchableOpacity onPress={()=>navigation.navigate('Search')}>
          <Text>
            <MaterialIcons name="search" size={24} color="black" />
          </Text>
        </TouchableOpacity>
    
      )
    })}/>
      
      <Stack.Screen name= "creatcontact" component ={creatcontact}/>
      <Stack.Screen name= "profile" component ={profile}/>
      <stack.screen name= "search" component ={searchscreen}/>
        
      </Stack.Navigator>

    </NavigationContainer>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
});

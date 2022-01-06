import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Button } from 'react-native-paper'


const TopBar = ({navigation}) => {
    const handlePress = ()=>{
        console.log('press');
        navigation.navigate('newClient')
    }
    return (
        <Button
        icon='plus-circle'
        onPress={()=> handlePress()}
        color='#fff'
        >
            Cliente
        </Button>
    )
}

export default TopBar

const styles = StyleSheet.create({})

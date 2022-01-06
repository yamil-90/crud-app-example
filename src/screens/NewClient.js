import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

import { TextInput, Headline, Button } from 'react-native-paper';

import globalStyles from '../styles/global'

const NewClient = () => {
    return (
        <View style={globalStyles.container}>
           <Headline style={globalStyles.title}>Add new client</Headline>
            <TextInput
            style={styles.input}
            label='Name'
            onChangeText={(e)=>{
                console.log(e);
            }}
            />
            <TextInput
            style={styles.input}
            label='Last Name'
            />
        </View>
    )
}

export default NewClient

const styles = StyleSheet.create({
    input:{
        marginBottom:20,
        backgroundColor:'transparent'
    }
})

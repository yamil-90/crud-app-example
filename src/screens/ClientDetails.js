import axios from 'axios';
import React from 'react'
import { Alert, StyleSheet, View } from 'react-native';
import { Headline, Subheading, Text, Button, FAB } from 'react-native-paper';
import globalStyles from '../styles/global';

const ClientDetails = ({route, navigation}) => {
    const { setReloadClients} = route.params;
    const {name, phone, email, company, id}=route.params.item
    
    const confirmDelete=()=>{
        Alert.alert(
            'Are you sure?',
            'the deleted entries cannot be recovered',
            [
                {
                    text: 'delete', onPress:()=>deleteEntry()
                
                },
                {
                    text: 'cancel', style:'cancel'
                }
            ]
        )
    }

    const deleteEntry= async ()=>{
        try {
            let result
                if (Platform.OS === 'ios') {
                    // for ios
                    result = await axios.delete(`http://localhost:3000/clients/${id}`)
                } else if (Platform.OS === 'android') {
                    // for android
                    result = await axios.delete(`http://10.0.2.2:3000/clients/${id}`)
                }
                //reload list
                setReloadClients(true)
                //redirect home
                navigation.navigate('home')
        } catch (err) {
            console.log(err);
        }
    }
    return (
        <View style={globalStyles.container}>
            <Headline style={globalStyles.title}>
            {name}
            </Headline>
            <Text style={styles.text}>Company: <Subheading>{company}</Subheading></Text>
            <Text style={styles.text}>Phone: <Subheading>{phone}</Subheading></Text>
            <Text style={styles.text}>Email: <Subheading>{email}</Subheading></Text>
        <Button
            mode='contained'
            icon='cancel'
            style={styles.btn}
            onPress={()=>confirmDelete()}
        >
            Delete Entry
        </Button>
        <FAB 
        icon='pencil'
        style={globalStyles.fab}
        onPress={()=>navigation.navigate('newClient', {client: route.params.item, setReloadClients})}
        />
        </View>
    )
}

export default ClientDetails

const styles = StyleSheet.create({
    text:{
        fontSize: 18,
        marginBottom:20
    },
    btn:{
        marginTop:100,
        backgroundColor:'red'
    }
})

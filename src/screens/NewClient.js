import React, { useEffect, useState } from 'react'
import { StyleSheet, Text, View, Platform } from 'react-native';

import axios from 'axios';
import { TextInput, Headline, Button, Paragraph, Dialog, Portal } from 'react-native-paper';

import globalStyles from '../styles/global'

const NewClient = ({ navigation, route }) => {

    const { setReloadClients, client } = route.params

    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')
    const [company, setCompany] = useState('')

    const [alert, setAlert] = useState(false)

    // check if we are editing
    useEffect(() => {
        if (client) {
            const { name, phone, email, company } = client
            setName(name);
            setPhone(phone)
            setEmail(email)
            setCompany(company)
        }
    }, [])

    const saveClient = async () => {
        // validation
        if (name === '' || phone === '' || email === '' || company === '') {
            setAlert(true)
            return;
        }
        // for ios we can use localhost but for android 
        //we need to use the local ip and run json-server --watch db.json -p 3000 -d 2000 --host 192.168.0.34 or use 10.0.2.2:3000
        let url;
        if (Platform.OS === 'ios') {
            // for ios
            url = 'http://localhost:3000/clients'
        } else if (Platform.OS === 'android') {
            // for android
            url = 'http://10.0.2.2:3000/clients'
        }
        const clientData = { name, phone, email, company }
        // console.log(client);
        if (client) {
            const { id } = client
            clientData.id = id;
            try {
                await axios.put(url + `/${id}`, clientData)
            } catch (err) {
                console.log('error editing is', err);
            }
        } else {

            try {
                await axios.post(url, clientData);
                console.log('saving');
            } catch (err) {
                console.log('error is', err);
            }
        }
        // clean form
        setName('')
        setPhone('')
        setEmail('')
        setCompany('')
        // redirect
        setReloadClients(true)
        navigation.navigate('home')
    }

    // useEffect(()=>{
    //     console.log(name);
    // },[name])
    return (
        <View style={globalStyles.container}>
            <Headline style={globalStyles.title}>{client ? 'Edit Client' : 'Add new client'}</Headline>
            <TextInput
                style={styles.input}
                label='Name'
                onChangeText={setName}
                value={name}
            />
            <TextInput
                style={styles.input}
                label='Phone'
                onChangeText={setPhone}
                value={phone}
            />
            <TextInput
                style={styles.input}
                label='Email'
                onChangeText={setEmail}
                value={email}
            />
            <TextInput
                style={styles.input}
                label='Company'
                onChangeText={setCompany}
                value={company}
            />
            <Button icon='pencil-circle'
                mode='contained'
                onPress={saveClient}>
                {client ? 'Save changes' : 'Create new client'}
            </Button>
            <Portal>
                <Dialog
                    visible={alert}
                    //this dismiss the message when tapping on background
                    onDismiss={() => setAlert(false)}
                >
                    <Dialog.Title>
                        Error
                    </Dialog.Title>
                    <Dialog.Content>
                        <Paragraph>all fields are mandatory</Paragraph>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <Button onPress={() => setAlert(false)}>Ok</Button>
                    </Dialog.Actions>
                </Dialog>
            </Portal>
        </View>
    )
}

export default NewClient

const styles = StyleSheet.create({
    input: {
        marginBottom: 20,
        backgroundColor: 'transparent'
    }
})

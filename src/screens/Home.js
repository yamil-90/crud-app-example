import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

import axios from 'axios'
import { Button, Headline, List, FAB } from 'react-native-paper'
import globalStyles from '../styles/global'

const Home = ({ navigation }) => {
    const [reloadClients, setReloadClients] = useState(true)
    const [clients, setClients] = useState([])

    useEffect(() => {
        // we get the info from the api when the app renders

        const getInfoApi = async () => {
            try {
                let result
                if (Platform.OS === 'ios') {
                    // for ios
                    result = await axios.get('http://localhost:3000/clients')
                } else if (Platform.OS === 'android') {
                    // for android
                    result = await axios.get('http://10.0.2.2:3000/clients')
                }
                setClients(result.data)
                setReloadClients(false)
            } catch (err) {
                console.log(err);
            }
        }
        if (reloadClients) {
            getInfoApi()
        }
    }, [reloadClients])


    return (
        <View style={globalStyles.container}>
            <Button icon='plus-circle'
                onPress={() => navigation.navigate('newClient', { setReloadClients })}>
                Add Client
            </Button>
            <Headline
                style={globalStyles.title}>
                {clients.length > 0 ? 'Clients' : 'No clients found'}
            </Headline>


            <FlatList
                data={clients}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => (
                    <List.Item
                        title={item.name}
                        description={item.company}
                        onPress={()=>navigation.navigate('clientDetails', {item, setReloadClients})}
                    />
                )}
            />
            <FAB
                icon='plus'
                style={globalStyles.fab}
                onPress={() => navigation.navigate('newClient', { setReloadClients })}
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({
    
})

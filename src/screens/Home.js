import React, { useEffect, useState } from 'react'
import { FlatList, StyleSheet, Text, View } from 'react-native'

import axios from 'axios'
import { List } from 'react-native-paper'

const Home = () => {

    const [clients, setClients] = useState([])

    useEffect(() => {
      // we get the info from the api when the app renders
      const getInfoApi= async ()=>{
        try {
          let result 
            if (Platform.OS === 'ios') {
                // for ios
                result = await axios.get('http://localhost:3000/clients')
            } else if (Platform.OS === 'android'){
                // for android
                result = await axios.get('http://10.0.2.2:3000/clients')
            }
            setClients(result.data)
        } catch (err) {
          console.log(err);
        }
      }
      getInfoApi()
    }, [])


    return (
        <View>
           
           
            <FlatList
            data={clients}
            keyExtractor={item => item.id.toString()}
            renderItem={(data)=>(
                <List.Item
                title={data.item.name}
                description={data.item.company}
                />
            )}
            />
            
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})

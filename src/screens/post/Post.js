import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Avatar, Card, Divider, IconButton } from 'react-native-paper';
import { FlatList } from 'react-native-gesture-handler';
import Api from '../../services/Api';

export default function Post(props) {

  const usuario = props.route.params
  const [posts, setPosts] = useState([])

  useEffect(() => {
    Api.get('/users/' + usuario.id + '/posts')
      .then(response => {
        setPosts(response.data.posts);
      })
      .catch(error => {
        console.log("DEU ERRO NA CHAMADA DE USUÁRIOS: ", error);
      });
  }, []);

  return (
    <View>
      <Card>
        <Card.Title
          title={usuario?.username}
          subtitle={usuario?.email}
          left={() => <Avatar.Image size={48} source={{ uri: usuario?.image }} />}
          right={() => <IconButton icon="chevron-right" />}
        />
        <Card.Content>
          <FlatList
             data={posts}
             renderItem={({ item }) => {
              return (
                <View style={{padding: 7}}>
                  <Text style={{fontWeight: 'bold', color: 'red'}}>{item.title}</Text>
                  <Text>{item.body}</Text>
                  <Divider/>
                </View>
              )
             }}
          />
        </Card.Content>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({})

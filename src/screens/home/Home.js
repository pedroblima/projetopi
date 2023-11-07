import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import Api from '../../services/Api';
import { Avatar, Card, IconButton } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

export default function Home(props) {
  
  const navigation = props.navigation
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
<<<<<<< HEAD
    Api.get('/delivery')
      .then(response => {
        setUsuarios(response.data);
=======
    Api.get('/users')
      .then(response => {
        setUsuarios(response.data.users);
>>>>>>> 119762a625f8f30d7cad3bc79829ea785dbe5dc2
      })
      .catch(error => {
        console.log("DEU ERRO NA CHAMADA DE USUÁRIOS: ", error);
      });
  }, []);

  return (
    <View>
      <FlatList
        data={usuarios}
        renderItem={({ item }) => {
          return (
            <Card onPress={() => {
              navigation.navigate('Usuario', { id: item.id })
            }}>
              <Card.Title
<<<<<<< HEAD
                title={item.nome}
                subtitle={item.endereco}
                left={() => <Avatar.Image size={48} source={{ uri: item.imagem }} />}
=======
                title={item.username}
                subtitle={item.email}
                left={() => <Avatar.Image size={48} source={{ uri: item.image }} />}
>>>>>>> 119762a625f8f30d7cad3bc79829ea785dbe5dc2
                right={() => <IconButton icon="chevron-right" />}
              />
            </Card>
          );
        }}
      />
    </View>
  );
}

<<<<<<< HEAD
const styles = StyleSheet.create({})
=======
const styles = StyleSheet.create({})
>>>>>>> 119762a625f8f30d7cad3bc79829ea785dbe5dc2

import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import Api from '../../services/Api';
import { Avatar, Card, IconButton } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';

export default function Home(props) {
  
  const navigation = props.navigation
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    Api.get('/delivery')
      .then(response => {
        setUsuarios(response.data);
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
                title={item.nome}
                subtitle={item.endereco}
                left={() => <Avatar.Image size={48} source={{ uri: item.imagem }} />}
                right={() => <IconButton icon="chevron-right" />}
              />
            </Card>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({})

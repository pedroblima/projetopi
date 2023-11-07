<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, Image } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper'; // Importe os componentes do Paper
import Api from '../../services/Api';
import { StyleSheet } from 'react-native';
import { ScrollView } from 'react-native';

export default function Usuario(props) {
  const [lanches, setLanches] = useState([]);
  const usuarioId = props.route.params.id;

  useEffect(() => {
    Api.get('/lanche')
      .then(response => {
        const lanchesFiltrados = response.data.filter(lanche => lanche.restaurante_id === usuarioId);
        setLanches(lanchesFiltrados);
      })
      .catch(error => {
        console.log("DEU ERRO NA CHAMADA DE LANCHES: ", error);
      });
  }, [usuarioId]);

  return (
    <ScrollView>
      {lanches.map((item) => (
        <Card key={item.id} style={styles.card}>
          <Card.Cover source={{ uri: item.imagem }} style={styles.lancheImage} />
          <Card.Content>
            <Title style={styles.lancheName}>{item.nome}</Title>
            <Paragraph style={styles.lanchePrice}>{item.preco}</Paragraph>
          </Card.Content>
        </Card>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 10,
    borderRadius: 10,
    elevation: 3,
  },
  lancheImage: {
    height: 200,
  },
  lancheName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  lanchePrice: {
    fontSize: 16,
  },
});
=======
import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Avatar, Card, IconButton } from 'react-native-paper';
import Api from '../../services/Api';

export default function Usuario(props) {
  
  const navigation = props.navigation
  const [usuario, setUsuario] = useState()
  const usuarioId = props.route.params.id

  useEffect(() => {
    Api.get('/users/' + usuarioId)
      .then(response => {
        setUsuario(response.data);
      })
      .catch(error => {
        console.log("DEU ERRO NA CHAMADA DE USUÁRIOS: ", error);
      });
  }, []);

  return (
    <View>
      <Card onPress={() => {
        navigation.navigate('Post', { id: usuario.id })
      }}>
        <Card.Title
          title={usuario?.username}
          subtitle={usuario?.email}
          left={() => <Avatar.Image size={48} source={{ uri: usuario?.image }} />}
          right={() => <IconButton icon="chevron-right" />}
        />
        <Card.Cover source={{ uri: usuario?.image }} />
        <Card.Content>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Text variant="titleLarge">Nome:</Text>
            <Text variant="titleLarge">{usuario?.firsName}{usuario?.lastName}</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Text variant="titleLarge">Sobrenome:</Text>
            <Text variant="titleLarge">{usuario?.firsName}{usuario?.maidenName}</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Text variant="titleLarge">Email:</Text>
            <Text variant="titleLarge">{usuario?.email}</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Text variant="titleLarge">Idade:</Text>
            <Text variant="titleLarge">{usuario?.age}</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
            <Text variant="titleLarge">Telefone:</Text>
            <Text variant="titleLarge">{usuario?.phone}</Text>
          </View>
        </Card.Content>
      </Card>
    </View>
  )
}
>>>>>>> 119762a625f8f30d7cad3bc79829ea785dbe5dc2

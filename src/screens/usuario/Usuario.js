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

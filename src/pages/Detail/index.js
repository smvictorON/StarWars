import React, {useState,useEffect} from 'react';
import {Feather} from '@expo/vector-icons';
import {useNavigation, useRoute} from '@react-navigation/native';
import {View, Image, TouchableOpacity, Text, FlatList, ActivityIndicator} from 'react-native';

import axios from 'axios';
import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Detail(){
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const navigation = useNavigation();
  const route = useRoute();

  const character = route.params.character;

  const navigateBack = () => {
    navigation.goBack();
  }
  
  const loadMovies = async () => {
    setLoading(true);
    await character.films.map(async(item, index) => {
      const movie = axios.create({
        baseURL: item
      });
      let response = await movie.get();         
      setMovies(movies => [...movies, response.data]);
      if (character.films.length === (index+1))
        setLoading(false);
    })
  } 

  useEffect(() => {
    setMovies([])
    loadMovies()
  },[])

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={logoImg}/>  

        <TouchableOpacity onPress={navigateBack}>
          <Feather name="arrow-left" size={28} color="#e82041"/>
        </TouchableOpacity>   
      </View>

      <Text style={styles.description}>Veja alguns detalhes desse personagem!</Text>

      <View style={styles.character}>
        <Text style={[styles.characterLabel, {marginTop: 0}]}>Nome:</Text>
        <Text style={styles.characterValue}>{character.name}</Text>

        <View style={styles.row}>
          <Text style={[styles.characterLabel]}>Peso:</Text>
          <Text style={[styles.characterLabel]}>Altura:</Text>
        </View>

        <View style={styles.row}>          
          <Text style={styles.characterValue}>
            {character.mass !== 'unknown' ?
            `${character.mass} kgs` :
            `Desconhecido`}
          </Text>
          <Text style={styles.characterValue}>
            {character.mass !== 'unknown' ?
            `${character.height} cm` :
            `Desconhecido`}            
          </Text>
        </View>

        <Text style={[styles.characterLabel]}>Filmes:</Text>
        <View>

          {loading ?
            <View style={styles.loading}>
              <ActivityIndicator size="small" color="#e82041"/>
            </View> 
            :
            <FlatList 
              style={styles.moviesList}
              data={movies}
              keyExtractor={movie => movie.url}
              renderItem = {({item:movie, index}) => (
                <View style={styles.movies} key={index}>
                  <Text style={styles.moviesValue}>{movie.title}</Text>
                </View>
              )}
            />          
          } 

        </View>
      </View> 
    </View>
  )
}
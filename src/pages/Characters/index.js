import React, {useEffect, useState} from 'react';
import {Feather} from '@expo/vector-icons';
import {useNavigation} from '@react-navigation/native';
import {View, Text, Image, TouchableOpacity, FlatList, ActivityIndicator, TextInput} from 'react-native';

import api from '../../services/api';
import logoImg from '../../assets/logo.png';
import styles from './styles';

export default function Characters(){
  const [characters, setCharacters] = useState([]);
  const [defCharacters, setDefCharacters] = useState([]);
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [render, setRender] = useState(false);
  const [filterText, setFilterText] = useState('');
  const [error, setError] = useState(false);
  const navigation = useNavigation();
  
  const navigateToDetail = (character) => {
    navigation.navigate('Detail',{character})
  }

  const  loadCharacters = async () => {
    if (loading || filterText !== '')
      return;    

    if (total > 0 && defCharacters.length === total)
      return;    

    setLoading(true);

    try{
      const response = await api.get(`people/?page=${page}`);
      setCharacters([...characters,...response.data.results])
      setDefCharacters([...characters,...response.data.results])
      setTotal(response.data.count)
      setPage(page + 1)
      setError(false)
    }
    catch(e){
      setError(true)
    }
    
    setLoading(false)
  }

  const favoriteCharacter = (selected) => { 
    var foundIndex = characters.findIndex(char => char.name === selected.name);
    characters[foundIndex].favorite = true;
    setCharacters(characters);
    setRender(!render);
  }

  const disfavorCharacter = (selected) => { 
    var foundIndex = characters.findIndex(char => char.name === selected.name);
    characters[foundIndex].favorite = false;
    setCharacters(characters);
    setRender(!render);
  }

  const searchCharacter = (e) => {
    setFilterText(e);

    if(e !== '')
      setCharacters(defCharacters.filter(character => character.name.toLowerCase().includes(e.toLowerCase()))); 
    else      
      setCharacters(defCharacters.filter(character => character));
  }

  useEffect(() => {
    setCharacters([])
    loadCharacters();
  },[])

  return(
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.image} source={logoImg}/>
        <Text style={styles.headerText}>
          <Text style={styles.headerTextBold}>{total}</Text> personagens 
        </Text>   
      </View>

      <Text style={styles.title}>Bem-vindo!</Text>
      <Text style={styles.description}>Dê uma olhada nos principais personagens de Star Wars.</Text>

      <View style={styles.search}>
        <Feather name="search" size={16} color="#e02041"></Feather>
        <TextInput style={styles.searchInput} value={filterText} onChangeText={text => searchCharacter(text)}/>
      </View>

      {(characters.length === 0 || error) && !loading ?
        <Text style={styles.warn}>
          {error ?          
            `Houve um problema com a conexão, tente novamente mais tarde!`
          :          
            `Nenhum personagem encontrado!`
          }
        </Text>
      :
        <FlatList 
          testID="listCharacters"
          style={styles.characterList}
          data={characters}
          onEndReached={loadCharacters}
          onEndReachedThreshold={0.5}
          keyExtractor={character => character.url}
          renderItem = {({item:character, index}) => (
            <View style={styles.character} key={index}>
              <View style={styles.cardHeader}>
                <Text style={styles.characterLabel}>Nome:</Text>        
                { character.favorite ?
                  <TouchableOpacity style={styles.detailsButton} onPress={() => disfavorCharacter(character)} aria-label="button-disfavor">                
                    <Feather name="star" size={16} color="#ffca0b"></Feather>
                  </TouchableOpacity>
                :
                  <TouchableOpacity style={styles.detailsButton} onPress={() => favoriteCharacter(character)} aria-label="button-favorite">                
                    <Feather name="star" size={16} color="#898989"></Feather>
                  </TouchableOpacity>
                }      
              </View>
              <Text style={styles.characterValue}>{character.name}</Text>

              <TouchableOpacity style={styles.detailsButton} onPress={() => navigateToDetail(character)} aria-label="button-details">
                <Text style={styles.detailsButtonText}>Ver mais detalhes</Text>
                <Feather name="arrow-right" size={16} color="#e02041"></Feather>
              </TouchableOpacity>
            </View>
          )}
        />
      }

      {loading &&
        <View style={styles.loading}>
          <ActivityIndicator size="small" color="#e82041"/>
        </View> 
      } 

    </View>
  )
}
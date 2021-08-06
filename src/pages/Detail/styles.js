import {StyleSheet} from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  container:{
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: Constants.statusBarHeight + 20,
  },
  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  row:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  image:{
    width: 140,
    height: 70,
  },
  description:{
    fontSize: 16,
    lineHeight: 24,
    color: '#737380',
    paddingTop: 16
  },
  character:{
    padding: 24,
    borderRadius: 8,
    backgroundColor: "#FFF",
    marginBottom: 16,
    marginTop: 16,    
    elevation: 5,
  },
  characterLabel:{
    fontSize: 14,
    color: '#41414d',
    marginTop: 24,
    fontWeight: 'bold',
  },
  characterValue:{
    marginTop: 8,
    fontSize: 15,
    color: '#737380',
  },
  moviesValue:{
    marginTop: 8,
    fontSize: 15,
    color: '#737380',
  }
})
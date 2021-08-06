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
  image:{
    width: 140,
    height: 70,
  },
  headerText:{
    fontSize: 15,
    color: '#737380',
  },
  headerTextBold:{
    fontWeight: 'bold',
  },
  title:{
    fontSize: 30,
    marginBottom: 16,
    marginTop: 16,
    color: '#13131a',    
    fontWeight: 'bold',
  },
  warn:{
    color: '#737380',
    fontSize: 16,
    height: '100%',
    padding: 30,
    marginTop: 100,
    textAlign: 'center'
  },
  description:{
    fontSize: 16,
    lineHeight: 24,
    color: '#737380'
  },
  search:{
    padding: 5,
    borderRadius: 8,
    backgroundColor: "#FFF",
    marginTop: 5,
    marginBottom: 5,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 5,
  },
  searchInput:{
    width: '100%',
    padding: 5,
    margin: 5
  },
  characterList:{
    marginTop: 16,
  },
  character:{
    padding: 24,
    borderRadius: 8,
    backgroundColor: "#FFF",
    marginBottom: 16,
  },
  cardHeader:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  characterLabel:{
    fontSize: 14,
    color: '#41414d',
    fontWeight: 'bold',
  },
  characterValue:{
    marginTop: 8,
    fontSize: 15,
    marginBottom: 24,
    color: '#737380',
  },
  detailsButton:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailsButtonText:{
    color: '#e02041',
    fontSize: 15,
    fontWeight: 'bold'
  },
  loading:{
    padding: 20
  }
})
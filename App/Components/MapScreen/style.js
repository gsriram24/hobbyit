import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  body: {
    flex:1,
  },
  profilePicture: {
    width: 50,
    height:50,
    marginTop:15,
    margin:10,
    borderRadius: 6,
  },
  headerContainer: {
    flex:1,
    alignItems:'center',
    justifyContent:'center' ,
    backgroundColor: 'transparent',
    borderBottomWidth: 1,
    borderBottomColor: "#dadada",
  },
  addInterestText: {
    alignSelf:'center',
    marginTop: 20,
    fontSize: 20,
    fontFamily:'Gibson',
    fontWeight: '100',
    textAlign: 'center',
    color: '#5887f9',
  },
  flatListContainer: {
    flex: 8,

  },
  flatListItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#4c5264',
    alignSelf: 'stretch',
  },
  flatListName: {
    marginTop:15,
    marginLeft:10,
    fontFamily: 'Gibson',
    fontSize: 16,
    textAlign: 'left',
    color: '#4c5264',
  },
  flatListInterests: {

    marginLeft:10,
    fontFamily: 'Gibson',
    fontSize: 12,
    textAlign: 'left',
    color: '#4c5264',
  },
  flatListDistance: {
    marginBottom:10,
    marginLeft:10,
    fontFamily: 'Gibson',
    fontSize: 12,

    color: '#4c5264',
  }
});

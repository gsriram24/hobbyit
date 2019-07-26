import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  body: {
    flex:1,
  },
  headerContainer: {
    flex:1,
    padding: 10,
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
  detailsContainer: {
    flex:8,
    marginTop:5,
    alignSelf:'center',
  },
  interestText: {
    alignSelf:'center',
    marginTop: 40,
    fontSize: 16,
    fontFamily:'Gibson',
    fontWeight: '100',
    textAlign: 'center',
    color: '#4c5264'
  },
  interestInput: {
    alignItems:'center',
    marginTop:10,
    width: 315,
    textAlign:'center',
    fontSize:24,
    opacity:1,
    fontFamily:'Gibson',
    color: '#5887f9',
    borderBottomWidth: 1,
    borderBottomColor: "#dadada",
  },
  gradient: {
    flex:1,
    alignSelf: 'stretch',
    alignItems:'center',
    justifyContent:'center',

  },
  button: {
    flex:1,
    marginTop:20,
    height:50,
    borderRadius:6,
    backgroundColor:'#ffffff',
    alignItems:'center',
    justifyContent:'center',
  },


});

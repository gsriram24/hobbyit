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
    marginTop: 5,
    fontSize: 20,
    fontFamily:'Gibson',
    fontWeight: '100',
    textAlign: 'center',
    color: '#5887f9',
  },
  buttonText: {
    fontSize: 20,
    textAlign: 'center'
  },
  detailsContainer: {
    flex:5,
    marginTop:50,
    alignSelf:'center',
  },
  loginInput: {
    alignItems:'baseline',
    width: 315,
    textAlign:'left',
    fontSize:16,
    fontFamily:'Gibson',
    color: '#4c5264',
    borderBottomWidth: 1,
    borderBottomColor:'#4c526440',
  },
  gradient: {
    borderRadius: 6, 
    flex:1,
    alignSelf: 'stretch',
    alignItems:'center',
    justifyContent:'center',

  },
  button: {
    flex:0.8,
    marginTop:20,
    height:50,
    borderRadius:6,
    backgroundColor:'#ffffff',
    alignItems:'center',
    justifyContent:'center',
  },
  inputName: {
    marginTop:10,
    marginBottom:-10,
    fontFamily: 'Gibson',
    fontSize: 12,
    color:'#bcc5d3',
  },
  registerText: {
    marginTop: 20,
    textAlign:'left',
    fontFamily: 'Gibson',
    fontSize: 14,
    fontWeight: '600',
    color:'#4c5264',
  },

});

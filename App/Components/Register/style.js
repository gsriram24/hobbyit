import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  body: {
    flex:1,
  },
  signInContainer: {
    flex:1,
    padding: 10,
    alignItems:'flex-start',
    justifyContent:'flex-start' ,
    backgroundColor: 'transparent',
  },
  signInText: {
    alignSelf:'center',
    marginTop: 60,
    fontSize: 36,
    fontFamily:'Gibson',
    fontWeight: '100',
    textAlign: 'center',
    color: '#ffffff',
  },

  buttonText: {
    fontSize: 20,
    textAlign: 'center'
  },
  detailsContainer: {
    flex:5,
    marginTop:90,
    alignSelf:'center',
  },
  loginInput: {
    width: 315,
    textAlign:'left',
    fontSize:16,
    fontFamily:'Gibson',
    opacity:0.6,
    color:'#ffffff',
    borderBottomWidth: 1,
    borderBottomColor:'#ffffff40',
  },
  button: {
    marginTop:30,
    width:315,
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
    color:'#ffffff4C',
  },


});

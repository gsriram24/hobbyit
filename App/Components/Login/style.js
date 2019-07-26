import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  body: {
    flex:1,
  },
  signInContainer: {
    flex:1,
    padding: 10,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: 'transparent',
  },
  signInText: {
    marginTop: 50,
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
    flex:4,
    marginTop:90,
    alignSelf:'center',
  },
  loginInput: {
    width: 315,
    textAlign:'center',
    fontSize:16,
    opacity:0.6,
    fontFamily:'Gibson',
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
  forgotPassword: {
    marginTop:10,
    color:'#ffffff4C',
    fontFamily: 'Gibson',
    fontSize: 14,
    textAlign:'center',
  },
  registerText: {
    marginTop: 100,
    textAlign:'center',
    fontFamily: 'Gibson',
    fontSize: 12,
    fontWeight: '600',
    color:'#ffffff',

  }
});

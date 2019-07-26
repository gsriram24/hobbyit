import { StyleSheet } from 'react-native';

export default StyleSheet.create({
body: {
  flex:1,
},

profilePicture: {
  marginTop: 20,
  width: 100,
  height: 100,
  borderRadius: 50,
  alignSelf:'center',
},

nameText: {
  marginTop:30,
  fontFamily: 'Gibson',
  fontSize: 24,
  textAlign: 'center',
  color: '#4c5264',
},
bio: {
  marginTop:30,
  margin:20,
  fontFamily: 'Gibson',
  fontSize: 14,
  textAlign: 'left',
  color: '#4c5264',
  alignSelf: 'center',
},

interestText: {
  marginTop: 50,
  fontFamily: 'Gibson',
  fontSize: 16,
  textAlign: 'center',
  color: '#4c5264',
},
gradient: {
  width:40,
  height: 40,
  borderRadius: 25,
  alignItems:'center',
  justifyContent:'center',

},
button: {
  width:40,
  marginTop:20,
  marginLeft:17,
  height:40,
  borderRadius:25,
  backgroundColor:'#ffffff',
  alignItems:'center',
  justifyContent:'center',
},
});

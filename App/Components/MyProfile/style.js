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
profilePicture: {
  width: 100,
  height: 100,
  borderRadius: 6,
},
profileContainer: {
  marginTop: 20,
  flex: 3,
  alignSelf:'center',
  alignItems: 'center',
  justifyContent: 'center',
},
bioContainer: {
  margin:10,
  flex: 3,
  alignSelf:'center',
  alignItems: 'center',
  justifyContent: 'center',
},
optionsContainer: {
  marginLeft:30,
  margin:10,
  flex: 3,
  alignSelf:'flex-start',
  alignItems: 'flex-start',
},
nameText: {
  marginTop:15,
  fontFamily: 'Gibson',
  fontSize: 24,
  textAlign: 'center',
  color: '#4c5264',
},
bio: {
  margin:10,
  fontFamily: 'Gibson',
  fontSize: 14,
  textAlign: 'left',
  color: '#4c5264',
},
optionText: {
  marginLeft: 15,
  fontFamily: 'Gibson',
  fontSize: 16,
  textAlign: 'left',
  color: '#4c5264',
},
interestText: {
  fontFamily: 'Gibson',
  fontSize: 16,
  textAlign: 'center',
  color: '#4c5264',
},
textContainer: {
  marginTop:15,
  flexDirection: 'row',
}
});

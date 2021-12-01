import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        width:'100%',
      },
    
      header:{
     marginTop:'7%',
     width:'100%',
     alignItems:'center',
     
    
      },
    
      heading:{
    color:'indianred',
    fontWeight:'bold',
    fontSize:20,
      },
      Image:{
height:400,
margin:5
      },
      cardImg: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
      },
      Comments:{
        margin:5
      },
      commentTitle:{
        fontWeight: 'bold',
        fontSize:15,
        color:'indianred'
      },
      commentSubtitle:{

      },


    
    
      
});

export default styles;
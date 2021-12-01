import { StyleSheet } from "react-native";

const styles = StyleSheet.create({

    container: {
        flex: 1,
        width:'100%',
      },
    
      header:{
     marginTop:'7%',
     width:'100%',
     alignItems:'center'
    
      },
    
      heading:{
    color:'indianred',
    fontWeight:'bold',
    fontSize:20,
      },
    
    
      cardsWrapper: {
        marginTop: 10,
        width: '90%',
        alignSelf: 'center',
        
      },
      card: {
        height: 300,
        marginVertical: 10,
        flexDirection: 'column',
        shadowColor: '#999',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.8,
        shadowRadius: 2,
        elevation: 5,
        borderRadius:15
      },
      cardImgWrapper: {
        flex: 3,
      },
      cardImg: {
        height: '100%',
        width: '100%',
        alignSelf: 'center',
        borderRadius: 8,
        borderBottomRightRadius: 0,
        borderTopRightRadius: 0,
      },
      cardInfo: {
        flex: 1,
        padding: 10,
        borderColor: 'white',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
        backgroundColor: '#fff',
      },
      cardTitle: {
        fontWeight: 'bold',
        fontSize:15,
        color:'indianred'
        
        
      },
      cardDetails: {
        fontSize: 12,
        color: '#333',
      },
Comment:{
    flexDirection:'row',
                marginLeft:20
},
});

export default styles;
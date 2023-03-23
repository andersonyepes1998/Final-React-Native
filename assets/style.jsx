import { StyleSheet } from "react-native";
export {styles, stylesView, stylesContenedor,stylesButtones}

const styles = StyleSheet.create({
    container: {
      width:'100%',
      alignItems: 'center',
      justifyContent: 'center',
    }
    });

const stylesView = StyleSheet.create({
    view1: {
      flex: 1,
      backgroundColor:'green',
      alignItems: 'center',
      justifyContent: 'center',
      width:'100%'
    },
    textNotas: {
      fontSize:25,
      fontWeight:"bold"
    },
    textSolo:{
      marginTop:40,
      fontSize:25,
      fontWeight:"bold"
    },
    view2: {
      flex: 5,
      backgroundColor:'white',
      justifyContent: 'center',
      width:'100%',
      marginLeft:20
    },
    textIdentificacion: {
      fontSize:17,
      fontWeight:"bold"
    },
    textInput: {
      
      textAlign: 'center',
      backgroundColor: '#DEDEDE',
      float: 'right',
      marginRight:30,
      borderRadius:5,
      marginBottom:20
    },
    textButtons: {
      color:'black',
      fontWeight:'bold',
    }

  });

  const stylesContenedor = StyleSheet.create({

      contenedor:{
        flexDirection:'row',
        marginTop:50
      },
      contenedorButtons: {
        backgroundColor:'green',
        borderRadius:10,
        width:120,
        padding:9,
        alignItems:'center',
        marginTop:10,
        marginRight: 6
      },
      
  });

  const stylesButtones = StyleSheet.create({

    contenedor:{
      flexDirection:'colum',
      marginTop:50
    },
    contenedorButtons2: {
      backgroundColor:'green',
      borderRadius:10,
      width:120,
      padding:9,
      alignItems:'center',
      marginTop:10,
      marginRight: 6
    },
    
})
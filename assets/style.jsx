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
    textdefiobser:{
      fontSize:17,
      fontWeight:"bold",
      marginTop:8,
    },
    textInput: {
      textAlign: 'center',
      backgroundColor: '#DEDEDE',
      float: 'right',
      marginRight:30,
      borderRadius:5,
      marginBottom:20
    },
    textRespuesta: {
      float:'right',
      color: 'red',
      marginRight:70,
      marginTop:8,
    },
    textButtons: {
      color:'black',
      fontWeight:'bold',
    }

  });

  const stylesContenedor = StyleSheet.create({

      contenedor:{
        flexDirection:'row',
        marginTop:20,
        display:'flex',
        justifyContent:'center'
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
      flexDirection:'row',
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
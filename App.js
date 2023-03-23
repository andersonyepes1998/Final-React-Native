import { useState } from 'react';
import {Text, View, TextInput, TouchableOpacity, Alert  } from 'react-native';
import { styles } from './assets/style';
import { stylesView } from './assets/style';
import { stylesContenedor } from './assets/style';
import { stylesButtones } from './assets/style';

export default function App() {

  const[identificacion,setIdentificacion] = useState('');
  const[nombre,setNombre] = useState('');
  const[asignatura,setAsignatura] = useState('');
  const[nota1,setNota1] = useState('');
  const[nota2,setNota2] = useState('');
  const[nota3,setNota3] = useState('');
  const[mensaje,setmensaje] = useState('');
  const[definitiva,setdefinitiva] = useState('');
  const[observacion,setobservacion] = useState('');
  const[esValido,setesValido] = useState(false);
  const [alumnos, setalumnos] = useState([]);

  // const array = ['002','003'];

  // const unidos = [...identificacion,...array]

  // console.log(unidos);

    // const [datos,setDatos] = useState({
    //   identificacion: '',
    //   nombre: '',
    //   asignatura: '',
    //   nota1: '',
    //   nota2: '',
    //   nota3: '',
    //   definitiva:'',
    //   observacion:'',
    // });

    // const resultadosArreglos = (identificacion,value) => {
    //     setDatos({ ...datos,[identificacion]:value})
    // };

    //Funcion Calcular
    
    let newResult = () =>{

      if (isNaN(identificacion)!=false) {
        setesValido(false)
        setmensaje("La identificacion debe ser númerico.")
      } else if (isNaN(nota1)!=false || isNaN(nota2)!=false || isNaN(nota3)!=false ) {
        setesValido(false)
        setmensaje("Los campos que hacen referencia a las notas deben ser númericos...")
      } else if (nota1<0 || nota2 <0 || nota3<0 ) {
        setesValido(false)
        setmensaje("Los campos que hacen referencia a las notas deben ser positivos...")
      } else if (nota1>5 || nota2 >5 || nota3>5 ) {
        setesValido(false)
        setmensaje("Las notas deben estar entre 0 y 5...")
      } else if (identificacion =="" || nombre =="" || asignatura =="" || nota1=="" || nota2=="" || nota3=="" ) {
        setesValido(false)
        setmensaje("Por favor diligenciar todos los campos...")
      } else{
        let calculoNota = 0;
        calculoNota = ((parseFloat(nota1) +parseFloat(nota2)+parseFloat(nota3))/3).toFixed(2)
        let explicacionNota
        if (calculoNota >= 3) {
          explicacionNota = "Aprueba"
        } else if (calculoNota >= 2 && calculoNota <= 2.99) {
          explicacionNota = "Habilita"
        } else{
          explicacionNota = "Reprueba"
        }
  
        //cambiar el contenido de la variable de estado resultado con la info de calculoNota
        setesValido(true)
        setdefinitiva(calculoNota);
        setobservacion(explicacionNota);
        setmensaje("Operación realizda correctamente.")
      }
      }


    //Funcion Guardar
    let guardarFuncion = () =>{
      let findAlumno = alumnos.find(alumno => alumno.id == identificacion)
        if (findAlumno == undefined) {
          alumnos.push({
            id: identificacion,
            nombre: nombre,
            asignatura: asignatura,
            nota1: nota1,
            nota2: nota2,
            nota3: nota3,
            definitiva: definitiva,
            observacion: observacion
          })
          setesValido(true)
          setmensaje('Se guardo correctamente...')
          console.log(alumnos);
        } else {
          setesValido(false)
          setmensaje('Esta identificacion ya esta registrada')
        }
    }
    
    // Funtion limpiar
  let limpiar = () => {
    setesValido(false)
    setIdentificacion('')
    setNombre('')
    setAsignatura('')
    setNota1('')
    setNota2('')
    setNota3('')
    setdefinitiva('')
    setobservacion('')
    setmensaje('')
  }


  //Function Buscar
  let buscar = () => {
    let findId = alumnos.find(alumno => alumno.id == identificacion)
    if (identificacion == '') {
      setesValido(false)
      setmensaje('El campo identificación es obligatorio.')
    } else {
      if (findId == undefined) {
        setesValido(false)
        setmensaje('Alumno no encontrado en el sistema.')
      } else {
        setesValido(true)
        setmensaje('Alumno encontrado Correctamente.')
        setNombre(findId.nombre)
        setAsignatura(findId.asignatura)
        setNota1(findId.nota1)
        setNota2(findId.nota2)
        setNota3(findId.nota3)
        setdefinitiva(findId.definitiva)
        setobservacion(findId.observacion)
        console.log(findId);
      }
    }
  }

    

  return (
    <View style={styles.container}>

      <View style={stylesView.view1}>
          <Text style={stylesView.textNotas}>Sistemas de Notas</Text>
      </View>

      <Text style={stylesView.textSolo}>Ingresa los siguientes datos</Text>

      <View style={stylesView.view2}>
        <Text style={stylesView.textIdentificacion}>Identificación: 
          <TextInput  
          style={stylesView.textInput}
          onChangeText={identificacion=> setIdentificacion(identificacion)} value = {identificacion}
          // onChangeText={(value) => resultadosArreglos('identificacion',value)}

          />
        </Text>

        <Text style={stylesView.textIdentificacion}>Nombres: 
          <TextInput  
          style={stylesView.textInput}
          onChangeText={nombre=> setNombre(nombre)} value = {nombre}
          // onChangeText={(value) => resultadosArreglos('nombre',value)}
          />
        </Text>
        
        <Text style={stylesView.textIdentificacion}>Asignaturas: 
          <TextInput  
          style={stylesView.textInput}
          onChangeText={asignatura=> setAsignatura(asignatura)} value = {asignatura}
          // onChangeText={(value) => resultadosArreglos('asignatura',value)}
          />
        </Text>

        <Text style={stylesView.textIdentificacion}>Nota Momento 1(30%): 
          <TextInput  
          style={stylesView.textInput}
          onChangeText={nota1=> setNota1(nota1)} value = {nota1}
          // onChangeText={(value) => resultadosArreglos('nota1',value)}
          />
        </Text>

        <Text style={stylesView.textIdentificacion}>Nota Momento 2(35%): 
          <TextInput  
          style={stylesView.textInput}
          onChangeText={nota2=> setNota2(nota2)} value = {nota2}
          // onChangeText={(value) => resultadosArreglos('nota2',value)}
          />
        </Text>

        <Text style={stylesView.textIdentificacion}>Nota Momento 3(35%): 
          <TextInput  
          style={stylesView.textInput}
          onChangeText={nota3=> setNota3(nota3)} value = {nota3}
          // onChangeText={(value) => resultadosArreglos('nota3',value)}
          />
        </Text>

        <Text style={stylesView.textdefiobser}>Definitiva: 
          <Text style={stylesView.textRespuesta}>{definitiva}</Text>
        </Text>

        <Text style={stylesView.textdefiobser}>Observación: 
          <Text style={stylesView.textRespuesta}>{observacion}</Text>
        </Text>

        <Text style={{color: esValido ? 'green' :'red',textAlign:'center',marginTop:10,fontWeight:'bold'}}>{mensaje}</Text>
        
        
        <View style={stylesContenedor.contenedor}>

          <TouchableOpacity style={stylesContenedor.contenedorButtons} onPress={()=>newResult()}>
            <Text style={stylesView.textButtons} >Calcular</Text>
          </TouchableOpacity>

          <TouchableOpacity style={stylesContenedor.contenedorButtons} onPress={()=>guardarFuncion()}>
            <Text style={stylesView.textButtons} >Guardar</Text>
          </TouchableOpacity>

        </View>

        <View style={stylesContenedor.contenedor}>

        <TouchableOpacity style={stylesButtones.contenedorButtons2} onPress={()     =>limpiar()}>
            <Text style={stylesView.textButtons}>Limpiar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={stylesButtones.contenedorButtons2} onPress={()=>buscar()}>
          <Text style={stylesView.textButtons}>Buscar</Text>
        </TouchableOpacity>


        </View>


      </View>

    </View>
  );
}



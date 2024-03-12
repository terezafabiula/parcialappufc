import {View, Text, StyleSheet, SafeAreaView} from 'react-native'

export function SubTitle( ){
  return(
    <View>

      <Text style = {styles. subtitulo}> ALGUNS DOS CURSOS DÍSPONIVEIS </Text>
      <Text style= {styles.cursos} >
        1.Administração. <br/>
        2.Análise e Desenvolvimento de Sistemas. <br/>
        3.Ciências da Computação. <br/>
        4.Ciências Contábeis.<br/>
        5.Dança.<br/>
        6.Direito.<br/>
        7.Educação Física.<br/>
        8.Emfermagem.<br/>
        9.Engenharia Cívil. <br/>
        10.Filosofia. <br/>
        11.História.<br/>
        12.Fisioterapia. <br/>
        13.Jornalismo.<br/>
        14.Letras. <br/>
        15.Medicina. <br/>
        16.Música.<br/>
        17.Odontologia. <br/>
      </Text>
  

    </View>
  )
}


const styles = StyleSheet.create ({
  subtitulo:{
  backgroundColor:"#ed7014",
  fontSize: '20px',
  textAlign: 'center',
  fontWeight: 'bold',
  color:'#ffffff',
  padding:20,
  
  },
  cursos: {
    marginTop: 10,
    marginLeft: 15,

  }
})



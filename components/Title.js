import {View, Text, StyleSheet} from 'react-native'

export function Title( ){
  return(
    <View>

      <Text style = {styles.titulo}> UNIVERSIDADE FEDERAL DO CEARÁ</Text>
      <Text style = {styles.descricao}>  É uma instituição de ensino superior pública brasileira, localizada no Estado do Ceará. A UFC é considerada a melhor universidade das regões Norte e Nordeste.</Text>

    </View>
  )
}

const styles = StyleSheet.create ({
  titulo:{
    backgroundColor: '#22B2ED',
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    color: '#ffffff',
    padding: 20,
  },
  descricao:{
   marginTop: 5,
    marginLeft: 10,
  }
})
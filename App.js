import React, { useState } from 'react'
import {TouchableOpacity, Text, View, StyleSheet, TextInput, Switch } from 'react-native'
import Slider from '@react-native-community/slider'
import { Picker } from '@react-native-picker/picker'

export default function App() {
  const [ selectedSex, setSelectedSex ] = useState(0) 
  const [ nome, setNome ] = useState('')
  const [ idade, setIdade ] = useState('')
  const [ limite, setLimite ] = useState(50)
  const [ ehaluno, setEhAluno] = useState(false)
  const sexs = [ 'Masculino', 'Feminino' ]
  
  
  function renderPicker() {
    return sexs.map((sex, idx) => {
      return(
      <Picker.Item style={ styles.input }
        label={ sex }
        value={ idx }
        key= { idx }
        />)
      })
  }

  function register() {
    if (nome.length < 3 || nome === null) {
      alert('O campo nome deve ter no mínimo 3 caracteres!')
      return false
    }
    else if (idade.length < 1 || idade === null) {
      alert('O campo idade deve ser preenchido!')
      return false
    }
    else if (isNaN(idade)) {
      alert('Idade deve ser um número!')
      return false
    }
    alert(`Cliente: ${nome}\nIdade: ${idade}\nSexo: ${sexs[selectedSex]}
    \nLimite: ${limite.toFixed(0)}\nÉ aluno: "${ehaluno}"`)
  }

  function toggleActive() {
    setEhAluno(!ehaluno)
  }

  return (
      <View style={ styles.container }>
        <TextInput style={ styles.input } placeholder="Digite seu nome..."  onChangeText={ setNome }/>
        <TextInput style={ styles.input } placeholder="Digite sua idade..." onChangeText={ setIdade } />
        <Picker style={ styles.input }
        selectedValue={selectedSex}
        onValueChange={itemValue=> {
          setSelectedSex(itemValue)
        }}>
          
        { renderPicker() }

        </Picker>
        <Text style={ [styles.input, {borderWidth: 0} ]}>Seu Limite:</Text>
        <Slider style={ [ styles.input, {marginTop: -30 }] }
          minimumValue={0}
          maximumValue={1500}
          onValueChange={ setLimite }
        />
        <View style={{ flexDirection: 'row', marginBottom: 30}}>
            <Text style={ { fontSize: 20}}>É aluno?</Text>
            <Switch
              value={ ehaluno }
              onValueChange={ toggleActive }
            >
            </Switch>
        </View>
        <TouchableOpacity style={ styles.btn } onPress={ register }>
          <Text style={{ fontSize: 25, color: '#fff', fontWeight: 'bold' }}>
            Registrar
          </Text>
   
        </TouchableOpacity>
      </View>
    
  )
}


const styles = StyleSheet.create( {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    fontSize: 25,
    height: 70,
    width: 300,
    padding: 10,
    borderWidth: 1,
    margin: 20,
    borderRadius: 20
  },
  btn: {
    borderWidth: 1,
     height: 80,
      width: 300,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 20,
      backgroundColor: '#121212',
      
  }
})
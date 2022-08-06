
import { StyleSheet, Text } from 'react-native';
import { useState } from 'react';
import Container from './components/Container';
import Input from './components/Input';
import Button from './components/Button'
import Message from './components/Message'

export default function App() {
  const [peso, setPeso] = useState('')
  const [altura, setAltura] = useState('')
  const [imc, setImc] = useState('')
  const [type, setType] = useState('')

  const handleClick = () => {
    if(!peso || !altura){
      setType('error')
      setImc('Digite o peso e a altura!')
    }else{
      setType('success')
      const result = Number(peso) / (Number(altura) * Number(altura) )
      setImc(result.toFixed(2))
    }
  }

  return (
    <Container>
      <Text>I M C</Text>
      <Input value={peso} handleChange={(e) => setPeso(e.valueOf())} label='Peso:'/>
      <Input value={altura} handleChange={(e) => setAltura(e.valueOf())} label='Altura:'/>
      <Button handleOnClick={() => handleClick() } nameBtn='Calcular'/>
      <Text style={styles[type]}>{imc}</Text>
    </Container>
  )
}

const styles = StyleSheet.create({
  error: {
      backgroundColor: 'red',
      color: '#fff',
      fontSize: 20,
      paddingHorizontal: 12,
      paddingVertical: 12,
      marginVertical: 10,
      borderRadius: 10,
  },

  success: {
      backgroundColor: 'green',
      color: '#000',
      fontSize: 20,
      paddingHorizontal: 12,
      paddingVertical: 12,
      marginVertical: 10,
      borderRadius: 10,
  }
})
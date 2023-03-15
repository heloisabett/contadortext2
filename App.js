import React from 'react'
import { View } from 'react-native'
import Contador from './src/components/Contador'

export default function App() {
  return (
    <View style={{marginTop:10}}>
      <Contador limite={10} minimo={0}/>
      
    </View>
  )
}


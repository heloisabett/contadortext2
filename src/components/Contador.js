import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

export default class Contador extends Component {

  state = {
    contador: 0
  }

  incrementar() {
    this.setState({ contador: this.state.contador + 1 })
  }

  render() {
    return (
      <View>
        <Text>Contador: {this.state.contador}</Text>
        <Button title="Incrementar" onPress={() => this.incrementar()} />
      </View>
    )
  }
}



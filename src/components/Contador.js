import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

export default class Contador extends Component {

  state = {
    contador: 0
  }

  incrementar() {
    if (this.state.contador < this.props.limite) {
      this.setState({ contador: this.state.contador + 1 })
    }
  }

  decrementar() {
    if (this.state.contador > this.props.minimo) {
      this.setState({ contador: this.state.contador - 1 })
    }
  }
  render() {
    return (
      <View style={{ top: 50 }}>
        <Text>Contador: {this.state.contador}</Text>
        <Button title="Incrementar" onPress={() => this.incrementar()} />
        <Button title="decrementar" onPress={() => this.decrementar()} />
      </View>
    )
  }
}



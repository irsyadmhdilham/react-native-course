import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Button,
  TextInput
} from 'react-native';

import Item from './item'

export default class Home extends React.Component {

  state = {
    todo: [],
    value: ''
  }

  todo = () => {
    const todo = this.state.todo
    return todo.map((val, i) => {
      return (
        <Item
          key={i}
          text={val}
          remove={this.removeItem}
          index={i}
          update={this.update}
        />
      )
    })
  }

  getValue = text => {
    this.setState({
      value: text
    })
  }

  addItem = () => {
    const todo = this.state.todo
    todo.push(this.state.value)
    this.setState({ todo, value: '' })
  }

  removeItem = (index) => {
    const todo = this.state.todo
    todo.splice(index, 1)
    this.setState({ todo })
  }

  update = (index, value) => {
    const todo = this.state.todo
    todo[index] = value
    this.setState({ todo })
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.inputWrapper}>
          <TextInput
            value={this.state.value}
            onChangeText={text => this.getValue(text)}
            placeholder="Type something"
            style={styles.input}
          />
          <Button
            onPress={this.addItem}
            title="add"
            style={styles.button}
          />
        </View>
        <ScrollView>
          {this.todo()}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingTop: 20
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    flex: 2
  },
  button: {
    flex: 1
  }
})

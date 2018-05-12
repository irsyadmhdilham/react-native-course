import React from 'react'
import {
  View,
  Text,
  Button,
  StyleSheet,
  TextInput
} from 'react-native'

export default class Item extends React.Component {

  state = {
    mode: 'normal'
  }

  removeItem = () => {
    this.props.remove(this.props.index)
  }

  getValue = text => {
    this.setState({
      value: text
    })
  }

  update = () => {
    this.props.update(this.props.index, this.state.value)
    this.setState({mode: 'normal'})
  }

  changeEditMode = () => {
    this.setState({mode: 'edit'})
  }

  render() {
    if (this.state.mode === 'normal') {
      return (
        <View style={styles.container}>
          <Text style={styles.text}>{this.props.text}</Text>
          <View style={styles.buttonWrapper}>
            <Button
              title="Edit"
              onPress={this.changeEditMode}
              color="orange"
            />
            <Button
              title="Remove"
              onPress={this.removeItem}
              color="red"
            />
          </View>
        </View>
      )
    } else {
      return (
      <View style={styles.buttonWrapper}>
        <TextInput
          value={this.props.text}
          onChangeText={text => this.getValue(text)}
          style={styles.input}
        />
        <Button
          title="Update"
          onPress={this.update}
        />
      </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  text: {
    color: 'grey',
    fontSize: 16
  },
  buttonWrapper: {
    flexDirection: 'row'
  },
  input: {
    borderWidth: 1,
    borderColor: 'grey',
    flex: 2
  }
})
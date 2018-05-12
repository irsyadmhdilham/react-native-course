import React from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button
} from 'react-native'

export default class Profile extends React.Component {
  render() {
    const { goBack } = this.props.navigation
    return (
      <View style={styles.container}>
        <Text>Profile screen</Text>
        <Button
          onPress={() => goBack()}
          title="Go to home screen"
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

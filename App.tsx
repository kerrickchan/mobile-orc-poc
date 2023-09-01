import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { ExpoCamera } from './components/ExpoCamera';
import { Component } from 'react';
import * as tf from '@tensorflow/tfjs';
import '@tensorflow/tfjs-react-native';

export default class App extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      isTfReady: false,
    };
  }

  async componentDidMount() {
    // Wait for tf to be ready.
    await tf.ready();
    // Signal to the app that tensorflow.js can now be used.
    this.setState({
      isTfReady: true,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <ExpoCamera />
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

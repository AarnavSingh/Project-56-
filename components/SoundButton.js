import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import {Audio} from 'expo-av'


class SoundButton extends React.Component {
   playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: 'https://dight310.byu.edu/media/audio/FreeLoops.com/1/1/BEATBOXING%20PART%20A-19512-Free-Loops.com.mp3' },
      { shouldPlay: true }
    );
  }

  render() {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={this.playSound}>
        <Text
          style={styles.buttonText}>
          Play Sound
        </Text>
      </TouchableOpacity>
    );
  }
}
const styles = StyleSheet.create({
  button: {
    marginTop: -50,
    marginLeft: 50,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 50,
    backgroundColor: 'pink',
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 15,
  }
});

class SoundButton2 extends React.Component {
   playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: 'https://dight310.byu.edu/media/audio/FreeLoops.com/2/2/DnB%20Amen%20Break%203-1083-Free-Loops.com.mp3' },
      { shouldPlay: true }
    );
  }

  render() {
    return (
      <TouchableOpacity
        style={styles2.button}
        onPress={this.playSound}>
        <Text
          style={styles.buttonText}>
          Play Sound
        </Text>
      </TouchableOpacity>
    );
  }
}
const styles2 = StyleSheet.create({
  button: {
    marginTop: 15,
    marginLeft: 50,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 50,
    backgroundColor: 'orange',
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 15,
  }
});
class SoundButton3 extends React.Component {
   playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: 'http://www.sowa.synth.net/poly/sound/whata_.mp3' },
      { shouldPlay: true }
    );
  }

  render() {
    return (
      <TouchableOpacity
        style={styles3.button}
        onPress={this.playSound}>
        <Text
          style={styles.buttonText}>
          Play Sound
        </Text>
      </TouchableOpacity>
    );
  }
}
const styles3 = StyleSheet.create({
  button: {
    marginTop: 20,
    marginLeft: 50,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 50,
    backgroundColor: 'lightblue',
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 15,
  }
});

class SoundButton4 extends React.Component {
   playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: 'http://www.wd7f.com/breakfast/24nov07/sleigh.wav' },
      { shouldPlay: true }
    );
  }

  render() {
    return (
      <TouchableOpacity
        style={styles4.button}
        onPress={this.playSound}>
        <Text
          style={styles.buttonText}>
          Play Sound
        </Text>
      </TouchableOpacity>
    );
  }
}
const styles4 = StyleSheet.create({
  button: {
    marginTop: 10,
    marginLeft: 50,
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 200,
    height: 50,
    backgroundColor: 'lightgreen',
    borderRadius: 50,
  },
  buttonText: {
    fontSize: 15,
  }
});


export default class App extends React.Component {
  render() {
    return (
      <View style={{marginTop:100}}>
        <SoundButton />
        <SoundButton2 />
         <SoundButton3 />
           <SoundButton4 />
      </View>
    );
  }
}
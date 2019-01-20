import React, { Component } from 'react'
import {
  View, Text, ScrollView, Image, TouchableOpacity, StyleSheet
} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: 'blue',
    marginBottom: 10
  },
  text: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center'
  }
});

export default class ImagePickers extends Component {

  constructor() {
    super();
    this.state = {
      image: null,
      images: null
    };
  }

  pickSingle(cropit, circular = false, mediaType) {

    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: cropit,
      cropperCircleOverlay: circular,
      compressImageMaxWidth: 400,
      compressImageMaxHeight: 400,
      compressImageQuality: 0.5,
      compressVideoPreset: 'MediumQuality',
      includeExif: true,
    }).then(image => {
      console.log('received image', image);
      this.setState({
        image: { uri: image.path, width: image.width, height: image.height, mime: image.mime },
        images: null
      });
    }).catch(e => {
      console.log(e);
      Alert.alert(e.message ? e.message : e);
    });
  }

  pickSingleWithCamera(cropping, mediaType = 'photo') {
    ImagePicker.openCamera({
      cropping: cropping,
      width: 500,
      height: 500,
      includeExif: true,
      mediaType,
    }).then(image => {
      console.log('received image', image);
      this.setState({
        image: { uri: image.path, width: image.width, height: image.height, mime: image.mime },
        images: null
      });
    }).catch(e => alert(e));
  }

  renderImage(image) {
    return <Image style={{ width: 300, height: 300, resizeMode: 'contain' }} source={image} />
  }

  pickMultiple() {
    ImagePicker.openPicker({
      multiple: true,
      waitAnimationEnd: false,
      includeExif: true,
      forceJpg: true,
    }).then(images => {
      this.setState({
        image: null,
        images: images.map(i => {
          console.log('received image', i);
          return {uri: i.path, width: i.width, height: i.height, mime: i.mime};
        })
      });
    }).catch(e => alert(e));
  }

  renderAsset(image) {
    if (image.mime && image.mime.toLowerCase().indexOf('video/') !== -1) {
      return this.renderVideo(image);
    }
    return this.renderImage(image);
  }

  render() {
    return (
      <View >
        <ScrollView>
          {this.state.image ? this.renderAsset(this.state.image) : null}
          {this.state.images ? this.state.images.map(i => <View key={i.uri}>{this.renderAsset(i)}</View>) : null}
        </ScrollView>
        <TouchableOpacity onPress={() => this.pickSingleWithCamera(false)} style={styles.button}>
          <Text style={styles.text}>Select Single Image With Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.pickSingleWithCamera(false, mediaType = 'video')} style={styles.button}>
          <Text style={styles.text}>Select Single Video With Camera</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.pickSingleWithCamera(true)} style={styles.button}>
          <Text style={styles.text}>Select Single With Camera With Cropping</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.pickSingle(false)} style={styles.button}>
        <Text style={styles.text}>Select Single</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={this.pickMultiple.bind(this)} style={styles.button}>
        <Text style={styles.text}>Select Multiple</Text>
      </TouchableOpacity>
      </View>
    )
  }
}

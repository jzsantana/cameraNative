import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'
import { useState } from 'react';
import * as ImagePicker from 'expo-image-picker';


export default function App() {
  const [imageG, setImageG] = useState('https://i.pinimg.com/736x/49/8e/ca/498eca19e49ea51a85a6f6c2e9597987.jpg')
  const [imageJ, setImageJ] = useState('https://i.pinimg.com/736x/0d/4a/6c/0d4a6c0d1d6411a7c5a30837d074a1e6.jpg')

  const gallery = async ()=>{
    let result = ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    console.log((await result).assets[0].uri)

    if(!(await result).canceled){
      setImageG ((await result).assets[0].uri)
    }
  }

  const camera = async ()=>{
    let result = ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    })

    console.log((await result).assets[0].uri)

    if(!(await result).canceled){
      setImageJ ((await result).assets[0].uri)
    }
  }

  return (
    <View style={styles.container}>
        <Image source={{uri:(imageG)}} style={styles.img}></Image>
      <Text>Galeria</Text>
      <Pressable
        onPress={gallery}
      >
        <MaterialIcons 
          name='image'
          size={50}
        ></MaterialIcons>
      </Pressable>

      <Image source={{uri:(imageJ)}} style={styles.img}></Image>
      <Pressable
        onPress={camera}
      >
        <MaterialIcons 
          name='camera-alt'
          size={50}
        ></MaterialIcons>
      </Pressable>


    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fae0e4',
    alignItems: 'center',
    justifyContent: 'center',

  },
  img:{
    width: 200,
    height: 200,
    borderRadius: 10,
    borderWidth: .5,
    
  }
});

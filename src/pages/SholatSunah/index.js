import React from 'react';
import { Image, ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native';
import {
  BackgroundSholatsunah,
  Dhuha,
  HeaderSholatsunah,
  Istikharah,
  Tahajud,
  Tahiyatulmesjid,
  Taubah,
} from '../../assets/images';

const SholatSunah = ({ navigation }) => {
  const handleSholatDhuhaButtonClick = () => {
    navigation.navigate('SholatDhuha');
  };
  const handleSholatTahajudButtonClick = () => {
    navigation.navigate('SholatTahajud');
  };
  const handleSholatIstikharahButtonClick = () => {
    navigation.navigate('SholatIstikharah');
  };
  const handleSholatTahiyatulmesjidButtonClick = () => {
    navigation.navigate('SholatTahiyatulmesjid');
  };
  const handleSholatTaubahButtonClick = () => {
    navigation.navigate('SholatTaubah');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={BackgroundSholatsunah} style={styles.background}>
        <View style={styles.header}>
          <Image source={HeaderSholatsunah} style={styles.headerImage} />
        </View>

        <TouchableOpacity onPress={handleSholatDhuhaButtonClick} style={styles.buttonContainer1}>
          <Image source={Dhuha} style={styles.buttonImage1} />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSholatTahajudButtonClick} style={styles.buttonContainer2}>
          <Image source={Tahajud} style={styles.buttonImage2} />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSholatIstikharahButtonClick} style={styles.buttonContainer1}>
          <Image source={Istikharah} style={styles.buttonImage1} />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSholatTahiyatulmesjidButtonClick} style={styles.buttonContainer2}>
          <Image source={Tahiyatulmesjid} style={styles.buttonImage2} />
        </TouchableOpacity>

        <TouchableOpacity onPress={handleSholatTaubahButtonClick} style={styles.buttonContainer1}>
          <Image source={Taubah} style={styles.buttonImageTaubah} />
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  header: {
    justifyContent: 'flex-start',
    marginTop: 2, // Sesuaikan margin atas sesuai kebutuhan
  },

    buttonContainer1: {
    alignItems: 'flex-start',
    marginVertical: 8,
    },
    
  buttonContainer2: {
    alignItems: 'flex-end',
    marginVertical: 10,
  },

    buttonImage1: {
    width: 300,
    height: 65,
  },

    buttonImageTaubah: {
    width: 200,
    height: 65,
  },
  buttonImage2: {
    width: 200,
    height: 70,
  },

});

export default SholatSunah;

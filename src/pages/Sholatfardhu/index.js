import React from 'react';
import { Dimensions, Image, ImageBackground, StyleSheet, TouchableOpacity, View } from 'react-native';
import { ASAR, BackgroundSholatFardhu, DZUHUR, HeaderSholatfardu, INSYA, MAGRIB, SUBUH } from '../../assets/images';

const SholatFardhu = ({ navigation }) => {

  const handleSholatSubuhButtonClick = () => {
    navigation.navigate('SholatSubuh');
  };

  const handleSholatDzuhurButtonClick = () => {
    navigation.navigate('SholatDzuhur');
  };

  const handleSholatAsarButtonClick = () => {
    navigation.navigate('SholatAsar');
  };

  const handleSholatMagribButtonClick = () => { 
    navigation.navigate('SholatMagrib');
  };

  const handleSholatInsyaButtonClick = () => {
    navigation.navigate('SholatInsya');
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={BackgroundSholatFardhu} style={styles.background}>
        <View style={styles.header}>
          <Image source={HeaderSholatfardu} style={styles.headerImage}  />
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity onPress={handleSholatSubuhButtonClick} style={styles.buttonContainer1}>
            <Image source={SUBUH} style={styles.buttonImage1} />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleSholatDzuhurButtonClick} style={styles.buttonContainer2}>
            <Image source={DZUHUR} style={styles.buttonImage2} />
          </TouchableOpacity>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity onPress={handleSholatAsarButtonClick} style={styles.buttonContainer1}>
            <Image source={ASAR} style={styles.buttonImage1} />
          </TouchableOpacity>

          <TouchableOpacity onPress={handleSholatMagribButtonClick} style={styles.buttonContainer2}>
            <Image source={MAGRIB} style={styles.buttonImage2} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity onPress={handleSholatInsyaButtonClick} style={styles.buttonContainer1}>
          <Image source={INSYA} style={styles.buttonImage1} />
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
    resizeMode: 'cover',
  },
  header: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height * 0.20,
    justifyContent: 'flex-start',
    marginVertical: 10,
  },
  headerImage: {
    width: '100%',
    height: '100%',
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
  buttonImage2: {
    width: 200,
    height: 70,
  },
});

export default SholatFardhu;

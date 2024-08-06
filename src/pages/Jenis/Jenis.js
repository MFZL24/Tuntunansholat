import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { Icon, Iconbawah, } from '../../assets/images';
import {
  HeaderJ,
  SholatFardhu,
  SholatSunah,
} from '../../assets/images/Jenis/Index';

const Jenis = ({navigation}) => {
  const handleSholatfardhuButtonClick = () => {
    navigation.navigate('Sholatfardhu');
  };
  const handleSholatSunahButtonClick = () => {
    navigation.navigate('SholatSunah');
  };

  return (
    <View style={styles.page} backgroundColor="#FFD700">
      <View style={styles.contentContainer}>
        <ImageBackground source={Icon} style={styles.IconImage}>
          <View style={styles.header}>
            <Image source={HeaderJ} style={styles.headerImage} />
          </View>
        </ImageBackground>

        <View style={styles.content}>
          <TouchableOpacity
            onPress={handleSholatfardhuButtonClick}
            style={styles.buttonContainer}>
            <Image source={SholatFardhu} style={styles.buttonImage} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleSholatSunahButtonClick}
            style={styles.buttonContainer}>
            <Image source={SholatSunah} style={styles.buttonImage} />
          </TouchableOpacity>
        </View>

        <ImageBackground
          source={Iconbawah}
          style={styles.Iconbawah}></ImageBackground>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  IconImage: {
    width: Dimensions.get('window').width * 1,
    height: Dimensions.get('window').height * 0.3,
  },
  header: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.2,
  },
  headerImage: {
    width: '105%',
    height: '90%',
    left: 0,
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    width: Dimensions.get('window').width * 0.9,
    height: Dimensions.get('window').height * 0.2,
  },
  buttonImage: {
    width: '100%',
    height: '70%',
    top:100,
  },
  Iconbawah: {
    top:100,
    width: Dimensions.get('window').width * 1,
    height: Dimensions.get('window').height * 0.4,
  },
});
export default Jenis
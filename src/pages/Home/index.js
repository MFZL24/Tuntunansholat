import React from 'react';
import {
  Image,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  View
} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp, } from 'react-native-responsive-screen';
import { BackgroundHome, ImageHeader } from '../../assets/images';
import { Gerakan, Jenis, Rukun, about } from '../../assets/images/Home';

const Home = ({navigation}) => {
  const handleRukunButtonClick = () => {
    navigation.navigate('Rukun');
  };

  const handleJenisButtonClick = () => {
    navigation.navigate('Jenis');
  };

  const handleGerakanButtonClick = () => {
    navigation.navigate('Gerakan');
  };

  const handleAboutButtonClick = () => {
    navigation.navigate('About');
  };

  return (
    <View style={styles.page}>
      <ImageBackground source={BackgroundHome} style={styles.background}>
        <View style={styles.header}>
          <Image source={ImageHeader} style={styles.headerImage} />
        </View>

        <View style={styles.content}>
          <TouchableOpacity
            onPress={handleRukunButtonClick}
            style={styles.buttonContainer}>
            <Image source={Rukun} style={styles.buttonImage} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleJenisButtonClick}
            style={styles.buttonContainer}>
            <Image source={Jenis} style={styles.buttonImage} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleGerakanButtonClick}
            style={styles.buttonContainer}>
            <Image source={Gerakan} style={styles.buttonImage} />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={handleAboutButtonClick}
            style={styles.buttonContainerabout}>
            <Image source={about} style={styles.buttonImageabout} />
          </TouchableOpacity>
        </View>
      </ImageBackground>
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
  header: {
    width: wp('105%'), // Lebar 100% dari lebar layar saat ini
    height: hp('20%'), // Tinggi 20% dari tinggi layar saat ini
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    width: wp('100%'), // Lebar 105% dari lebar layar saat ini
    height: hp('18%'), // Tinggi 90% dari tinggi layar saat ini
    right: wp(5), // Margin kanan 10% dari lebar layar saat ini
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonContainer: {
    marginVertical: hp('2%'), // Margin vertikal 2% dari tinggi layar saat ini
    width: wp('50%'), // Lebar 50% dari lebar layar saat ini
  },
  buttonImage: {
    width: wp('99%'), // Lebar 99% dari lebar layar saat ini
    height: hp('15%'), // Tinggi 15% dari tinggi layar saat ini
    left:-120,
  },
  buttonContainerabout: {
    marginVertical: hp('2%'), // Margin vertikal 2% dari tinggi layar saat ini
    width: wp('50%'), // Lebar 50% dari lebar layar saat ini
  },
  buttonImageabout: {
    width: wp('40%'), // Lebar 99% dari lebar layar saat ini
    height: hp('7%'), // Tinggi 15% dari tinggi layar saat ini
    right:90,
    top:50,
  },
});

export default Home;

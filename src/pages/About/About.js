import React from 'react';
import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native';
import { BackgroundSholatFardhu, KotakNiat } from '../../assets/images';
import { HeaderAbout } from '../../assets/images/About/about';


import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';


const About = () => {
  return (
    <View style={styles.page}>
      <ImageBackground
        source={BackgroundSholatFardhu}
        style={styles.background}>
        <View style={styles.header}>
          <Image source={HeaderAbout} style={styles.headerImage} />
        </View>

        
 <View style={styles.imageContainer}>
          <ImageBackground source={KotakNiat} style={styles.imageKotakNiat}>
            <Text style={styles.niatText}>1. Niat Sholat</Text>
            </ImageBackground>
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
    Top: -40,
  },
  header: {
    width: wp('100%'), // Lebar 100% dari lebar layar saat ini
    height: hp('40%'), // Tinggi 20% dari tinggi layar saat ini
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerImage: {
    width: wp('95%'), // Lebar 105% dari lebar layar saat ini
    height: hp('15%'), // Tinggi 90% dari tinggi layar saat ini
    right: wp(4), // Margin kanan 10% dari lebar layar saat ini
    top: -190,
  },
  imageKotakNiat: {
    width: '10%',
    height: '10%',
    width: wp('95%'), // Lebar 105% dari lebar layar saat ini
    height: hp('15%'), // Tinggi 90% dari tinggi layar saat ini
    top:-100,
  },
  niatText: {
    fontSize: 25,
    fontWeight: 'bold',
    fontFamily: 'Knewave',
    textAlign: 'center',
    position: 'absolute',
    top: 0,
    color: '#058D1A',
  },
});

export default About
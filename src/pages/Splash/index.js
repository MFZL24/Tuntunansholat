import React, { useEffect } from 'react';
import { Image, ImageBackground, StyleSheet } from 'react-native';
import { SplashBackground, logo } from '../../assets/images';





const Splash = ({ navigation }) => {
  useEffect(() => {
    // Navigasi ke halaman utama setelah waktu tertentu
    setTimeout(() => {
      navigation.replace('Home');
    }, 5000); // Splash Screen akan ditampilkan selama 3 detik (3000 milidetik)
  }, []);
  return (
  <ImageBackground source={SplashBackground} style={styles.background}>
    <Image source={logo} />
  </ImageBackground>
  )
}

export default Splash
 
const styles = StyleSheet.create({

  background : {
  flex:1 ,
  alignItems: 'center',
  justifyContent: 'center'
  },

    logo : {
    width: 423,
    height: 423, 
    marginBottom: 20,
    }

})
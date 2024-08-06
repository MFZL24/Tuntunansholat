import React from 'react';
import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  View
} from 'react-native';

import { Icon } from '../../assets/images';
import { HeaderGerakan } from '../../assets/images/Gerakan/gerakan';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Gerakan = () => {
  return (
    <ScrollView style={styles.container} backgroundColor="#FFD700">
      <View style={styles.contentContainer}>
        <ImageBackground source={Icon} style={styles.IconImage}>
          <View style={styles.header}>
            <Image source={HeaderGerakan} style={styles.headerImage} />
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundColor: {
    color: '#FFD700',
  },
  contentContainer: {
    paddingBottom: 6000,
    overflowY: 'auto',
  },

  IconImage: {
    width: 450,
    height: 300,
  },
  headerImage: {
    width: windowWidth * 0.99,
    height: windowHeight * 0.2,
    top: -5,
    left:0,
  },
  imageContainer: {
    width: windowWidth * 1.2,
    height: windowHeight * 0.21,
    alignItems: 'right',
    top: -15,
  },
  image: {
    width: '80%',
    height: '100%',
  },
});

export default Gerakan;

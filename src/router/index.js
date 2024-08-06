import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { StyleSheet } from 'react-native';
import {
  About,
  Gerakan,
  Home,
  Jenis,
  Rukun,
  SholatAsar,
  SholatDhuha,
  SholatDzuhur,
  SholatInsya,
  SholatIstikharah,
  SholatMagrib,
  SholatSubuh,
  SholatSunah,
  SholatTahajud,
  SholatTahiyatulmesjid,
  SholatTaubah,
  Sholatfardhu,
  Splash,
} from '../pages';

const Stack = createNativeStackNavigator();



const Router = () => (
  <Stack.Navigator initialRouteName="Splash">
    <Stack.Screen name="Splash" component={Splash} options={{ headerShown: false }} />
    <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
    <Stack.Screen name="Sholatfardhu" component={Sholatfardhu} options={{ headerShown: false }} />
    <Stack.Screen name="SholatSunah" component={SholatSunah} options={{ headerShown: false }} />
    <Stack.Screen name="SholatSubuh" component={SholatSubuh} options={{ headerShown: false }} />
    <Stack.Screen name="SholatDzuhur" component={SholatDzuhur} options={{ headerShown: false }} />
    <Stack.Screen name="SholatAsar" component={SholatAsar} options={{ headerShown: false }} />
    <Stack.Screen name="SholatMagrib" component={SholatMagrib} options={{ headerShown: false }} />
    <Stack.Screen name="SholatInsya" component={SholatInsya} options={{ headerShown: false }} />
    <Stack.Screen name="SholatDhuha" component={SholatDhuha} options={{ headerShown: false }} />
    <Stack.Screen name="SholatTahajud" component={SholatTahajud} options={{ headerShown: false }} />
    <Stack.Screen name="SholatIstikharah" component={SholatIstikharah} options={{ headerShown: false }} />
    <Stack.Screen name="SholatTahiyatulmesjid" component={SholatTahiyatulmesjid} options={{ headerShown: false }} />
    <Stack.Screen name="SholatTaubah" component={SholatTaubah} options={{ headerShown: false }} />
    <Stack.Screen name="Rukun" component={Rukun} options={{ headerShown: false }} />
    <Stack.Screen name="Jenis" component={Jenis} options={{ headerShown: false }} />
    <Stack.Screen name="Gerakan" component={Gerakan} options={{ headerShown: false }} />
    <Stack.Screen name="About" component={About} options={{ headerShown: false }} />

  </Stack.Navigator>
);

export default Router;

const styles = StyleSheet.create({});

import React, {useEffect} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {ImgLogoApp} from '../../assets';
import {colors} from '../../utils/colors';

export default function SplashScreen({navigation}) {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('OnBoarding');
    }, 3000);
  }, []);

  return (
    <View style={styles.Container}>
      <Image source={ImgLogoApp} style={{height: 150, width: 150}} />
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.black,
  },
});

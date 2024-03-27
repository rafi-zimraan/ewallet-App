import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {OnBoarding, SplashScreen} from '../screens';

const Stack = createNativeStackNavigator();

export default function Navigator() {
  //   const [initialRouteName, setInitialRouteName] = useState('SplashScreen');

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        statusBarColor: 'transparent',
        statusBarTranslucent: true,
      }}>
      {/* initialRouteName={initialRouteName} */}
      <Stack.Screen name="SplashScreen" component={SplashScreen} />
      <Stack.Screen name="OnBoarding" component={OnBoarding} />
    </Stack.Navigator>
  );
}

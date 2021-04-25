import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import * as React from 'react';
import {Text} from 'react-native';
import Ionicons from 'react-native-vector-icons/MaterialIcons';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {width} from './src/helpers';
import Home from './src/screens/Home';
import themes from './src/themes';

const Tab = createBottomTabNavigator();

const CommonComponent = () => <Text>Screen</Text>;

export default function Tabs() {
  return (
    <Tab.Navigator
      initialRouteName="Explore"
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          switch (route.name) {
            case 'Home':
              return <Ionicons name="style" size={size} color={color} />;

            case 'Explore':
              return <Ionicons name="favorite" size={size} color={color} />;

            case 'Chat':
              return <Ionicons name="email" size={size} color={color} />;

            case 'Account':
              return <Ionicons name="person" size={size} color={color} />;
          }
        },
      })}
      tabBarOptions={{
        showLabel: false,
        activeTintColor: themes.colors.primary,
        inactiveTintColor: themes.colors.lightBrown,
        style: bottomTabStyle,
      }}>
      <Tab.Screen name="Home" component={CommonComponent} />
      <Tab.Screen name="Explore" component={Home} />
      <Tab.Screen name="Chat" component={CommonComponent} />
      <Tab.Screen name="Account" component={CommonComponent} />
    </Tab.Navigator>
  );
}

const bottomTabStyle = {
  borderTopLeftRadius: 40,
  borderTopRightRadius: 40,
  backgroundColor: Colors.white,
  position: 'absolute',
  bottom: 0,
  padding: 10,
  width,
  height: 70,
  zIndex: 8,
};

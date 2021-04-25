import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from 'react-native/Libraries/NewAppScreen';

const Circle = ({icon, size = 'normal', color, bgColor = Colors.white}) => {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        size === 'normal' ? styles.normal : styles.large,
        {backgroundColor: bgColor},
      ]}>
      <Icon name={icon} color={color} size={size === 'normal' ? 32 : 48} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.white,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.53,
    shadowRadius: 13.97,

    elevation: 21,
  },
  normal: {
    height: 66,
    width: 66,
    borderRadius: 33,
  },
  large: {
    height: 90,
    width: 90,
    borderRadius: 45,
  },
});

export default Circle;

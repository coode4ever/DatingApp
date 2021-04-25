import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {width} from '../helpers';
import themes from '../themes';

const Tag = ({item: {bgColor, title}}) => {
  return (
    <View style={[styles.tag, {backgroundColor: bgColor}]}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  tag: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    width: (width - 10) / 3 - 20,
    padding: 8,
    marginVertical: 10,
    marginHorizontal: 5,
  },
  text: {
    fontSize: 16,
    fontFamily: themes.fonts.B,
    color: themes.colors.mediumBlack,
  },
});

export default Tag;

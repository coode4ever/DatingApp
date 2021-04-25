import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {width} from '../helpers';
import themes from '../themes';

const Card = ({handleClickPhoto, item: {name, love, age, uri}}) => {
  return (
    <TouchableOpacity onPress={handleClickPhoto}>
      <ImageBackground
        style={styles.image}
        imageStyle={styles.img}
        source={uri}
      />
      <View style={styles.info}>
        <Text style={styles.text}>
          {name}, {age}
        </Text>
        <TouchableOpacity>
          {love ? (
            <Icon size={22} color={Colors.white} name="favorite" />
          ) : (
            <Icon size={22} color={Colors.white} name="favorite-border" />
          )}
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  image: {
    width: (width - 20) / 2 - 20,
    height: 250,
    padding: 10,
    marginVertical: 20,
    marginLeft: 20,
  },
  img: {
    borderRadius: 20,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#96948ee3',
    padding: 10,
    marginTop: -62,
    marginLeft: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  text: {
    fontFamily: themes.fonts.M,
    fontSize: 16,
    color: Colors.white,
  },
});

export default Card;

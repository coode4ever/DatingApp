import React from 'react';
import {FlatList, ImageBackground, StyleSheet, Text, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Button, Circle, Tag} from '../components';
import {tags, users, width} from '../helpers';
import themes from '../themes';

const Profile = ({route, navigation}) => {
  const {itemId} = route.params;
  const item = users.find(user => user.id === itemId);
  return (
    <View style={styles.container}>
      <ImageBackground
        source={item.uri}
        style={styles.bg}
        imageStyle={styles.image}
      />
      <View style={styles.icon}>
        <Button
          icon="chevron-left"
          onPress={() => navigation.goBack()}
          bgColor="#dde2e1"
          size={30}
        />
      </View>
      <View style={styles.circleWrapper}>
        <Circle color="#f8605b" icon="clear" />
        <Circle
          size="large"
          icon="favorite"
          bgColor={themes.colors.primary}
          color={Colors.white}
        />
        <Circle color="#8d3ead" icon="star" />
      </View>
      <View style={styles.body}>
        <View style={styles.spaceBetween}>
          <Text style={styles.title}>
            {item.name}, {item.age}
          </Text>
          <Button icon="send" />
        </View>
        <Text style={styles.text}>Graphic Designer</Text>

        <View style={[styles.spaceBetween, styles.paddingV]}>
          <Text style={styles.subTitle}>About</Text>
          <Text style={styles.subText}>Read more</Text>
        </View>
        <Text style={styles.normalText}>
          My name is {item.name} and i enjoy meet new people and finding ways to
          help them have an uplifting experience...
        </Text>
        <View style={[styles.paddingV]}>
          <Text style={styles.subTitle}>Interest</Text>
        </View>
        <FlatList
          data={tags}
          numColumns={3}
          keyExtractor={data => data.id}
          renderItem={data => <Tag {...data} />}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  bg: {
    width,
    height: 220,
  },
  image: {
    borderBottomLeftRadius: 40,
    borderBottomRightRadius: 40,
  },
  circleWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: '10%',
    marginTop: -50,
  },
  icon: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  body: {
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 30,
    fontFamily: themes.fonts.B,
    color: themes.colors.mediumBlack,
  },
  subTitle: {
    fontSize: 18,
    fontFamily: themes.fonts.B,
    color: themes.colors.mediumBlack,
  },
  paddingV: {
    paddingVertical: 15,
  },
  spaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontFamily: themes.fonts.R,
    color: themes.colors.lightBrown,
  },
  subText: {
    fontSize: 16,
    fontFamily: themes.fonts.R,
    color: themes.colors.lightBrown,
  },
  normalText: {
    fontSize: 18,
    fontFamily: themes.fonts.R,
    color: themes.colors.lightBrown,
    lineHeight: 26,
  },
  card: {
    flexWrap: 'wrap',
  },
});

export default Profile;

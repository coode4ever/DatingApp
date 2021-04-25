import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {Button, Card} from '../components';
import {users} from '../helpers';
import themes from '../themes';

const Home = ({navigation}) => {
  const handleClickPhoto = id => {
    navigation.navigate('Profile', {
      itemId: id,
    });
  };
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.spaceBetween}>
          <Text style={styles.title}>Matches</Text>
          <Button icon="notifications" />
        </View>
        <View style={styles.wrapper}>
          <View style={styles.line} />
          <View>
            <Text style={styles.subTitle}>Today</Text>
          </View>
          <View style={styles.line} />
        </View>
      </View>
      <FlatList
        data={users}
        numColumns={2}
        keyExtractor={data => data.id}
        renderItem={data => (
          <Card
            handleClickPhoto={() => handleClickPhoto(data.item.id)}
            {...data}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    flex: 1,
  },
  top: {
    padding: 20,
  },
  spaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 30,
    fontFamily: themes.fonts.B,
    color: themes.colors.mediumBlack,
  },
  wrapper: {
    flexDirection: 'row',
    marginTop: 15,
    alignItems: 'center',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: themes.colors.lightWhite,
  },
  subTitle: {
    width: 50,
    color: themes.colors.lightWhite,
    textAlign: 'center',
    fontFamily: themes.fonts.R,
  },
  card: {
    flexWrap: 'wrap',
  },
});

export default Home;

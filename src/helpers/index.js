import {Dimensions} from 'react-native';

export const {width, height} = Dimensions.get('screen');

export const users = [
  {
    id: 1,
    uri: require('../images/1.jpeg'),
    name: 'Ariel',
    age: 22,
    love: true,
  },
  {
    id: 2,
    uri: require('../images/2.jpeg'),
    name: 'Madelina',
    age: 20,
    love: false,
  },
  {
    id: 3,
    uri: require('../images/3.jpeg'),
    name: 'Jessie',
    age: 20,
    love: false,
  },
  {
    id: 4,
    uri: require('../images/4.jpeg'),
    name: 'Kathy',
    age: 24,
    love: true,
  },
];

export const tags = [
  {
    id: 1,
    title: 'Music',
    bgColor: '#eaefff',
  },
  {
    id: 2,
    title: 'Photo',
    bgColor: '#ffeef9',
  },
  {
    id: 3,
    title: 'Art History',
    bgColor: '#fef0e8',
  },
  {
    id: 4,
    title: 'Design',
    bgColor: '#eaefff',
  },
  {
    id: 5,
    title: 'Art Flim',
    bgColor: '#fef0e8',
  },
  {
    id: 6,
    title: 'Dancing',
    bgColor: '#ffeef9',
  },
];

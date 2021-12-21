import React from 'react';
import {View, Text} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const LoaderIndicator = ({loaderWidth}) => {
  return (
    <View
      style={{
        height: hp('2%'),
        backgroundColor: '#E1E1E2',
        position: 'absolute',
        bottom: 0,
      }}>
      <View
        style={{
          height: hp('2%'),
          width: wp(loaderWidth),
          backgroundColor: '#52BE1E',
        }}
      />
    </View>
  );
};

export default LoaderIndicator;

import React from 'react';
import {SafeAreaView, View, StyleSheet, Image, Text} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import Feather from 'react-native-vector-icons/Feather';

const Header = ({hideScan}) => {
  return (
    <SafeAreaView style={style.container}>
      <View style={style.rowView}>
        <Feather
          name="menu"
          size={30}
          color="#000"
          style={{paddingHorizontal: wp('5%')}}
        />
        <View style={style.imageWrapper}>
          <Image
            style={style.logo}
            source={require('../assets/images_home/CityRide.png')}
            resizeMode="contain"
          />
        </View>
      </View>
      <View style={style.rowView}>
        <Feather
          name="bell"
          size={30}
          style={hideScan && {marginRight: wp('5%')}}
        />
        <View style={style.badge} />
        {!hideScan && (
          <Image
            style={style.ScanLogo}
            source={require('../assets/images_home/qr-code.png')}
            resizeMode="contain"
          />
        )}
      </View>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: hp('12%'),
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  imageWrapper: {
    paddingHorizontal: wp('2%'),
  },
  logo: {
    width: wp('20%'),
  },
  rowView: {
    flexDirection: 'row',
    alignItems: 'center',
    // marginHorizontal: wp('5%'),
  },
  ScanLogo: {
    width: wp('6%'),
    marginHorizontal: wp('5%'),
  },
  badge: {
    width: 10,
    height: 10,
    backgroundColor: '#4AAB1B',
    borderRadius: 10,
    position: 'absolute',
    left: wp('5.75%'),
    top: hp('2%'),
  },
});

export default Header;

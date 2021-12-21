import React from 'react';
import {Text, TouchableOpacity, StyleSheet, View} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
const CurveButton = ({
  customStyle,
  showDownIcon,
  textStyle,
  text,
  children,
  pressed,
}) => {
  return (
    <TouchableOpacity
      onPress={pressed && pressed}
      style={[
        style.curvedButtom,
        {
          ...customStyle,
        },
      ]}>
      <Text style={textStyle}>{text}</Text>
      {showDownIcon && children}
    </TouchableOpacity>
  );
};

const style = StyleSheet.create({
  curvedButtom: {
    height: hp('6%'),
    backgroundColor: '#F6F7F8',
    width: wp('50%'),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: hp('1%'),
  },
});
export default CurveButton;

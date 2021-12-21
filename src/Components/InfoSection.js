import React from 'react';
import {View, Text} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const InfoSection = ({CustomStyle, text, textStyle, children}) => {
  return (
    <View
      style={[
        {
          backgroundColor: '#E5F5DD',
          justifyContent: 'center',
          paddingHorizontal: wp('2%'),
          borderRadius: 20,
          height: hp('3.5%'),
        },
        CustomStyle,
      ]}>
      {children}
      <Text
        style={[
          {
            color: '#52BE1E',
            fontFamily: 'Nunito Sans ExtraBold',
          },
          textStyle,
        ]}>
        {text}
      </Text>
    </View>
  );
};
export default InfoSection;

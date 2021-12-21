import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import InfoSection from './InfoSection';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const TaskHeading = ({
  headingText,
  children,
  spanText,
  textStyle,
  customStyle,
}) => {
  return (
    <View style={style.container}>
      <View style={style.row}>
        <Feather name="chevron-left" color="#52BE1E" size={26} />
        <Text style={style.BoldText}>{headingText}</Text>
      </View>
      <InfoSection
        text={spanText}
        textStyle={textStyle}
        CustomStyle={customStyle}>
        {children}
      </InfoSection>
    </View>
  );
};

export default TaskHeading;

TaskHeading.defaultProps = {
  customStyle: {
    flexDirection: 'row',
    backgroundColor: '#E8E9EB',
    alignItems: 'center',
    width: wp('65%'),
    alignSelf: 'flex-end',
    height: hp('4%'),
  },
  textStyle: {
    fontFamily: 'Nunito Sans SemiBold',
    color: '#41434A',
    marginLeft: wp('2%'),
  },
};

const style = StyleSheet.create({
  BoldText: {
    fontFamily: 'Gilroy ExtraBold',
    fontSize: hp('3%'),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  container: {
    width: wp('70%'),
    marginVertical: hp('4%'),
    marginLeft: wp('4%'),
  },
  customStyle: {
    flexDirection: 'row',
    backgroundColor: '#E8E9EB',
    alignItems: 'center',
    width: wp('65%'),
    alignSelf: 'flex-end',
    height: hp('4%'),
  },
  textStyle: {
    fontFamily: 'Nunito Sans SemiBold',
    color: '#41434A',
    marginLeft: wp('2%'),
  },
});

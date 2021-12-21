import React from 'react';
import {StyleSheet, View} from 'react-native';
import {RangeCalendar} from '@ui-kitten/components';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

const CalendarThemingShowcase = ({range, setRange}) => {
  return (
    <View style={styles.calendarContainer}>
      <RangeCalendar range={range} onSelect={setRange} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  calendarContainer: {
    marginVertical: hp('10%'),
  },
  text: {
    marginVertical: 8,
  },
});

export default CalendarThemingShowcase;

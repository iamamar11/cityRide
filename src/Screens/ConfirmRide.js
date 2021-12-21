import React from 'react';
import {View, Text, StyleSheet, Image, FlatList} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Header from '../Components/Header';
import InfoSection from '../Components/InfoSection';
import CurveButton from '../Components/CurvedButton';
import TaskHeading from '../Components/TaskHeading';
import AntDesign from 'react-native-vector-icons/AntDesign';
import LoaderIndicator from '../Components/LoaderIndicator';

const ConfirmRide = props => {
  const bikeDetials = [
    {feature: 'Max. speed', value: '50', unit: 'km'},
    {feature: 'Battery life', value: '8', unit: 'hrs'},
    {feature: 'Available at', value: '7:00', unit: 'AM'},
  ];

  const PriceCard = () => {
    return (
      <View style={style.priceCard}>
        <Text style={style.price}>$75</Text>
        <Text style={style.total}>Total trip</Text>
        <CurveButton
          pressed={() => props.navigation.push('Payment')}
          customStyle={{backgroundColor: '#52BE1E', borderRadius: 10}}
          text="SELECT"
          textStyle={{
            fontFamily: 'Nunito Sans Black',
            color: '#fff',
            fontSize: hp('1.5%'),
          }}
        />
        <Text style={style.footerInfo}>
          This price include all fees, taxes and insurance
        </Text>
      </View>
    );
  };

  const BikeInfoCard = ({showPrice}) => {
    return (
      <View style={style.card}>
        {showPrice && (
          <>
            <View style={style.deal}></View>
            <Text style={style.deadText}>DEAL</Text>
          </>
        )}
        <Image
          source={require('../assets/images_home/bike-green.png')}
          style={[
            {
              alignSelf: 'center',
            },
            showPrice && {marginTop: -hp('7%')},
          ]}
          resizeMode="contain"
        />
        <View style={style.priceView}>
          <Text style={style.cycleName}>GoCycle GS</Text>
          <InfoSection
            text="$25/hour"
            CustomStyle={{
              backgroundColor: '#F4F5F6',
            }}
            textStyle={{color: '#888989'}}
          />
        </View>

        <View style={{alignItems: 'flex-end'}}>
          <FlatList
            data={bikeDetials}
            scrollEnabled={false}
            horizontal
            renderItem={({item}) => {
              return (
                <View
                  style={{
                    justifyContent: 'center',
                    width: wp('75%') / bikeDetials.length,
                  }}>
                  <Text style={style.listHeading}>{item.feature}</Text>
                  <View style={{flexDirection: 'row', alignItems: 'baseline'}}>
                    <Text style={style.listValue}>{item.value}</Text>
                    <Text style={style.listUnit}>{item.unit}</Text>
                  </View>
                </View>
              );
            }}
          />
        </View>
        {showPrice && <PriceCard />}
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <Header hideScan />
      <TaskHeading
        headingText="Select rides"
        spanText="Departure: Tuesday, 15 Dec, 2020">
        <AntDesign name="calendar" size={18} />
      </TaskHeading>
      <View style={{position: 'absolute', top: hp('29%'), left: -wp('75%')}}>
        <BikeInfoCard />
      </View>
      <BikeInfoCard showPrice />
      <View style={{position: 'absolute', top: hp('29%'), right: -wp('74%')}}>
        <BikeInfoCard />
      </View>
      <LoaderIndicator loaderWidth="50%" />
    </View>
  );
};

const style = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    height: hp('62%'),
    width: wp('80%'),
    marginLeft: 'auto',
    marginRight: 'auto',
    borderRadius: 8,
  },
  deal: {
    width: 0,
    height: 0,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderRightWidth: 90,
    borderTopWidth: 100,
    borderRightColor: 'transparent',
    borderTopColor: '#52BE1E',
    borderTopLeftRadius: 8,
  },
  deadText: {
    color: '#fff',
    fontFamily: 'Nunito Sans ExtraBold',
    fontSize: hp('1.5%'),
    transform: [
      {
        rotate: '-48deg',
      },
    ],
    position: 'absolute',
    top: hp('2.5%'),
    left: wp('2.5%'),
  },
  priceView: {alignItems: 'center', marginVertical: hp('2%')},
  cycleName: {
    fontFamily: 'Gilroy-ExtraBold',
    fontSize: hp('3%'),
    marginBottom: hp('.75%'),
  },
  listHeading: {
    fontFamily: 'Nunito Sans ExtraBold',
    color: '#888989',
    fontSize: hp('1.5%'),
  },

  listValue: {
    fontFamily: 'Gilroy ExtraBold',
    color: '#000',
    fontSize: hp('2.5%'),
  },
  listUnit: {
    fontFamily: 'Gilroy ExtraBold',
    color: '#000',
    fontSize: hp('1.25%'),
    marginLeft: wp('.75%'),
  },
  priceCard: {
    marginTop: hp('3%'),
    height: hp('22%'),
    backgroundColor: '#1F1F1F',
    borderRadius: 20,
    alignItems: 'center',
    paddingTop: hp('2%'),
  },
  price: {
    color: '#fff',
    fontFamily: 'Gilroy ExtraBold',
    fontSize: hp('4.5%'),
  },
  total: {
    color: '#52BE1E',
    fontFamily: 'Gilroy ExtraBold',
    fontSize: hp('1.25%'),
  },
  footerInfo: {
    color: '#C7CAD8',
    fontFamily: 'Nunito Sans Regular',
    fontSize: hp('1.25%'),
  },
});

export default ConfirmRide;

import React, {useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  FlatList,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Header from '../Components/Header';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import InfoSection from '../Components/InfoSection';
import CurveButton from '../Components/CurvedButton';
import CalendarThemingShowcase from '../Components/Calendar';
import moment from 'moment';

const Home = props => {
  const [showModal, setShowModal] = useState(false);
  const [range, setRange] = React.useState({});

  const trip = [{text: 'RoundTrip'}, {text: '2 drivers'}];

  const BackgroundBanner = props => {
    return (
      <View style={{height: '65%'}}>
        <Image
          source={require('../assets/IMG_4653.jpg')}
          style={style.backgroundStyle}
        />
        {props.children}
      </View>
    );
  };
  const LocationMark = () => {
    return (
      <View style={style.locationView}>
        <View style={style.locationLabel}>
          <Fontisto name="bicycle" size={12} style={{}} color="#fff" />
        </View>
        <Text
          style={{fontFamily: 'Nunito Sans Regular', fontSize: hp('1.35%')}}>
          Wimdot Drive Station
        </Text>
      </View>
    );
  };

  const MapPoints = () => {
    return (
      <>
        <View style={style.introContainer}>
          <Text style={style.greeting}>Hello</Text>
          <Text style={style.user}>Mike Hicks</Text>
        </View>
        <View style={style.mapPoint}>
          <Image
            source={require('../assets/images_home/userIcon.png')}
            style={{height: 71, width: 71, alignSelf: 'flex-end'}}
          />
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
            <LocationMark />
            <Image
              source={require('../assets/images_home/location.png')}
              style={{height: 43, width: 29}}
            />
          </View>
        </View>
      </>
    );
  };

  const FromTo = props => {
    return (
      <TouchableOpacity style={{alignItems: 'center'}}>
        <Text style={{fontFamily: 'Nunito Sans ExtraBold', fontSize: hp('2%')}}>
          {props.location}
        </Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Text style={{fontFamily: 'Nunito Sans ExtraBold', color: '#A3A5B0'}}>
            {props.type}
          </Text>
          <Feather name="chevron-down" size={16} />
        </View>
      </TouchableOpacity>
    );
  };

  const PickUpAndDrop = () => {
    return (
      <View style={style.info}>
        <FromTo location="Wimdot Drive" type="FROM" />
        <InfoSection text="120 km" />
        <FromTo location="Neru Bridge" type="TO" />
      </View>
    );
  };

  const BikeCard = () => {
    return (
      <View
        style={{
          paddingVertical: hp('2%'),
          alignItems: 'center',
        }}>
        <Image
          source={require('../assets/images_home/bike-green.png')}
          style={{
            position: 'absolute',
            zIndex: 1,
          }}
          resizeMode="contain"
        />
        <View style={style.bikecardView}>
          <View style={{marginTop: hp('15%')}}>
            <PickUpAndDrop />
            <TripInfo />
          </View>
        </View>
      </View>
    );
  };

  const DateModal = () => {
    return (
      <Modal
        visible={showModal}
        transparent={false}
        onDismiss={() => setShowModal(false)}>
        <View style={style.dateModal}>
          <TouchableOpacity
            onPress={() => setShowModal(false)}
            style={{position: 'absolute', top: hp('4%'), right: wp('6%')}}>
            <Entypo name="cross" size={36} color="#fff" />
          </TouchableOpacity>
          <View style={{top: hp('15%'), alignItems: 'center'}}>
            <Text style={style.dateModalHeading}>Select dates</Text>

            <CalendarThemingShowcase
              range={range}
              setRange={nextRange => setRange(nextRange)}
            />
            <CurveButton
              text="CONFIRM"
              pressed={() => setShowModal(false)}
              textStyle={{color: '#fff', fontFamily: 'Nunito Sans Black'}}
              customStyle={style.confirmButton}
            />
          </View>
        </View>
      </Modal>
    );
  };

  const TripInfo = () => {
    return (
      <View>
        <FlatList
          data={trip}
          horizontal
          scrollEnabled={false}
          contentContainerStyle={{
            justifyContent: 'space-evenly',
            width: wp('88%'),
            marginTop: hp('1%'),
          }}
          renderItem={({item}) => (
            <CurveButton
              customStyle={{width: wp('40%'), borderRadius: 10}}
              showDownIcon
              textStyle={{
                fontFamily: 'Nunito Sans SemiBold',
                color: '#1F1F1F',
                fontSize: hp('1.75%'),
              }}
              text={item.text}>
              <Feather name="chevron-down" size={18} />
            </CurveButton>
          )}
        />
        <CurveButton
          customStyle={{
            width: wp('82%'),
            borderRadius: 10,
            justifyContent: 'space-between',
            paddingHorizontal: wp('4%'),
            alignSelf: 'center',
          }}
          pressed={() => setShowModal(true)}
          showDownIcon
          textStyle={{
            fontFamily: 'Nunito Sans SemiBold',
            color: '#1F1F1F',
            fontSize: hp('1.75%'),
          }}
          text={
            Object.keys(range).length === 0
              ? 'Depart - Return'
              : `${moment(range.startDate).format('DD/MM/YYYY')} - ${moment(
                  range.endDate,
                ).format('DD/MM/YYYY')}`
          }>
          <AntDesign name="calendar" size={20} />
        </CurveButton>
        <CurveButton
          customStyle={{
            width: wp('82%'),
            borderRadius: 10,
            justifyContent: 'center',
            paddingHorizontal: wp('4%'),
            alignSelf: 'center',
            backgroundColor: '#1F1F1F',
          }}
          showDownIcon
          textStyle={{
            fontFamily: 'Nunito Sans Black',
            color: '#FFF',
            fontSize: hp('1.75%'),
          }}
          text="BOOK A BIKE"
          pressed={() => props.navigation.push('ConfirmRide')}
        />
        <Footer />
      </View>
    );
  };

  const Footer = () => {
    return (
      <View style={{marginTop: hp('2%')}}>
        <Image
          source={require('../assets/images_home/banner.png')}
          style={{width: '100%', height: hp('10%')}}
          resizeMode="contain"
        />
        <Text
          style={{
            position: 'absolute',
            fontFamily: 'Nunito Sans SemiBold',
            fontSize: hp('1.6%'),
            color: '#fff',
            top: hp('4%'),
            right: wp('5%'),
          }}>
          Get free rides and promo codes
        </Text>
      </View>
    );
  };

  return (
    <View style={{flex: 1}}>
      <Header />
      {DateModal()}
      <BackgroundBanner>
        <MapPoints />
        <BikeCard />
      </BackgroundBanner>
    </View>
  );
};

const style = StyleSheet.create({
  introContainer: {
    marginLeft: wp('5%'),
    paddingTop: hp('4%'),
  },
  greeting: {
    fontSize: hp('3%'),
    fontFamily: 'Gilroy Light',
    fontWeight: '500',
  },
  user: {
    fontSize: hp('4.25%'),
    fontFamily: 'Gilroy ExtraBold',
  },
  mapPoint: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: wp('5%'),
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  curvedButtom: {
    height: hp('6%'),
    backgroundColor: '#F6F7F8',
    width: wp('50%'),
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginVertical: hp('1%'),
  },
  backgroundStyle: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    top: 0,
    opacity: 0.75,
  },
  locationView: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    marginRight: wp('5%'),
    marginVertical: hp('1%'),
  },
  locationLabel: {
    backgroundColor: '#52BE1E',
    borderRadius: 3,
    paddingHorizontal: 3,
    paddingVertical: 6,
  },
  bikecardView: {
    height: hp('46%'),
    width: wp('88%'),
    backgroundColor: 'white',
    borderRadius: 5,
    marginTop: hp('5.5%'),
  },

  dateModal: {
    backgroundColor: '#000000',
    flex: 1,
    opacity: 0.85,
  },
  dateModalHeading: {
    color: '#fff',
    fontFamily: 'Gilroy-ExtraBold',
    fontSize: hp('4.5%'),
  },
  confirmButton: {
    backgroundColor: '#52BE1E',
    width: wp('80%'),
    borderRadius: 15,
  },
});

export default Home;

import React, {useState} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  Modal,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import Header from '../Components/Header';
import TaskHeading from '../Components/TaskHeading';
import Feather from 'react-native-vector-icons/Feather';
import CurveButton from '../Components/CurvedButton';
import LoaderIndicator from '../Components/LoaderIndicator';
import LinearGradient from 'react-native-linear-gradient';

const Payment = () => {
  const [showModal, setShowModal] = useState(false);
  const cardDetails = [
    {
      color: ['#99DE3C', '#99DE3C'],
      imagePath: require('../assets/images_home/visalogo.png'),
      imageWidth: wp('13%'),
      cardNumber: '1991',
    },
    {
      color: ['#52BE1E', '#52BE1E'],
      imagePath: require('../assets/images_home/paypalLogo.png'),
      imageWidth: wp('22%'),
      style: {
        marginLeft: -wp('6%'),
      },
      cardNumber: '1203',
    },
    {
      color: ['#555555', '#000000'],
      imagePath: require('../assets/images_home/masterCardimg.png'),
      imageWidth: wp('9%'),
      style: {
        marginLeft: -wp('6%'),
      },
      cardNumber: '1805',
    },
  ];

  const options = [
    {
      text: 'Use other payment method',
      iconName: 'credit-card',
    },
    {
      text: 'Add promo codes',
      iconName: 'gift',
    },
  ];
  const Cards = ({color, customStyle, image, imageWidth, cardNumber}) => {
    return (
      <LinearGradient
        colors={color}
        style={[
          {
            height: hp('35%'),
            backgroundColor: color,
            width: wp('35%'),
            borderTopLeftRadius: 30,
            borderBottomLeftRadius: 30,
            backgroundColor: 'red',
          },
          customStyle,
        ]}>
        <View
          style={{
            marginTop: hp('3%'),
            marginLeft: wp('4%'),
            alignItems: 'flex-start',
            height: hp('7%'),
            justifyContent: 'space-evenly',
          }}>
          <Image
            source={image}
            style={{width: imageWidth}}
            resizeMode="contain"
          />
          <Text style={{color: '#fff'}}>
            {'\u2022\u2022\u2022\u2022'} {cardNumber}
          </Text>
        </View>
      </LinearGradient>
    );
  };

  const Options = ({text, iconName}) => {
    return (
      <TouchableOpacity
        style={[
          style.options,
          iconName === 'gift'
            ? null
            : {
                borderTopColor: '#E7E8E9',
                borderTopWidth: 2,
              },
        ]}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Feather name={iconName} size={30} color={'#52BE1E'} />
          <Text style={style.optionText}>{text}</Text>
        </View>
        <View style={{marginLeft: 'auto'}}>
          <Feather name="chevron-right" size={28} />
        </View>
      </TouchableOpacity>
    );
  };

  const ModalOnPay = () => {
    return (
      <Modal
        visible={showModal}
        transparent={true}
        onDismiss={() => setShowModal(false)}>
        <View style={style.modalBackground}>
          <View style={style.modalView}>
            <Image
              source={require('../assets/images_home/bikeBanner.png')}
              resizeMode="cover"
              style={style.modalCover}
            />
            <Text style={style.modalHeading}>Ready to ride!</Text>
            <Text style={style.modalDesc}>
              Congratulation Mike hicks, We hope you enjoy your trip. Please go
              to My trip sectin to find your ruckers and details
            </Text>
            <CurveButton
              pressed={() => setShowModal(false)}
              customStyle={style.curvedButtonCustomStyle}
              text="OKAY"
              textStyle={style.curvedButtonTextStyle}
            />
          </View>
        </View>
      </Modal>
    );
  };

  return (
    <View style={{flex: 1}}>
      <ModalOnPay />
      <Header hideScan />
      <TaskHeading
        headingText="Payment Method"
        spanText="Select Your Payment method"
        customStyle={style.taskHeadingCustomStyle}
        textStyle={style.taskHeadingTextStyle}
      />
      <View style={{alignItems: 'flex-end'}}>
        <FlatList
          data={cardDetails}
          renderItem={({item}) => (
            <Cards
              color={item.color}
              customStyle={item.style}
              image={item.imagePath}
              imageWidth={item.imageWidth}
              cardNumber={item.cardNumber}
            />
          )}
          horizontal
        />
      </View>
      <View style={{alignItems: 'center', marginVertical: hp('3%')}}>
        <FlatList
          data={options}
          renderItem={({item}) => (
            <Options text={item.text} iconName={item.iconName} />
          )}
        />
      </View>
      <CurveButton
        pressed={() => setShowModal(true)}
        customStyle={style.payButtonStyle}
        text="PAY"
        textStyle={style.payButtonTextStyle}
      />
      <LoaderIndicator loaderWidth="100%" />
    </View>
  );
};

const style = StyleSheet.create({
  options: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: hp('1.5%'),
    width: wp('85%'),
    borderBottomColor: '#E7E8E9',
    borderBottomWidth: 2,
  },
  optionText: {
    fontFamily: 'Nunito Sans Bold',
    fontSize: hp('2%'),
    marginLeft: wp('2%'),
  },
  modalBackground: {
    backgroundColor: '#00000090',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    backgroundColor: '#fff',
    width: wp('90%'),
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  modalCover: {
    width: wp('90%'),
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
  },
  modalHeading: {
    fontFamily: 'Gilroy ExtraBold',
    fontSize: hp('5%'),
    marginVertical: hp('3%'),
  },
  modalDesc: {
    fontFamily: 'Gilroy Light',
    fontSize: hp('2%'),
    paddingHorizontal: wp('8%'),
    textAlign: 'center',
    lineHeight: hp('3.25%'),
    color: '#B3B3B3',
  },
  curvedButtonCustomStyle: {
    backgroundColor: '#52BE1E',
    borderRadius: 10,
    width: wp('65%'),
    marginBottom: hp('3%'),
  },
  curvedButtonTextStyle: {
    color: '#fff',
    fontFamily: 'Nunito Sans Black',
    fontSize: hp('1.5%'),
  },
  taskHeadingCustomStyle: {
    paddingHorizontal: '0%',
    marginLeft: wp('3%'),
    marginTop: hp('1%'),
    backgroundColor: 'transparent',
  },
  taskHeadingTextStyle: {
    color: '#41434A',
    fontFamily: 'Gilroy Light',
    fontWeight: '400',
  },
  payButtonStyle: {
    backgroundColor: '#1F1F1F',
    width: wp('70%'),
    borderRadius: 15,
    alignSelf: 'center',
  },
  payButtonTextStyle: {
    color: '#fff',
    fontFamily: 'Nunito Sans Black',
    fontSize: hp('1.75%'),
  },
});

export default Payment;

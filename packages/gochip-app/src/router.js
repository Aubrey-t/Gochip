import {
  createAppContainer,
  createBottomTabNavigator,
  createStackNavigator,
} from 'react-navigation'
import React from 'react'
import { Image, Text, View } from 'react-native'
import { apx } from './utils/device'
import { COLORS, STYLES } from './theme'
import Images from './images/images'
import EnableNfc from './pages/GoChip/EnableNfc'
import DetectNfc from './pages/GoChip/DetectNfc'
import Splash from './pages/Splash/Splash'
import GoChip from './pages/GoChip/GoChip'
import History from './pages/GoChip/History'
import NfcPetDetails from './pages/GoChip/NfcPetDetails'
import Services from './pages/Services/Services'
import ServicesDetail from './pages/Services/ServicesDetail'
import SPCA from './pages/Services/SPCA'
import Passport from './pages/Passport/Passport'
import PetDetails from './pages/Passport/PetDetails'
import AddPetDetails from './pages/Passport/AddPetDetails'

import Community from './pages/Community/Community'
import Me from './pages/Me/Me'
import Messages from './pages/Me/Messages'
import LoginSignUp from './pages/Login/LoginSignUp'
import Login from './pages/Login/Login'
import SignUp from './pages/Login/SignUp'
import SignUpVerificationCode from './pages/Login/SignUpVerificationCode'
import SetPassword from './pages/Login/SetPassword'
import FollowingDetail from './pages/Community/FollowingDetail'
import AddPopular from './pages/Community/AddPopular'
import License from './pages/Passport/License'
import RenewLicense from './pages/Passport/RenewLicense'
import GetLicense from './pages/Passport/GetLicense'
import CancelLicense from './pages/Passport/CancelLicense'
import AddFriends from './pages/Community/AddFriends'
import ScanQRCode from './pages/Community/ScanQRCode'
import AddressBook from './pages/Community/AddressBook'
import CreateGroups from './pages/Community/CreateGroups'
import Chatting from './pages/Community/Chatting'
import Comments from './pages/Services/Comments'
import WriteComments from './pages/Services/WriteComments'
import Donate from './pages/Services/Donate'
import Adopt from './pages/Services/Adopt'
import AdoptDetail from './pages/Services/AdoptDetail'

const TabNavigate = createBottomTabNavigator(
  {
    GoChip,
    Services,
    Passport,
    Community,
    Me,
  },
  {
    // initialRouteName: 'Services',
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused }) => {
        const { routeName } = navigation.state
        // You can return any component that you like here!
        const textColor = focused ? '#0E90FD' : COLORS.text384953
        const icon = Images[`tab${routeName}${focused ? 'Selected' : 'Normal'}`]
        return (
          <View
            style={{
              height: apx(49),
              width: apx(376 / 5),
              marginBottom: apx(20),
              ...STYLES.center,
              backgroundColor: 'white',
              borderTopLeftRadius: routeName === 'GoChip' ? apx(15) : 0,
              borderTopRightRadius: routeName === 'Me' ? apx(15) : 0,
              // borderTopWidth:1,
              // borderLeftWidth: routeName === 'GoChip' ? 1 : 0,
              // borderRightWidth: routeName === 'Me' ? 1 : 0,
              // borderColor:'#dcdcdc'
            }}
          >
            <Image
              source={icon}
              resizeMode="contain"
              style={{ width: apx(23), height: apx(23) }}
            />
            <Text style={{ color: textColor, fontSize: apx(10) }}>
              {routeName}
            </Text>
          </View>
        )
      },
    }),
    tabBarOptions: {
      showLabel: false,
      showIcon: true,
      style: {
        height: apx(49),
        marginBottom: apx(-10),
        backgroundColor: 'transparent',
      },
    },
    lazy: true,
  }
)

const RootNavigate = createStackNavigator(
  {
    Tab: TabNavigate,

    Splash,

    // Login
    LoginSignUp,
    Login,
    SignUp,
    SignUpVerificationCode,
    SetPassword,

    // GoChip
    DetectNfc: {
      screen: DetectNfc,
      navigationOptions: {
        gesturesEnabled: false,
      },
    },
    EnableNfc,
    History,
    PetDetails,
    NfcPetDetails,
    AddPetDetails,
    CreateGroups,

    // Services
    ServicesDetail,
    SPCA,
    Comments,
    WriteComments,
    Donate,
    Adopt,
    AdoptDetail,

    // Passport
    License,
    GetLicense,
    RenewLicense,
    CancelLicense,

    // Community
    FollowingDetail,
    AddPopular,
    AddFriends,
    ScanQRCode,
    AddressBook,
    Chatting,

    // Me
    Messages,
  },
  {
    headerMode: 'none',
    initialRouteName: 'Splash',
    // initialRouteParams:{
    //   title:'aaa'
    // },
  }
)

const RouterContainer = createAppContainer(RootNavigate)
export default RouterContainer

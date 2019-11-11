import { StyleSheet } from 'react-native'
import { apx, deviceWidth, scaleSize } from '../utils/device'

export const COLORS = {
  white: '#FFFFFF',
  blue: '#3C83FA',
  red: '#F8656D',
  yellow: '#FFC719',
  orangeRed: '#FF6C00',
  lightPurple: '#B819FF',

  themeColors: '#F8BA12',

  textBlack: '#101010',

  transparentText: 'rgba(255, 255, 255, 0.5)',

  textGray: '#030303',

  textPrimary: '#333333',
  textSecondary: '#999999',
  textWarn: '#f8BA12',
  textDanger: '#FF364F',
  textSegment: '#e4e4e4',
  textBg: '#f5f5f5',

  text999999: '#999999',

  text333333: '#333333',

  text384953: '#384953',
  text9b9b9b: '#9B9B9B',

  placeholderColor: '#888888',

  backgroundColor: '#FFFFFF',

  textBG: '#F5F5F5',

  meMessages: '#0E90FD',
  meDraft: '#7098DA',
  meSetting: '#6FB6FF',
  meHelp: '#49DEC9',
  meAboutUs: '#87E8DE',
}

export const FONTSIZE = {
  // default fontsize

  tabIcon: 22,
  textFont: scaleSize(14),

  headerText: scaleSize(18),

  placeholderFont: scaleSize(13),

  // prodcut

  // portforlio

  titleText: 20,

  // me screen

  formInput: 25,
}

export const PUB_STYLE = {
  headerLeftStyle: { marginLeft: 15, height: 21, width: 12 },
  headerStyle: {
    borderBottomWidth: 2,
    borderBottomColor: '#CBCBCB',
    marginLeft: 10,
    marginRight: 10,
  },
  titleStyle: {
    color: '#333333',
    fontSize: 15,
    fontWeight: '400',
    fontFamily: 'Helvetica',
  },
  boxShadowSetting: {
    color: '#000',
    border: 10,
    radius: 20,
    opacity: 0.05,
    x: 1,
    y: 1,
    width: deviceWidth * 0.92,
    height: 112,
    style: { marginVertical: 0, marginTop: 20 },
  },
}

export const FONT = {
  Family: 'Helvetica',
}

export const STYLES = StyleSheet.create({
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  popupWindow: {
    zIndex: 999,
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 0,
    top: 0,
    backgroundColor: 'rgba(0,0,0,0.6)',
  },
  inputContainer: {
    borderRadius: apx(3),
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: 'rgba(0,0,0,0.15)',
    paddingHorizontal: apx(10),
    justifyContent: 'center',
    height: apx(35),
  },
})

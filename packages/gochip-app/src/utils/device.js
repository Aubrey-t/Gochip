import { Dimensions, PixelRatio, Platform, StatusBar } from 'react-native'

// iPhoneX
const X_WIDTH = 375
const X_HEIGHT = 812

const { width, height } = Dimensions.get('window')

export function isIPhoneX() {
  return (
    Platform.OS === 'ios' &&
    ((height >= X_HEIGHT && width >= X_WIDTH) ||
      (height >= X_WIDTH && width >= X_HEIGHT))
  )
}

export function isIPhone() {
  return Platform.OS === 'ios'
}

export const metrics = {
  iOSStatusBarHeight: isIPhoneX() ? 44 : 20,
  // statusBarHeight: isIPhone()
  //   ? isIPhoneX()
  //     ? 44
  //     : 20
  //   : StatusBar.currentHeight,
  // navBarHeight:
  //   (isIPhone() ? (isIPhoneX() ? 44 : 20) : StatusBar.currentHeight) + 44,
}

const dp2px = dp => PixelRatio.getPixelSizeForLayoutSize(dp)
// const px2dp = px => PixelRatio.roundToNearestPixel(px)
// UI design size
const designSize = { designWidth: 375, designHeight: 667 }

const pxRatio = PixelRatio.get()
// const { width, height } = Dimensions.get('window')
const deviceWidth = width

const deviceHeight = height

const WIDTH = dp2px(deviceWidth)
// const HEIGHT = dp2px(height);

const designScale = designSize.designWidth / WIDTH
// height = height*design_scale

const scale = 1 / pxRatio / designScale

function scaleSize(px) {
  return px / scale
}

function changeIcon(params) {
  let value = ''
  switch (params) {
    case 'CNY':
      value = '¥'
      break
    case 'USD':
      value = '$'
      break
    case 'EUR':
      value = '€'
      break
    default:
      value = '¥'
      break
  }
  return value
}

export const currencyMap = {
  CNY: 'zh_CN',
  USD: 'en_US',
  KRW: 'ko_KR',
}

const getStatusBarHeight = () => {
  if (Platform.OS === 'ios') {
    return isIPhoneX() ? 40 : 20
  }
  return Platform.Version >= 21 ? StatusBar.currentHeight : 0
}

const statusBarHeight = getStatusBarHeight()

export const apx = (size = 0) => (deviceWidth / 375) * size
export const apx750 = (size = 0) => (deviceWidth / 750) * size

export { scaleSize, deviceWidth, deviceHeight, changeIcon, statusBarHeight }

import ReactNative from 'react-native'
import I18n from 'react-native-i18n'
// import en from './en.json'
// import zh from './zh.json'
// import WalletUtils from '../utils/wallet'
import en from './en'

I18n.fallbacks = true

I18n.translations = {
  en,
}

const currentLocale = I18n.currentLocale()

export const isRTL = currentLocale.indexOf('zh') === 0

ReactNative.I18nManager.allowRTL(isRTL)

export function strings(name, params = {defaultValue: 'MissKey'}) {
  return I18n.t(name, params)
}

// $t(network.main)

export default I18n

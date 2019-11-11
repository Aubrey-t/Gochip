// import Storage from 'react-native-storage'
import AsyncStorage from '@react-native-community/async-storage'

const keys = {
  PET_STATUS: 'pet_status',
}

function clear() {
  return AsyncStorage.clear()
}

function getAllKeys() {
  return AsyncStorage.getAllKeys()
}

function get(key, defaultValue = null) {
  return AsyncStorage.getItem(key).then(value =>
    value !== null ? JSON.parse(value) : defaultValue
  )
}

function set(key, value) {
  return AsyncStorage.setItem(key, JSON.stringify(value))
}

function getString(key, defaultValue = '') {
  return AsyncStorage.getItem(key).then(value =>
    value !== null ? value : defaultValue
  )
}

function setString(key, value) {
  return AsyncStorage.setItem(key, value)
}

function remove(key) {
  return AsyncStorage.removeItem(key)
}

// function multiGet(...keys) {
//   return AsyncStorage.multiGet([...keys]).then(stores => {
//     const data = {}
//     stores.forEach((result, i, store) => {
//       data[store[i][0]] = JSON.parse(store[i][1])
//     })
//     return data
//   })
// }
//
// function multiRemove(...keys) {
//   return AsyncStorage.multiRemove([...keys])
// }

// const store = new Storage({
//   size: 20000,
//   storageBackend: AsyncStorage,
//   defaultExpires: null,
// })

export default {
  keys,
  clear,
  get,
  set,
  getString,
  setString,
  remove,
  // multiGet,
  // multiRemove,
  // store,
  getAllKeys,
}

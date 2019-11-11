import React, { useEffect } from 'react'
import { Provider } from '@ant-design/react-native'
import { StatusBar } from 'react-native'
import RouterContainer from './router'
import GlobalNavigation from './utils/GlobalNavigation'
import { checkForUpdate, sync } from './utils/codepush'

console.disableYellowBox = true

const App = () => {
  useEffect(() => {
    if (__DEV__) return
    sync()
    checkForUpdate()
  })

  return (
    <Provider>
      <StatusBar
        animated
        translucent
        barStyle="dark-content"
        backgroundColor="rgba(0,0,0,0)"
      />
      <RouterContainer
        ref={navigatorRef => {
          GlobalNavigation.setTopLevelNavigator(navigatorRef)
        }}
      />
    </Provider>
  )
}

export default App

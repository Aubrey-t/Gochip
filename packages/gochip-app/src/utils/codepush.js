import codePush from 'react-native-code-push'
import { Toast, Portal } from '@ant-design/react-native'

export const checkForUpdate = async () => {
  try {
    const update = await codePush.checkForUpdate()
    console.log('[code push] update', update)
    return update
  } catch (error) {
    console.log('[code push] check upadte:', error)
    return null
  }
}

export const sync = () => {
  codePush.sync(
    {
      installMode: codePush.InstallMode.IMMEDIATE,
      updateDialog: {
        title: 'An update is available!',
        appendReleaseDescription: true,
        descriptionPrefix: '\n\nChange log:\n',
      },
    },
    sycnStatus => {
      console.log('sycnStatus', sycnStatus)
    },
    progress => {
      console.log('downloadProgressCallback', progress.receivedBytes)
      const status = (
        (progress.receivedBytes / progress.totalBytes) *
        100
      ).toFixed(2)
      const key = Toast.loading(`${status} %`, 0)
      if (progress.totalBytes === progress.receivedBytes) {
        Portal.remove(key)
      }
    }
  )
}

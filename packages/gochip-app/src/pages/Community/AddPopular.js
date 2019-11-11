import React from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Flex } from '@ant-design/react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import SYImagePicker from 'react-native-syan-image-picker'
import { strings } from '../../locales/i18n'
import { STYLES } from '../../theme'
import Container from '../../components/Container'
import TitleBar from '../../components/TitleBar'
import { apx } from '../../utils/device'
import SvgIcon from '../../components/SvgIcon'
import GlobalNavigation from '../../utils/GlobalNavigation'
import Radio from '../../components/Radio'

export default class AddPopular extends React.Component {
  state = {
    publishType: 0,
    photos: [],
  }

  handleOpenImagePicker = async () => {
    try {
      const photos = await SYImagePicker.asyncShowImagePicker({
        imageCount: 9,
        isRecordSelected: true,
        isCrop: false,
        showCropCircle: false,
        quality: 100,
        compress: true,
        enableBase64: false,
      })
      this.setState({ photos })
    } catch (err) {
      // 取消选择，err.message为"取消"
      console.log(err)
    }
  }

  render = () => (
    <Container>
      <TitleBar
        title={strings('community.new')}
        renderLeft={() => (
          <TouchableOpacity
            style={{
              height: apx(44),
              paddingHorizontal: apx(16),
              ...STYLES.center,
            }}
            onPress={() => {
              GlobalNavigation.goBack()
            }}
          >
            <Image
              source={require('../../images/close_icon_normal.png.png')}
              style={{ width: apx(23), height: apx(23) }}
            />
          </TouchableOpacity>
        )}
        renderRight={() => (
          <TouchableOpacity
            style={{
              width: apx(70),
              height: apx(33),
              borderRadius: apx(17),
              marginRight: apx(20),
              backgroundColor: '#05CCF5',
              ...STYLES.center,
            }}
            onPress={() => {
              this.props.navigation.goBack()
            }}
          >
            <Text
              style={{ color: '#fff', fontSize: apx(11), fontWeight: '500' }}
            >
              {strings('publish')}
            </Text>
          </TouchableOpacity>
        )}
      />
      <KeyboardAwareScrollView
        contentContainerStyle={{
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'flex-start',
          paddingVertical: apx(18),
          paddingHorizontal: apx(20),
        }}
      >
        <View
          style={{
            width: apx(335),
            height: apx(200),
            borderRadius: apx(5),
            backgroundColor: 'rgba(241,248,255,1)',
            padding: apx(10),
            alignItems: 'flex-end',
          }}
        >
          <TextInput
            placeholder={strings('community.publishPlaceholder')}
            multiline
            maxLength={300}
            style={{ flex: 1, alignSelf: 'stretch', textAlignVertical: 'top' }}
          />
          <Text style={{ fontSize: apx(11), color: '#9b9b9b' }}>
            {strings('community.limit300Words')}
          </Text>
        </View>

        <Flex style={{ marginTop: apx(14) }} wrap="wrap">
          {this.state.photos.map((img, index) => (
            <TouchableOpacity
              style={{
                marginRight: index % 4 !== 3 ? apx((335 - 80 * 4) / 3) : 0,
                marginBottom: apx((335 - 80 * 4) / 3),
              }}
              onPress={() => this.handleOpenImagePicker()}
            >
              <Image
                key={index.toString()}
                source={img}
                style={{
                  width: apx(80),
                  height: apx(80),
                  ...STYLES.center,
                  backgroundColor: 'red',
                  borderRadius: apx(5),
                }}
              />
            </TouchableOpacity>
          ))}
          {this.state.photos.length < 9 && (
            <TouchableOpacity
              style={{
                backgroundColor: 'rgba(241,248,255,1)',
                width: apx(80),
                height: apx(80),
                ...STYLES.center,
                borderRadius: apx(5),
              }}
              onPress={() => this.handleOpenImagePicker()}
            >
              <SvgIcon icon="add" size={apx(23)} />
            </TouchableOpacity>
          )}
        </Flex>

        <TouchableOpacity
          style={{ marginTop: apx(50) }}
          onPress={() => this.setState({ publishType: 0 })}
        >
          <Flex>
            <Radio
              checked={this.state.publishType === 0}
              onChange={() => this.setState({ publishType: 0 })}
            />
            <Text
              style={{
                marginLeft: apx(13),
                fontSize: apx(13),
                color: '#384953',
              }}
            >
              {strings('community.public')}
            </Text>
          </Flex>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginTop: apx(18) }}
          onPress={() => this.setState({ publishType: 1 })}
        >
          <Flex>
            <Radio
              checked={this.state.publishType === 1}
              onChange={() => this.setState({ publishType: 1 })}
            />
            <Text
              style={{
                marginLeft: apx(13),
                fontSize: apx(13),
                color: '#384953',
              }}
            >
              {strings('community.onlyVisible')}
            </Text>
          </Flex>
        </TouchableOpacity>
      </KeyboardAwareScrollView>
    </Container>
  )
}

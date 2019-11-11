import React from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { Flex } from '@ant-design/react-native'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import SYImagePicker from 'react-native-syan-image-picker'
import { strings } from '../../locales/i18n'
import { COLORS, STYLES } from '../../theme'
import Container from '../../components/Container'
import TitleBar from '../../components/TitleBar'
import { apx } from '../../utils/device'
import SvgIcon from '../../components/SvgIcon'
import StarRate from '../../components/StarRate'

export default class WriteComments extends React.Component {
  state = {
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
        title={strings('services.writeComments')}
        theme="white"
        renderRight={() => (
          <TouchableOpacity
            style={{
              width: apx(70),
              height: apx(33),
              borderRadius: apx(17),
              marginRight: apx(20),
              backgroundColor: '#0E90FD',
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
        <Flex
          style={{
            width: apx(335),
            height: apx(83),
            backgroundColor: '#fff',
          }}
        >
          <Image
            source={require('../../images/Mock/services_avatar_1.png')}
            style={{
              width: apx(65),
              height: apx(65),
              marginBottom: apx(-6),
              marginLeft: apx(-6),
            }}
          />
          <View
            style={{
              height: apx(45),
              marginLeft: apx(5),
              justifyContent: 'space-between',
            }}
          >
            <Text
              style={{
                fontSize: apx(13),
                color: COLORS.text384953,
                fontWeight: '500',
              }}
            >
              Veterinarians A
            </Text>
            <Flex align="center">
              <Text
                style={{
                  fontSize: apx(13),
                  color: COLORS.text384953,
                  fontWeight: '500',
                  marginRight: apx(12),
                }}
              >
                {strings('services.rate')}
              </Text>
              <StarRate rate={4} />
            </Flex>
          </View>
        </Flex>

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
      </KeyboardAwareScrollView>
    </Container>
  )
}

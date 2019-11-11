import React from 'react'
import {
  FlatList,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native'
import { Flex } from '@ant-design/react-native'
import Container from '../../components/Container'
import TitleBar from '../../components/TitleBar'
import { apx } from '../../utils/device'
import { STYLES } from '../../theme'
import SvgIcon from '../../components/SvgIcon'

export default class Chatting extends React.Component {
  state = {
    sendMsg: '',
    dataList: [
      {
        avatar: require('../../images/Mock/communiy_avatar_1.png'),
        name: 'Leo Zhang',
        msg: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna wirl aliqua. Up exlaborum incididunt quis nostrud exercitatn.`,
        myself: false,
      },
      {
        avatar: require('../../images/Mock/communiy_avatar_2.png'),
        name: 'Couple',
        msg: `CELL 2.0 is an upgraded version of CELL, a furniture system based on solid wood screw connection and combination.`,
        myself: true,
      },
    ],
  }

  constructor(props) {
    super(props)
    this.flatList = null
  }

  render = () => (
    <Container>
      <TitleBar
        title="Montreal Dogs Owners"
        renderRight={() => (
          <TouchableOpacity
            style={{
              height: apx(44),
              paddingHorizontal: apx(16),
              ...STYLES.center,
            }}
            onPress={() => {}}
          >
            <SvgIcon
              icon="more_icon_white.png"
              size={apx(23)}
              style={{ transform: [{ rotate: '90deg' }] }}
            />
          </TouchableOpacity>
        )}
      />
      <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <FlatList
          ref={ref => {
            this.flatList = ref
          }}
          data={this.state.dataList}
          style={{ alignSelf: 'stretch' }}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Flex
              align="start"
              style={{ paddingHorizontal: apx(20), marginVertical: apx(9) }}
            >
              {!item.myself ? (
                <Image
                  source={item.avatar}
                  style={{
                    width: apx(38),
                    height: apx(38),
                    borderRadius: apx(13),
                  }}
                />
              ) : (
                <View
                  style={{
                    width: apx(38),
                    height: apx(38),
                  }}
                />
              )}
              <View
                style={{
                  flex: 1,
                  backgroundColor: '#fff',
                  borderBottomLeftRadius: item.myself ? apx(20) : 0,
                  borderTopRightRadius: item.myself ? apx(20) : 0,
                  borderTopLeftRadius: item.myself ? 0 : apx(20),
                  borderBottomRightRadius: item.myself ? 0 : apx(20),
                  marginHorizontal: apx(11),
                  paddingHorizontal: apx(15),
                  paddingVertical: apx(13),
                }}
              >
                <Text
                  style={{
                    flex: 1,
                    color: '#384953',
                    fontSize: apx(13),
                  }}
                >
                  {item.msg}
                </Text>
              </View>

              {item.myself ? (
                <Image
                  source={item.avatar}
                  style={{
                    width: apx(38),
                    height: apx(38),
                    borderRadius: apx(13),
                  }}
                />
              ) : (
                <View
                  style={{
                    width: apx(38),
                    height: apx(38),
                  }}
                />
              )}
            </Flex>
          )}
          ItemSeparatorComponent={() => <View style={{ height: apx(18) }} />}
        />
        <Flex
          style={{
            backgroundColor: '#fff',
            height: apx(49),
            paddingHorizontal: apx(20),
          }}
        >
          <SvgIcon icon="yy_icon_default.png" size={apx(23)} />
          <TextInput
            style={{
              flex: 1,
              height: apx(35),
              marginHorizontal: apx(13),
              paddingHorizontal: apx(11),
              borderRadius: apx(3),
              borderWidth: StyleSheet.hairlineWidth,
              borderColor: 'rgba(0,0,0,0.15)',
            }}
            returnKeyType="send"
            value={this.state.sendMsg}
            onFocus={() => {
              setTimeout(() => {
                this.flatList.scrollToEnd()
              }, 200)
            }}
            onChangeText={msg => this.setState({ sendMsg: msg })}
            blurOnSubmit={false}
            onSubmitEditing={() => {
              this.state.dataList.push({
                avatar: require('../../images/Mock/communiy_avatar_2.png'),
                name: 'Couple',
                msg: this.state.sendMsg,
                myself: true,
              })
              this.state.sendMsg = ''
              this.setState({})
              setTimeout(() => {
                this.flatList.scrollToEnd()
              }, 200)
            }}
          />
          <SvgIcon icon="bq_icon_default.png" size={apx(23)} />
          <SvgIcon
            icon="tanjia_icon_default.png"
            size={apx(23)}
            style={{ marginLeft: apx(11) }}
          />
        </Flex>
      </KeyboardAvoidingView>
    </Container>
  )
}

import React from 'react'
import { FlatList, Image, Text, TouchableOpacity, View } from 'react-native'
import { Flex } from '@ant-design/react-native'
import { strings } from '../../locales/i18n'
import Container from '../../components/Container'
import TitleBar from '../../components/TitleBar'
import { apx } from '../../utils/device'
import SearchBar from '../../components/SearchBar'
import { COLORS, STYLES } from '../../theme'
import CheckBox from '../../components/CheckBox'

export default class CreateGroups extends React.Component {
  state = {
    dataList: [
      {
        avatar: require('../../images/Mock/communiy_avatar_1.png'),
        name: 'Leo Zhang',
        isChecked: false,
      },
      {
        avatar: require('../../images/Mock/communiy_avatar_2.png'),
        name: 'Couple',
        isChecked: true,
      },
      {
        avatar: require('../../images/Mock/communiy_avatar_3.png'),
        name: 'DesignerNaim',
        isChecked: true,
      },
      {
        avatar: require('../../images/Mock/communiy_avatar_1.png'),
        name: 'Majipancake',
        isChecked: false,
      },
      {
        avatar: require('../../images/Mock/communiy_avatar_2.png'),
        name: 'DroitLab ',
        isChecked: false,
      },
      {
        avatar: require('../../images/Mock/communiy_avatar_3.png'),
        name: 'Bella Bibleva',
        isChecked: true,
      },
    ],
  }

  render = () => (
    <Container>
      <TitleBar
        title={strings('community.createAGroup')}
        renderRight={() => (
          <TouchableOpacity
            style={{
              height: apx(44),
              paddingHorizontal: apx(16),
              ...STYLES.center,
            }}
            onPress={() => this.props.navigation.navigate('Chatting')}
          >
            <Text
              style={{
                fontSize: apx(13),
                fontWeight: '500',
                color: '#fff',
              }}
            >
              {strings('ok')}
            </Text>
          </TouchableOpacity>
        )}
      />
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          alignItems: 'center',
          paddingVertical: apx(13),
          paddingHorizontal: apx(20),
        }}
      >
        <SearchBar />
        <Text
          style={{
            color: COLORS.text9b9b9b,
            fontSize: apx(11),
            marginVertical: apx(18),
          }}
        >
          {strings('community.friendsInGoChip')}
        </Text>
        <FlatList
          data={this.state.dataList}
          style={{ alignSelf: 'stretch' }}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => {
                this.state.dataList[index].isChecked = !item.isChecked
                this.setState({})
              }}
            >
              <Flex align="center">
                <Image
                  source={item.avatar}
                  style={{
                    width: apx(38),
                    height: apx(38),
                    borderRadius: apx(13),
                    marginRight: apx(10),
                  }}
                />
                <Text
                  style={{
                    flex: 1,
                    color: '#333',
                    fontSize: apx(13),
                  }}
                >
                  {item.name}
                </Text>
                <CheckBox
                  checked={item.isChecked}
                  onChange={() => {
                    this.state.dataList[index].isChecked = !item.isChecked
                    this.setState({})
                  }}
                />
              </Flex>
            </TouchableOpacity>
          )}
          ItemSeparatorComponent={() => <View style={{ height: apx(18) }} />}
        />
      </View>
    </Container>
  )
}

import React from 'react'
import { FlatList, Image, Text, View } from 'react-native'
import { Flex } from '@ant-design/react-native'
import { strings } from '../../locales/i18n'
import Container from '../../components/Container'
import TitleBar from '../../components/TitleBar'
import { apx } from '../../utils/device'
import SearchBar from '../../components/SearchBar'
import { COLORS } from '../../theme'
import Button from '../../components/Button'

export default class AddressBook extends React.Component {
  state = {
    dataList: [
      {
        avatar: require('../../images/Mock/communiy_avatar_1.png'),
        name: 'Leo Zhang',
        isFollowed: false,
      },
      {
        avatar: require('../../images/Mock/communiy_avatar_2.png'),
        name: 'Couple',
        isFollowed: true,
      },
      {
        avatar: require('../../images/Mock/communiy_avatar_3.png'),
        name: 'DesignerNaim',
        isFollowed: true,
      },
      {
        avatar: require('../../images/Mock/communiy_avatar_1.png'),
        name: 'Majipancake',
        isFollowed: false,
      },
      {
        avatar: require('../../images/Mock/communiy_avatar_2.png'),
        name: 'DroitLab ',
        isFollowed: false,
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
      <TitleBar title={strings('community.addressBook')} />
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
              <Button
                theme={item.isFollowed ? 'white' : 'blue'}
                text={item.isFollowed ? strings('followed') : strings('follow')}
                onPress={() => {
                  this.state.dataList[index].isFollowed = !item.isFollowed
                  this.setState({})
                }}
              />
            </Flex>
          )}
          ItemSeparatorComponent={() => <View style={{ height: apx(18) }} />}
        />
      </View>
    </Container>
  )
}

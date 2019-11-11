import React from 'react'
import { FlatList, Text, View } from 'react-native'
import Container from '../../components/Container'
import TitleBar from '../../components/TitleBar'
import { apx } from '../../utils/device'
import { COLORS } from '../../theme'
import { strings } from '../../locales/i18n'
import Separator from '../../components/Separator'
import CommentItem from '../../widgets/CommentItem'

export default class Comments extends React.Component {
  state = {
    dataList: [
      {
        avatar: require('../../images/Mock/communiy_avatar_1.png'),
        name: 'Leo Zhang',
        msg: `Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna wirl aliqua. Up exlaborum incididunt quis nostrud exercitatn.`,
      },
      {
        avatar: require('../../images/Mock/communiy_avatar_2.png'),
        name: 'Couple',
        msg: `CELL 2.0 is an upgraded version of CELL, a furniture system based on solid wood screw connection and combination.`,
      },
    ],
  }

  render = () => (
    <Container style={{ backgroundColor: '#fff' }}>
      <TitleBar title={strings('services.comments')} />
      <FlatList
        data={this.state.dataList}
        style={{ alignSelf: 'stretch' }}
        keyExtractor={(item, index) => index.toString()}
        ListHeaderComponent={() => (
          <View
            style={{ paddingHorizontal: apx(20), paddingVertical: apx(18) }}
          >
            <Text
              style={{
                color: COLORS.text384953,
                fontSize: apx(13),
              }}
            >
              {strings('services.comment')}({this.state.dataList.length})
            </Text>
          </View>
        )}
        renderItem={({ item }) => <CommentItem data={item} />}
        ItemSeparatorComponent={() => (
          <Separator style={{ marginLeft: apx(78) }} />
        )}
      />
    </Container>
  )
}

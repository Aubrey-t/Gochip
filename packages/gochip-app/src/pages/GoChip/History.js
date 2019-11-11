import React from 'react'
import { FlatList, Image, Text } from 'react-native'
import { Flex } from '@ant-design/react-native'
import Container from '../../components/Container'
import TitleBar from '../../components/TitleBar'
import { strings } from '../../locales/i18n'
import Separator from '../../components/Separator'
import { apx } from '../../utils/device'

export default class History extends React.Component {
  state = {
    dataList: [
      {
        avatar:
          'https://imgs.aixifan.com/style/image/201907/YBOIbYfjBdgoFMNHk60JD03FGrkOefbh.jpg',
        name: 'Jessy Jacke',
        date: '2019.07.18',
      },
      {
        avatar:
          'https://imgs.aixifan.com/style/image/201907/YBOIbYfjBdgoFMNHk60JD03FGrkOefbh.jpg',
        name: 'Cassiano Pomsas',
        date: '2019.07.18',
      },
      {
        avatar:
          'https://imgs.aixifan.com/style/image/201907/YBOIbYfjBdgoFMNHk60JD03FGrkOefbh.jpg',
        name: 'Mikhail Vasilyev',
        date: '2019.07.18',
      },
      {
        avatar:
          'https://imgs.aixifan.com/style/image/201907/YBOIbYfjBdgoFMNHk60JD03FGrkOefbh.jpg',
        name: 'Mitchell Orr',
        date: '2019.07.18',
      },
      {
        avatar:
          'https://imgs.aixifan.com/style/image/201907/YBOIbYfjBdgoFMNHk60JD03FGrkOefbh.jpg',
        name: 'Ryan Walton',
        date: '2019.07.18',
      },
      {
        avatar:
          'https://imgs.aixifan.com/style/image/201907/YBOIbYfjBdgoFMNHk60JD03FGrkOefbh.jpg',
        name: 'Jamie Street',
        date: '2019.07.18',
      },
    ],
  }

  render() {
    return (
      <Container>
        <TitleBar title={strings('goChip.history')} />
        <FlatList
          data={this.state.dataList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Flex align="center">
              <Image
                source={{ uri: item.avatar }}
                style={{
                  width: apx(45),
                  height: apx(45),
                  borderRadius: apx(13),
                  marginLeft: apx(20),
                  marginVertical: apx(12),
                  marginRight: apx(10),
                }}
              />
              <Text
                style={{
                  flex: 1,
                  color: '#384953',
                  fontSize: apx(14),
                  fontWeight: '500',
                }}
              >
                {item.name}
              </Text>
              <Text
                style={{
                  marginRight: apx(20),
                  color: '#BFBFBF',
                  fontSize: apx(11),
                }}
              >
                {item.date}
              </Text>
            </Flex>
          )}
          ItemSeparatorComponent={() => (
            <Separator style={{ marginLeft: apx(75) }} />
          )}
        />
      </Container>
    )
  }
}

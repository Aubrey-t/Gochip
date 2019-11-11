import React from 'react'
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { Flex } from '@ant-design/react-native'
import { strings } from '../../locales/i18n'
import { COLORS } from '../../theme'
import { apx } from '../../utils/device'
import Container from '../../components/Container'
import TitleBar from '../../components/TitleBar'
import Input from '../../components/Input'
import SvgIcon from '../../components/SvgIcon'

const FILTER_BAR_HEIGHT = apx(45)

export default class Adopt extends React.Component {
  state = {
    filterType: '',
    tabData: {
      Breeds: ['Breeds', 'Arkita', 'Biewer'],
      Sex: ['Sex', 'Either', 'Female', 'Male'],
      Qualities: ['Qualities', 'Needs a foster', 'House trained', 'Declawed'],
      Sizes: ['Sizes', 'Small', 'Medium', 'Large', 'X-Large'],
      Distance: ['Distance', '1 km', '5 km', '10 km', '> 10 km'],
    },

    selectedData: {
      Breeds: 'Breeds',
      Sex: 'Sex',
      Qualities: 'Qualities',
      Sizes: 'Sizes',
      Distance: 'Distance',
    },

    dataList: [
      {
        img: require('../../images/Mock/adopt_cover_1.png'),
        name: 'Tucker',
        desc: 'liked or enjoyed by a large number of …',
      },
      {
        img: require('../../images/Mock/adopt_cover_2.png'),
        name: 'Toffee',
        desc: 'American Pit Bull Terrier Young Female …',
      },
      {
        img: require('../../images/Mock/adopt_cover_3.png'),
        name: 'Josie',
        desc: 'Hound / Mixed (short coat) Adult Female …',
      },
      {
        img: require('../../images/Mock/adopt_cover_4.png'),
        name: 'Tigger',
        desc: 'Bull Terrier / American Pit Bull Terrier / …',
      },
    ],
    y: 0, // 偏移量
    height: 0, // header高度

    showDropdownMenu: false,
  }

  render = () => (
    <Container>
      <TitleBar title={strings('services.adopt')} />
      {this.renderHeader()}
      <FlatList
        data={this.state.dataList}
        columnWrapperStyle={{
          justifyContent: 'space-between',
          paddingHorizontal: apx(20),
          marginTop: apx(10),
        }}
        keyExtractor={(item, index) => index.toString()}
        numColumns={2}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={{
              width: apx(163),
              height: apx(256),
              backgroundColor: '#fff',
              borderRadius: apx(5),
            }}
            onPress={() => this.props.navigation.navigate('AdoptDetail')}
          >
            <Image
              source={item.img}
              style={{ width: apx(163), height: apx(174) }}
            />
            <View
              style={{ paddingHorizontal: apx(9), paddingVertical: apx(12) }}
            >
              <Text
                style={{
                  fontSize: apx(13),
                  color: COLORS.text384953,
                  fontWeight: '500',
                }}
              >
                {item.name}
              </Text>
              <Text
                style={{
                  fontSize: apx(11),
                  color: COLORS.text384953,
                  marginTop: apx(10),
                }}
              >
                {item.desc}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />

      {this.state.showDropdownMenu && (
        <View
          style={{
            width: apx(375),
            top: this.state.y + this.state.height,
            bottom: 0,
            position: 'absolute',
          }}
        >
          <View
            style={{
              maxHeight: apx(200),
              backgroundColor: '#fff',
            }}
          >
            {this.state.tabData[this.state.filterType].map((item, index) => (
              <TouchableOpacity
                key={index.toString()}
                style={{
                  width: apx(375),
                  height: apx(33),
                  paddingHorizontal: apx(20),
                  justifyContent: 'center',
                }}
                onPress={() => {
                  this.state.selectedData[this.state.filterType] = item
                  this.setState({})
                }}
              >
                <Text
                  style={{
                    fontSize: apx(11),
                    color:
                      item === this.state.selectedData[this.state.filterType]
                        ? '#0E90FD'
                        : COLORS.text384953,
                    fontWeight: '500',
                  }}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
          <TouchableOpacity
            style={{ flex: 1, backgroundColor: '#00000080' }}
            onPress={() => this.hideDropdownMenu()}
          />
        </View>
      )}
    </Container>
  )

  hideDropdownMenu() {
    this.setState({ showDropdownMenu: false, filterType: '' })
  }

  renderHeader = () => (
    <View
      style={{
        flex: 0,
        alignItems: 'center',
        backgroundColor: '#fff',
      }}
      onLayout={({
        nativeEvent: {
          layout: { y, height },
        },
      }) => {
        console.log(`y: ${y}   height: ${height}`)
        this.setState({
          y,
          height,
        })
      }}
    >
      <Input
        placeholder={strings('services.zipPostal')}
        onFocus={() => this.hideDropdownMenu()}
        containerStyle={{ marginHorizontal: apx(20), marginTop: apx(15) }}
      />

      <ScrollView
        horizontal
        style={{ width: apx(375), paddingHorizontal: apx(5) }}
      >
        {Object.keys(this.state.tabData).map((key, index) => (
          <Flex
            key={index.toString()}
            align="center"
            style={{ height: FILTER_BAR_HEIGHT, paddingHorizontal: apx(15) }}
            onPress={() => {
              this.setState({ filterType: key, showDropdownMenu: true })
            }}
          >
            <Text
              style={{
                fontSize: apx(13),
                color:
                  key === this.state.filterType ? '#0E90FD' : COLORS.text384953,
                marginRight: apx(8),
                fontWeight: '500',
              }}
            >
              {this.state.selectedData[key]}
            </Text>
            {key === this.state.filterType ? (
              <SvgIcon
                icon="dropdown_icon_blue"
                size={apx(8)}
                style={{ transform: [{ rotate: `180deg` }] }}
              />
            ) : (
              <SvgIcon icon="dropdown_icon_black" size={apx(8)} />
            )}
          </Flex>
        ))}
      </ScrollView>
    </View>
  )
}

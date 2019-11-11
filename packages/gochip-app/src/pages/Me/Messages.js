import React from 'react'
import { Image, Text, TouchableOpacity, View, StyleSheet } from 'react-native'
import Flex from '@ant-design/react-native/lib/flex'
import { KeyboardAwareFlatList } from 'react-native-keyboard-aware-scroll-view'
import SegmentedControlTab from 'react-native-segmented-control-tab'
import { strings } from '../../locales/i18n'
import { COLORS } from '../../theme'
import TitleBar from '../../components/TitleBar'
import { apx } from '../../utils/device'
import Separator from '../../components/Separator'

export default class Messages extends React.Component {
  state = {
    selectedIndex: 0,
  }

  componentDidMount(): void {}

  componentWillUnmount(): void {}

  handleIndexChange = index => {
    this.setState({
      selectedIndex: index,
    })
  }

  render = () => (
    <View style={{ flex: 1, flexDirection: 'column' }}>
      <TitleBar title={this.props.navigation.getParam('title')} />
      <View
        style={{ marginTop: 18, marginLeft: 50, marginRight: 50, height: 39 }}
      >
        <SegmentedControlTab
          values={[strings('me.privateMessages'), strings('me.comments')]}
          tabsContainerStyle={styles.tabsContainerStyle}
          selectedIndex={this.state.selectedIndex}
          onTabPress={this.handleIndexChange}
          activeTabStyle={styles.activeTabStyle}
          tabStyle={styles.tabStyle}
          tabTextStyle={styles.tabTextStyle}
          activeTabTextStyle={styles.activeTabTextStyle}
        />
      </View>

      <KeyboardAwareFlatList
        data={[
          require('../../images/Mock/services_avatar_1.png'),
          require('../../images/Mock/services_avatar_2.png'),
          require('../../images/Mock/services_avatar_3.png'),
          require('../../images/Mock/services_avatar_1.png'),
          require('../../images/Mock/services_avatar_2.png'),
          require('../../images/Mock/services_avatar_3.png'),
        ]}
        ListHeaderComponent={this.renderHeader}
        ListFooterComponent={() => <View style={{ height: apx(49) }} />}
        style={{ backgroundColor: '#fff', marginTop: 18 }}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            key={index.toString()}
            style={{
              width: apx(375),
              justifyContent: 'space-between',
              marginTop: apx(0),
            }}
            onPress={() => {}}
          >
            <Flex style={{ flexDirection: 'row' }}>
              <Flex
                style={{
                  width: apx(335),
                  height: apx(83),
                  backgroundColor: '#fff',
                  flexDirection: 'row',
                  marginLeft: 20,
                  // position: 'absolute',
                }}
              >
                <Image
                  source={item}
                  style={{
                    width: apx(60),
                    height: apx(60),
                    marginTop: 12,
                    borderRadius: 20,
                  }}
                />
                <View
                  style={{
                    // height: apx(61),
                    flex: 1,
                    margin: 0,

                    justifyContent: 'space-between',
                  }}
                >
                  <Flex
                    style={{
                      flex: 1,
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      marginRight: 0,
                    }}
                  >
                    <Text
                      style={{
                        flex: 1,
                        fontSize: apx(14),
                        color: COLORS.text384953,
                        marginLeft: apx(0),
                      }}
                    >
                      Andrea Natali
                    </Text>
                    <Text
                      style={{
                        flex: 1,
                        fontSize: apx(11),
                        color: COLORS.text9b9b9b,
                        marginRight: 0,
                      }}
                    >
                      6 hours ago
                    </Text>
                  </Flex>
                  <Text
                    style={{
                      fontSize: apx(11),
                      color: COLORS.text9b9b9b,
                      marginBottom: 0,
                    }}
                  >
                    Tianhe City/Sports Center
                  </Text>
                </View>
              </Flex>
            </Flex>
            <Separator />
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  tabsContainerStyle: {
    height: 39,
    backgroundColor: '#F1F8FF',
  },
  tabStyle: {
    backgroundColor: '#F1F8FF',
    borderColor: '#F1F8FF',
    borderRadius: 5,
  },
  tabTextStyle: {
    color: '#384953',
  },
  activeTabStyle: {
    backgroundColor: '#0E90FD',
    borderColor: '#0E90FD',
    borderRadius: 5,
  },
  activeTabTextStyle: {
    color: '#fff',
  },
  tabBadgeContainerStyle: {},
  activeTabBadgeContainerStyle: {},
  tabBadgeStyle: {},
  activeTabBadgeStyle: {},
})

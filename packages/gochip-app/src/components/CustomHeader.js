import React, { PureComponent } from 'react'
import { Button, Header, Left, Right, Title } from 'native-base'
import PropTypes from 'prop-types'
import {
  Image,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native'
import { apx } from '../utils/device'

const styles = StyleSheet.create({
  icon: { width: 9, height: 14 },
})

class CustomHeader extends PureComponent {
  static propTypes = {
    navigation: PropTypes.object.isRequired,
    headerTitle: PropTypes.string.isRequired,
    headerRightTitle: PropTypes.string,
    headerRightIcon: PropTypes.any,
    headerLeftTitle: PropTypes.string,
    headerLeftStyle: PropTypes.any,
    headerLeftIcon: PropTypes.any,
    headerRightOnPress: PropTypes.func,
    headerLeftOnPress: PropTypes.func,
    titleStyle: PropTypes.any,
    headerStyle: PropTypes.any,
    headerRightStyle: PropTypes.any,
    headerBgColor: PropTypes.string,
    borderBottomWidth: PropTypes.number,
  }

  static defaultProps = {
    headerBgColor: '#0E90FD',
    headerRightTitle: null,
    headerRightIcon: null,
    headerLeftTitle: null,
    headerLeftStyle: null,
    headerLeftIcon: null,
    headerLeftOnPress: null,
    headerRightOnPress: () => {},
    headerRightStyle: null,
    titleStyle: { fontSize: apx(18), color: '#fff' },
    headerStyle: {},
    borderBottomWidth: 0,
  }

  render() {
    const {
      headerBgColor,
      navigation,
      headerTitle,
      headerRightTitle,
      headerRightIcon,
      headerLeftTitle,
      headerLeftIcon,
      headerRightOnPress,
      headerLeftOnPress,
      headerLeftStyle,
      titleStyle,
      headerRightStyle,
      borderBottomWidth,
      headerStyle,
    } = this.props

    return (
      <View
        style={{
          backgroundColor: headerBgColor,
        }}
      >
        <Header
          style={[
            {
              borderBottomWidth,
              alignItems: 'center',
              justifyContent: 'space-between',
              backgroundColor: headerBgColor,
              elevation: 0,
            },
            headerStyle,
          ]}
        >
          <StatusBar
            animated
            translucent
            barStyle="dark-content"
            backgroundColor="rgba(0,0,0,0)"
          />
          {headerLeftTitle || headerLeftIcon ? (
            <Left style={{ flex: 1 }}>
              <TouchableOpacity
                onPress={() => {
                  if (!headerLeftOnPress) {
                    navigation.pop()
                  } else {
                    headerLeftOnPress()
                  }
                }}
              >
                {headerLeftIcon && (
                  <Image
                    source={headerLeftIcon}
                    style={[styles.icon, headerLeftStyle]}
                  />
                )}
                {headerLeftTitle && (
                  <Title style={[headerLeftStyle]}>{headerLeftTitle}</Title>
                )}
              </TouchableOpacity>
            </Left>
          ) : (
            <Left style={{ flex: 1 }} />
          )}

          <Title style={titleStyle}>{headerTitle}</Title>
          {headerRightTitle || headerRightIcon ? (
            <Right style={{ flex: 1 }}>
              <Button transparent onPress={headerRightOnPress}>
                {headerRightIcon && (
                  <Image source={headerRightIcon} style={styles.icon} />
                )}
                {headerRightTitle && (
                  <Title style={[{ fontSize: 11 }, headerRightStyle]}>
                    {headerRightTitle}
                  </Title>
                )}
              </Button>
            </Right>
          ) : (
            <Right style={{ flex: 1 }} />
          )}
        </Header>
      </View>
    )
  }
}

export default CustomHeader

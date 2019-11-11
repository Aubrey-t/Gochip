import React from 'react'
import { Text } from 'react-native'
import { Flex } from '@ant-design/react-native'
import { apx } from '../../utils/device'

export default class ItemTitle extends React.PureComponent {
  render() {
    return (
      <Flex
        style={{
          height: apx(52),
          paddingLeft: apx(15),
          borderBottomWidth: 1,
          borderBottomColor: '#D8D8D8',
        }}
        align="center"
      >
        <Text
          style={{ fontSize: apx(18), color: '#384953', fontWeight: '500' }}
        >
          {this.props.title}
        </Text>
      </Flex>
    )
  }
}

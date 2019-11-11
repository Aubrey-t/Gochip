import React from 'react'
import { Image, Text } from 'react-native'
import { Flex } from '@ant-design/react-native'
import { strings } from '../locales/i18n'
import { apx } from '../utils/device'
import Images from '../images/images'

export default class SearchBar extends React.Component {
  state = {}

  render = () => (
    <Flex
      align="center"
      style={{
        width: apx(335),
        height: apx(40),
        backgroundColor: '#f1f8ff',
        borderRadius: apx(20),
        paddingHorizontal: apx(15),
        paddingVertical: apx(11),
      }}
    >
      <Image
        source={Images.servicesSearch}
        style={{ width: apx(15), height: apx(15), marginRight: apx(5) }}
      />
      <Text style={{ fontSize: apx(11), color: '#bfbfbf' }}>
        {strings('services.search')}
      </Text>
    </Flex>
  )
}

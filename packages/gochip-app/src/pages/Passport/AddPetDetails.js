import PropTypes from 'prop-types'
import React from 'react'
import {
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native'
import { Flex, Carousel } from '@ant-design/react-native'

import Container from '../../components/Container'
import TitleBar from '../../components/TitleBar'
import { strings } from '../../locales/i18n'
import { STYLES } from '../../theme'
import { deviceWidth } from '../../utils/device'

class ItemTitle extends React.PureComponent {
  render() {
    return (
      <Flex style={{ height: 52, paddingLeft: 15 }} align="center">
        <Text style={{ fontSize: 18, color: '#384953', fontWeight: '500' }}>
          {this.props.title}
        </Text>
      </Flex>
    )
  }
}

class ItemDetail extends React.PureComponent {
  static defaultProps = {}

  static propTypes = {
    content: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }

  render() {
    return (
      <TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            height: 50,
            alignItems: 'center',
            justifyContent: 'space-around',
            borderBottomColor: 'rgba(0,0,0,0.15)',
            borderBottomWidth: 0.5,
          }}
        >
          <View style={{ width: '40%', paddingLeft: 20 }}>
            <Text style={{ fontSize: 11, color: '#9B9B9B' }}>
              {this.props.label}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '60%',
              justifyContent: 'flex-end',
              marginRight: 20,
            }}
          >
            <Text
              style={{
                fontSize: 13,
                color: '#384953',
                marginRight: 10,
                fontWeight: '600',
              }}
            >
              {this.props.content}
            </Text>
            <View style={{ alignItems: 'center', height: '100%' }}>
              <Image
                style={{ height: 15, width: 15 }}
                source={require('../../images/back1.png')}
              />
            </View>
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

export default class PetDetails extends React.Component {
  state = {}

  componentDidMount() {}

  componentWillUnmount() {}

  render() {
    const data = [1, 2, 3]
    return (
      <Container style={{ backgroundColor: '#F1F8FF' }}>
        <TitleBar title={strings('goChip.petDetails')} />
        <ScrollView>
          <Carousel
            dots={false}
            afterChange={this.afterChange}
            style={{ backgroundColor: '#fff' }}
          >
            {data.map(item1 => (
              <View
                style={{
                  ...STYLES.center,
                  margin: 20,
                  overflow: 'hidden',
                  borderWidth: 0,
                  borderTopLeftRadius: 15,
                  borderTopRightRadius: 15,
                }}
                key={item1.id}
              >
                <ImageBackground
                  source={require('../../images/Mock/tup.png.png')}
                  style={{
                    height: 160,
                    width: deviceWidth * 0.9,
                  }}
                >
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'flex-end',
                      padding: 20,
                    }}
                  >
                    <TouchableOpacity>
                      <View
                        style={{
                          backgroundColor: '#0E90FD',
                          width: 79,
                          height: 28,
                          borderRadius: 14,
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        <Text
                          style={{
                            fontSize: 13,
                            color: '#F5F5F5',
                            fontFamily: 'PingFangSC-Medium',
                          }}
                        >
                          + Add to
                        </Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                </ImageBackground>
              </View>
            ))}
          </Carousel>

          <View style={{ backgroundColor: '#fff', marginTop: 10 }}>
            <ItemTitle title={strings('goChip.ownerInformation')} />

            <ItemDetail label={strings('goChip.lastName')} content="Emily" />
            <ItemDetail label={strings('goChip.firstName')} content="Zhou" />
          </View>
          <View style={{ backgroundColor: '#fff', marginTop: 10 }}>
            <ItemTitle title={strings('goChip.coownerInformation')} />
            <ItemDetail label={strings('goChip.lastName')} content="Jack" />
            <ItemDetail label={strings('goChip.firstName')} content="Sun" />
          </View>

          <View style={{ backgroundColor: '#fff', marginTop: 10 }}>
            <ItemTitle title={strings('goChip.petInformation')} />
            <ItemDetail label={strings('goChip.petType')} content="Dog" />
            <ItemDetail label={strings('goChip.petName')} content="Lily" />
            <ItemDetail
              label={strings('goChip.sex')}
              content="Femal - Spayed"
            />
            <ItemDetail label={strings('goChip.primaryBreed')} content="Pug" />
            <ItemDetail label={strings('goChip.secondaryBreed')} content="" />
            <ItemDetail
              label={strings('goChip.primaryColour')}
              content="White"
            />
            <ItemDetail label={strings('goChip.secondaryColour')} content="" />
            <ItemDetail label={strings('goChip.tattooId')} content="" />
            <ItemDetail label={strings('goChip.chipId')} content="" />
            <ItemDetail label={strings('goChip.coatPattern')} content="" />

            <View
              style={{
                alignItems: 'center',
                marginTop: 20,
                marginBottom: 80,
                padding: 20,
              }}
            >
              <TouchableOpacity>
                <View
                  style={{
                    backgroundColor: '#0E90FD',
                    width: 200,
                    height: 28,
                    borderRadius: 14,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Text
                    style={{
                      fontSize: 16,
                      color: '#F5F5F5',
                      fontFamily: 'PingFangSC-Medium',
                    }}
                  >
                    OK
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </Container>
    )
  }
}

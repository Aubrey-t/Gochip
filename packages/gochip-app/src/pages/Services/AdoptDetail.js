import React from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import { Flex } from '@ant-design/react-native'
import Swiper from 'react-native-swiper'
import { strings } from '../../locales/i18n'
import { COLORS, STYLES } from '../../theme'
import { apx } from '../../utils/device'
import Container from '../../components/Container'
import TitleBar from '../../components/TitleBar'
import Separator from '../../components/Separator'

export default class AdoptDetail extends React.Component {
  state = {}

  render = () => (
    <Container style={{ backgroundColor: '#fff' }}>
      <TitleBar title={strings('details')} />

      <ScrollView>
        <View
          style={{
            height: apx(210),
          }}
        >
          <Swiper
            // height={apx(210)}
            loop
            index={0}
            autoplay
            horizontal
            paginationStyle={{ bottom: apx(10) }}
            dotStyle={{
              width: apx(5),
              height: apx(5),
              borderRadius: apx(5 / 2),
              marginHorizontal: apx(4),
              borderColor: '#fff',
              backgroundColor: 'transparent',
              borderWidth: apx(1),
            }}
            activeDotStyle={{
              width: apx(5),
              height: apx(5),
              borderRadius: apx(5 / 2),
              marginHorizontal: apx(4),
              backgroundColor: '#fff',
            }}
          >
            {[1, 2, 3].map((el, i) => (
              <TouchableOpacity key={i.toString()} style={{ ...STYLES.center }}>
                <Image
                  style={{
                    width: apx(375),
                    height: apx(210),
                  }}
                  resizeMode="cover"
                  source={require('../../images/Mock/services_banner_1.png.png')}
                />
              </TouchableOpacity>
            ))}
          </Swiper>
        </View>

        <View style={{ paddingHorizontal: apx(20) }}>
          <View
            style={{
              paddingVertical: apx(30),
              height: apx(144),
              justifyContent: 'space-between',
            }}
          >
            <Flex>
              <Text
                style={{
                  width: apx(70),
                  fontSize: apx(13),
                  color: COLORS.text384953,
                  fontWeight: '500',
                }}
              >
                {strings('services.name')}
              </Text>
              <Text style={{ fontSize: apx(13), color: COLORS.text9b9b9b }}>
                Josie
              </Text>
            </Flex>
            <Flex>
              <Text
                style={{
                  width: apx(70),
                  fontSize: apx(13),
                  color: COLORS.text384953,
                  fontWeight: '500',
                }}
              >
                {strings('services.varieties')}
              </Text>
              <Text style={{ fontSize: apx(13), color: COLORS.text9b9b9b }}>
                Hound / Mixed (short coat)
              </Text>
            </Flex>
            <Flex>
              <Text
                style={{
                  width: apx(70),
                  fontSize: apx(13),
                  color: COLORS.text384953,
                  fontWeight: '500',
                }}
              >
                {strings('services.sex')}
              </Text>
              <Text style={{ fontSize: apx(13), color: COLORS.text9b9b9b }}>
                Large Adult Female
              </Text>
            </Flex>
          </View>

          <Separator />
          <Text
            style={{
              marginTop: apx(30),
              fontSize: apx(13),
              color: COLORS.text384953,
            }}
          >
            Josie is a beautiful 1 year old, hound mix who loves all people and
            other dogs. Josie is up to date on shots and has been spayed. Josie
            is totally house and crate trained. Josie would do best in a home
            with a fur sibling to play with. Josie loves to play tag with toys,
            to talk, and snuggling in the sunshine is her favorite past time. If
            you would like to adopt Josie, please put your application in here:
            http://www.rescuedogsrocknyc.org
          </Text>

          <Text
            style={{
              marginVertical: apx(30),
              fontSize: apx(18),
              color: COLORS.text384953,
              fontWeight: '500',
            }}
          >
            {strings('services.moreAbout')} Josie
          </Text>

          <Text
            style={{
              marginBottom: apx(64),
              fontSize: apx(13),
              color: COLORS.text384953,
            }}
          >
            Needs a foster/caretaker{'\n'}
            Up-to-date with vaccinations{'\n'}
            Not good with cats{'\n'}
            Good with dogs{'\n'}
            Good with kids {'\n'}
            Good with adults: All{'\n'}
            Reaction to new people: Friendly{'\n'}
            Birth date: 12/26/2017 (not exact) {'\n'}
            Activity level: Moderately Active{'\n'}
            Moderate energy level{'\n'}
            Exercise needed: Moderate{'\n'}
            Shedding: Moderate{'\n'}
            Grooming: Low
          </Text>
        </View>
      </ScrollView>
    </Container>
  )
}

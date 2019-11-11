import React from 'react'
import { Text, View } from 'react-native'
import { Steps, Icon } from '@ant-design/react-native'
import { apx, deviceWidth } from '../../utils/device'

const { Step } = Steps

export default class CustomSteps extends React.PureComponent {
  static defaultProps = {}

  render() {
    const iconWidth = 8
    const lineHeight = 1
    const { stepLeft, steps, currentStep } = this.props
    const width =
      (deviceWidth - stepLeft * 2 - iconWidth * 3) / ((steps.length - 1) * 2)
    console.log(width)
    return (
      <View style={{ backgroundColor: '#fff', paddingTop: apx(15) }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            paddingLeft: apx(stepLeft),
          }}
        >
          <Steps
            size="small"
            current={currentStep}
            direction="horizontal"
            styles={{
              tail_default_s_h: {
                height: apx(lineHeight),
                width: apx(width),
                marginTop: apx(iconWidth / 2),
              },
              head_default_s: {
                height: apx(iconWidth),
                width: apx(iconWidth),
                borderRadius: apx(iconWidth),
                borderWidth: apx(2),
                borderColor: '#CFE9FF',
              },
              head_blue_s: {
                marginTop: apx((-iconWidth + lineHeight) / 2),
                height: apx(iconWidth + 6),
                width: apx(iconWidth + 6),
                borderColor: '#0E90FD',
                backgroundColor: '#0E90FD',
              },
            }}
          >
            {steps.map((item1, index) => (
              <Step
                // eslint-disable-next-line react/no-array-index-key
                key={index}
                title={
                  <View
                    style={{
                      marginTop: apx(8),
                      width: apx(66),
                      marginLeft: apx(-28),
                      height: apx(33),
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <Text
                      style={{
                        fontSize: apx(11),
                        color: currentStep >= index ? '#384953' : '#D8D8D8',
                        textAlign: 'center',
                      }}
                    >
                      {item1.title}
                    </Text>
                  </View>
                }
                renderIcon={({ starting, waiting, error }) => {
                  let icon
                  if (index === 0) {
                    icon = (
                      <Icon
                        name="check"
                        color="#FFF"
                        style={[{ fontSize: apx(11) }]}
                        size="md"
                      />
                    )
                  } else if (starting) {
                    icon = (
                      <Icon
                        name="check"
                        color="#FFF"
                        style={[{ fontSize: apx(11) }]}
                        size="md"
                      />
                    )
                  } else if (waiting) {
                    icon = (
                      <Icon
                        name="check"
                        color="#FFF"
                        style={[{ fontSize: apx(11) }]}
                        size="sm"
                      />
                    )
                  } else if (error) {
                    icon = <Icon name="star" />
                  }
                  return icon
                }}
                status={item1.status}
              />
            ))}
          </Steps>
        </View>
      </View>
    )
  }
}

import PropTypes from 'prop-types'
import React from 'react'
import { Image, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { apx } from '../../utils/device'

export default class ItemDetail extends React.PureComponent {
  static defaultProps = {
    showIcon: true,
    content: '',
  }

  static propTypes = {
    content: PropTypes.string,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    showIcon: PropTypes.bool,
  }

  render() {
    return (
      <TouchableOpacity>
        <View
          style={{
            flexDirection: 'row',
            height: apx(50),
            alignItems: 'center',
            justifyContent: 'space-around',
            borderBottomColor: 'rgba(0,0,0,0.1)',
            borderBottomWidth: apx(0.5),
          }}
        >
          <View style={{ width: '40%', paddingLeft: apx(20) }}>
            <Text style={{ fontSize: apx(11), color: '#9B9B9B' }}>
              {this.props.label}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              width: '60%',
              justifyContent: 'flex-end',
              marginRight: apx(20),
            }}
          >
            <TextInput
              style={{
                fontSize: apx(13),
                color: '#384953',
                marginRight: apx(10),
                fontWeight: '600',
              }}
              editable={
                this.props.editable === false ? this.props.editable : true
              }
              placeholder={this.props.placeholder}
              defaultValue={this.props.content}
              onChange={value => {
                if (this.props.onChange) {
                  this.props.onChange(value.nativeEvent.text)
                }
              }}
            />
            {this.props.showIcon ? (
              <View style={{ alignItems: 'center', height: '100%' }}>
                <Image
                  style={{ height: apx(15), width: apx(15) }}
                  source={require('../../images/back1.png')}
                />
              </View>
            ) : null}
          </View>
        </View>
      </TouchableOpacity>
    )
  }
}

import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import { View } from 'react-native-animatable';
import MovableView from 'react-native-movable-view';

export default class ChatBubble extends Component {
  render() {
    return (
        <TouchableOpacity onPress={this.props.openChat}>
          {this.props.bubble}
        </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  move: {
  },
});

ChatBubble.propTypes = {
  bubble: PropTypes.element.isRequired,
  disabled: PropTypes.bool.isRequired,
  openChat: PropTypes.func.isRequired,
  left: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
};

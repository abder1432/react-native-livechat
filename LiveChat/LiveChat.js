import React, { Component } from 'react';
import { View, Dimensions, StyleSheet, Image, Platform } from 'react-native';
import PropTypes from 'prop-types';
import ChatBubble from './ChatBubble/ChatBubble';
import Chat from './Chat/Chat';
import {init} from "@livechat/livechat-visitor-sdk";

const chatIcon = require('../assets/chat.png');

const { height, width } = Dimensions.get('window');

export default class LiveChat extends Component {
  constructor(props) {
    super(props);
    this.defineStyles();
    this.state = {
      isChatOn: false,
      bubble: props.bubble ? props.bubble : (
        <View style={this.styles.bubbleStyle}>
          <Image source={chatIcon} style={this.styles.icon} />
        </View>
      ),
    };
    if (!GLOBAL.visitorSDK) {
      GLOBAL.visitorSDK = init({
        license: props.license,
        group: props.group
      });
    }
    props.onLoaded(GLOBAL.visitorSDK);
  }

  defineStyles() {
    this.styles = StyleSheet.create({
      bubbleStyle: {
        backgroundColor: this.props.bubbleColor,
        borderRadius: width / 10,
        alignItems: 'center',
        justifyContent: 'center',
      },
      icon: {
        width: width / 7, height: width / 7,
      },
      container: {
        flex: 1,
      },
    });
  }

  openChat = () => {
    this.setState({ isChatOn: true });
  };

  closeChat = () => {
    this.setState({ isChatOn: false });
  };

  render() {
    return (
      <View style={this.props.chatContainerStyle}>
        <ChatBubble
          openChat={this.openChat}
          bubble={this.state.bubble}
          disabled={this.props.movable}
        />
        <Chat {...this.props} isChatOn={this.state.isChatOn} closeChat={this.closeChat} />
      </View>
    );
  }
}

LiveChat.propTypes = {
  license: PropTypes.number.isRequired,
  group: PropTypes.number,
  movable: PropTypes.bool,
  bubble: PropTypes.element,
  bubbleColor: PropTypes.string,
  bubbleLeft: PropTypes.number,
  bubbleTop: PropTypes.number,
  chatTitle: PropTypes.string,
  greeting: PropTypes.string,
  noAgents: PropTypes.string,
  onLoaded: PropTypes.func,
};

LiveChat.defaultProps = {
  bubbleColor: '#2196F3',
  movable: false,
  onLoaded: () => {},
  bubbleLeft: 0,
  bubbleTop: 0,
  chatTitle: 'Chat with us!',
  greeting: 'أهلا بك! كيف يمكن أن نساعدك؟',
  noAgents: 'Our agents are not available right now.',
};

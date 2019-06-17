import React, { Component } from 'react';
import { View, Dimensions, Text, StyleSheet, Image, TouchableOpacity, Platform } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/Ionicons'

const backImage = require('../../../assets/close.png');

const { height, width } = Dimensions.get('window');
const totalSize = num => (Math.sqrt((height * height) + (width * width)) * num) / 100;

export default class NavigationBar extends Component {
  render() {
    return (
      <View style={styles.navBar}>
        <Text style={styles.title}>{this.props.chatTitle}</Text>
        <TouchableOpacity style={styles.back} onPress={this.props.closeChat}>
          <Icon name="ios-close" style={styles.backIcon}  />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navBar: {
    height: Platform.OS === 'ios' ? 50 : 64,
    backgroundColor: 'white',
    borderBottomColor: '#b2b2b2',
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  back: {
    flexDirection: 'row', 
    marginLeft: 20,
    marginTop: 5
  },
  backIcon: {
    fontSize: 36,
    color: '#22abe2'
  },
  title: {
    color: '#22abe2',
    fontSize: 17,
    fontFamily: 'Cairo-regular',
    position: 'absolute',
    top: 5,
    width,
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
});

NavigationBar.propTypes = {
  closeChat: PropTypes.func.isRequired,
  chatTitle: PropTypes.string.isRequired,
};

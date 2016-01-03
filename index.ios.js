/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  ScrollView,
  TextInput,
} = React;

var ReactNativeScrollviewWarning = React.createClass({
  render: function() {
    return (
      <ScrollView style={ styles.container } contentContainerStyle={ styles.contentContainer }>
        <TextInput style={ styles.textInput } placeholder={ "Test1" } />
        <TextInput style={ styles.textInput } placeholder={ "Test2" } />
        <TextInput style={ styles.textInput } placeholder={ "Test3" } />
        <TextInput style={ styles.textInput } placeholder={ "Test4" } />
        <TextInput style={ styles.textInput } placeholder={ "Test5" } />
        <TextInput style={ styles.textInput } placeholder={ "Test6" } />
        <TextInput style={ styles.textInput } placeholder={ "Test7" } />
        <TextInput style={ styles.textInput } placeholder={ "Test8" } />
        <TextInput style={ styles.textInput } placeholder={ "Test9" } />
        <TextInput style={ styles.textInput } placeholder={ "Test10" } />
      </ScrollView>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,   
    backgroundColor: '#F5FCFF',        
  },
  contentContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: 'center',
  },
  textInput: {
    height: 50,
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
    paddingLeft: 10,
    borderWidth: 1,
    backgroundColor: "#FFFFFF",
  },
});

AppRegistry.registerComponent('ReactNativeScrollviewWarning', () => ReactNativeScrollviewWarning);

import React, { Component } from 'react';
import { LinearGradient } from 'expo-linear-gradient'
import { View, Text, StyleSheet } from 'react-native'
import { Font } from 'expo'

export default class Quote extends Component {
  constructor(props) {
    super(props);
    this.state = {
        fontloaded : false
    };
  }

  async componentDidMount(){
      await Font.loadAsync({
          'productSans' : require('../assets/fonts/product.ttf')
      })

      this.setState({fontloaded: true})
  }

  render() {
    return (
      <View>
            <LinearGradient style={styles.quote} colors={['#005BEA', '#00CEF8']} start={[0.2, 1.0]} end={[1.2, 0.2]}>
                {
                    this.state.fontloaded ?
                        <Text style={[styles.quoteText, {fontFamily: 'productSans'}]}>{this.props.quote}</Text>
                    :
                    null
                }
            </LinearGradient>
            {
                this.state.fontloaded ?
                    <Text style={[styles.quoteAuthor, { fontFamily: 'productSans' }]}>-{this.props.author}</Text>
                    :
                    null
            }
      </View>
    );
  }
}


const styles = StyleSheet.create({
    quote : {
        padding: 30,
        borderRadius: 10,
        shadowColor: "#9e9e9e",
        shadowOffset : {
            shadowOpacity: 0.3,
            shadowRadius: 0.5,
        },
        elevation: 8
    },

    quoteText : {
        fontSize: 20,
        color: "white",
        width: 250,
        textAlign: "center"
    },

    quoteAuthor : {
        fontSize: 15,
        margin: 20,
        position: "absolute",
        right: 0,
        bottom: -60

    }
})
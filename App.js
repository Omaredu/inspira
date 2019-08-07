import React, {Component} from 'react';
import expo from 'expo'
import { StyleSheet, ActivityIndicator, View } from 'react-native';

import Quote from './components/Quote'

export default class App extends Component {

  state = {
    quote: "",
    author: "",
    loading: false
  }

  async componentDidMount() {
    const req = await fetch('https://favqs.com/api/qotd')
    const quoteObj = await req.json()
    const fullQuote = quoteObj.quote

    this.setState({quote: fullQuote.body})
    this.setState({author: fullQuote.author})
    this.setState({loading: true})
  }

  render() {
    return (
      <View style={styles.container}>
        {
          this.state.loading ?
            <Quote quote={this.state.quote} author={this.state.author} />
          :
            <ActivityIndicator size="large" color="#005BEA" />
        }
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

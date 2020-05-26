import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

import Header from './components/Header'
import Greating from './components/Greating.js'
import  CommandFlatList  from './components/CommandFlatList'
class App extends React.Component{

  render(){
  
    return(

      <View style={styles.Container}>

        <Header TextTitle='You Commands' />
        
        <Greating UserName='Italo Chagas' />

        <CommandFlatList />

      </View>
    
    )
  }

}


const styles = StyleSheet.create({
  Container:{
    flex:1,
    backgroundColor: '#eb6750',
    
  }
});

export default App;
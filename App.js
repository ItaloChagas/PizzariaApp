import React from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Image,
  Text,
  FlatList
} from 'react-native';

import Header from './components/Header'
import Greating from './components/Greating.js'
import Command from './components/Command'
import { commands } from './components/util/Pedidos'

class App extends React.Component{

  render(){
  
    return(

      <View style={styles.Container}>

        <Header TextTitle='You Commands' />
        
        <Greating UserName='Italo Chagas' />

        <View>

          <FlatList 
            data = {commands}
            renderItem={( {item} ) =>  
              <Command 
                OrderName={item.name}
                OrderDate={item.date}
                OrderImage={item.image}  
                OrderPrice={item.price}
                OrderDescription={item.description}
              />
            }
          
          />
          
        </View>

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

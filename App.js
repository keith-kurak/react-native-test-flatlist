import React from 'react';
import { Text, View, FlatList } from 'react-native';
import { Constants } from 'expo';

export default class App extends React.Component {
  render = () => {
    return (
      <View style={{ flex: 1, paddingTop: Constants.statusBarHeight }}>
        <FlatList 
          data={[]}
          renderItem={({item}) =>
            <Text>Blah</Text>
          }
        />
      </View>
    );
  }
}

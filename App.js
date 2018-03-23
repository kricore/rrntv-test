import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NativeRouter, Route, Link, Switch } from 'react-router-native'
import Home from './app/components/home';
import List from './app/components/list/main-list';
import Item from './app/components/item/item';
import MapComponent from './app/components/map/map';
import Stack from 'react-router-native-stack';


export default class App extends React.Component {

  render() {
    return (
      <NativeRouter>
        <Stack>
          <View style={styles.container}>
            <View style={styles.nav}>
              <Link to="/" styles={styles.navItem}>
                <Text>Home</Text>
              </Link>
              <Link to="/news" styles={styles.navItem}>
                <Text>News</Text>
              </Link>
              <Link to="/map" styles={styles.navItem}>
                <Text>Map</Text>
              </Link>
            </View>
            <View style={styles.content}>
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/news" component={List} />
                <Route path="/news/:id" component={Item} />
                <Route path="/map" component={MapComponent} />
              </Switch>
            </View>
          </View>
        </Stack>
      </NativeRouter>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  content: {
    marginTop: 60
  },
  nav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    position: 'absolute',
    padding: 20,
    top: 20,
    left: 0,
    right: 0,
    backgroundColor: '#f1f1f1',
  },
  navItem: {
    flex: 1,
    padding: 10,
    alingItems: 'center'
  }
});
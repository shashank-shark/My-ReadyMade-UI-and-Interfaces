import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  ListView,
  TouchableOpacity,
  View,
  Image,
  Text,
} from 'react-native';

export default class ListWithIcon extends Component<{}> {
  
  constructor(props) {
    super(props);
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.state = {
      dataSource: ds.cloneWithRows([
         {image: "https://bootdey.com/img/Content/avatar/avatar1.png"},
         {image: "https://bootdey.com/img/Content/avatar/avatar6.png"},
         {image: "https://bootdey.com/img/Content/avatar/avatar2.png"},
         {image: "https://bootdey.com/img/Content/avatar/avatar3.png"},
         {image: "https://bootdey.com/img/Content/avatar/avatar4.png"},
         {image: "https://bootdey.com/img/Content/avatar/avatar1.png"},
         {image: "https://bootdey.com/img/Content/avatar/avatar6.png"},
      ]),
    };
  }

  render() {
    return (
      <ListView style={styles.container} enableEmptySections={true}
        dataSource={this.state.dataSource}
        renderRow={(user) => {
          return (
            <TouchableOpacity>
              <View style={styles.box}>
                <Image style={styles.image} source={{uri:user.image}} />
                <View style={styles.info}>
                  <Text  style={styles.name}>John Doe</Text>
                  
                  <View style={styles.row}>
                    <View style={styles.iconContainer}>
                      <TouchableOpacity onPress={this.handlePress}>
                        <Image style={styles.icon} source={{uri: "https://png.icons8.com/heart-outline/color/30/ffffff"}} />
                      </TouchableOpacity>
                      <Text style={styles.iconFonts}>44</Text>
                    </View>
                    
                    <View style={styles.iconContainer}>
                      <Image style={styles.icon} source={{uri: "https://png.icons8.com/speech/ios11/30/2ecc71"}} />
                      <Text style={styles.iconFonts}>120</Text>
                    </View>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )
        }}/>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EEEEEE',
    paddingTop:50,
  },
  icon:{
    width:30,
    height:30,
  },
  image: {
    width: 100,
    height:100
  },
  box: {
    marginTop:10,
    backgroundColor: 'white',
    flexDirection: 'row',
    shadowColor: 'black',
    shadowOpacity: .2,
    shadowOffset: {
      height:1,
      width:-2
    },
    elevation:2
  },
  info: {
    flex:1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  name: {
    fontSize:20,
    marginTop:10,
    color: '#333'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 40,
    marginTop:10
  },
  iconContainer: {
    flex: 1,
    alignItems:'center'
  },
  iconFonts: {
    color: 'gray',
  },
  red: {
    color: '#FF4500',
  }
})
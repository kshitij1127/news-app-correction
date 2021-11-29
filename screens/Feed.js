import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking, ImageBackground } from "react-native";
import Button from "@mui/material/Button";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Link } from "@react-navigation/native";

export default class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
      description: [],
      url: [],
    };
  }
  getNews = () => {
    const api = 'https://api.nytimes.com/svc/topstories/v2/world.json?api-key=3Z5IANaP2pCJ4ABFRvnw0Q6uHdBJThBI'
    axios.get(api).then((res) => {
      for (let i = 0; i < res.data.results.length; i++) {
        console.log(res.data.results[i].title);
        // let news = [...this.state.news, res.data.articles[i].title];
        this.setState({
          news: [...this.state.news, res.data.results[i].title],
          description: [...this.state.description, res.data.results[i].abstract],
          url: [...this.state.url, res.data.results[i].url],
        });
      }
    });
  };

  componentDidMount() {
    this.getNews();
  }

  displayNews = () => {
    return (
      <View>
        {this.state.news.map((news, id) => {
          return (
            <View style={{backgroundColor: ''}}>
              <ImageBackground source={require('../assets/bg.jpg')}>
              <TouchableOpacity onPress={() => {Linking.openURL(this.state.url[id])}} style={{marginLeft: 20, marginTop: 100,}}>
            <Text key={news} style={{marginTop: 100, alignItems: 'center', fontFamily: 'Product Sans', fontSize: 40, fontWeight: 'bold', marginLeft: 100, alignContent: 'center', color: 'yellow'}}>
             • {news}
            </Text>
            </TouchableOpacity>
      
            <Text key={news} style={{marginTop: 20, alignItems: 'center', fontFamily: 'Roboto', fontSize: 30, fontStyle: 'italic', marginLeft: 120, alignContent: 'center', borderBottomColor: 'black', borderBottomWidth: 3, borderBottomEndRadius: 25, borderBottomRightRadius: 25, marginRight: 100, color: 'white'}}>
              - {this.state.description[id]}
            </Text>
            </ImageBackground>
            </View>
          );
        })}
      </View>
    );
  };

  render() {
    return (
      <View>
        <View>
          <Card style={{backgroundColor: 'coral'}}>
            <CardContent>
              <Typography color="text.primary" sx={{ fontSize: 56 }}>
                Headlines
              </Typography>
            </CardContent>
          </Card>
        </View>

        <View>
          {this.displayNews()}
        </View>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    flex: 5,
  },
});

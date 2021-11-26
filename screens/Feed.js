import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";
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
      url: [],
    };
  }
  getNews = () => {
    // const api =
    //   "https://newsapi.org/v2/everything?q=everything&from=2021-11-23&sortBy=popularity&apiKey=4482bf8b34b2410eaceaa7fe6f3c3a93";
    const api = 'https://api.nytimes.com/svc/topstories/v2/world.json?api-key=3Z5IANaP2pCJ4ABFRvnw0Q6uHdBJThBI'
    axios.get(api).then((res) => {
      for (let i = 0; i < res.data.results.length; i++) {
        console.log(res.data.results[i].title);
        // let news = [...this.state.news, res.data.articles[i].title];
        this.setState({
          news: [...this.state.news, res.data.results[i].title],
          url: [res.data.results[i].url],
        });
        console.log(this.state.url)
      }
    });
  };

  componentDidMount() {
    this.getNews();
  }

  // fetchUrl = async(url) => {
  //   var dataurl = fetch(url);
  //   <Button onClick={
  //     () => {
  //       this.state.url
  //     }
  //   }></Button>
  // }

  displayNews = () => {
    console.log(this.state.url)
    return (
      <View>
        {this.state.news.map((news) => {
          return (
            <TouchableOpacity onPress={() => {Linking.openURL(this.state.url)}} style={{backgroundColor: 'cyan'}}>
            <Text key={news} style={{marginTop: 100, alignItems: 'center', fontFamily: 'Roboto', fontSize: 40, fontWeight: 'bold', marginLeft: 100}}>
             • {news}
            </Text>
            </TouchableOpacity>
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

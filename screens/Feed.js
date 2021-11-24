import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Button from "@mui/material/Button";
import axios from "axios";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      news: [],
    };
  }
  getNews = () => {
    const api =
      "https://newsapi.org/v2/everything?q=everything&from=2021-11-23&sortBy=popularity&apiKey=4482bf8b34b2410eaceaa7fe6f3c3a93";
    axios.get(api).then((res) => {
      for (let i = 0; i < res.data.articles.length; i++) {
        console.log(res.data.articles[i].title);
        this.setState({
          news: res.data.articles[i].title,
        });
      }
    });
  };

  displayNews = () => {
    return (
      <View>
        <Text>{this.state.news}</Text>
      </View>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <Button
          variant="text"
          onClick={() => {
            this.props.navigation.navigate("Welcome");
          }}
        >
          Go Back
        </Button>

        <View>
          <Card>
            <CardContent>
              <Typography color="text.primary" sx={{ fontSize: 56 }}>
                Headlines
              </Typography>
              <Typography color="text.primary" sx={{ fontSize: 20 }}>
                {this.getNews()}
              </Typography>
            </CardContent>
          </Card>
        </View>

        <View>
          {this.state.news.map((news) => (
          <Card>
            <CardContent>
              <Typography color="text.primary" sx={{ fontSize: 20, color: "black" }}>
                {/* {this.displayNews()} */}
                {news}
                {console.log(news)}
              </Typography>
            </CardContent>
          </Card>
          ))}
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

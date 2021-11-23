import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '@mui/material/Button';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default class Feed extends React.Component {
    getNews = () => {
        const api = 'https://newsapi.org/v2/everything?q=Apple&from=2021-11-23&sortBy=popularity&apiKey=4482bf8b34b2410eaceaa7fe6f3c3a93'
        axios.get(api).then(res => {
            console.log(res.data.articles[0].title)
        })
    }
  render() {
    return (
      <View>
        <Button
          variant="text"
          onClick={() => {
            this.props.navigation.navigate('Welcome');
          }}>
          Go Back
        </Button>
        <Text>Feed</Text>
        <View style={styles.container}>
            <Card>
                <CardContent>
                    <Typography color="text.primary" sx={{fontSize: 56}}>Headlines</Typography>
                    <Typography color="text.primary" sx={{ fontSize: 20 }}>{this.getNews()}</Typography>
                </CardContent>
            </Card>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center', 
    alignItems: 'center',
    flex: 1,
  }
})
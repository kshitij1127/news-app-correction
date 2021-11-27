import React from 'react'
import { TouchableOpacity, View, Linking } from 'react-native'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import CardContent from '@mui/material/CardContent'


export default class About extends React.Component{
  render(){
    return(
      <View>
        <Card style={{backgroundColor: 'coral'}}>
          <CardContent>
             <Typography sx={{ fontSize: 30 }} paragraph>This is a news app. this app was created using New York Times api and react native.</Typography>
             <Typography sx={{ fontSize: 30 }} paragraph>Only the abstract of the articles is given. To read full articles, sign up for The New York Times. The number of articles that can be viewed is also limited.</Typography>
             <TouchableOpacity style={{fontSize: 30, fontfamily: 'Arial'}} onPress={() => {Linking.openURL('https://www.nytimes.com/')}}>Sign up here</TouchableOpacity>
          </CardContent>
        </Card>
      </View>
    )
  }
}
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
        <Card>
          <CardContent>
             <Typography sx={{ fontSize: 16 }} paragraph>This is a news app. this app was created using New York Times api and react native.</Typography>
             <Typography sx={{ fontSize: 16 }} paragraph>Only the abstract of the articles is given below, to read full articles, sign up for The New York Times</Typography>
             <TouchableOpacity onPress={() => {Linking.openURL('https://www.nytimes.com/')}}>Sign up here</TouchableOpacity>
          </CardContent>
        </Card>
      </View>
    )
  }
}
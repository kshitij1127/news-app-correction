import React from 'react'
import { View } from 'react-native'
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
             <Typography sx={{ fontSize: 16 }} paragraph>this is a news app. this app was created using bing news api and react native.</Typography>
          </CardContent>
          <Button onClick={() => {this.props.navigation.navigate('Welcome')}}>go back</Button>
        </Card>
      </View>
    )
  }
}
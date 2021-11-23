import React from 'react'
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import { View } from 'react-native';
import CardContent from '@mui/material/CardContent'


export default class Welcome extends React.Component {
    render() {
        return(
          <View style={{
            marginTop: 100,
          }}>
          <Card  style={{marginBottom: 100}}>
           <CardContent>
              <Typography sx={{ fontSize: 20 }} color="text.primary">Welcome To The News App!</Typography>                    
           </CardContent>
          </Card>
            <Card>
                <CardContent>
                    <Button size="small" onClick={() => {
                        this.props.navigation.navigate('Feed')
                    }}>Go to the Feed</Button>
                </CardContent>
            </Card>

            <Card>
                <CardContent>
                    <Button size="small" onClick={() => {
                        this.props.navigation.navigate('About')
                    }}>about this app</Button>
                </CardContent>
            </Card>
            </View>
        )
    }
}
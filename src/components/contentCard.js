import React from 'react';
import { Card, Divider} from 'semantic-ui-react'

const ContentCard = ({weatherData}) => (
  <Card centered
    color='purple'
    raised='true'
  >
    <Card.Content>
        <Card.Header className="text-card">Sunrise and Sunset times in your location</Card.Header>
        <Divider section />
        <Card.Description>
        <p className="text-card">Sunrise: {weatherData.results.sunrise}</p>
        <p className="text-card">Sunset: {weatherData.results.sunset}</p>
        </Card.Description>
        
    </Card.Content>
  </Card>
)

export default ContentCard;
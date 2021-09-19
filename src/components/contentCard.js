import React from 'react';
import { Card, Divider } from 'semantic-ui-react'

const ContentCard = ({weatherData}) => (
  <Card centered
    color='purple'
  >
    <Card.Content>
        <Card.Header className="header">Sunrise and Suntime hours in your city</Card.Header>
        <Divider section />
        <Card.Description>
        <p>Sunrise: {weatherData.results.sunrise}</p>
        <p>Sunset: {weatherData.results.sunset}</p>
        </Card.Description>
        
    </Card.Content>
  </Card>
)

export default ContentCard;
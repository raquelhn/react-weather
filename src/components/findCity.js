import React from 'react';
import { Header,Icon,Search } from 'semantic-ui-react';
import {useState} from "react";

const FindCity = () => {
     const [locationSearch, setLocationSearch] = useState('');

    return(
    <>
   <Header icon>
        <Icon inverted color='blue' size='mini' name='search'/>
         Find City
    </Header>

    <Search placeholder='Search another city...' onChange={e => setLocationSearch(e.target.value)}/>
    </>
    )
    
}

export default FindCity;
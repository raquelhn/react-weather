import React from 'react';
import { Button } from 'semantic-ui-react'

const RefreshButton = () => {
    const refresh=()=>{
        window.location.reload();
    }

    return(
        <div>
        <Button className="button" inverted color='blue' circular icon='refresh' onClick={refresh} />
        </div>
    )
}

export default RefreshButton;
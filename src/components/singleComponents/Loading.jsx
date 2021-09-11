import React from 'react'
import CircularProgress from '@material-ui/core/CircularProgress';


const Loading = () => {
    return (
        <div id='loading_screen'>
            <CircularProgress color="secondary" />
        </div>
    )
}

export default Loading

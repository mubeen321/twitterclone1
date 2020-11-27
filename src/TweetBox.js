import React from 'react';
import './TweetBox.css'
import {Avatar,Button} from '@material-ui/core'

function TweetBox(){
    return(
<div className="tweetBox">
    <form>
        <div className="tweetBox-input">
        <Avatar src="https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg" />
    <input placeholder="Whats happening" type="text" />
    </div>
    <input placeholder="Optional enter URL" className="tweetBox-Url" type="text" />

    <Button className="tweetBox-button">Tweet</Button>
    
    </form>
</div>
    )
}

export default TweetBox
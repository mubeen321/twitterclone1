import React from 'react';
import './Widget.css';
import {
    TwitterTimelineEmbed,
    TwitterShareButton,
    TwittertweetButton,
    TwitterTweetEmbed
} from  'react-twitter-embed'
import SearchIcon from '@material-ui/icons/Search'

function Widget(){
    return(
        <div className="widget">
            <div className="widget-input">

<SearchIcon className="widget-searchIcon"/>

<input type="text" placeholder="Search Twitter" /> 
     </div>

     <div className="widget-widgetContainer">
         <h2>What,s Happpening  </h2>

         <TwitterTweetEmbed tweetId={933354946111705097}/>
         <TwitterTimelineEmbed 
         sourceType="profile"
         screenName="saurabhnemade"
         option={{height:400}}
         />

         <TwitterShareButton 
         url={"https://facebook.com/saurabhnemade"}
         option={{text  :"reactjs is awesome",via:"twitter-clone"}}/>
     </div>
        </div>
    )
}

export default Widget;
import { Avatar } from '@material-ui/core'
import React from 'react'
import './Post.css'
import  VerifiedUserIcon  from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline"
import RepeatIcon from '@material-ui/icons/Repeat'
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder'
import PublishIcon from '@material-ui/icons/Publish'

function Post({ displayname,username,verified,text,image,avatar}){
    return(
       
        <div className="post">
            <div className="post-avatar">

            <Avatar src="https://cdn2.vectorstock.com/i/1000x1000/20/76/man-avatar-profile-vector-21372076.jpg" />
            </div>

             <div className="post-body">
                <div className="post-header">
                    <div className="post-header-text"> 
                    <h3>Mubeen Chughtai{" "} 
                    {/* <VerifiedUserIcon /> */}
                    <span className="header-special">    
                        <VerifiedUserIcon className="post-badge" />

                        @chughtai5
                        </span></h3>
                    </div>
                    <div className="post-header-description">
                        <p>Today I,m using Twitter Clone</p>
                    </div>
                    
                </div>
                 <img src="https://media.giphy.com/media/26hkhPJ5hmdD87HYA/giphy.gif" alt=""/>

                 <div className="post-footer">
                     <ChatBubbleOutlineIcon fontSize="small"/>
                     <RepeatIcon fontSize="small"/>
                     <FavoriteBorderIcon fontSize="small"/>
                     <PublishIcon fontSize="small"/>
                     </div> 
         </div>





        </div>
    )
}

export default Post;
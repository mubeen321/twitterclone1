import { Avatar } from '@material-ui/core'
import React from 'react'
import './Post.css'
import  VerifiedUserIcon  from "@material-ui/icons/VerifiedUser";

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
                    <span>    
                        <VerifiedUserIcon />
                        </span>@chughtai5</h3>
                    </div>
                    <div className="post-header-description">
                        <p>Today I,m using Twitter Clone</p>
                    </div>
                    
                </div>
                 {/* <img src="https://i.pinimg.com/originals/36/f9/6f/36f96fdaeb786fd601eb4e34b6b38ff7.jpg" alt=""></img>  */}
         </div>





        </div>
    )
}

export default Post;
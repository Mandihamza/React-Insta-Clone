import React from 'react';
import './PostContainer.css'
import UploadIcon from './UploadIcon';



function PostContainer(props) {
    return (
        <div className='post-container'> 
            
            <div className="post-header">
                <img src="https://source.unsplash.com/random/1" alt="Profile"/>
                <h1>Display Name</h1>
            </div>
            
            <div className="post-img">
                <img src="https://source.unsplash.com/random/2" alt="Post img"/>
            </div>
            
            <div className="post-social-icons">
                <i class="far fa-heart fa-lg" />
                <i class="far fa-comment fa-flip-horizontal fa-lg" />
                <UploadIcon />
            </div>

            <div className="post-interactions">
                <div className="likes-count">
                    <p>369</p>
                </div>
                <p>likes</p>
            </div>
        </div>
    );
}

export default PostContainer;
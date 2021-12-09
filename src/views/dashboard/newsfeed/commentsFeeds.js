import React, { useState, useEffect } from 'react'
import { Col, Dropdown, OverlayTrigger, Tooltip } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Card from '../../../components/Card'
import { CommentRepository, FileRepository, DataStatus } from "@amityco/js-sdk";
import CustomToggle from '../../../components/dropdowns'
import ShareOffcanvas from '../../../components/share-offcanvas'


import user2 from '../../../assets/images/user/02.jpg'
import user3 from '../../../assets/images/user/03.jpg'

const CommentsFeeds = ({ commentDetails }) => {

    useEffect(() => {
        console.log(commentDetails)
    }, [])

    return (
        <ul className="post-comments list-inline p-0 m-0">
            <li className="mb-2">
                <div className="d-flex">
                    <div className="user-img">
                        <img src={user2} alt="user1" className="avatar-35 rounded-circle img-fluid" />
                    </div>
                    <div className="comment-data-block ms-3">
                        <h6>{commentDetails.user.displayName}</h6>
                        <p className="mb-0">{commentDetails.data.text}</p>
                        <div className="d-flex flex-wrap align-items-center comment-activity">
                            <Link to="#">like</Link>
                            {//    <Link to="#">reply</Link>
                            }
                            {// <Link to="#">translate</Link>
                            }
                            <span> {commentDetails.editedAt.toString()}</span>
                        </div>
                    </div>
                </div>
            </li>
        </ul>)

}

export { CommentsFeeds }
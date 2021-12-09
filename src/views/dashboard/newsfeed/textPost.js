import React, { useState, useEffect } from 'react'
import { Col, Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { FileRepository, DataStatus, UserRepository, CommentRepository } from "@amityco/js-sdk";
import CustomToggle from '../../../components/dropdowns'
import ShareOffcanvas from '../../../components/share-offcanvas'
import { CommentsFeeds } from './commentsFeeds';
//image
import user4 from '../../../assets/images/user/04.jpg'

const TextPostCard = ({ postDetail }) => {
    const [avatarFileUrl, setAvatarFileUrl] = useState()
    const [commentsList, setCommentsList] = useState([])
    const [disPlayName, setDisPlayName] = useState()

    useEffect(() => {
        getUserInfo(postDetail.postedUserId).then(data => {
            setDisPlayName(data.displayName)
            if (data.avatarFileId) getFileUrl(data.avatarFileId).then((data) => { setAvatarFileUrl(data) })
        })
        getComments(postDetail.postId).then((data) => {
            setCommentsList(data)
        })
    }, [])

    const getComments = async (postId) => {
        return new Promise(resolve => {
            const comments = CommentRepository.queryComments({
                referenceType: 'post',
                referenceId: postId,
                first: 5 // or last: 5
            });

            comments.on('dataUpdated', data => {
                // reload comment table
                resolve(data)
            });

            comments.on('dataError', error => {
                console.log('Comment LiveCollections can not query/get/sync data from server');
            });
        })
    }

    async function getFileUrl(fileId) {
        return new Promise(resolve => {
            const liveObject = FileRepository.getFile(fileId);
            if (liveObject.dataStatus === DataStatus.Fresh) {
                resolve(liveObject.model.fileUrl);
            }
        })
    }

    async function getUserInfo(userId) {
        return new Promise(resolve => {
            const userObject = UserRepository.getUser(userId);
            if (userObject.dataStatus === DataStatus.Fresh) {
                resolve(userObject.model);
            }
        })
    }

    return (
        <Col sm={12}>
            <div className="card card-block card-stretch card-height">
                <div className="card-body">
                    <div className="user-post-data">
                        <div className="d-flex justify-content-between">
                            <div className="me-3">
                                <img className="rounded-circle img-fluid" style={{ width: 80, heigh: 80 }} src={avatarFileUrl ? avatarFileUrl : user4} alt="" />
                            </div>
                            <div className="w-100">
                                <div className=" d-flex  justify-content-between">
                                    <div>
                                        <h5 className="mb-0 d-inline-block">{disPlayName}</h5>
                                        <p className="mb-0 text-primary">{postDetail.editedAt.toString()}</p>
                                    </div>
                                    <div className="card-post-toolbar">
                                        <Dropdown>
                                            <Dropdown.Toggle className="bg-transparent border-white">
                                                <i className="ri-more-fill"></i>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu m-0 p-0">
                                                <Dropdown.Item className=" p-3" to="#">
                                                    <div className="d-flex align-items-top">
                                                        <div className="h4">
                                                            <i className="ri-save-line"></i>
                                                        </div>
                                                        <div className="data ms-2">
                                                            <h6>Save Post</h6>
                                                            <p className="mb-0">Add this to your saved items</p>
                                                        </div>
                                                    </div>
                                                </Dropdown.Item>
                                                <Dropdown.Item className="p-3" to="#">
                                                    <div className="d-flex align-items-top">
                                                        <i className="ri-close-circle-line h4"></i>
                                                        <div className="data ms-2">
                                                            <h6>Hide Post</h6>
                                                            <p className="mb-0">See fewer posts like this.</p>
                                                        </div>
                                                    </div>
                                                </Dropdown.Item>
                                                <Dropdown.Item className=" p-3" to="#">
                                                    <div className="d-flex align-items-top">
                                                        <i className="ri-user-unfollow-line h4"></i>
                                                        <div className="data ms-2">
                                                            <h6>Unfollow User</h6>
                                                            <p className="mb-0">Stop seeing posts but stay friends.</p>
                                                        </div>
                                                    </div>
                                                </Dropdown.Item>
                                                <Dropdown.Item className=" p-3" to="#">
                                                    <div className="d-flex align-items-top">
                                                        <i className="ri-notification-line h4"></i>
                                                        <div className="data ms-2">
                                                            <h6>Notifications</h6>
                                                            <p className="mb-0">Turn on notifications for this post</p>
                                                        </div>
                                                    </div>
                                                </Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mt-3">
                        <p>{postDetail.data.text}</p>
                    </div>
                    <div className="comment-area mt-3">
                        <div className="d-flex justify-content-between align-items-center flex-wrap">
                            <div className="like-block position-relative d-flex align-items-center">
                                <div className="d-flex align-items-center">
                                    {/*   <div className="like-data">
                                        <Dropdown>
                                            <Dropdown.Toggle as={CustomToggle} >
                                                <img src={icon1} className="img-fluid" alt="" />
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className=" py-2">
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Like</Tooltip>} className="ms-2 me-2" ><img src={icon1} className="img-fluid" alt="" /></OverlayTrigger>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Love</Tooltip>} className="me-2" ><img src={icon2} className="img-fluid" alt="" /></OverlayTrigger>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Happy</Tooltip>} className="me-2" ><img src={icon3} className="img-fluid" alt="" /></OverlayTrigger>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>HaHa</Tooltip>} className="me-2" ><img src={icon4} className="img-fluid" alt="" /></OverlayTrigger>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Think</Tooltip>} className="me-2" ><img src={icon5} className="img-fluid" alt="" /></OverlayTrigger>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Sade</Tooltip>} className="me-2" ><img src={icon6} className="img-fluid" alt="" /></OverlayTrigger>
                                                <OverlayTrigger placement="top" overlay={<Tooltip>Lovely</Tooltip>} className="me-2" ><img src={icon7} className="img-fluid" alt="" /></OverlayTrigger>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div> */}
                                    <div className="total-like-block ms-2 me-3">
                                        <Dropdown>
                                            <Dropdown.Toggle as={CustomToggle} id="post-option" >
                                                {postDetail.reactionsCount + " " + "Likes"}
                                            </Dropdown.Toggle>
                                        </Dropdown>
                                    </div>
                                </div>
                                <div className="total-comment-block">
                                    <Dropdown>
                                        <Dropdown.Toggle as={CustomToggle} id="post-option" >
                                            {postDetail.commentsCount.toString() + " " + "Comments"}
                                        </Dropdown.Toggle>
                                    </Dropdown>
                                </div>
                            </div>
                            { /*    <ShareOffcanvas /> */}
                        </div>
                        <hr />
                        {(commentsList.length > 0) ?
                            commentsList.map((item) => {
                                return <CommentsFeeds commentDetails={item} />
                            }) : null
                        }
                        <form className="comment-text d-flex align-items-center mt-3" >
                            <input type="text" className="form-control rounded" placeholder="Enter Your Comment" />
                            <div className="comment-attagement d-flex">
                                <Link to="#"><i className="ri-link me-3"></i></Link>
                                <Link to="#"><i className="ri-user-smile-line me-3"></i></Link>
                                <Link to="#"><i className="ri-camera-line me-3"></i></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Col>)
}

export { TextPostCard }
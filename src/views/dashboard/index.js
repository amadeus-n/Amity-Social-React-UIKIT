import React, { useState, useEffect } from 'react'
import { Row, Col, Container, Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Card from '../../components/Card'
import CustomToggle from '../../components/dropdowns'

//image
import user01 from '../../assets/images/user/01.jpg'
import user2 from '../../assets/images/user/02.jpg'
import s4 from '../../assets/images/page-img/s4.jpg'
import s5 from '../../assets/images/page-img/s5.jpg'
import img42 from '../../assets/images/page-img/42.png'
import img9 from '../../assets/images/small/img-1.jpg'
import img10 from '../../assets/images/small/img-2.jpg'
import loader from '../../assets/images/page-img/page-load-loader.gif'

import { CommunityRepository, PostRepository, ReactionRepository } from '@amityco/js-sdk'
import { CommunityCard } from './community'
import { NewsFeeds } from './newsfeed'

const Index = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [newsFeedsList, setNewsFeedsList] = useState([])
    const [communitiesList, setCommunitiesList] = useState([])

    useEffect(() => {
        const getCommunity = (() => {
            const trendingLiveCollection = CommunityRepository.getTopTrendingCommunities();
            trendingLiveCollection.on('dataUpdated', models => {
                setCommunitiesList(models);
            });
        })
        getCommunity();
    }, [])

    useEffect(() => {
        const getNewsFeeds = (() => {
            const FeedsLiveCollection = PostRepository.queryAllPosts();
            FeedsLiveCollection.once('dataUpdated', models => {
                setNewsFeedsList(models)
            });
        })
        getNewsFeeds()

        const getReaction = (() => {
            const liveCollection = ReactionRepository.queryReactions({ referenceId: 'b7b885c30df8498f9d7d84f11f1ea0cf', referenceType: 'post' });
            liveCollection.on('dataUpdated', reactions => {
                // reactions are successfully fetched
                console.log(reactions)
            });
        });

        getReaction()
    }, [])

    return (
        <>
            <Container>
                <Row>
                    <Col lg={8} className="row m-0 p-0">
                        {(newsFeedsList.length > 0) ?
                            <NewsFeeds postFeeds={newsFeedsList} /> : null
                        }
                    </Col>
                    {(communitiesList.length > 0) ?
                        <Col lg={4}>
                            <Card>
                                <div className="card-header d-flex justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title">Community</h4>
                                    </div>
                                </div>
                                <Card.Body>
                                    <ul className="media-story list-inline m-0 p-0">
                                        <li className="d-flex mb-3 align-items-center">
                                            <i className="ri-add-line"></i>
                                            <div className="stories-data ms-3">
                                                <h5>Creat Community</h5>
                                            </div>
                                        </li>
                                        {(communitiesList.length > 0) ?
                                            communitiesList.map((item, i) => {
                                                if (i < 3)
                                                    return <CommunityCard key={i} communitiesList={item} />
                                            })
                                            : null}
                                    </ul>
                                </Card.Body>
                            </Card>
                            <Card>
                                <div className="card-header d-flex justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title">Events</h4>
                                    </div>
                                    <div className="card-header-toolbar d-flex align-items-center">
                                        <Dropdown>
                                            <Dropdown.Toggle as={CustomToggle} id="dropdownMenuButton" data-bs-toggle="dropdown" aria-expanded="false" role="button">
                                                <i className="ri-more-fill h4"></i>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className=" dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                                <Dropdown.Item href="#"><i className="ri-eye-fill me-2"></i>View</Dropdown.Item>
                                                <Dropdown.Item href="#"><i className="ri-delete-bin-6-fill me-2"></i>Delete</Dropdown.Item>
                                                <Dropdown.Item href="#"><i className="ri-pencil-fill me-2"></i>Edit</Dropdown.Item>
                                                <Dropdown.Item href="#"><i className="ri-printer-fill me-2"></i>Print</Dropdown.Item>
                                                <Dropdown.Item href="#"><i className="ri-file-download-fill me-2"></i>Download</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                                <Card.Body>
                                    <ul className="media-story list-inline m-0 p-0">
                                        <li className="d-flex mb-4 align-items-center ">
                                            <img src={s4} alt="story1" className="rounded-circle img-fluid" />
                                            <div className="stories-data ms-3">
                                                <h5>Web Workshop</h5>
                                                <p className="mb-0">1 hour ago</p>
                                            </div>
                                        </li>
                                        <li className="d-flex align-items-center">
                                            <img src={s5} alt="story2" className="rounded-circle img-fluid" />
                                            <div className="stories-data ms-3">
                                                <h5>Fun Events and Festivals</h5>
                                                <p className="mb-0">1 hour ago</p>
                                            </div>
                                        </li>
                                    </ul>
                                </Card.Body>
                            </Card>
                            <Card>
                                <div className="card-header d-flex justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title">Upcoming Birthday</h4>
                                    </div>
                                </div>
                                <Card.Body>
                                    <ul className="media-story list-inline m-0 p-0">
                                        <li className="d-flex mb-4 align-items-center">
                                            <img src={user01} alt="story3" className="rounded-circle img-fluid" />
                                            <div className="stories-data ms-3">
                                                <h5>Anna Sthesia</h5>
                                                <p className="mb-0">Today</p>
                                            </div>
                                        </li>
                                        <li className="d-flex align-items-center">
                                            <img src={user2} alt="story-img" className="rounded-circle img-fluid" />
                                            <div className="stories-data ms-3">
                                                <h5>Paul Molive</h5>
                                                <p className="mb-0">Tomorrow</p>
                                            </div>
                                        </li>
                                    </ul>
                                </Card.Body>
                            </Card>
                            <Card>
                                <div className="card-header d-flex justify-content-between">
                                    <div className="header-title">
                                        <h4 className="card-title">Suggested Pages</h4>
                                    </div>
                                    <div className="card-header-toolbar d-flex align-items-center">
                                        <Dropdown>
                                            <Dropdown.Toggle as={CustomToggle}>
                                                <i className="ri-more-fill h4"></i>
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu className="dropdown-menu-right" aria-labelledby="dropdownMenuButton01">
                                                <Dropdown.Item href="#"><i className="ri-eye-fill me-2"></i>View</Dropdown.Item>
                                                <Dropdown.Item href="#"><i className="ri-delete-bin-6-fill me-2"></i>Delete</Dropdown.Item>
                                                <Dropdown.Item href="#"><i className="ri-pencil-fill me-2"></i>Edit</Dropdown.Item>
                                                <Dropdown.Item href="#"><i className="ri-printer-fill me-2"></i>Print</Dropdown.Item>
                                                <Dropdown.Item href="#"><i className="ri-file-download-fill me-2"></i>Download</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </div>
                                </div>
                                <Card.Body>
                                    <ul className="suggested-page-story m-0 p-0 list-inline">
                                        <li className="mb-3">
                                            <div className="d-flex align-items-center mb-3">
                                                <img src={img42} alt="story-img" className="rounded-circle img-fluid avatar-50" />
                                                <div className="stories-data ms-3">
                                                    <h5>Iqonic Studio</h5>
                                                    <p className="mb-0">Lorem Ipsum</p>
                                                </div>
                                            </div>
                                            <img src={img9} className="img-fluid rounded" alt="Responsive" />
                                            <div className="mt-3"><Link to="#" className="btn d-block"><i className="ri-thumb-up-line me-2"></i> Like Page</Link></div>
                                        </li>
                                        <li>
                                            <div className="d-flex align-items-center mb-3">
                                                <img src={img42} alt="story-img" className="rounded-circle img-fluid avatar-50" />
                                                <div className="stories-data ms-3">
                                                    <h5>Cakes & Bakes </h5>
                                                    <p className="mb-0">Lorem Ipsum</p>
                                                </div>
                                            </div>
                                            <img src={img10} className="img-fluid rounded" alt="Responsive" />
                                            <div className="mt-3"><Link to="#" className="btn d-block"><i className="ri-thumb-up-line me-2"></i> Like Page</Link></div>
                                        </li>
                                    </ul>
                                </Card.Body>
                            </Card>
                        </Col> : null}

                </Row>
            </Container>
        </>
    )
}

export default Index

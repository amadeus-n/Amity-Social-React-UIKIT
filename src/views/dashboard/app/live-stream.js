
import React, { useState } from 'react'
import { ReactFlvPlayer } from 'react-flv-player'
import '@blueprintjs/core/lib/css/blueprint.css';
import { Overlay, Classes, H3, H1, } from "@blueprintjs/core";
import { Container, Row, Col, Card, Tab, Form, Button, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ProfileHeader from '../../../components/profile-header'

// images
import gi1 from '../../../assets/images/page-img/gi-1.jpg'
import gi2 from '../../../assets/images/page-img/gi-2.jpg'
import gi3 from '../../../assets/images/page-img/gi-3.jpg'
import gi4 from '../../../assets/images/page-img/gi-4.jpg'
import gi5 from '../../../assets/images/page-img/gi-5.jpg'
import gi6 from '../../../assets/images/page-img/gi-6.jpg'
import gi7 from '../../../assets/images/page-img/gi-7.jpg'
import gi8 from '../../../assets/images/page-img/gi-8.jpg'
import gi9 from '../../../assets/images/page-img/gi-9.jpg'
import user05 from '../../../assets/images/user/05.jpg'
import user06 from '../../../assets/images/user/06.jpg'
import user07 from '../../../assets/images/user/07.jpg'
import user08 from '../../../assets/images/user/08.jpg'
import user09 from '../../../assets/images/user/09.jpg'
import user10 from '../../../assets/images/user/10.jpg'
import img1 from '../../../assets/images/page-img/profile-bg1.jpg'
import img2 from '../../../assets/images/page-img/profile-bg2.jpg'
import img3 from '../../../assets/images/page-img/profile-bg3.jpg'
import img4 from '../../../assets/images/page-img/profile-bg4.jpg'
import img5 from '../../../assets/images/page-img/profile-bg5.jpg'
import img6 from '../../../assets/images/page-img/profile-bg6.jpg'
import img7 from '../../../assets/images/page-img/profile-bg7.jpg'
import img9 from '../../../assets/images/page-img/profile-bg9.jpg'

import user1 from '../../../assets/images/user/1.jpg'
import user5 from '../../../assets/images/user/05.jpg'
import user6 from '../../../assets/images/user/06.jpg'
import user7 from '../../../assets/images/user/07.jpg'
import user8 from '../../../assets/images/user/08.jpg'
import user9 from '../../../assets/images/user/09.jpg'

const LiveStream = () => {
  const [show, setShow] = useState('')
  const [show1, setShow1] = useState('')
  const ChatSidebar = () => {
    document.getElementsByClassName('scroller')[0].classList.add('show')
  }
  const ChatSidebarClose = () => {
    document.getElementsByClassName('scroller')[0].classList.remove('show')
  }

  return (

    <>

      <div id="content-page" className="content-page">
        <Container>
    
         
          <div className="chat-content scroller" style={{ position: 'absolute', zIndex: '2' }}>
            <div className="chat d-flex other-user">
              <div className="chat-user">
                <Link className="avatar m-0" to="">
                  <img src={user1} alt="avatar" className="avatar-35 " />
                </Link>
                <span className="chat-time mt-1">6:45</span>
              </div>
              <div className="chat-detail">
                <div className="chat-message">
                  <p>How can we help? We're here for you! 😄</p>
                </div>
              </div>
            </div>
            <div className="chat chat-left">
              <div className="chat-user">
                <Link className="avatar m-0" to="">
                  <img src={user5} alt="avatar" className="avatar-35 " />
                </Link>
                <span className="chat-time mt-1">6:48</span>
              </div>
              <div className="chat-detail">
                <div className="chat-message">
                  <p>Hey John, I am looking for the best admin template.</p>
                  <p>Could you please help me to find it out? 🤔</p>
                </div>
              </div>
            </div>
            <div className="chat chat d-flex other-user">
              <div className="chat-user">
                <Link className="avatar m-0" to="">
                  <img src={user1} alt="avatar" className="avatar-35 " />
                </Link>
                <span className="chat-time mt-1">6:49</span>
              </div>
              <div className="chat-detail">
                <div className="chat-message">
                  <p>Absolutely!</p>
                  <p>SocialV Dashboard is the responsive bootstrap 5 admin template.</p>
                </div>
              </div>
            </div>
            <div className="chat chat-left">
              <div className="chat-user">
                <Link className="avatar m-0" to="">
                  <img src={user5} alt="avatar" className="avatar-35 " />
                </Link>
                <span className="chat-time mt-1">6:52</span>
              </div>
              <div className="chat-detail">
                <div className="chat-message">
                  <p>Looks clean and fresh UI.</p>
                </div>
              </div>
            </div>
           
  
    
            <div className="chat chat-left">
              <div className="chat-user">
                <Link className="avatar m-0" to="">
                  <img src={user5} alt="avatar" className="avatar-35 " />
                </Link>
                <span className="chat-time mt-1">6:54</span>
              </div>
              <div className="chat-detail">
                <div className="chat-message">
                  <p>I will purchase it for sure. 👍</p>
                </div>
              </div>
            </div>
         
          </div>
          {/* <div className="chat-footer p-3 bg-white" >
            <Form className="d-flex align-items-center" action="#">
              <div className="chat-attagement d-flex">
                <Link to="#"><i className="far fa-smile pe-3" aria-hidden="true"></i></Link>
                <Link to="#"><i className="fa fa-paperclip pe-3" aria-hidden="true"></i></Link>
              </div>
              <Form.Control type="text" className="me-3" placeholder="Type your message"  />
              <Button type="submit" variant="primary d-flex align-items-center px-2"><i className="far fa-paper-plane" aria-hidden="true"></i><span className="d-none d-lg-block ms-1">Send</span></Button>
            </Form>
          </div> */}
          <div style={{
           
          }}>
            
       
            <div style={{ position: 'relative', zIndex: '1' }}>
              <ReactFlvPlayer
                url="http://live-stream.upstra-china.cc/5fca0b4aa6a6c18d7615886c/6a8590e3df0842431cdf10fb2fcf9230.flv?auth_key=1643371249-0-0-48b4b812954035aec289813e2dc4278d"
      
             
                isMuted={true}
              />
            </div>

          </div>
        </Container>
      </div>
    </>


  )

}

export default LiveStream;
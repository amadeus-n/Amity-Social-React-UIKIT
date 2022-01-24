import React from 'react'
import { Container} from 'react-bootstrap'
import Card from '../../../components/Card'
import {Link} from 'react-router-dom'
import ProfileHeader from '../../../components/profile-header'
import {ReactFlvPlayer} from 'react-flv-player'

const LiveStream =() =>{
    return(<div>
        <ReactFlvPlayer
          url = "rtmp://live-ingest.upstra-china.cc/5fca0b4aa6a6c18d7615886c/1006af8fdeba02fd58bb62edd4d4de90?auth_key=1643031481-0-0-ef30072e1e8b5c51e26813baa294b9e5"
          heigh = "800px"
          width = "800px"
          isMuted={true}
        />
      </div>
  )

}

export default LiveStream;
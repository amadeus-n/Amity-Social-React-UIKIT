import React, { useState, useEffect } from 'react'
import { TextPostCard } from './textPost';
import { ImagePostCard } from './imagePost';
import { VideoPostCard } from './videoPost';
import { FileRepository, DataStatus } from "@amityco/js-sdk";

const NewsFeeds = ({ postFeeds }) => {
    const [newsFeed, setNewsFeeds] = useState([])

    useEffect(() => {
        let temp = []
        postFeeds.map((item, i) => {
            if (item.children.length > 0) {
       //         console.log(item)
            } else {
                temp.push(<TextPostCard key={i} postDetail={item} />)
            }
        })
        setNewsFeeds(temp);
    }, [])

    async function getFileUrl(fileId) {
        return new Promise(resolve => {
            const liveObject = FileRepository.getFile(fileId);
            if (liveObject.dataStatus === DataStatus.Fresh) {
                resolve(liveObject.model.fileUrl);
            }
        })
    }

    return (<>
        {(newsFeed.length > 0) ?
            newsFeed : null
        }
    </>)
}

export { NewsFeeds }
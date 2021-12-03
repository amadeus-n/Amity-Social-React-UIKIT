import React, { useState, useEffect } from 'react'
import s2 from '../../../assets/images/page-img/s2.jpg'
import { FileRepository, DataStatus } from "@amityco/js-sdk";

const CommunityCard = ({ communitiesList }) => {
    const [fileUrl, setFileUrl] = useState()

    useEffect(() => {
        getFileUrl(communitiesList.avatarFileId).then((data) =>
            setFileUrl(data))
    }, [])

    async function getFileUrl(fileId) {
        return new Promise(resolve => {
            const liveObject = FileRepository.getFile(fileId);
            if (liveObject.dataStatus === DataStatus.Fresh) {
                resolve(liveObject.model.fileUrl);
            }
        })
    }

    return (<li className="d-flex mb-3 align-items-center active">
        <img src={fileUrl ? fileUrl : s2} alt="story-img" className="rounded-circle img-fluid" />
        <div className="stories-data ms-3">
            <h5>{communitiesList.displayName}</h5>
            <p className="mb-0">{communitiesList.description}</p>
        </div>
    </li>)
}

export { CommunityCard }
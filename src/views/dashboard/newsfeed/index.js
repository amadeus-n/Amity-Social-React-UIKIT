import React, { useState, useEffect } from 'react'
import { TextPostCard } from './textPost';
import { ImagePostCard } from './imagePost';
import { VideoPostCard } from './videoPost';
import { FileRepository, DataStatus } from "@amityco/js-sdk";
import { CommunityRepository } from "@amityco/js-sdk";
import { getCommunities } from "@amityco/ts-sdk";

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
        getCommu()
        //  addRolese();
        // banUser();
        setNewsFeeds(temp);
    }, [])

    const banUser = async () => {
        try {
            await CommunityRepository.banUsers({
                communityId: '8bf278c954cdbdbe44908865e6b51217',
                userIds: ['userid1234'],
            });
        } catch (error) {
            console.log(error);
        }
    }

    const addRolese = async () => {
        CommunityRepository.addRole({
            communityId: '8bf278c954cdbdbe44908865e6b51217',
            userIds: ['SiriusUser'],
            roles: ['community-moderator'],
        })
    }

    const getCommu = async () => {
        return new Promise(resolve => {
            const members = CommunityRepository.allCommunitiesWithFilters({
                categoryId: 'f1fbdb0fb1615031306eeeeaa170cc4d',
                sortBy: 'lastCreated'
            });
            members.on('dataUpdated', models => {
                // reload member table
                console.log("dataUpdated")
                console.log(models)
            });
            members.on('dataError', error => {
                console.log(error.code)
                if (error.code !== 'YYYYYY') {
                    console.log(error.code)
                }
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

    return (<>
        {(newsFeed.length > 0) ?
            newsFeed : null
        }
    </>)
}

export { NewsFeeds }
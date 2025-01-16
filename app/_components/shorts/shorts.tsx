'use client'

import Lightbox from 'yet-another-react-lightbox'
import {Video} from 'yet-another-react-lightbox/plugins'
import 'yet-another-react-lightbox/styles.css'
import React, {useState} from "react";
import {federalChains, introduction, potentialClients, publicCatering, tenants} from "@/app/_const/video-urls";
import federalChainsPoster from '@/public/shorts-posters/federal-chains.png'
import potentialClientsPoster from '@/public/shorts-posters/potential-clients.png'
import tenantsPoster from '@/public/shorts-posters/tenants.png'
import introductionPoster from '@/public/shorts-posters/introduction.png'
import publicCateringPoster from '@/public/shorts-posters/public-catering.png'
import Image from "next/image";
import styles from './shorts.module.css'

const videos = [
    {
        title: "Как распознать клиента?",
        url: potentialClients,
        poster: potentialClientsPoster,
        width: 720,
        height: 1280
    },
    {
        title: "Как работать с арендаторами?",
        url: tenants,
        poster: tenantsPoster,
        width: 720,
        height: 1280
    },
    {
        title: "Работа с федеральными сетями",
        url: federalChains,
        poster: federalChainsPoster,
        width: 720,
        height: 1280
    },
    {
        title: "Тяжело ли выбрать место под общепит?",
        url: publicCatering,
        poster: publicCateringPoster,
        width: 720,
        height: 1280
    },
    {
        title: "Приветственный ролик от Рафа",
        url: introduction,
        poster: introductionPoster,
        width: 1280,
        height: 720
    },
]

type Props = {
    open: boolean
    index?: number
    onClose: () => void
}

function VideoLightbox({open, index = 0, onClose}: Props) {
    return (
        <Lightbox
            open={open}
            close={onClose}
            plugins={[Video]}
            index={index}
            slides={videos?.map((video) => ({
                height: video.height,
                width: video.width,
                type: 'video',
                sources: [
                    {
                        src: video.url,
                        type: 'video/mp4',
                    },
                ],
            }))}
        />
    )
}


export function Shorts() {
    const [index, setIndex] = useState(0)
    const [open, setOpen] = useState(false)

    return (
        <div className='container'>
            <div className={styles.container}>
                <h2 className='title-1'>Эксклюзив от авторов курса</h2>
                <section className={styles.slider}>
                    {videos.map((video, index) => (
                        <div className={styles.posterContainer} onClick={() => {
                            setOpen(true)
                            setIndex(index)
                        }} key={video.title}>
                            <Image
                                src={video.poster}
                                alt={video.title}
                                sizes={'(max-width: 768px) 84px, 128px'}
                                className={styles.poster}
                            />
                            <div className={styles.posterTitle}>{video.title}</div>
                        </div>
                    ))}
                </section>
                <VideoLightbox open={open} index={index} onClose={() => setOpen(false)}/>
            </div>
        </div>
    )
}

import React from 'react'
import { Container } from '../container/Container'
import { Typography } from '../../system-design/Typography/typography'
import Image from 'next/image'
import { footerApplicationLinks } from "./app-link"
import { v4 as uuidv4 } from "uuid"
import { Activelink } from './Active-link'

const Footer = () => {

    const currentyear = new Date().getFullYear()

    const footernavigationlist = footerApplicationLinks.map((item, index) => {
        return (
            <div key={uuidv4()}>{item.label}</div>
        )
    })

    return (
        <div className='bg-gray py-8'>
            <Container className="flex justify-between pt-4">
                <div className='flex flex-col items-center gap-2'>
                    <Typography
                        variant={"caption1"}
                        theme={"white"}
                        weight={"medium"}
                        Component={"span"}
                    >
                        Sagar dabas
                    </Typography>
                    <Typography
                        variant={"caption3"}
                        theme={"gray"}
                        Component={"span"}

                    >
                        Check out for collabrotion
                    </Typography>
                    <a className='py-8' href="https://github.com/sagardev09" target='_blank'>
                        <Image src={"/assets/svg/github.svg"}
                            width={229}
                            height={216}
                            alt='' />
                    </a>
                </div>
                <div className=''>
                    <FooterLink />
                </div>
            </Container>
            <Container className={"pt-9 pb-11 space-y-11"}>
                <hr className='text-gray-800' />
                <div className='flex items-center justify-between'>
                    <Typography Component={"span"} variant={"caption4"} theme={"gray"}>
                        {` Copyright @ ${currentyear} | developed by @sagardev`}
                    </Typography>
                    <div></div>
                </div>
            </Container>
        </div>
    )
}

export default Footer


const FooterLink = () => {

    const footernavigationlist = footerApplicationLinks.map((item) => {
        return (
            <Activelink key={uuidv4()} href={item.baseUrl}>{item.label}</Activelink>
        )
    })

    return (
        <div className='min-w-[190px]'>
            <Typography
                theme={"white"}
                variant={"caption2"}
                Component={"span"}
                className={"pb-5"}
            >

            </Typography>
            <Typography
                theme={"gray"}
                variant={"caption3"}
                Component={"span"}
                className={"space-y-4 flex flex-col"}
            >
                {footernavigationlist}
            </Typography>
        </div>
    )
}
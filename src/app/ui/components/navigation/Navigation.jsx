import React from 'react'
import { Container } from '../container/Container'
import { Logo } from '../../system-design/logo/Logo'
import { Typography } from '../../system-design/Typography/typography'
import { Button } from '../../system-design/button/button'
import Link from 'next/link'
import { Activelink } from './Active-link'

const Navigation = () => {
    return (
        <div className='border-b-2 border-gray-400'>
            <Container className={"py-1.5 flex items-center justify-between gap-7"}>
                <Link href={"/"}>
                    <div className='flex items-center gap-2.5'>
                        <Logo size='small' />
                        <div className='flex flex-col'>
                            <div className='text-gray font-extrabold text-[24px]'>
                                We Code
                            </div>
                            <Typography variant={"caption4"} theme={"gray"} Component={"span"}>
                                Evolving enthusiast to pro coder.
                            </Typography>
                        </div>
                    </div>
                </Link>
                <div className='flex items-center gap-7'>
                    <Typography variant={"caption3"} Component={"div"} className={"flex items-center gap-7"}>
                        <Activelink href={"/projects"}>Projects</Activelink>
                        <Activelink href={"/blog"}>Blogs</Activelink>
                        <Activelink href={"/contact"}>Contact</Activelink>
                    </Typography>
                    <div className='flex items-center gap-2'>
                        <Button size='small'>Log in</Button>
                        <Button size='small' variant='secondary'>Join</Button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Navigation
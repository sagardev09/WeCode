"use client"
import Image from 'next/image'
import { Typography } from './ui/system-design/Typography/typography'
import { Button } from './ui/system-design/button/button'
import { BiAdjust, BiAlarm } from "react-icons/bi";
import { Spinner } from './ui/system-design/spinner/Spinner';
import { Logo } from './ui/system-design/logo/Logo';

export default function Home() {
  return (
    <main>
      <Typography theme={"black"} variant={"display"} Component={"div"}>
        We code
      </Typography>
      <Typography theme={"primary"} variant={"h1"} Component={"div"}>
        We code
      </Typography>
      <Typography theme={"secondary"} variant={"lead"} Component={"div"}>
        We code
      </Typography>
      <Typography theme={"gray"} variant={"caption4"} Component={"div"}>
        We code
      </Typography>
      <Button size='small' isLoading={true}>button</Button>
      <Button isLoading={true} icon={{ icon: BiAlarm }} iconPosition='left' size='small' variant='secondary'>button</Button>
      <Button isLoading={true} size='small' variant='outline'>button</Button>
      <Button size='small' iconTheme={"gray"} isLoading={true} variant='ico' icon={{ icon: BiAdjust }} />

      <Spinner size='small' />
      <Spinner size='medium' />
      <Spinner size='large' />
      <Logo size='small' />

    </main>
  )
}

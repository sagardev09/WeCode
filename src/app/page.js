"use client"
import Image from 'next/image'
import { Typography } from './ui/system-design/Typography/typography'
import { Button } from './ui/system-design/button/button'
import { BiAdjust, BiAlarm } from "react-icons/bi";

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
      <Button>button</Button>
      <Button icon={{ icon: BiAlarm }} iconPosition='left' size='small' variant='secondary'>button</Button>
      <Button variant='outline'>button</Button>
      <Button size='small' iconTheme={"gray"} variant='ico' icon={{ icon: BiAdjust }} />



    </main>
  )
}

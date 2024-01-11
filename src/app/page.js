import Image from 'next/image'
import { Typography } from './ui/system-design/Typography/typography'

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
    </main>
  )
}

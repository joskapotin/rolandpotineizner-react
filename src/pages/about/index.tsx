import image from "../../assets/images/roland.jpg"
import NotFound from "../../components/not-found"
import Loader from "../../components/spinner/spinner"
import Youtube from "../../components/youtube/youtube"
import { YOUTUBE_ID } from "../../constants/constants"
import useResume from "../../hooks/useResume"
import Story from "./story"
import Year from "./year"

function About() {
  const { bio, isLoading, isError } = useResume()

  if (isError) return <NotFound />
  if (isLoading) return <Loader />

  return (
    <>
      <h1>About me</h1>
      <div className="container mx-auto">
        <img
          src={image}
          alt="Roland souriant devant des tableaux"
          className="mx-auto object-cover"
          width={300}
          height={201}
        />
        <Story />
        <Youtube embedId={YOUTUBE_ID.STORY} />
        {bio?.map(item => (
          <Year key={item.year} year={item.year} events={item.events} />
        ))}
      </div>
    </>
  )
}

export default About

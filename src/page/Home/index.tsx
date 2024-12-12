import { Education } from './Education'
import { Hero } from './Hero'
import { WorkExperience } from './WorkExperience'

export const Home = () => {
  return (
    <article>
      <Hero />
      <WorkExperience />
      <Education />
    </article>
  )
}

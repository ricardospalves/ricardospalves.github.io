import { Education } from './Education'
import { Hero } from './Hero'
import { Skills } from './Skills'
import { WorkExperience } from './WorkExperience'

export const Home = () => {
  return (
    <article>
      <Hero />
      <WorkExperience />
      <Education />
      <Skills />
    </article>
  )
}

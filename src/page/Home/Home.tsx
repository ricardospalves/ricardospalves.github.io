import { Bio } from './Bio'
import { Education } from './Education'
import { Experience } from './Experience'
import { Skills } from './Skills'
import { Improvement } from './Improvement'
import { CommunicationChannels } from './CommunicationChannels'

export const Home = () => {
  return (
    <main>
      <article className="space-y-16">
        <Bio />
        <CommunicationChannels />
        <Experience />
        <Education />
        <Skills />
        <Improvement />
      </article>
    </main>
  )
}

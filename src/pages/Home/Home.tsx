import { Bio } from './Bio'
import { Education } from './Education'
import { Experience } from './Experience'
import { Skills } from './Skills'
import { Improvement } from './Improvement'

export const Home = () => {
  return (
    <main className="max-w-xl p-4 mx-auto">
      <article className="space-y-16">
        <Bio />
        <Experience />
        <Education />
        <Skills />
        <Improvement />
      </article>
    </main>
  )
}

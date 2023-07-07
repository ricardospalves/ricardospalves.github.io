import { Bio } from './Bio'
import { Education } from './Education'
import { Experience } from './Experience'

export const Home = () => {
  return (
    <main className="max-w-xl p-4 mx-auto">
      <article className="space-y-16">
        <Bio />
        <Experience />
        <Education />
      </article>
    </main>
  )
}

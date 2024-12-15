import { IconBase } from 'react-icons'
import {
  SiCss3 as CSS3Icon,
  SiDocker as DockerIcon,
  SiGit as GitIcon,
  SiHtml5 as HTML5Icon,
  SiJavascript as JavaScriptIcon,
  SiMongodb as MongoDBIcon,
  SiMysql as MySQLIcon,
  SiNextdotjs as NextJSIcon,
  SiNodedotjs as NodeJSIcon,
  SiPython as PythonIcon,
  SiReact as ReactIcon,
  SiRemix as RemixIcon,
  SiSass as SassIcon,
  SiStyledcomponents as StyledComponentsIcon,
  SiTailwindcss as TailwindCSSIcon,
  SiTypescript as TypeScriptIcon,
  SiVite as ViteIcon,
} from 'react-icons/si'

type SkillsListItem = {
  Icon: typeof IconBase
  name: string
}

export const SKILLS_LIST: SkillsListItem[] = [
  {
    Icon: ReactIcon,
    name: 'React',
  },
  {
    Icon: NextJSIcon,
    name: 'Next.js',
  },
  {
    Icon: NodeJSIcon,
    name: 'Node.js',
  },
  {
    Icon: TypeScriptIcon,
    name: 'TypeScript',
  },
  {
    Icon: JavaScriptIcon,
    name: 'JavaScript',
  },
  {
    Icon: TailwindCSSIcon,
    name: 'Tailwind CSS',
  },
  {
    Icon: StyledComponentsIcon,
    name: 'styled-components',
  },
  {
    Icon: RemixIcon,
    name: 'Remix',
  },
  {
    Icon: SassIcon,
    name: 'Sass',
  },
  {
    Icon: ViteIcon,
    name: 'Vite',
  },
  {
    Icon: GitIcon,
    name: 'Git',
  },
  {
    Icon: HTML5Icon,
    name: 'HTML',
  },
  {
    Icon: CSS3Icon,
    name: 'CSS',
  },
  {
    Icon: MongoDBIcon,
    name: 'MongoDB',
  },
  {
    Icon: MySQLIcon,
    name: 'MySQL',
  },
  {
    Icon: PythonIcon,
    name: 'Python',
  },
  {
    Icon: DockerIcon,
    name: 'Docker',
  },
] as const

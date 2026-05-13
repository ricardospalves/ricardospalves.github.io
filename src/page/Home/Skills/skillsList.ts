import { IconType } from 'react-icons'
import {
  SiCss as CSS3Icon,
  SiGit as GitIcon,
  SiHtml5 as HTML5Icon,
  SiJavascript as JavaScriptIcon,
  SiMysql as MySQLIcon,
  SiNextdotjs as NextJSIcon,
  SiNodedotjs as NodeJSIcon,
  SiPython as PythonIcon,
  SiReact as ReactIcon,
  SiRemix as RemixIcon,
  SiSass as SassIcon,
  SiTailwindcss as TailwindCSSIcon,
  SiTypescript as TypeScriptIcon,
  SiVite as ViteIcon,
  SiSvelte as SvelteIcon,
  SiPostgresql as PostgreSQLIcon,
} from 'react-icons/si'

type SkillsListItem = Readonly<{
  Icon: IconType
  name: string
}>

export const SKILLS_LIST: ReadonlyArray<SkillsListItem> = [
  {
    Icon: ReactIcon,
    name: 'React',
  },
  {
    Icon: SvelteIcon,
    name: 'Svelte',
  },
  {
    Icon: TypeScriptIcon,
    name: 'TypeScript',
  },
  {
    Icon: NextJSIcon,
    name: 'Next.js',
  },
  {
    Icon: RemixIcon,
    name: 'Remix',
  },
  {
    Icon: TailwindCSSIcon,
    name: 'Tailwind CSS',
  },
  {
    Icon: NodeJSIcon,
    name: 'Node.js',
  },
  {
    Icon: JavaScriptIcon,
    name: 'JavaScript',
  },
  {
    Icon: PostgreSQLIcon,
    name: 'PostgreSQL',
  },
  {
    Icon: GitIcon,
    name: 'Git',
  },
  {
    Icon: ViteIcon,
    name: 'Vite',
  },
  {
    Icon: SassIcon,
    name: 'Sass',
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
    Icon: MySQLIcon,
    name: 'MySQL',
  },
  {
    Icon: PythonIcon,
    name: 'Python',
  },
] as const

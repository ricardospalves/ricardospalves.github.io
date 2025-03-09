import type { ReactNode } from 'react'

type EducationListItem = {
  title: ReactNode
  institution: string
  startDate: string
  endDate: string
  href?: string
  shortCourses?: boolean
}

export const EDUCATION_LIST: EducationListItem[] = [
  {
    title: 'Tecnologia em Sistemas para Internet',
    institution: 'UNINOVE',
    startDate: '2015-07-01T00:00',
    endDate: '2018-08-03T00:00',
  },
  {
    title: 'Técnico em Informática',
    institution: 'ETEC - Centro Paula Souza',
    startDate: '2012-07-01T00:00',
    endDate: '2013-12-18T00:00',
  },
  {
    title: 'Estruturas de Dados e Algoritmos + LeetCode',
    institution: 'Augusto Galego',
    startDate: '2025-01-17T00:00',
    endDate: 'current',
    href: 'https://hub.la/g/L8wi9vio7WPnWbmF8ZIO',
    shortCourses: true,
  },
  {
    title: <em lang="en">The Node.js Master Class</em>,
    institution: 'Pirple',
    startDate: '2024-11-24T00:00',
    endDate: 'current',
    href: 'https://www.pirple.com/',
    shortCourses: true,
  },
  {
    title: 'JavaScript Ninja',
    institution: 'Fernando Daciuk',
    startDate: '2018T00:00',
    endDate: '2018T00:00',
    href: 'https://www.udemy.com/course/curso-javascript-ninja/',
    shortCourses: true,
  },
  {
    title: 'HTML5 Fundamentos',
    institution: 'Impacta Tecnologia',
    startDate: '2014-04-28T00:00',
    endDate: '2014-05-14T00:00',
  },
  {
    title: 'CSS3 Fundamentos',
    institution: 'Impacta Tecnologia',
    startDate: '2014-07-14T00:00',
    endDate: '2014-07-25T00:00',
  },
]

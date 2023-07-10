import { v4 as uuid } from 'uuid'
import type { EntityCardProps } from '@/components/EntityCard'
import { MonthNumbers } from '@/enums/MonthNumbers'

type CardProps = EntityCardProps & {
  id: string
}

const createCard = (props: Omit<CardProps, 'id'>): CardProps => {
  return {
    id: uuid(),
    ...props,
  }
}

export const CARDS: CardProps[] = [
  createCard({
    heading: 'Uninove - Universidade Nove de Julho',
    subheading: 'Tecnologia em Sistemas para Internet - Bacharelado',
    startDate: new Date(2015, MonthNumbers.July),
    endDate: new Date(2017, 11),
  }),
  createCard({
    heading: 'ETEC - Escola Técnica Estadual de São Paulo',
    subheading: 'Técnico em Informática',
    startDate: new Date(2012, MonthNumbers.January),
    endDate: new Date(2013, MonthNumbers.December),
  }),
  createCard({
    heading: 'Impacta Tecnologia',
    subheading: 'CSS3 Fundamentos',
    startDate: new Date(2014, MonthNumbers.July, 1),
    endDate: new Date(2014, MonthNumbers.July, 1),
  }),
  createCard({
    heading: 'Impacta Tecnologia',
    subheading: 'HTML5 Fundamentos',
    startDate: new Date(2014, MonthNumbers.April),
    endDate: new Date(2014, MonthNumbers.May),
  }),
  createCard({
    heading: 'Udemy',
    subheading: 'JavaScript Ninja',
    startDate: new Date(2018, MonthNumbers.January),
    endDate: new Date(2018, MonthNumbers.December),
  }),
]

import { v4 as uuid } from 'uuid'
import type { EntityCardProps } from '@/components/EntityCard'

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
    startDate: new Date(2015, 0),
    endDate: new Date(2017, 11),
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam sit sapiente dolorum vitae exercitationem, eos quibusdam in, odit velit voluptas ipsa, impedit laborum ipsum quia veritatis officia placeat debitis maiores!',
  }),
  createCard({
    heading: 'Impacta Tecnologia',
    subheading: 'HTML5 Fundamentos',
    startDate: new Date(2014, 5),
    endDate: new Date(2014, 5),
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, provident sint? Aspernatur officia fugit nemo at doloribus laborum, nulla molestias ipsam ad totam, expedita unde! Quis commodi tempore cum aspernatur.',
  }),
  createCard({
    heading: 'Impacta Tecnologia',
    subheading: 'CSS3 Fundamentos',
    startDate: new Date(2014, 5),
    endDate: new Date(2014, 5),
    description:
      'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quo eaque quas odio similique, cupiditate sint culpa amet excepturi quae repellendus ratione consectetur debitis asperiores adipisci ipsa nostrum ipsum unde pariatur.',
  }),
  createCard({
    heading: 'ETEC - Escola Técnica Estadual de São Paulo',
    subheading: 'Técnico em Informática',
    startDate: new Date(2012, 0),
    endDate: new Date(2013, 11),
    description:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque doloribus rerum cumque earum! Iure explicabo eaque cupiditate, asperiores dicta harum illo? Nobis ea eligendi, architecto iusto blanditiis natus accusamus!',
  }),
]

import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

type TimeProps = {
  isoDate: string
}

export const Time = ({ isoDate }: TimeProps) => {
  const date = new Date(isoDate)
  const formatedDate = format(date, `MMMM 'de' yyyy`, {
    locale: ptBR,
  })

  return <time dateTime={isoDate}>{formatedDate}</time>
}

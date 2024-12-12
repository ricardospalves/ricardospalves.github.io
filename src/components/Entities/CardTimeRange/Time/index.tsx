import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

type TimeProps = {
  isoDate: string
  formatTemplate?: string
}

export const Time = ({
  isoDate,
  formatTemplate = `MMMM 'de' yyyy`,
}: TimeProps) => {
  const date = new Date(isoDate)
  const formatedDate = format(date, formatTemplate, {
    locale: ptBR,
  })

  return <time dateTime={isoDate}>{formatedDate}</time>
}

import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'

const ISO_DATE_CURRENT = 'current'

type TimeProps = {
  isoDate: string | typeof ISO_DATE_CURRENT
  formatTemplate?: string
}

export const Time = ({
  isoDate,
  formatTemplate = `MMMM 'de' yyyy`,
}: TimeProps) => {
  if (isoDate === ISO_DATE_CURRENT) {
    return <span>atualmente</span>
  }

  const date = new Date(isoDate)
  const formatedDate = format(date, formatTemplate, {
    locale: ptBR,
  })

  return <time dateTime={isoDate}>{formatedDate}</time>
}

import { format, formatISO } from 'date-fns'
import { ptBR } from 'date-fns/locale'

export type TimeProps = {
  date: Date | 'current'
}

export const Time = ({ date }: TimeProps) => {
  const isCurrentDate = date === 'current'
  const now = new Date()

  return (
    <time
      dateTime={formatISO(isCurrentDate ? now : date, {
        representation: 'date',
      })}
    >
      {isCurrentDate
        ? 'atualmente'
        : format(date, `MMMM 'de' yyyy`, {
            locale: ptBR,
          })}
    </time>
  )
}

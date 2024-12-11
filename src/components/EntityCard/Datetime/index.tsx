import { Time } from './Time'

type DatetimeProps = {
  startISODate: string
  endISODate?: string
}

export const Datetime = ({ endISODate, startISODate }: DatetimeProps) => {
  return (
    <p className="mt-1">
      <Time isoDate={startISODate} />
      {endISODate && (
        <>
          –<Time isoDate={endISODate} />
        </>
      )}
    </p>
  )
}

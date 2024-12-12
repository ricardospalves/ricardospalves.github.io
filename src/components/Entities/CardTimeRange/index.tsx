import { Time } from './Time'

type CardTimeRangeProps = {
  startISODate: string
  endISODate?: string
  formatTemplate?: string
}

export const CardTimeRange = ({
  endISODate,
  startISODate,
  formatTemplate,
}: CardTimeRangeProps) => {
  return (
    <p className="mt-1">
      <Time isoDate={startISODate} formatTemplate={formatTemplate} />
      {endISODate && (
        <>
          –<Time isoDate={endISODate} formatTemplate={formatTemplate} />
        </>
      )}
    </p>
  )
}

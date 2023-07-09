import classNames from 'classnames'
import { AnchorHTMLAttributes } from 'react'

export type ExternalTextLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
}

export const ExternalTextLink = ({
  className,
  ...props
}: ExternalTextLinkProps) => {
  return (
    <a
      className={classNames([
        'underline text-blue-800 dark:text-sky-400',
        className,
      ])}
      {...props}
    />
  )
}

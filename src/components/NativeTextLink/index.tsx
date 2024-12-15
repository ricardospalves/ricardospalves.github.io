import { classNames } from '@/utils/classNames'
import { AnchorHTMLAttributes, forwardRef } from 'react'

type NativeProps = AnchorHTMLAttributes<HTMLAnchorElement>

export type NativeTextLinkProps = NativeProps

export const NativeTextLink = forwardRef<
  HTMLAnchorElement,
  NativeTextLinkProps
>(({ className, rel, target, ...props }, ref) => {
  const relProp = target === '_blank' && !rel ? 'noopener' : rel

  return (
    <a
      ref={ref}
      className={classNames(['underline text-highlightForeground', className])}
      target={target}
      rel={relProp}
      {...props}
    />
  )
})

NativeTextLink.displayName = 'NativeTextLink'

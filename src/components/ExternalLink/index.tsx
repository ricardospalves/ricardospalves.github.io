import { AnchorHTMLAttributes } from 'react'

type NativeAttributes = AnchorHTMLAttributes<HTMLAnchorElement>

type NativeAttributesToOmit = 'rel' | 'target'

export type ExternalLinkProps = Omit<NativeAttributes, NativeAttributesToOmit>

export const ExternalLink = ({ ...props }: ExternalLinkProps) => {
  return <a rel="noopener" target="_blank" {...props} />
}

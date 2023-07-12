import { CONFIG } from '@/global/config'

export const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="block w-8 lg:w-16 h-8 lg:h-16 lg:mx-auto shrink-0 fill-current"
      aria-label={CONFIG.author}
    >
      <title>{CONFIG.author}</title>
      <path d="M1.714 0A1.714 1.714 0 0 0 0 1.714v20.572A1.714 1.714 0 0 0 1.714 24a1.714 1.714 0 0 0 1.715-1.714V3.429h10.433L8.645 8.645a1.714 1.714 0 0 0 0 2.424l3.074 3.074-6.931 6.93a1.714 1.714 0 0 0 0 2.425 1.714 1.714 0 0 0 2.424 0l6.93-6.931 6.932 6.93A1.714 1.714 0 0 0 24 22.287V6a1.714 1.714 0 0 0-2.926-1.212l-6.931 6.93-1.862-1.86 6.931-6.932A1.714 1.714 0 0 0 18 0Zm18.857 10.138v8.01l-4.004-4.005z" />
    </svg>
  )
}

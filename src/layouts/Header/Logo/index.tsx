import Link from 'next/link'

export const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center size-12 md:h-auto p-2 md:p-1 text-highlightForeground"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="block size-full fill-current"
        aria-label="Ricardo Alves"
      >
        <title>Ricardo Alves</title>
        <path d="M1.714 0A1.714 1.714 0 0 0 0 1.714v20.572A1.714 1.714 0 0 0 1.714 24a1.714 1.714 0 0 0 1.715-1.714V3.429h10.433L8.645 8.645a1.714 1.714 0 0 0 0 2.424l3.074 3.074-6.931 6.93a1.714 1.714 0 0 0 0 2.425 1.714 1.714 0 0 0 2.424 0l6.93-6.931 6.932 6.93A1.714 1.714 0 0 0 24 22.287V6a1.714 1.714 0 0 0-2.926-1.212l-6.931 6.93-1.862-1.86 6.931-6.932A1.714 1.714 0 0 0 18 0Zm18.857 10.138v8.01l-4.004-4.005z" />
      </svg>
    </Link>
  )
}

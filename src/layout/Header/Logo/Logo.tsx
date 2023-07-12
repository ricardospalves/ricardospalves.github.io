import { CONFIG } from '@/global/config'

export const Logo = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className="block shrink-0 w-8 md:w-16 h-8 md:h-16 fill-current"
      aria-label={CONFIG.author}
    >
      <title>{CONFIG.author}</title>
      <path d="M.923 0A.923.923 0 0 0 0 .923v22.154A.923.923 0 0 0 .923 24a.923.923 0 0 0 .923-.923V1.847H20.85l-9.502 9.5a.923.923 0 0 0 0 1.306l1.194 1.193-8.578 8.578a.923.923 0 0 0 0 1.306.923.923 0 0 0 1.305 0l8.578-8.579 8.578 8.579A.923.923 0 0 0 24 23.077V4.615a.923.923 0 0 0-1.576-.652l-8.578 8.578-.54-.541L23.73 1.576A.923.923 0 0 0 23.077 0Zm21.23 6.844v14.005l-7.002-7.003z" />
    </svg>
  )
}

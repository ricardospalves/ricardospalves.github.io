import { formatISO } from 'date-fns'

export default function Sitemap() {
  return [
    {
      url: 'https://ricardospalves.github.io',
      lastModified: formatISO(new Date(), { representation: 'date' }),
    },
  ]
}

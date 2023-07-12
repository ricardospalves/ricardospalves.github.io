import { CommunicationChannels } from './CommunicationChannels'
import { Logo } from './Logo'

export const Header = () => {
  return (
    <header className="px-2 md:p-4 sticky top-0 z-10 md:static border-b border-current md:border-0 text-black dark:text-white bg-backgroundLightTheme dark:bg-backgroundDarkTheme md:bg-transparent">
      <div className="h-10 md:h-auto flex items-center justify-between max-w-3xl mx-auto">
        <Logo />
        <CommunicationChannels />
      </div>
    </header>
  )
}

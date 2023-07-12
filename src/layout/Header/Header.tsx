import { CommunicationChannels } from './CommunicationChannels'
import { Logo } from './Logo'

export const Header = () => {
  return (
    <header className="lg:max-w-xs w-full h-11 lg:h-auto lg:ml-auto sticky top-0 z-10 lg:static border-b border-current lg:border-0 bg-backgroundLightTheme dark:bg-backgroundDarkTheme text-black dark:text-white">
      <div className="flex items-center justify-between lg:block max-w-xl lg:max-w-none h-full lg:h-auto mx-auto px-4 lg:py-4 lg:sticky lg:top-0">
        <Logo />
        <CommunicationChannels />
      </div>
    </header>
  )
}

type Section = {
  ID: string
  NAME: string
  SHORTNAME: string
}

type Keys = 'ABOUT' | 'WORK' | 'EDUCATION' | 'SKILLS' | 'PORTFOLIO'

export const HOME_PAGE_SECTIONS: Record<Keys, Readonly<Section>> = {
  ABOUT: {
    ID: 'sobre-mim',
    NAME: 'Sobre mim',
    SHORTNAME: 'Sobre',
  },
  WORK: {
    ID: 'experiencia-profissional',
    NAME: 'Experiência profissional',
    SHORTNAME: 'Experiência',
  },
  EDUCATION: {
    ID: 'formacao-academica',
    NAME: 'Formação academica',
    SHORTNAME: 'Educação',
  },
  SKILLS: {
    ID: 'habilidades',
    NAME: 'Habilidades',
    SHORTNAME: 'Habilidades',
  },
  PORTFOLIO: {
    ID: 'portfolio',
    NAME: 'Portfólio',
    SHORTNAME: 'Portfólio',
  },
} as const

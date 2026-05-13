type WorkExperienceItem = Readonly<{
  companyName: string
  companyAvatar: string
  jobTitle: string
  startDate: string
  endDate: string
  list?: ReadonlyArray<string>
}>

export const WORK_EXPERIENCE_LIST: ReadonlyArray<WorkExperienceItem> = [
  {
    companyAvatar: 'SL',
    companyName: 'Sírio-Libanês',
    endDate: 'current',
    jobTitle: 'Analista de desenvolvimento',
    startDate: '2026-02-01T00:00',
  },
  {
    companyAvatar: 'SP',
    companyName: 'Spacelab - Produtora e Agência Web',
    endDate: '2026-02-01T00:00',
    jobTitle: 'Desenvolvedor front-end',
    startDate: '2015-01-01T00:00',
    list: [
      'Desenvolver interfaces de usuário para todos os projetos, garantindo uma experiência visual atraente e funcional;',
      'Implementar tecnologias modernas, como React e TypeScript, para criar aplicações escaláveis e de alta qualidade;',
      'Otimizar a performance, acessibilidade e usabilidade das aplicações.',
    ],
  },
]

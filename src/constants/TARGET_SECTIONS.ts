import { createIDFromString } from '@/utils/createIDFromString'

type TargetSection = {
  name: string
  id: string
}

const createTargetSection = (name: string): TargetSection => {
  const id = createIDFromString(name)

  return {
    name,
    id,
  }
}

export const TARGET_SECTIONS = {
  experience: createTargetSection('Experiência'),
  education: createTargetSection('Formação acadêmica'),
  skills: createTargetSection('Habilidades'),
  improvements: createTargetSection('Aprimorando meus conhecimentos'),
}

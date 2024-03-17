import { IconBase } from 'react-icons'
import {
  FaRegFilePdf as FilePDFIcon,
  FaRegFileWord as FileWordIcon,
} from 'react-icons/fa'

type FileItem = {
  label: string
  href: string
  Icon: typeof IconBase
}

export const FILES: FileItem[] = [
  {
    label: 'Currículo em PDF',
    href: '/files/curriculo-ricardo-alves.pdf',
    Icon: FilePDFIcon,
  },
  {
    label: 'Currículo em Word',
    href: '/files/curriculo-ricardo-alves.docx',
    Icon: FileWordIcon,
  },
]

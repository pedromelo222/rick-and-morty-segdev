/**
 * Seguindo o conceito de DRY, criei esse composable para retornar
 * os icones do tipo 'gender' e 'status' passando uma string por parametro
 */

import {
  IconGenderFemale,
  IconGenderMale,
  IconGenderless,
  IconHeart,
  IconQuestion,
  IconSkull,
} from '@/components/icons'
import type { Gender, Status } from '@/types'

function useIconFromType() {
  const getIconGender = (gender: Gender) => {
    if (gender.includes('Male'))
      return IconGenderMale
    if (gender.includes('Female'))
      return IconGenderFemale
    if (gender.includes('Genderless'))
      return IconGenderless
    return IconQuestion
  }

  const getIconStatus = (status: Status) => {
    if (status.includes('Alive'))
      return IconHeart
    if (status.includes('Dead'))
      return IconSkull
    return IconQuestion
  }

  return { getIconGender, getIconStatus }
}

export { useIconFromType }


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


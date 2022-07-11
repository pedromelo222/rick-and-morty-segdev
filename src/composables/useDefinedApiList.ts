/**
 * Composable para retonar a lista de 'gender' e 'status'.
 */
import type { Ref } from 'vue'
import type { Gender, Status } from '@/types'
import { useIconFromType } from '@/composables'

/**
 * Composable que retorna os icons do tipo gender e status
 */
const { getIconGender, getIconStatus } = useIconFromType()

interface GenderItem {
  name: Gender
  icon: Ref
}

interface statusItem {
  name: Status
  icon: Ref
}

function useDefinedApiList() {
  const genderList: GenderItem[] = [
    { name: 'Male', icon: getIconGender('Male') },
    { name: 'Female', icon: getIconGender('Female') },
    { name: 'Genderless', icon: getIconGender('Genderless') },
    { name: 'unknown', icon: getIconGender('unknown') },
  ]

  const statusList: statusItem[] = [
    { name: 'Alive', icon: getIconStatus('Alive') },
    { name: 'Dead', icon: getIconStatus('Dead') },
    { name: 'unknown', icon: getIconStatus('unknown') },
  ]

  return { genderList, statusList }
}

export { useDefinedApiList }

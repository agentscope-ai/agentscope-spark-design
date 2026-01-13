/**
 * IconComponent - Displays icons from the A2UI icon set.
 */

import React, { memo } from 'react'
import type { IconComponentProps } from '@/0.8/types'
import { useDataBinding } from '@/0.8/hooks/useDataBinding'
import {
  SparkUserLine,
  SparkPlusLine,
  SparkLeftLine,
  SparkRightLine,
  SparkAttachmentLine,
  SparkDateLine,
  SparkPhoneLine,
  SparkCameraLine,
  SparkTrueLine,
  SparkFalseLine,
  SparkDeleteLine,
  SparkDownloadLine,
  SparkEditLine,
  SparkErrorCircleLine,
  SparkHeartLine,
  SparkHeartFill,
  SparkFoldLine,
  SparkQuestionALine,
  SparkHomeLine,
  SparkInfoLine,
  SparkLocationLine,
  SparkLockLine,
  SparkUnlockLine,
  SparkEmailLine,
  SparkMenuLine,
  SparkMoreLine,
  SparkNotificationsLine,
  SparkBankcardLine,
  SparkPictureLine,
  SparkRefreshLine,
  SparkSearchLine,
  SparkSendLine,
  SparkSettingLine,
  SparkShareLine,
  SparkStarLine,
  SparkStarFill,
  SparkUploadLine,
  SparkVisableLine,
  SparkHideLine,
  SparkWarningCircleLine,
} from '@agentscope-ai/icons'

/**
 * Maps A2UI icon names to @agentscope-ai/icons.
 */
const iconMap: Record<string, React.FC> = {
  accountCircle: SparkUserLine,
  add: SparkPlusLine,
  arrowBack: SparkLeftLine,
  arrowForward: SparkRightLine,
  attachFile: SparkAttachmentLine,
  calendarToday: SparkDateLine,
  call: SparkPhoneLine,
  camera: SparkCameraLine,
  check: SparkTrueLine,
  close: SparkFalseLine,
  delete: SparkDeleteLine,
  download: SparkDownloadLine,
  edit: SparkEditLine,
  event: SparkDateLine,
  error: SparkErrorCircleLine,
  favorite: SparkHeartFill,
  favoriteOff: SparkHeartLine,
  folder: SparkFoldLine,
  help: SparkQuestionALine,
  home: SparkHomeLine,
  info: SparkInfoLine,
  locationOn: SparkLocationLine,
  lock: SparkLockLine,
  lockOpen: SparkUnlockLine,
  mail: SparkEmailLine,
  menu: SparkMenuLine,
  moreVert: SparkMoreLine,
  moreHoriz: SparkMoreLine,
  notificationsOff: SparkNotificationsLine,
  notifications: SparkNotificationsLine,
  payment: SparkBankcardLine,
  person: SparkUserLine,
  phone: SparkPhoneLine,
  photo: SparkPictureLine,
  print: SparkPictureLine,
  refresh: SparkRefreshLine,
  search: SparkSearchLine,
  send: SparkSendLine,
  settings: SparkSettingLine,
  share: SparkShareLine,
  shoppingCart: SparkStarLine,
  star: SparkStarFill,
  starHalf: SparkStarFill,
  starOff: SparkStarLine,
  upload: SparkUploadLine,
  visibility: SparkVisableLine,
  visibilityOff: SparkHideLine,
  warning: SparkWarningCircleLine,
}

/**
 * Icon component for displaying icons from the A2UI icon set.
 */
export const IconComponent = memo(function IconComponent({
  surfaceId,
  name,
}: IconComponentProps) {
  const iconName = useDataBinding<string>(surfaceId, name, '')

  if (!iconName) {
    return null
  }

  const Icon = iconMap[iconName]

  if (!Icon) {
    console.warn(`A2UI: Unknown icon name: ${iconName}`)
    return null
  }

  // @ts-ignore
  return <Icon size={20} />
})

IconComponent.displayName = 'A2UI.Icon'

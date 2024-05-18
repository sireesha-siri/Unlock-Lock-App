// Write your code here
import {useState} from 'react'

import {
  AppContainer,
  LockOrUnLockImage,
  LockStatusParagraph,
  ButtonToLockOrUnlock,
} from './styledComponents'

const Unlock = () => {
  const [isLocked, setLock] = useState(true)

  const changeLockStatus = () => {
    setLock(prev => !prev)
  }

  return (
    <AppContainer>
      <LockOrUnLockImage
        src={
          isLocked
            ? 'https://assets.ccbp.in/frontend/hooks/lock-img.png'
            : 'https://assets.ccbp.in/frontend/hooks/unlock-img.png '
        }
        alt={isLocked ? 'lock' : 'unlock'}
      />

      <LockStatusParagraph>
        Your Device is {isLocked ? 'Locked' : 'Unlocked'}
      </LockStatusParagraph>

      <ButtonToLockOrUnlock type="button" onClick={changeLockStatus}>
        {isLocked ? 'Unlock' : 'Lock'}
      </ButtonToLockOrUnlock>
    </AppContainer>
  )
}

export default Unlock

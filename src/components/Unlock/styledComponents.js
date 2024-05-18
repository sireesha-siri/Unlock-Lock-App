// Style your elements here
import styled from 'styled-components'

export const AppContainer = styled.div`
  background-image: linear-gradient(#0b0c1e, #161617, #3c2940);
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`

export const LockOrUnLockImage = styled.img`
  width: 10%;
`

export const LockStatusParagraph = styled.p`
  font-family: 'Roboto';
  color: #e2e8f0;
  font-size: 30px;

  @media screen and (max-width: 576px) {
    font-size: 20px;
  }
`

export const ButtonToLockOrUnlock = styled.button`
  background-color: #06b6d4;
  color: #ffffff;
  width: 120px;
  height: 40px;
  padding: 5px;
  border-radius: 5px;
  border: none;
  cursor: pointer;
  outline: none;
  margin-top: 100px;
`

import styled from 'styled-components/native'
import {RFValue} from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons';



export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.shape};
  margin-right: 16px;
  width: ${RFValue(300)}px;
  border-radius: 5px;
  padding: 19px 23px ${RFValue(42)}px 23px;
`

export const Header = styled.View `
  flex-direction: row;
  justify-content: space-between;
`

export const Title = styled.Text `
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  color: ${({theme}) => theme.colors.title}
`

export const Icon = styled(Feather) `
  font-size: ${RFValue(40)}px;
  color: ${({theme}) => theme.colors.succes};
`

export const Content = styled.View ``

export const Amount = styled.Text `
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;
  color: ${({theme}) => theme.colors.title};
  margin-top: 38px;
`

export const LastTransaction = styled.Text `
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text};
  font-size: ${RFValue(12)}px;

`
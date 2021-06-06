import styled, { css } from 'styled-components/native'
import {RFValue} from 'react-native-responsive-fontsize'
import { Feather } from '@expo/vector-icons';

interface ITypeProps {
  type: 'income' | 'outcome' | 'total'
}

export const Container = styled.View<ITypeProps> `
  margin-right: 16px;
  width: ${RFValue(300)}px;
  border-radius: 5px;
  padding: 19px 23px ${RFValue(42)}px 23px;
  
  ${({ type }) => type === 'total' ? 
    css`background-color: ${({ theme }) => theme.colors.orange};` 
    : 
    css`background-color: ${({ theme }) => theme.colors.shape};`}
`

export const Header = styled.View `
  flex-direction: row;
  justify-content: space-between;
`

export const Title = styled.Text<ITypeProps> `
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
  ${({ type }) => type === 'total' ? 
    css`color: ${({theme}) => theme.colors.shape};` 
    : 
    css`color: ${({theme}) => theme.colors.title};`}

  
`

export const Icon = styled(Feather)<ITypeProps> `
  font-size: ${RFValue(40)}px;

  ${({type}) => type === 'income' && css`
    color: ${({theme}) => theme.colors.success};
  `};

  ${({type}) => type === 'outcome' && css`
    color: ${({theme}) => theme.colors.warning};
  `};

  ${({type}) => type === 'total' && css`
    color: ${({theme}) => theme.colors.shape};
  `};
`

export const Content = styled.View ``

export const Amount = styled.Text<ITypeProps> `
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: ${RFValue(32)}px;
  margin-top: 38px;

  ${({ type }) => type === 'total' ? 
    css`color: ${({theme}) => theme.colors.shape};` 
    : 
    css`color: ${({theme}) => theme.colors.title};`}
`

export const LastTransaction = styled.Text<ITypeProps> `
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(12)}px;

  ${({ type }) => type === 'total' ? 
    css`color: ${({theme}) => theme.colors.shape};` 
    : 
    css`color: ${({theme}) => theme.colors.title};`}

`
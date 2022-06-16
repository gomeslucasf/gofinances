import styled,{css} from "styled-components/native";
import {Feather} from '@expo/vector-icons';
import {RFValue} from 'react-native-responsive-fontsize';

interface IconProps{    
    type: 'up'|'down'|'total';
}

export const Container = styled.View`
    background-color: ${({theme})=>theme.colors.shape};
    width:${RFValue(300)}px;
    border-radius: 5px;
    padding: 19px 23px; 
    padding-bottom: 42px;
    margin-right: 16px;
`;

export const Header = styled.View`
    flex-direction: row;
    justify-content: space-between;
`;

export const Title = styled.Text`
    font-family: ${({theme})=>theme.fonts.regular};
    font-size: ${RFValue(14)}px;

    
    color:${({theme})=> theme.colors.text_dark};
`;

export const Icon = styled(Feather)<IconProps>`
    font-size: ${RFValue(40)}px;

    ${(props)=>props.type === 'up' &&  css`
        color = ${({theme})=> theme.colors.sucess};
    `};
    ${(props)=>props.type === 'down' &&  css`
        color = ${({theme})=> theme.colors.attention};
    `};
    ${(props)=>props.type === 'total' &&  css`
        color = ${({theme})=> theme.colors.shape};
    `};
`;

export const Footer = styled.View``;

export const Amount = styled.Text`
    font-family: ${({theme})=>theme.fonts.medium};
    font-size: ${RFValue(32)}px;
    color:${({theme})=> theme.colors.text_dark};
    margin-top:38px;
`;
 
export const LastTransaction = styled.Text`
    font-family: ${({theme})=>theme.fonts.regular};
    font-size: ${RFValue(12)}px;
    color:${({theme})=> theme.colors.text};
`;
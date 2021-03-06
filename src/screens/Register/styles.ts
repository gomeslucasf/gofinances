import { getBottomSpace } from "react-native-iphone-x-helper";
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Container = styled.View`
    flex:1;
    background-color:  ${({theme})=> theme.colors.background};
    padding-bottom: ${getBottomSpace()}px;
`;

export const Header = styled.View`
    background-color: ${({theme}) => theme.colors.primary};
    width:100%;
    height: ${RFValue(113)}px;
    
    align-items: center;
    justify-content: flex-end;
    padding-bottom:${RFValue(19)}px;
`;
export const Title = styled.Text`
    color: ${({theme}) => theme.colors.shape};
    font-size: ${RFValue(18)}px;
    font-family: ${({theme})=>theme.fonts.regular};


`;
export const Form = styled.View`
    flex:1;
    width: 100%;
    padding: 0 24px;
    padding-top: 24px;

    justify-content: space-between;
`;

export const Filds = styled.View``;

export const TransactionType = styled.View`
    flex-direction: row;
    justify-content: space-between;
    margin-top: 8px;
`;
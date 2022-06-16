import styled from "styled-components/native";
import { Feather } from '@expo/vector-icons';
import { RFPercentage,RFValue } from "react-native-responsive-fontsize";
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

export const Container = styled.View`
    flex: 1;
    background-color: ${({theme}) => theme.colors.background};
`;

export const Header = styled.View`
    width: 100%;
    height: ${RFPercentage(42)}px;
    background-color: ${({theme}) => theme.colors.primary};

    justify-content: center;
    align-items: flex-start;
    flex-direction: row
`;
export const InfoUser = styled.View`

    align-items: center;
    flex-direction: row;
`;
export const PhotoUser = styled.Image`
    width: ${RFValue(48)}px;
    height: ${RFValue(48)}px;
    border-radius: 15px;
`;
export const User = styled.View`
    padding-left: 10px;
`;
export const GreetingUser = styled.Text`
    font-family: ${({theme})=> theme.fonts.regular};
    font-size: ${RFValue(18)}px;
    color:${({theme})=>theme.colors.shape};
`;
export const NameUser = styled.Text`
    font-family: ${({theme})=> theme.fonts.bold};
    font-size: ${RFValue(20)}px;
    color:${({theme})=>theme.colors.shape};
`;
export const WrapperUser = styled.View`
    width: 100%;
    padding: 0 24px;

    margin-top:${getStatusBarHeight()+RFValue(28)}px;

    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Icon = styled(Feather)`
    color:${({theme})=> theme.colors.secondary};
    font-size: ${RFValue(24)}px;
`;

export const HighlightCards = styled.ScrollView.attrs({
    horizontal : true,
    showsHorizontalScrollIndicator : false,
    contentContainerStyle : {paddingLeft: 24}
})`
    width: 100%;

    position:absolute;
    margin-top: ${RFPercentage(20)}px;
`;
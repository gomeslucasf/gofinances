import styled,{css} from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import {Feather} from '@expo/vector-icons';
import { RFValue } from 'react-native-responsive-fontsize';

interface IconProps{
    type: 'up'|'down' ;
}
interface ContainerProps{
    isActive: boolean;
    type: 'up'|'down' ;
}


export const Component = styled(TouchableOpacity)<ContainerProps>`
    width: 48%;
    flex-direction : row;
    align-items: center;
    justify-content: center;

    padding: 16px;

    border-width:${({isActive}) => isActive ? 0: 0.7 }px;
    border-radius: 5px;
    border-style:solid;
    border-color: ${({theme})=> theme.colors.text};

    ${({isActive,type}) => 
        isActive && type === 'up' && css`
        background-color: ${({theme})=> theme.colors.sucess_light};
    `};

    ${({isActive,type}) => 
        isActive && type === 'down' && css`
        background-color: ${({theme})=> theme.colors.attention_light};
    `};

`;
export const Icon = styled(Feather)<IconProps>`
    margin-right: 12px;
    font-size: ${RFValue(24)}px;
    color: ${({theme,type})=>
        type === 'up' ? theme.colors.sucess : theme.colors.attention
    };
`;

export const Title = styled.Text`

    font-family: ${({theme})=> theme.fonts.regular};
    font-size: ${RFValue(14)}px;
`;
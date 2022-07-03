import { TouchableOpacity } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";
import styled from "styled-components/native";

export const Component = styled(TouchableOpacity)`
    width: 100%;
    background-color: ${({theme}) => theme.colors.secondary};

    align-items: center;
    padding: 18px;
    border-radius:${RFValue(5)}px;

`;
export const Title = styled.Text`
    color: ${({theme})=> theme.colors.shape};
    font-size: ${RFValue(14)}px;
    font-family: ${({theme})=>theme.fonts.medium};
`;

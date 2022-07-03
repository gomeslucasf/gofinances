import styled from "styled-components/native";

import { TextInput } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const Component = styled(TextInput)`
    background-color: ${({theme})=> theme.colors.shape};
    padding: ${RFValue(17)}px;
    color: ${({theme})=> theme.colors.text_dark};
    font-size: ${(RFValue(14))}px;
    font-family: ${({theme})=>theme.fonts.regular};

    margin-bottom:${RFValue(8)}px;
    border-radius: ${RFValue(5)}px;
`;
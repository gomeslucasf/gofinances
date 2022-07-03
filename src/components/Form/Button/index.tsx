import React from "react";
import { Component, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";

interface Props extends TouchableOpacityProps{
    title:string;
}

export function Button({ title, ...rest}:Props){

    return (
        <Component 
            {...rest}
        >
            <Title>
                {title}
            </Title>
        </Component>
    );
}
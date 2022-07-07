import React from "react";
import { TouchableOpacityProps } from "react-native";
import { Component, Icon, Title } from "./styles";

const icons = {
    up:'arrow-up-circle',
    down:'arrow-down-circle'
};

interface Props extends TouchableOpacityProps{
    title:string;
    type: 'up'|'down' ;
    isActive: boolean;
}

export function TransactionTypeButton({
    title,
    type,
    isActive,
    ...rest
}:Props){


    return (
        <Component 
            {...rest}
            isActive={isActive}
            type={type}
        >
            <Icon
                name={icons[type]}
                type={type}
            />
            <Title>
                {title}
            </Title>
        </Component>

    );
}
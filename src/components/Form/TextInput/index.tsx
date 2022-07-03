import React from "react";
import { Component } from "./styles";
import { TextInputProps } from "react-native";

interface Props extends TextInputProps{};

export function TextInput ({...rest}:Props){
    return (
        <Component
        {...rest}
        />
    );

};
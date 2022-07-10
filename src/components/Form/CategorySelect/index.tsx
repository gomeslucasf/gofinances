import React from 'react-native';
import {
    Component,
    Text,
    Icon
} from './styles';

interface Props {
    title:string;    
}

export function CategorySelect({title}:Props){


    return (
        <Component>
            <Text>{title}</Text>
            <Icon
                name="chevron-down"
            />
        </Component>

    );
}
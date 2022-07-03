import React from 'react';
import { Button } from '../../components/Form/Button';
import { TextInput } from '../../components/Form/TextInput';
import {
    Container,
    Header,
    Title,
    Form,
    Filds
} from './styles';

export function Register(){

    return (
        <Container>
            <Header>
                <Title>
                    Cadastro
                </Title>
            </Header>
            <Form>
                <Filds>
                    <TextInput
                        placeholder='Nome'
                    />
                    <TextInput
                        placeholder='Preço'
                    />
                </Filds>
               
                <Button title='Enviar'/>
            </Form>
        </Container>
    );
}
import React, {useState} from 'react';
import { Button } from '../../components/Form/Button';
import { CategorySelect } from '../../components/Form/CategorySelect';
import { TextInput } from '../../components/Form/TextInput';
import { TransactionTypeButton } from '../../components/Form/TransactionTypeButton';
import {
    Container,
    Header,
    Title,
    Form,
    Filds,
    TransactionType
} from './styles';

export function Register(){
    
    const [transactionTypeActive,setTransactionTypeActive] = useState('');

    function SetTransactionTypeActive(type: 'up'|'down'){
        setTransactionTypeActive(type);
    }

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
                    <TransactionType>
                        <TransactionTypeButton
                            title='Income'
                            type='up'
                            isActive={transactionTypeActive === 'up'}
                            onPress={()=> SetTransactionTypeActive('up')}
                            />
                        <TransactionTypeButton
                            title='Outcome'
                            type='down'
                            isActive={transactionTypeActive === 'down'}
                            onPress={()=> SetTransactionTypeActive('down')}
                        />
                    </TransactionType>
                    <CategorySelect
                        title='Categoria'
                    />
                </Filds>
               
                <Button title='Enviar'/>
            </Form>
        </Container>
    );
}
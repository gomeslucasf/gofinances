import React from "react";
import { getBottomSpace } from "react-native-iphone-x-helper";
import { HighlightCard } from "../../components/HighlightCard";
import { TransactionCard,TransactionCardProps } from "../../components/TransactionCard";
import { 
    Container, 
    Header,
    InfoUser,
    PhotoUser,
    User,
    GreetingUser,
    NameUser,
    WrapperUser,
    Icon,
    HighlightCards,
    Transactions,
    Title,
    TransactionList
} from "./styles";

export interface DataListProps extends TransactionCardProps{
    id:string;
}

export function Dashboard(){
    const data : DataListProps[] = [{ 
        id:1,
        type:'positive',
        title: "Desenvolvimento de site",
        amount: "R$ 12.000,00",
        category: {
            name:"Vendas",
            icon:"dollar-sign"
        },
        date: "13/04/2020"
    },
    { 
        id:2,
        type:'negative',
        title: "Hamburgueria Pizzy",
        amount: "R$ 59,00",
        category: {
            name:"Alimentação",
            icon:"coffee"
        },
        date: "10/04/2020"
    },
    { 
        id:3,
        type:'positive',
        title: "Desenvolvimento de site",
        amount: "R$ 12.000,00",
        category: {
            name:"Vendas",
            icon:"dollar-sign"
        },
        date: "13/04/2020"
    },
    { 
        id:4,
        type:'negative',
        title: "Aluguel do apartamento",
        amount: "R$ 1.200,00",
        category: {
            name:"Casa",
            icon:"home"
        },
        date: "27/03/2020"
    }]
    return(
        <Container>
            <Header>
                <WrapperUser>
                    <InfoUser>
                        <PhotoUser source={{uri:'https://avatars.githubusercontent.com/u/49655656?v=4'}}/>
                        <User>
                            <GreetingUser>Olá,</GreetingUser>
                            <NameUser>Lucas</NameUser>
                        </User>
                    </InfoUser>
                    <Icon name="power"/>
                </WrapperUser>
            </Header>
            <HighlightCards>
                <HighlightCard 
                    type="up"
                    title="Entrada"
                    amount="R$ 17.400,00"
                    lastTransaction="Última entrada dia 13 de abril"
                />
                <HighlightCard 
                    type="down"
                    title="Saídas"
                    amount="R$ 1.259,00"
                    lastTransaction="Última saída dia 03 de abril"
                />
                <HighlightCard 
                    type="total"
                    title="Total"
                    amount="R$ 16.141,00"
                    lastTransaction="01 à 16 de abril"
                />
            </HighlightCards>

            <Transactions>
                <Title>
                    Listagem
                </Title>
                <TransactionList
                    data={data}
                    keyExtractor={ item => item.id}
                    renderItem={({item})=>
                    <TransactionCard data={item}/>
                    }
                   
                />
            </Transactions>
        </Container>
    )
}

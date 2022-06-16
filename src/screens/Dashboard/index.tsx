import React from "react";
import { HighlightCard } from "../../components/HighlightCard";
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
    HighlightCards
} from "./styles";

export function Dashboard(){
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
        </Container>
    )
}

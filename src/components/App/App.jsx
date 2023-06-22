import { Section } from '../Section/Section';
import { Phonebook } from '../Phonebook/Phonebook';
import { Container } from "./App.styled";



export const App = () => {
 
  return (
    <Container>
      <Section title={"Phonebook"}>
        <Phonebook />
      </Section>
    </Container>
  );
};

import { Section } from '../Section/Section';
import { Container } from "./App.styled";


export const App = () => {
 
  return (
    <Container>
      <Section title={"Please leave feedback"}>
        <Counter />
      </Section>
    </Container>
  );
};

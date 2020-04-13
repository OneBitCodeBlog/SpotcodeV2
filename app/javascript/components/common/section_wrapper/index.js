import React from 'react';
import { Container, Section } from 'react-bulma-components';

const SectionWrapper = (props) => {
  return(
    <Section>
      <Container>
        {props.children}
      </Container>
    </Section>
  );
}
export default SectionWrapper;
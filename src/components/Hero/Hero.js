import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio
        </SectionTitle>
        {/* <SectionText>
          An enthusiastic engineering fresher who is a self- starter and capable
          to use technical skills for the betterment of the organization. A
          Bachelors’s degree has enhanced my proficiency in developing web
          applications and looking forward to work in a competitive environment
          that enhances overall learning.
        </SectionText> */}
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;

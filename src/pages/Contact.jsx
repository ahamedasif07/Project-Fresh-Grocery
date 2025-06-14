import React from "react";
import SectionContainer from "../components/SectionContainer/SectionContainer";
import ContactInfo from "../components/ContactInfo/ContactInfo";
import PageHeader from "../components/PageHeader/PageHeader";

const Contact = () => {
  return (
    <div>
      <PageHeader heading="Contact" path="Home / Contact"></PageHeader>
      <SectionContainer>
        <ContactInfo />
      </SectionContainer>
    </div>
  );
};

export default Contact;

import React from "react";
import PageHeader from "../components/PageHeader/PageHeader";
import FAQ from "../components/Faq/Faq";
import SectionContainer from "../components/SectionContainer/SectionContainer";
import ContactForm from "../components/ContactFrom/ContactFrom";

const Faq = () => {
  return (
    <div>
      <PageHeader heading="Faq" path="Home / Faq"></PageHeader>
      <SectionContainer>
        <div className="flex  gap-5 items-start py-[50px]">
          <FAQ />
          <ContactForm />
        </div>
      </SectionContainer>
    </div>
  );
};

export default Faq;

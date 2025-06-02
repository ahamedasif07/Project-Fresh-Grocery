import React from "react";
import PageHeader from "../components/PageHeader/PageHeader";
import FAQ from "../components/Faq/Faq";

const Faq = () => {
  return (
    <div>
      <PageHeader heading="Faq" path="Home / Faq"></PageHeader>
      <FAQ />
    </div>
  );
};

export default Faq;

import React from "react";
import Header from "../../components/common/Header/Header";
import { contactHeaderData } from "../../data/headers";
import Form from "../../components/Form/Form";
import Footer from "../../components/Footer/Footer";

const Contact = () => {
  return (
    <>
      <div className="wrapper">
        <div className="container">
          <Header headerData={contactHeaderData} />
          <Form />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;

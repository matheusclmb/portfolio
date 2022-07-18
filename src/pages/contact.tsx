import { ContactInfo } from "components/Contact";
import { Navigation } from "components/Navigation";
import type { NextPage } from "next";
import { useEffect } from "react";

const Contact: NextPage = () => {
  useEffect(() => {
    document.title = "Contact | CLMB";
  }, []);

  return (
    <>
      <div>
        <Navigation />
        <ContactInfo />
      </div>
    </>
  );
};

export default Contact;

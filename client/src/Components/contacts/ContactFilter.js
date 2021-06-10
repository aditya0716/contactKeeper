import React, { useContext, useEffect, useRef } from "react";
import ContactContext from "../../context/contact/contactContext";

export const ContactFilter = () => {
  const contactContext = useContext(ContactContext);
  const text = useRef("");

  useEffect(() => {
    if (contactContext.filtered === null) text.current.value = "";
  });

  const onChange = (e) => {
    if (text.current.value !== "") {
      contactContext.filterContact(e.target.value);
    } else {
      contactContext.clearFilter();
    }
  };

  return (
    <>
      <form>
        <input
          ref={text}
          placeholder="Search Contacts...."
          type="text"
          onChange={onChange}
        />
      </form>
    </>
  );
};

import React from "react";
import SearchForm from "./SearchForm";
import SpecializeWidget from "./SpecializeWidget";
import NewsletterForm from "./NewsletterForm";

const Sidebar = () => {
  return (
    <div className="pt-4 ps-2">
      <SearchForm />
      <SpecializeWidget />
      <NewsletterForm />
    </div>
  );
};

export default Sidebar;

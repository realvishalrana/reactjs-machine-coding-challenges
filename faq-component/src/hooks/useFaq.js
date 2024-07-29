import { useState } from "react";

const useFaq = () => {
  const [isOpen, setIsOpen] = useState(false);

  return { isOpen, setIsOpen };
};

export default useFaq;

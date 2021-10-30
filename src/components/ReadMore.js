import React, { useState } from "react";
import "../App.css";

const ReadMore = ({ children }) => {
  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <p className="text">
      {isReadMore ? text.slice(0, 150) : text}
      <span onClick={toggleReadMore} className="read-or-hide">
        {isReadMore ? "...read more" : " show less"}
      </span>
    </p>
  );
};

const Content = () => {
  return (
    <div className="container">
      <h2>
        <ReadMore>
          Modern humans arrived on the Indian subcontinent from Africa no later
          than 55,000 years ago.[24] Their long occupation, initially in varying
          forms of isolation as hunter-gatherers, has made the region highly
          diverse, second only to Africa in human genetic diversity.[25] Settled
          life emerged on the subcontinent in the western margins of the Indus
          river basin 9,000 years ago, evolving gradually into the Indus Valley
          Civilisation of the third millennium BCE.[26] By 1200 BCE, an archaic
          form of Sanskrit, an Indo-European language, had diffused into India
          from the northwest,[27] unfolding as the language of the Rigveda, and
          recording the dawning of Hinduism in India.[28] The Dravidian
          languages of India were supplanted in the northern and western
          regions.[29] By 400 BCE, stratification and exclusion by caste had
          emerged within Hinduism,[30] and Buddhism and Jainism had arisen,
          proclaiming social orders unlinked to heredity.[31] Early political
          consolidations gave rise to the loose-knit Maurya and Gupta Empires
          based in the Ganges Basin.[32] Their collective era was suffused with
          wide-ranging creativity,[33] but also marked by the declining status
          of women,[34] and the incorporation of untouchability into an
          organised system of belief.[g][35] In South India, the Middle kingdoms
          exported Dravidian-languages scripts and religious cultures to the
          kingdoms of Southeast Asia.[36]
        </ReadMore>
      </h2>
    </div>
  );
};

export default Content;

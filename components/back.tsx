import React from "react";
import Icon from "@/components/icon";

interface BackProps {
  className?: string;
  href?: string;
  has?: string;
}

const Back: React.FC<BackProps> = ({ className = "", href = "/", has = "" }) => {
  return (
    <a
      className={`back ${className}`}
      href={href+`${has ? `#${has}`:""}`}
      style={{
        cursor: "pointer",
        marginBlock: "20px",
        display:"block"
      }}
    >
      <Icon marginRight="20px">fas fa-caret-left</Icon>
      Atras
    </a>
  );
};

export default Back;

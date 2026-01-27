import Icon from "@/components/icon";

const Back = ({ className = "", href = "/", has = "" }) => {
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

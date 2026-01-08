import Icon from "@/components/icon";

const Back = ({ className = "", href = "/" }) => {
  return (
    <a
      className={`back ${className}`}
      href={href}
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

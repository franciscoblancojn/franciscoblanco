import Icon from "@/components/icon";

const Title = ({ children, className = "" }) => {
  return (
    <h3
      className={`title ${className}`}
      style={{
        viewTransitionName: `${children}`
          .trim()
          .toLowerCase()
          .replace(/\s+/g, "-"),
      }}
    >
      <Icon marginRight="20px">fas fa-caret-right</Icon>
      {children}
    </h3>
  );
};

export default Title;

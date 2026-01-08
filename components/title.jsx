import Icon from "@/components/icon";

const Title = ({ children, className = "", back = false }) => {
  return (
    <h3
      className={`title ${className}`}
      {...(back
        ? {
            style: {
              cursor: "pointer",
            },
            onClick: () => window.history.back(),
          }
        : {})}
      style={{
        viewTransitionName: `${children}`.trim().toLowerCase().replace(/\s+/g, "-"),
      }}
    >
      <Icon marginRight="20px">
        fas
        {back ? "fa-caret-left" : "fa-caret-right"}
      </Icon>
      {children}
    </h3>
  );
};

export default Title;

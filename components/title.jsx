import Icon from "@/components/icon";

const Title = ({ children, className = "", back = false }) => {
  const arrow = `fas ${back ? "fa-caret-left" : "fa-caret-right"}`;
  return (
    <h3
      className={`title ${className}`}
      style={{
        viewTransitionName: `${children}`
          .trim()
          .toLowerCase()
          .replace(/\s+/g, "-"),
      }}
      {...(back
        ? {
            style: {
              cursor: "pointer",
              viewTransitionName: `${children}`
                .trim()
                .toLowerCase()
                .replace(/\s+/g, "-"),
            },
            onClick: () => window.history.back(),
          }
        : {})}
    >
      <Icon marginRight="20px">{arrow}</Icon>
      {children}
    </h3>
  );
};

export default Title;

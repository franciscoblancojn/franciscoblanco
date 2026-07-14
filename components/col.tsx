import React from "react";

interface ColProps {
  children?: React.ReactNode;
  col?: number;
  className?: string;
  style?: React.CSSProperties;
}

const Col: React.FC<ColProps> = ({children,col=12, className="",style={}}) => {
    return (
        <div className={`col col-${col} ${className}`} style={style}>
            {children}
        </div>
    )
}
export default Col

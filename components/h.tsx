import React from "react";

interface HProps {
  className?: string;
  h?: number | string;
}

const H: React.FC<HProps> = ({className="" , h = 0}) => {
    return <div className={`h ${className}`} style={{height:h}}></div>
}
export default H

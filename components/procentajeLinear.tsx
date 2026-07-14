import React from "react";

interface PorcentajeLinearProps {
  children?: React.ReactNode;
  className?: string;
  p?: number;
}

const PorcentajeLinear: React.FC<PorcentajeLinearProps> = ({children, className="" , p = 75}) => {
    return (
        <div className={`porcentajeLinear ${className}`}>
            <div className="name">
                {children}
                <span>{p}%</span>
            </div>
            <div className="line" style={{"--p":`${p}%`} as React.CSSProperties}></div>
        </div>
    )
}
export default PorcentajeLinear

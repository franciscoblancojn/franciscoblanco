import React from "react";

interface PorcentajeCircularProps {
  children?: React.ReactNode;
  className?: string;
  p?: number;
}

const PorcentajeCircular: React.FC<PorcentajeCircularProps> = ({children, className="" , p = 75}) => {
    const d1 = (p>50)?-45:(135 - p*3.6)
    const d2 = (p<=50)?135:(135 - (p - 50)*3.6)
    return (
        <div className={`porcentajeCircular ${className}`}>
            <div className="c">
                <span className="cap cap1" style={{"--deg":`${d1}deg`} as React.CSSProperties}></span>
                <span className="cap cap2" style={{"--deg":`${d2}deg`} as React.CSSProperties}></span>
            </div>
            <div className="name">
                {children}
                <span>{p}%</span>
            </div>
        </div>
    )
}
export default PorcentajeCircular

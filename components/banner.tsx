import React from "react";

interface BannerProps {
  children?: React.ReactNode;
  className?: string;
}

const Banner: React.FC<BannerProps> = ({children,className=""}) =>{
    return (
        <div className={`banner ${className}`}>
            {children}
        </div>
    )
}   
export default Banner

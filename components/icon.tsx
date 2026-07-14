import React from "react";

interface IconProps {
  children: string;
  marginRight?: string;
}

const Icon: React.FC<IconProps> = ({children,marginRight="5px"}) => {
    return <i className={children} style={{marginRight}}></i>
}

export default Icon

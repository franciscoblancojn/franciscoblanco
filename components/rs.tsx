import React from "react";
import Icon from '@/components/icon'

interface RSProps {
  text: string;
  href: string;
  className?: string;
  icon?: string;
}

const RS: React.FC<RSProps> = ({text,href,className="",icon=""}) => {
    return (
        <div className={`rs ${className}`}>
          <a href={href} target="blank">
            <Icon>{icon}</Icon>
            {text}
          </a>
        </div>
    )
}
export default RS

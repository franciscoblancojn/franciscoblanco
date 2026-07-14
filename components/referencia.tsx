import React from "react";
import RS from "@/components/rs";

interface ReferenciaProps {
  children?: React.ReactNode;
  email: string;
  className?: string;
}

const Referencia: React.FC<ReferenciaProps> = ({children,email, className=""}) => {
    return  <RS
                className={`referencia ${className}`}
                href={`mailto:${email}`}
                icon="far fa-user-circle"
                text={typeof children === 'string' ? children : ''}
            />
}
export default Referencia

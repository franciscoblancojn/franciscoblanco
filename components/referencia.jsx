import RS from "@/components/rs";

const Referencia = ({children,email, className=""}) => {
    return  <RS
                className={`referencia ${className}`}
                href={`mailto:${email}`}
                icon="far fa-user-circle"
                text={children}
            />
}
export default Referencia
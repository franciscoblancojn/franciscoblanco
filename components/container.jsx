import Row from "@/components/row";

const Container = ({children,className="",style={}}) =>{
    return (
        <div className={`container ${className}`} style={style}>
            {children}
        </div>
    )
} 
export default Container
const PorcentajeLinear = ({children, className="" , p = 75}) => {
    return (
        <div className={`porcentajeLinear ${className}`}>
            <div className="name">
                {children}
                <span>{p}%</span>
            </div>
            <div className="line" style={{"--p":`${p}%`}}></div>
        </div>
    )
}
export default PorcentajeLinear
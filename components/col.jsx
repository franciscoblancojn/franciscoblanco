const Col = ({children,col=12, className="",style={}}) => {
    return (
        <div className={`col col-${col} ${className}`} style={style}>
            {children}
        </div>
    )
}
export default Col
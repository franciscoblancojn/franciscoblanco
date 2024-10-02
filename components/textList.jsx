const TextList = ({title,date,list}) => {
    return (
        <div className="textList">
            <strong>{title}</strong>
            <div className="date">{date}</div>
            {
                list.length > 0 &&
                <ul>
                    {list.map((e,i)=><li key={i}><span>{e}</span></li>)}
                </ul>
            }
        </div>
    )
}
export default TextList
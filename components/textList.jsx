import Icon from "./icon";

const TextList = ({ img = null,single=false,imgReplaceTitle=false, title, date, list, url }) => {
  let Title = <strong>{title}</strong>;
  if(img){
    Title = (
      <>
        <img src={img} alt={title} className={`img-textList ${!single ? "img-textList-small" : ""}`} />
        <strong>{title}</strong>
      </>
    );
    if(imgReplaceTitle){
      Title = (
        <>
          <img src={img} alt={title} className={`img-textList ${!single ? "img-textList-small" : ""}`}/>
        </>
      );
    }
  }
  if(url){
    Title = (
      <>
        <a href={url} style={{ display: "flex", alignItems: "center" }}>
          <Icon marginRight="10px">fa fa-link</Icon>
          {Title}
        </a>
      </>
    );
  }
  return (
    <div
      className="textList"
      style={{
        viewTransitionName: title.trim().toLowerCase().replace(/\s+/g, "-"),
      }}
    >
      <div className={`textList-title ${single ? "textList-title-single" : ""}`}>
        {Title}
      </div>
      <div className="date">{date}</div>
      {list.length > 0 && (
        <ul>
          {list.map((e, i) => (
            <li key={i}>
              <span>{e}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default TextList;

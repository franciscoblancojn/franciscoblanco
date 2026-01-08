import Icon from "./icon";

const TextList = ({ img = null,imgSmall=true, title, date, list, url }) => {
  let Title = <strong>{title}</strong>;
  if(img){
    Title = (
      <>
        <img src={img} alt={title} className={`img-textList ${imgSmall ? "img-textList-small" : ""}`}/>
      </>
    );
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
      {Title}
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

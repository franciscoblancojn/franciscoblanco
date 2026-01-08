import Icon from "./icon";

const TextList = ({ title, date, list, url }) => {
  return (
    <div
      className="textList"
      style={{
        viewTransitionName: title.trim().toLowerCase().replace(/\s+/g, "-"),
      }}
    >
      {url ? (
        <>
          <a href={url}>
            <Icon marginRight="10px">fa fa-link</Icon>
            <strong>{title}</strong>
          </a>
        </>
      ) : (
        <>
          <strong>{title}</strong>
        </>
      )}
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

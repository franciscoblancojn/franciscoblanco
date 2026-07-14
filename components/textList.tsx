import React from "react";
import Head from "next/head";
import Icon from "./icon";
import { sanitizeVTName } from "@/utils/sanitizeVTName";

interface TextListProps {
  img?: string;
  single?: boolean;
  imgReplaceTitle?: boolean;
  title: string;
  date?: string;
  list: (string | React.JSX.Element)[];
  url?: string;
}

const TextList: React.FC<TextListProps> = ({
  img = null,
  single = false,
  imgReplaceTitle = false,
  title,
  date,
  list,
  url,
}) => {
  const vtName = sanitizeVTName(title);
  let Title: React.JSX.Element = <strong>{title}</strong>;
  if (img) {
    Title = (
      <>
        <img
          src={img}
          alt={title}
          className={`img-textList ${!single ? "img-textList-small" : ""}`}
        />
        <strong>{title}</strong>
      </>
    );
    if (imgReplaceTitle) {
      Title = (
        <>
          <img
            src={img}
            alt={title}
            className={`img-textList ${!single ? "img-textList-small" : ""}`}
          />
        </>
      );
    }
  }
  if (url) {
    Title = (
      <a href={url} style={{ display: "flex", alignItems: "center" }}>
        <Icon marginRight="10px">fa fa-link</Icon>
        {Title}
      </a>
    );
  }
  return (
    <>
      <Head>
        <style>{`[data-vt="${vtName}"]{view-transition-name:${vtName}}`}</style>
      </Head>
      <div data-vt={vtName} className="textList">
        <div id={vtName} className="has"></div>
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
    </>
  );
};
export default TextList;

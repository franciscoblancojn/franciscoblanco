import React from "react";
import Head from "next/head";
import Icon from "@/components/icon";
import { sanitizeVTName } from "@/utils/sanitizeVTName";

interface TitleProps {
  children?: React.ReactNode;
  className?: string;
}

const Title: React.FC<TitleProps> = ({ children, className = "" }) => {
  const vtName = sanitizeVTName(`${children}`);
  return (
    <>
      <Head>
        <style>{`[data-vt="${vtName}"]{view-transition-name:${vtName}}`}</style>
      </Head>
      <h3 data-vt={vtName} className={`title ${className}`}>
        <Icon marginRight="20px">fas fa-caret-right</Icon>
        {children}
      </h3>
    </>
  );
};

export default Title;

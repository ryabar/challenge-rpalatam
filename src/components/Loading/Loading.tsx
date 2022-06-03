import React from "react";
import { ILoading as LoadingProps } from "@Types/index";

function Loading({ type }: LoadingProps) {
  const loadingBasic = <div className="loading" />;

  const loadingDots = (
    <div className="loading--dots">
      <div className="loading__dot loading__dot--1" />
      <div className="loading__dot loading__dot--2" />
      <div className="loading__dot loading__dot--3" />
    </div>
  );

  if (type === "dots") return loadingDots;
  return loadingBasic;
}

export default Loading;

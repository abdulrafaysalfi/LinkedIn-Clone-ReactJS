import React from "react";
import "./Widgets.css";
import InfoIcon from "@material-ui/icons/Info";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
function Widgets(props) {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecordIcon />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );
  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle("PAPA React is back", "Top news - 20009 readeres")}
      {newsArticle("PAPA React is back", "Top news - 20009 readeres")}
      {newsArticle("PAPA React is back", "Top news - 20009 readeres")}
      {newsArticle("PAPA React is back", "Top news - 20009 readeres")}
      {newsArticle("PAPA React is back", "Top news - 20009 readeres")}
      {newsArticle("PAPA React is back", "Top news - 20009 readeres")}
      {newsArticle("PAPA React is back", "Top news - 20009 readeres")}
      {newsArticle("PAPA React is back", "Top news - 20009 readeres")}
      {newsArticle("PAPA React is back", "Top news - 20009 readeres")}
      {newsArticle("PAPA React is back", "Top news - 20009 readeres")}
      {newsArticle("PAPA React is back", "Top news - 20009 readeres")}
      {newsArticle("PAPA React is back", "Top news - 20009 readeres")}
    </div>
  );
}

export default Widgets;
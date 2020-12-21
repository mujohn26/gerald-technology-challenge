import React from "react";
import "./Main.css";
import Sidebar from "../Sidebar/Sidebar";
import Article from "../Article/Article";

export default class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      activeArticle,
      articlesList,
      activeArticleId,
      switchArticle,
      totalArticles,
      toggleTheme
    } = this.props;
    return (
      <div className="main">
 
        <Sidebar
          articlesList={articlesList}
          activeArticleId={activeArticleId}
          switchArticle={switchArticle}
          toggleTheme={toggleTheme}
        />
         <Article
          activeArticle={activeArticle}
          switchArticle={switchArticle}
          totalArticles={totalArticles}
        />
      </div>
    );
  }
}

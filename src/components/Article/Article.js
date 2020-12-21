import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SubArticleSidebar from "./ArticleSidebar";
import ArticleContent from "./ArticleContent";
import "./Article.css";

export default class Article extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        activeSubArticleId: 1,
      }; 
    this.getSubActiveArticle = this.getActiveSubArticle.bind(this);
    this.getSubArticlesList = this.getSubArticlesList.bind(this);
    this.switchSubArticle = this.switchSubArticle.bind(this);
    }
  getActiveSubArticle() {
    const activeArticle = this.props.activeArticle.subArticle.filter(
      (article) => article.id === this.state.activeSubArticleId
    );
    return activeArticle[0];
  }

  getSubArticlesList() {
    return this.props.activeArticle.subArticle.map((article) => ({
      id: article.id,
      title: article.title,
      userPic: article.userPic,
      userName: article.userName,
      description:article.description,
      time:article.time,
      subArticleImg:article.subArticleImg
    }));
  }

  switchSubArticle(id) {
    this.setState({ activeSubArticleId: id });
    
  }
  render() {
    const { activeArticle, switchArticle, totalArticles } = this.props;
    return (
      <div className="article">
        <div className="article__nav">
          <div className="article__nav__search">
            <div>
              <FontAwesomeIcon
                icon="search"
                className="sidebar__nav__search__icon"
              />
            </div>
            <div>
              <h5>Rechercher</h5>
            </div>
          </div>
          <div className="sidebar__nav__icons_container">
            <div>
              <FontAwesomeIcon
                icon="calendar"
                className="sidebar__nav__search__icon"
              />
            </div>
            <div>
              <FontAwesomeIcon
                icon="cog"
                className="sidebar__nav__search__icon"
              />
            </div>
            <div>
              <FontAwesomeIcon
                icon="question-circle"
                className="sidebar__nav__search__icon"
              />
            </div>
            <div>
              <FontAwesomeIcon
                icon="desktop"
                className="sidebar__nav__search__icon"
              />
            </div>
            <div>
              <FontAwesomeIcon
                icon="user"
                className="sidebar__nav__search__icon"
              />
            </div>
          </div>
        </div>

        <div className="article__content">
          <div>
            <SubArticleSidebar
              subArticlesList={this.getSubArticlesList()}
              subActiveArticleId={this.getSubActiveArticle()}
              switchSubArticle={this.switchSubArticle}
              activeSubArticleId={this.state.activeSubArticleId}
            />
          </div>
          <div >
              <ArticleContent
              activeSubArticle={this.getSubActiveArticle()}
              />
          </div>
        </div>
      </div>
    );
  }
}

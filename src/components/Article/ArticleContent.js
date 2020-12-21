import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SubArticleSidebar from "./ArticleSidebar";
import "./articleContent.css";

export default class ArticleContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activeSubArticleId: 1,
    };
  }

  render() {
    const { activeSubArticle } = this.props;
    return (
      <div className="content">
        <div className="content__nav__bar">
          <div style={{marginLeft:"10px"}}>
            <h5>{this.props.activeSubArticle.title}</h5>
          </div>
          <div className="sidebar__nav__icons_container">
            <div>
              <FontAwesomeIcon
                icon="arrow-left"
                className="sidebar__nav__search__icon"
              />
            </div>
            <div>
              <FontAwesomeIcon
                icon="trash-alt"
                className="sidebar__nav__search__icon"
              />
            </div>
            <div>
              <FontAwesomeIcon
                icon="inbox"
                className="sidebar__nav__search__icon"
              />
            </div>
            <div>
              <FontAwesomeIcon
                icon="ban"
                className="sidebar__nav__search__icon"
              />
            </div>
            <div>
              <FontAwesomeIcon
                icon="paper-plane"
                className="sidebar__nav__search__icon"
              />
            </div>
            <div>
              <FontAwesomeIcon
                icon="ellipsis-h"
                className="sidebar__nav__search__icon"
              />
            </div>
          </div>
        </div>
        <div className="content__top__bar">
          <div style={{marginLeft:"10px"}}>
            <img
              src={this.props.activeSubArticle.userPic}
              height="90"
              width="90"
            />
          </div>
          <div>
            <a href="#">View browser</a>
          </div>
        </div>
        <div className="content__article__image__container">
          <img
            src={this.props.activeSubArticle.subArticleImg}
            height="400px"
            width="500px"
          />
        </div>
        <div className="content__article__description">
          <div>
            <h4
              className="content__article__description__title"
              style={{ marginRight: "10px" }}
            >
              {this.props.activeSubArticle.title}
            </h4>
          </div>
          <div className="content__article__description__body">
            <p>
              {this.props.activeSubArticle.description}
            </p>
          </div>
        </div>
      </div>
    );
  }
}

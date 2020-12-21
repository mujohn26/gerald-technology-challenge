import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Toolbar from "@material-ui/core/Toolbar";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import SwitchUI from "@material-ui/core/Switch";
import "./articleSidebar.css";

const SubArticleSidebar = ({
  subArticlesList,
  activeSubArticleId,
  switchSubArticle,
}) => (
  <div className="sidebar">
    <div className="sidebar__toggle__container"></div>
    <div className="sidebar__head">
      <div className="subArticle___sidebar__head__title">
        <div>
          <h4>Prioritere</h4>
        </div>
        <div style={{marginLeft:"10px"}}>
          <FontAwesomeIcon
            icon="angle-down"
            className="sidebar__head__button__icon_angle"
          />
        </div>
      </div>
      <div>
        <FontAwesomeIcon
          icon="plus-square"
          className="subArticle__sidebar__head__button__icon"
        />
      </div>
    </div>

    <ul className="sidebar__list">
      {subArticlesList &&
        subArticlesList.map((article) => (
          <li
            className={`sidebar__subtitle__list__item ${
              activeSubArticleId === article.id
                ? "sub__article__sidebar__list__item--active"
                : ""
            }`}
            onClick={() => switchSubArticle(article.id)}
          >
            <div>
              <img
                src={article.userPic}
                height="40px"
                width="40px"
                style={{
                  marginTop: "15px",
                  borderRadius: "10px 10px 10px 10px",
                }}
              />
            </div>
            <div className="sub__article__sidebar__list__item__container">
              <div className="sub__article__sidebar__list__item__head">
                <div>
                  <h4 className="sidebar__list__item__title">
                    {article.userName}
                  </h4>
                </div>
                <div>
                  <h4
                    className="sidebar__list__item__title"
                    style={{ marginRight: "10px" }}
                  >
                    {article.time}
                  </h4>
                </div>
              </div>
              <div className="sidebar__list__item__description"
              style={{ color:activeSubArticleId === article.id? "var(--primaryBgTitle)":"var(--primaryText)"}}
              >
                {article.title}
              </div>
              <div>
                <h4 className="sidebar__list__item__body__description">
                  {article.description}
                </h4>
              </div>
            </div>
          </li>
        ))}
    </ul>
  </div>
);

export default SubArticleSidebar;

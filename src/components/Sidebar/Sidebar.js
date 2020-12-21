import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Toolbar from "@material-ui/core/Toolbar";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import SwitchUI from "@material-ui/core/Switch";
import "./Sidebar.css";

const Sidebar = ({
  articlesList,
  activeArticleId,
  switchArticle,
  toggleTheme,
}) => (
    
  <div className="sidebar">
    <div className="sidebar__toggle__container">
      <Toolbar>
        <FormControlLabel
          control={<SwitchUI onClick={(e) => toggleTheme()} />}
          label="Dark/light"
        />
      </Toolbar>
    </div>
    <div className="sidebar__head">
      <div>
        <FontAwesomeIcon icon="th" className="sidebar__head__button__icon" />
      </div>
      <div>
        <h4 className="sidebar__head__title">Outlook</h4>
      </div>
    </div>

    <ul className="sidebar__list">
      {articlesList &&
        articlesList.map((article) => (
          <li
            className={`sidebar__list__item ${
              activeArticleId === article.id
                ? "sidebar__list__item--active"
                : ""
            }`}
            onClick={() => switchArticle(article.id)}
          >
            <div>
              <FontAwesomeIcon
                icon={article.icon}
                className="sidebar__list__item__icon"
                style={{
                    color:
                      activeArticleId === article.id
                        ? "var(--selectionTextColor)"
                        : "var(--textColor)",
                  }}
              />{" "}
            </div>
            <div>
              <h4
                className="sidebar__list__item__title"
                style={{
                  color:
                    activeArticleId === article.id
                      ? "var(--selectionTextColor)"
                      : "var(--textColor)",
                }}
              >
                {article.title}
              </h4>
            </div>
          </li>
        ))}
    </ul>
  </div>
);

export default Sidebar;

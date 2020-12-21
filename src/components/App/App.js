import React from "react";
import "./App.css";
import Main from "./../Main/Main";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import noteIcon from "../../assets/icons/note.png";
import user1 from "../../assets/images/user1.jpeg";
import user2 from "../../assets/images/user2.jpeg";
import user3 from "../../assets/images/user3.jpeg";
import user4 from "../../assets/images/user4.jpeg";
import user5 from "../../assets/images/user5.jpeg";
import articleImg from "../../assets/images/illustration.png";

import {
  faPlusCircle,
  faTrashAlt,
  faPencilAlt,
  faArrowLeft,
  faArrowRight,
  faTh,
  faBan,
  faPen,
  faPaperPlane,
  faInbox,
  faStickyNote,
  faSearch,
  faCalendar,
  faCog,
  faQuestionCircle,
  faDesktop,
  faUser,
  faAngleDown,
  faPlusSquare,
  faEllipsisH,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faPlusCircle,
  faTrashAlt,
  faPencilAlt,
  faArrowLeft,
  faArrowRight,
  faTh,
  faBan,
  faPen,
  faPaperPlane,
  faInbox,
  faStickyNote,
  faSearch,
  faCalendar,
  faCog,
  faQuestionCircle,
  faDesktop,
  faDesktop,
  faUser,
  faAngleDown,
  faPlusSquare,
  faEllipsisH
);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "light",
      activeArticleId: 1,
    };
    this.toggleTheme = this.toggleTheme.bind(this);
    this.getActiveArticle = this.getActiveArticle.bind(this);
    this.getArticlesList = this.getArticlesList.bind(this);
    this.switchArticle = this.switchArticle.bind(this);
  }

  toggleTheme() {
    const theme = this.state.theme === "light" ? "dark" : "light";
    document.documentElement.classList.add("color-theme-in-transition");
    this.setState({ theme });
    document.documentElement.setAttribute("data-theme", theme);
    window.setTimeout(() => {
      document.documentElement.classList.remove("color-theme-in-transition");
    }, 1000);
  }

  getActiveArticle() {
    const activeArticle = articles.filter(
      (article) => article.id === this.state.activeArticleId
    );
    return activeArticle[0];
  }

  getArticlesList() {
    return articles.map((article) => ({
      id: article.id,
      title: article.title,
      icon: article.icon,
      subArticle: article.subArticle,
    }));
  }

  switchArticle(id) {
    this.setState({ activeArticleId: id });
  }

  render() {
    const { activeArticleId } = this.state;
    return (
      <div className="app">
        <Main
          activeArticle={this.getActiveArticle()}
          articlesList={this.getArticlesList()}
          activeArticleId={activeArticleId}
          switchArticle={this.switchArticle}
          totalArticles={articles.length}
          toggleTheme={this.toggleTheme}
        />
      </div>
    );
  }
}

const articles = [
  {
    id: 1,
    title: "Boite de reception",
    icon: "inbox",
    subArticle: [
      {
        id: 1,
        userPic: user1,
        userName: "John",
        title: "Cest chouchou que je veux",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        time: "8:00",
        subArticleImg: articleImg,
      },
      {
        id: 2,
        userPic: user2,
        userName: "Felix",
        title: "Marvel",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        time: "8:00",
        subArticleImg: articleImg,
      },
      {
        id: 3,
        userPic: user3,
        userName: "Lili",
        title: "Ma question preferee",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        time: "8:00",
        subArticleImg: articleImg,
      },
      {
        id: 4,
        userPic: user4,
        userName: "Marvel",
        title: "Jimmy punchrine",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        time: "8:00",
        subArticleImg: articleImg,
      },
      {
        id: 5,
        userPic: user5,
        userName: "Yaffa",
        title: "cest qui Shctroumpf",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        time: "8:90",
        subArticleImg: articleImg,
      },
    ],
  },
  {
    id: 2,
    title: "Courier indesirables",
    icon: "ban",
    subArticle: [
      {
        id: 1,
        userPic: user2,
        userName: "John",
        title: "Cest chouchou que je veux",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        time: "8:00",
        subArticleImg: articleImg,
      },
      {
        id: 2,
        userPic: user1,
        userName: "Felix",
        title: "Marvel",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        time: "8:00",
        subArticleImg: articleImg,
      },
      {
        id: 3,
        userPic: user4,
        userName: "Lili",
        title: "cest qui Shctroumpf",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        time: "8:00",
        subArticleImg: articleImg,
      },
      {
        id: 4,
        userPic: user3,
        userName: "Marvel",
        title: "Lorem ipsum",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        time: "8:00",
        subArticleImg: articleImg,
      },
      {
        id: 5,
        userPic: user5,
        userName: "Yaffa",
        title: "Lorem ipsum",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        time: "8:90",
        subArticleImg: articleImg,
      },
    ],
  },
  {
    id: 3,
    title: "Brouillons",
    icon: "pencil-alt",
    subArticle: [
      {
        id: 1,
        userPic: user5,
        userName: "John",
        title: "Cest chouchou que je veux",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        time: "8:00",
        subArticleImg: articleImg,
      },
      {
        id: 2,
        userPic: user3,
        userName: "Felix",
        title: "Marvel",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        time: "8:00",
        subArticleImg: articleImg,
      },
      {
        id: 3,
        userPic: user4,
        userName: "Lili",
        title: "cest qui Shctroumpf",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        time: "8:00",
        subArticleImg: articleImg,
      },
      {
        id: 4,
        userPic: user1,
        userName: "Marvel",
        title: "Lorem ipsum",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        time: "8:00",
        subArticleImg: articleImg,
      },
      {
        id: 5,
        userPic: user2,
        userName: "Yaffa",
        title: "Lorem ipsum",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        time: "8:90",
        subArticleImg: articleImg,
      },
    ],
  },
  {
    id: 4,
    title: "Element envoyes",
    icon: "paper-plane",
    subArticle: [
      {
        id: 1,
        userPic: user3,
        userName: "John",
        title: "Cest chouchou que je veux",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        time: "8:00",
        subArticleImg: articleImg,
      },
      {
        id: 2,
        userPic: user1,
        userName: "Felix",
        title: "Welcome to Marvel",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        time: "8:00",
        subArticleImg: articleImg,
      },
      {
        id: 3,
        userPic: user5,
        userName: "Lili",
        title: "Lorem ipsum",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        time: "8:00",
        subArticleImg: articleImg,
      },
      {
        id: 4,
        userPic: user4,
        userName: "Marvel",
        title: "cest qui Shctroumpf",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        time: "8:00",
        subArticleImg: articleImg,
      },
      {
        id: 5,
        userPic: user2,
        userName: "Yaffa",
        title: "Lorem ipsum",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        time: "8:90",
        subArticleImg: articleImg,
      },
    ],
  },
  {
    id: 5,
    title: "Element suprimes",
    icon: "trash-alt",
    subArticle: [
      {
        id: 1,
        userPic: user5,
        userName: "John",
        title: "Cest chouchou que je veux",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        time: "8:00",
        subArticleImg: articleImg,
      },
      {
        id: 2,
        userPic: user4,
        userName: "Felix",
        title: "Welcome to Marvel",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        time: "8:00",
        subArticleImg: articleImg,
      },
      {
        id: 3,
        userPic: user3,
        userName: "Lili",
        title: "cest qui Shctroumpf",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        time: "8:00",
        subArticleImg: articleImg,
      },
      {
        id: 4,
        userPic: user2,
        userName: "Marvel",
        title: "Lorem ipsum",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        time: "8:00",
        subArticleImg: articleImg,
      },
      {
        id: 5,
        userPic: user1,
        userName: "Yaffa",
        title: "Lorem ipsum",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        time: "8:90",
        subArticleImg: articleImg,
      },
    ],
  },
  {
    id: 6,
    title: "Archives",
    icon: "inbox",
    subArticle: [
      {
        id: 1,
        userPic: user2,
        userName: "John",
        title: "Cest chouchou que je veux",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        time: "8:00",
        subArticleImg: articleImg,
      },
      {
        id: 2,
        userPic: user4,
        userName: "Felix",
        title: "Welcome to Marvel",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        time: "8:00",
        subArticleImg: articleImg,
      },
      {
        id: 3,
        userPic: user5,
        userName: "Lili",
        title: "cest qui Shctroumpf",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        time: "8:00",
        subArticleImg: articleImg,
      },
      {
        id: 4,
        userPic: user1,
        userName: "Marvel",
        title: "Lorem ipsum",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        time: "8:00",
        subArticleImg: articleImg,
      },
      {
        id: 5,
        userPic: user3,
        userName: "Yaffa",
        title: "Lorem ipsum",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        time: "8:90",
        subArticleImg: articleImg,
      },
    ],
  },
  {
    id: 7,
    title: "Notes",
    icon: "sticky-note",
    subArticle: [
      {
        id: 1,
        userPic: user1,
        userName: "John",
        title: "Cest chouchou que je veux",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        time: "8:00",
        subArticleImg: articleImg,
      },
      {
        id: 2,
        userPic: user2,
        userName: "Felix",
        title: "Welcome to Marvel",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        time: "8:00",
        subArticleImg: articleImg,
      },
      {
        id: 3,
        userPic: user3,
        userName: "Lili",
        title: "cest qui Shctroumpf",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        time: "8:00",
        subArticleImg: articleImg,
      },
      {
        id: 4,
        userPic: user4,
        userName: "Marvel",
        title: "Lorem ipsum",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        time: "8:00",
        subArticleImg: articleImg,
      },
      {
        id: 5,
        userPic: user5,
        userName: "Yaffa",
        title: "Lorem ipsum",
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book",
        time: "8:90",
        subArticleImg: articleImg,
      },
    ],
  },
];

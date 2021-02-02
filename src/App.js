import './App.css';
import ChatApp from './c01/ChatApp'
import CommentBox from "./c02/CommentBox";
import { TabSelectorSample } from "./c02/TabSelector";
import React from "react";

const styles = {
  fontFamily: "sans-serif",
  paddingLeft: "250px",
};
const routeMap = {
  "chat": ChatApp,
  "commentBox": CommentBox,
  "tab-selector": TabSelectorSample,
}

class Hello extends React.PureComponent {
  render () {
    return (<div>
      <h1>Welcome to React course!</h1>
      <p>Click the left side menu to navigate.</p>
    </div>
    )
  }
}
class App extends React.PureComponent {
  handleLinkClick = key => {
    // window.location.hash = `#${key}`;
    window.history.pushState(null, "", `/#/${key}`);
    this.forceUpdate();
  };
  render () {
    const currentPage = document.location.hash.replace(/#\/?/, "");
    let CurrentPage = routeMap[currentPage] || Hello;
    return (
      <div style={styles}>
        <ul className="menu-list">
          {Object.keys(routeMap).map(key => (
            <li
              key={key}
              className={key === currentPage ? "is-active" : ""}
              style={{ listStyle: "none" }}
            >
              <span className="link" onClick={() => this.handleLinkClick(key)}>
                {key}
              </span>
            </li>
          ))}
        </ul>
        <div style={{ padding: "30px 0" }}>
          <CurrentPage />
        </div>
      </div>
    );
  }
}

export default App;

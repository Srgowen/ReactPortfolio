import React from "react";
import Nav from "../Nav";

function Header(props) {
  const { currentTab, handleTabChange } = props;
 // Destructuring props to extract currentTab and handleTabChange
  return (
    <div>
      <section>
        <header className="flex-row px-1">
          <div>
            <h1></h1>
          </div>
          <div>
            <Nav
              currentTab={currentTab}
              handleTabChange={handleTabChange}
            ></Nav>
          </div>
        </header>
      </section>
      <section class="hero">
        <div class="hero-cta">
          <h2>Welcome</h2>
        </div>
      </section>
    </div>
  );
}

export default Header;
import React, { useState } from "react";
import { Switch, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Fade from "react-reveal/Fade";
import "./App.css";
import "./resetStyles.css";
import Navbar from "./Navbar/Navbar.js";
import About from "./Pages/Aboutpage/About.js";
import Intropage from "./Pages/Intropage/Intropage.js";
import Objectpage from "./Pages/Objectpage/Objectpage.js";
import Storypage from "./Pages/Storypage/Storypage.js";
import Emailpage from "./Pages/Emailpage/Emailpage.js";
import Footer from "./Footer/Footer.js";
import Thank from "./Pages/Thankpage/Thank.js";
import Modal from "./Pages/Thankpage/Modal";

const App = () => {
  const [suggestionsHidden, setSuggestionsHidden] = useState(false);
  const [alertHidden, setAlertHidden] = useState(false);

  let formData = new FormData();

  const updateData = (items) => {
    const [type, data] = items;
    formData.set(type, data);
  };

  const submit = () => {
    // submit formdata here

    fetch("/submitForm", {
      method: "POST",
      headers: { enctype: "multipart/form-data" },
      body: formData,
    })
      .then((res) => res.json())
      .then((res) => console.log(res))
      .catch((err) => err);

    // clear it at the end

    formData = new FormData();
  };

  let location = useLocation();

  let hideSuggestions = () => {
    setSuggestionsHidden(!suggestionsHidden);
    console.log("meep");
  };

  let hideAlert = () => {
    setAlertHidden(!alertHidden);
    console.log("meep");
  };

  let content = (
    <React.Fragment>
      <TransitionGroup className="transition-group">
        <CSSTransition
          key={location.key}
          timeout={{ enter: 1000, exit: 800 }}
          classNames={"fade"}
        >
          <div className="route-section">
            <Switch>
              <Route exact path="/about">
                <Navbar setHidden={hideAlert} />
                <About />
                <Footer />
              </Route>
              <Route exact path="/thank">
                <Navbar setHidden={hideAlert} />
                <Thank />
                <Footer />
              </Route>
              <Route exact path="/">
                <Navbar setHidden={hideAlert} />
                <main>
                  {alertHidden && (
                    <Modal
                      hide={hideAlert}
                      title="Please note"
                      style={{
                        body: {
                          maxHeight: "500px",
                          overflowY: "scroll",
                          opacity: "100 !important",
                        },
                        title: {},
                      }}
                      body={
                        <div className="flow">
                          <p>
                            Grounded is currently undergoing internal
                            maintainence as we prepare for a wider launch in
                            2021. This site is just a copy of the site's
                            front-end, which was my main contribution to the
                            project.
                          </p>
                          <p>
                            We hope to branch out and document the stories of
                            more and more people from all walks of life!
                          </p>
                        </div>
                      }
                    />
                  )}
                  <section
                    className={
                      alertHidden || suggestionsHidden
                        ? "page__container hidden"
                        : "page__container"
                    }
                  >
                    <Intropage />
                  </section>
                  <section
                    className={
                      alertHidden ? "page__container hidden" : "page__container"
                    }
                  >
                    <Fade>
                      <Objectpage
                        updateData={updateData}
                        setHidden={hideSuggestions}
                      />
                    </Fade>
                  </section>
                  <section
                    className={
                      alertHidden || suggestionsHidden
                        ? "page__container hidden"
                        : "page__container"
                    }
                  >
                    <Fade>
                      <Storypage updateData={updateData} />
                    </Fade>
                  </section>
                  <section
                    className={
                      alertHidden || suggestionsHidden
                        ? "page__container hidden"
                        : "page__container"
                    }
                  >
                    <Fade>
                      <Emailpage updateData={updateData} submit={submit} />
                    </Fade>
                  </section>
                </main>
                <Footer />
              </Route>
            </Switch>
          </div>
        </CSSTransition>
      </TransitionGroup>
    </React.Fragment>
  );
  return content;
};

export default App;

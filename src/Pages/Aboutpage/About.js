import React from "react";
import "./About.css";
import AudioPlayer from "react-h5-audio-player";

const About = () => {
  const planneraudio = new Audio("../../Samples/Planner.m4a");
  const lauraaudio = new Audio("../../Samples/Mom's_Garden.m4a");
  const angelaaudio = new Audio("../../Samples/Plant_Object_Angela.mp3");


  let content = (

    <React.Fragment>
      <div className="page page--about flow">
        <h1 className="subtitle subtitle--about bold text--center">
          About Our Project
        </h1>
        <div className="about__content">
          <div className="contactinfo column">
            <div className="box_outside">
              <div className="box_content flow">
                <div className="box_title">Contact Info</div>
                <div className="contactinfo__email">
                  <div className="box_sub_title">Email:</div>
                  <a
                    href="mailto:groundedarchives@gmail.com?subject=Question"
                    target="_blank"
                  >
                    groundedarchives@gmail.com
                  </a>
                </div>
                <div className="contactInfo__number">
                  <div className="box_sub_title">Phone Number:</div>
                  <a classname="text" href="tel:314-312-3524">
                    (314) 312-3524
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="abouttext column flow">
            <p className="text--intro about_content">
              The enduring stories of global events are often found in the
              objects that are left behind: artifacts in museums, keepsakes
              passed down through families, houses that withstood war, famine,
              or plague.
            </p>
            <p className="text--intro about_content">
              Living in quarantine has forced many of us to find new meaning in
              the spaces we inhabit and the objects that surround us.
            </p>
            <p className="text--intro about_content">
              “Grounded: The Pandemic Archive” is our effort to assemble a
              living archive of the objects that tell our stories. Through this
              project, we invite you to find and preserve an object that holds a
              piece of your story, and add your voice to history.
            </p>
          </div>
        </div>
      </div>
      <div className="page page--about page--about--example flow">
        <h1 className="subtitle subtitle--about bold text--center">
          Example Submissions
        </h1>
        <div className="column">
          <div className="example_back">
            <div className="audioCol">
              <div className="audioPlayer1">
                <img src="Picture1.png" alt="A floral planner" className="audioimage" id="plannerpic"></img>
                <div className="audioControls">
                  <audio controls>
                    <source src="../../Samples/Planner.m4a" id="planner"></source>
                  </audio>
                </div>
              </div>
            </div>

            <br></br>
            <div className="audioCol">
              <div className="audioPlayer2">
                <img src="Picture2.png" alt="An 8x8 garden box" className="audioimage" id="gardenpic"></img>
                <div className="audioControls">
                  <audio controls>
                    <source src="../../Samples/Mom's_Garden.m4a" id="garden"></source>
                  </audio>
                </div>
              </div>
            </div>
            <br></br>
            <div className="audioCol">
              <div className="audioPlayer2">
                <img src="Picture3.png" alt="A succulent plant" className="audioimage" id="cactuspic"></img>
                <div className="audioControls">
                  <audio controls>
                <source src="../../Samples/Plant_Object_Angela.mp4" id="plant"></source>
                </audio>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment >
  );
return content;
};

export default React.memo(About);

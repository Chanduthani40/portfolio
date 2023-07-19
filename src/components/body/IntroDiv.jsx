import React,{useState} from "react";
import "../body/IntroDiv.css";
import Button from "@mui/material/Button";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";
import chandu from "../../Assets/images/chandu.jpeg";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import PromptDialog from "./Prompt";


const IntroDiv = ({ showPrompt,setPrompt }) => {

 

  const toggleCommentBox = () => {
    (showPrompt === false) ? (setPrompt(true)) : (setPrompt(false))
    console.log('hello aat commetBox')
  };
  console.log(showPrompt)

  const downloadResume = () => {
    const link = document.createElement("a");
    link.download = "../body/resume.pdf";
    link.href = "../body/resume.pdf";
    link.click();
  };
  return (
    <div className="Intro-container">
      <div class="semi-circle"></div>

      <div className="Intro-container-firstPart">
        <div>
          <h1>Hi,</h1>
        </div>
        <div>
          <h1>I am Chandu Thani</h1>
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec quis
            lacus eu ante tincidunt pharetra. Mauris dapibus bibendum est at
            suscipit.
          </p>
        </div>

          <PromptDialog isOpen={showPrompt} onRequestClose={showPrompt} toggleCommentBox={toggleCommentBox} />
        <div className="buttons-container">
          <Button
            variant="outlined"
            className="buttons-container-styles-1"
            endIcon={<ArrowOutwardIcon className="dis-arrow" />}
            onClick={toggleCommentBox}
           
          >
            Get in touch
          </Button>
          <div style={{position: "absolute", left: "0px", top: "0px", zIndex: "1",width:"500px",border:"2px solid black"}}>



          </div>
         
          <Button
            variant="outlined"
            className="buttons-container-styles-2"
            sx={{
              ml: 5,
            }}
            onClick={downloadResume}
            id="download"
          >
            Download CV
          </Button>
        </div>
      </div>
      <div class="Intro-container-secondPart">
        <img src={chandu} alt="" />
        <div class="socialMedia-container">
          <a
            style={{ color: "black" }}
            href="https://www.linkedin.com/in/chandu-thani-3a86251a4/"
          >
            <TwitterIcon className="socialMedia-icons"></TwitterIcon>
          </a>
          <a
            style={{ color: "black" }}
            href="https://www.linkedin.com/in/chandu-thani-3a86251a4/"
          >
            <FacebookIcon className="socialMedia-icons"></FacebookIcon>
          </a>
          <a
            style={{ color: "black" }}
            href="https://www.linkedin.com/in/chandu-thani-3a86251a4/"
          >
            <InstagramIcon className="socialMedia-icons"></InstagramIcon>
          </a>
        </div>
      </div>
    </div>
  );
};
export default IntroDiv;

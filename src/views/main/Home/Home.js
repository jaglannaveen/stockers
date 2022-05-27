import React from "react";
import Navebar from "../../components/Navebar";
import ComSearchAuction from "../../components/ComSearchAuction";
import { Button } from "react-bootstrap";
import BasicFn from "../../components/CompoFiveStar";
import logo from "../../components/image/logo.png";
import Component1 from "../../components/Component1";
import CompoAmaze from "../../components/CompoAmaze";
import CompoFeatured from "../../components/CompoFeatured";
import CompoAmazon from "../../components/CompoAmazon";
import CompoTrusted from "../../components/CompoTrusted";
function Home() {
  return (
    <>
      <Navebar />
      <Component1 />
      <ComSearchAuction />
      <CompoAmaze />
      <CompoFeatured />
      <CompoAmazon />
      <CompoTrusted />

      <div className="nomidd">
        <div className="col-md-1"></div>
        <div className="col-md-10">
          <div className="allDiv">
            <div className="Star">
               <BasicFn />
             
            </div>{" "}
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur quia dolorem molestias. Vel, beatae. Quisquam
              obcaecati nisi upiditate repellendus ad adipisci?
            </span>
            <div>
                <div><img src={logo} /></div>
                <div><span> Graham Griffiths </span></div>
                    </div>
          </div>
          <div className="allDiv">2</div>
          <div className="allDiv">3</div>
        </div>
        <div className="col-md-1"></div>
      </div>
    </>
  );
}

export default Home;

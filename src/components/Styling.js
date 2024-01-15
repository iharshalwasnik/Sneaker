import React from "react";

import "./styles/Styling.css";

function Styling() {
  return (
    <div>
      <section className="contentblog">
        <div className="container my-5">
          <div className="row featurette d-flex justify-content-center align-items-center">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">
                First featurette Styling.{" "}
                <span className="text-body-secondary">
                  It’ll blow your mind.
                </span>
              </h2>
              <p className="lead">
              No matter how good your clothes are, if you wear the wrong type of shoes with them, your outfit will just not make the cut. 
                Shoes can make or break your look, which is why you need to know how to style them. 
                Some great placeholder content for the first featurette here.
                Imagine some exciting prose here.
              </p>
            </div>
            <div className="col-md-5">
              <img
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                width={500}
                height={500}
                src="https://img.mensxp.com/media/content/2021/Jun/header_banner_60b86af1be26f.jpeg?w=820&h=540&cc=1"
                alt=""
              />
            </div>
          </div>
          <div className="row featurette d-flex justify-content-center align-items-center">
            <div className="col-md-7 order-md-2">
              <h2 className="featurette-heading fw-normal lh-1">
                Oh yeah, it’s that good.{" "}
                <span className="text-body-secondary">See for yourself.</span>
              </h2>
              <p className="lead">
                Another featurette? Of course. More placeholder content here to
                give you an idea of how this layout would work with some actual
                real-world content in place.
              </p>
            </div>
            <div className="col-md-5 order-md-1">
              <img
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                width={500}
                height={500}
                src="https://media.glamour.com/photos/5d080a6094f64bcd7de3c051/16:9/w_3903,h_2195,c_limit/GettyImages-1133284313.jpg"
                alt=""
              />
            </div>
          </div>
          <div className="row featurette d-flex justify-content-center align-items-center">
            <div className="col-md-7">
              <h2 className="featurette-heading fw-normal lh-1">
                And lastly, this one.{" "}
                <span className="text-body-secondary">Checkmate.</span>
              </h2>
              <p className="lead">
                And yes, this is the last block of representative placeholder
                content. Again, not really intended to be actually read, simply
                here to give you a better view of what this would look like with
                some actual content. Your content.
              </p>
            </div>
            <div className="col-md-5">
              <img
                className="bd-placeholder-img bd-placeholder-img-lg featurette-image img-fluid mx-auto"
                width={500}
                height={500}
                src="https://www.newbalance.com/dw/image/v2/AAGI_PRD/on/demandware.static/-/Library-Sites-NBUS-NBCA/default/dw687ac17b/images/page-designer/2023/july/15260_Comp_R2_Image2.jpg"
                alt=""
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Styling;

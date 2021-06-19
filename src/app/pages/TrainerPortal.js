import React from "react";
import SVG from "react-inlinesvg";

import { toAbsoluteUrl } from "../../_metronic/_helpers";
import NewModal from "./Modal/Modal";
import ContactModal from "./Modal/ContactModal";
import NutritionPlan from "./Modal/NutritionPlan";
import ProgramModal from "./Modal/ProgramModal";
import Profile from "./Client/Profile";
import ProgressModal from "./Client/Modal/ProgressModal";
import NutritionCarousel from "./Carousel/Carousel";
import "./Hello.css";

const Hello = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const [contactShow, setContactShow] = React.useState(false);
  const [nutritionPlan, setNutritionPlan] = React.useState(false);
  const [addProgram, setAddProgram] = React.useState(false);
  const [profile, setProfile] = React.useState(false);
  const [progress, setProgress] = React.useState(false);
  return (
    <div className="col-sm-12">
      <div className="dash">
        <div
          className={`card card-custom bg-gray-100 card-stretch gutter-b`}
          style={{ width: "30%" }}
        >
          <div className="card-body p-0 position-relative overflow-hidden">
            {/* Chart */}

            <div className="card-spacer mt-5">
              <div className="row m-0">
                <div className="col bg-light-warning px-6 py-8 rounded-xl mr-7 mb-7">
                  <span className="svg-icon svg-icon-3x svg-icon-warning d-block my-2">
                    <SVG
                      src={toAbsoluteUrl(
                        "/media/svg/icons/Media/Equalizer.svg"
                      )}
                    ></SVG>
                  </span>
                  <p
                    style={{ cursor: "pointer" }}
                    className="text-warning font-weight-bold font-size-h6"
                    onClick={() => setModalShow(true)}
                  >
                    Create Workout
                  </p>
                </div>
                <div className="col bg-light-primary px-6 py-8 rounded-xl mb-7">
                  <span className="svg-icon svg-icon-3x svg-icon-primary d-block my-2">
                    <SVG
                      src={toAbsoluteUrl(
                        "/media/svg/icons/Communication/Add-user.svg"
                      )}
                    ></SVG>
                  </span>
                  <p
                    style={{ cursor: "pointer" }}
                    className="text-primary font-weight-bold font-size-h6 mt-2"
                    onClick={() => setContactShow(true)}
                  >
                    Add Client
                  </p>
                </div>
              </div>
              <div className="row m-0">
                <div className="col bg-light-danger px-6 py-8 rounded-xl mr-7">
                  <span className="svg-icon svg-icon-3x svg-icon-danger d-block my-2">
                    <SVG
                      src={toAbsoluteUrl("/media/svg/icons/Design/Layers.svg")}
                    ></SVG>
                  </span>
                  <p
                    style={{ cursor: "pointer" }}
                    className="text-danger font-weight-bold font-size-h6 mt-2"
                    onClick={() => setNutritionPlan(true)}
                  >
                    Add nutrition plan
                  </p>
                </div>
                <div className="col bg-light-success px-6 py-8 rounded-xl">
                  <span className="svg-icon svg-icon-3x svg-icon-success d-block my-2">
                    <SVG
                      src={toAbsoluteUrl(
                        "/media/svg/icons/Communication/Urgent-mail.svg"
                      )}
                    ></SVG>
                  </span>
                  <p
                    style={{ cursor: "pointer" }}
                    className="text-success font-weight-bold font-size-h6 mt-2"
                    onClick={() => setAddProgram(true)}
                  >
                    Create Programs
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ width: "50%" }}>
          <NutritionCarousel />
        </div>
      </div>
      <NewModal
        show={modalShow}
        onHide={() => setModalShow(false)}
        title="Create Workout"
      />
      <ContactModal show={contactShow} onHide={() => setContactShow(false)} />
      <NutritionPlan
        show={nutritionPlan}
        onHide={() => setNutritionPlan(false)}
        title="Create Nutrition Plan"
      />
      <ProgramModal
        show={addProgram}
        onHide={() => setAddProgram(false)}
        title="Create Program"
      />
      <Profile
        show={profile}
        onHide={() => setProfile(false)}
        title="Profile"
      />
      <ProgressModal
        show={progress}
        onHide={() => setProgress(false)}
        title="Add Progress Photos"
      />
    </div>
  );
};

export default Hello;

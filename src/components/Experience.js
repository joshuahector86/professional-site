import React from "react";

function Experience() {
  return (
    <div id="experience" className="experience">
      <div className="d-flex justify-content-center my-5">
        <h1>Experience</h1>
      </div>
      <div className="container experience-wrapper">
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>February 2020 - May 2021</h3>
            <h4> Howard University Graduate Researcher</h4>
            <p>
              ● Researched cyber security as it relates to software and
              databases.<br></br> ● Created tools in Python and MATLAB to
              analyze data.<br></br> ● Built prototype applications to increase
              security in mobile devices.<br></br> ● Experience with best coding
              practices to build products with future useability.
            </p>
          </div>
        </div>
        {/*-*/}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>August 2020 - April 2021</h3>
            <h4>Autodesk Research Intern</h4>
            <p>
              ● Created new tools using object-oriented programming. <br></br> ●
              Worked with simulation for data collection and experimentation.
              <br></br> ● Developed security for a robotics project.<br></br> ●
              Communicated with a team of professionals to relay work plans,
              milestones, status, and overall results in presentations.
            </p>
          </div>
        </div>
        {/*-*/}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>August 2019 - May 2021</h3>
            <h4>Howard University Masters Degree</h4>
            <p>
              Howard University<br></br> Washington, DC <br></br>College of
              Electrical Engineering and Computer Science<br></br> Master of
              Science in Computer Science
              <br></br> Major: Computer Science & Engineering, GPA: 3.6/4.0
            </p>
          </div>
        </div>
        {/*-*/}
        <div className="timeline-block timeline-block-left">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>June 2016 - May 2019</h3>
            <h4>Ithaca College Undergraduate Researcher</h4>
            <p>
              ● Created programs for system requirements of experiments that
              were done in the lab.<br></br> ● Developed problem solving skills
              while designing and executing experiments.<br></br> ● Documented
              the building and use of a Mobius 3π strip.<br></br> ● Extensive
              use of MATLAB and Latex for data analysis and technical writing.
              <br></br> ● Managed multiple projects across varying labs of
              varying disciplines.<br></br> ● Created publicity for the lab work
              done by appearing in magazines, giving talks, and creating video
              documentation.
            </p>
          </div>
        </div>
        {/*-*/}
        <div className="timeline-block timeline-block-right">
          <div className="marker"></div>
          <div className="timeline-content">
            <h3>September 2015 - May 2019</h3>
            <h4>Ithaca College Bachelor's Degree</h4>
            <p>
              Ithaca College<br></br>
              Ithaca, NY <br></br>
              School of Humanities and Sciences<br></br>
              Bachelor Degree<br></br>
              Major: Physics and Engineering
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;

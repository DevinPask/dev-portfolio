import React from 'react';



function Resume() {
  return (
    <section>
      <h1 className="underline">Devin Pask Resume</h1>
      <div>
        <ul className="listSpacing">
          <li className="company">Creative Blue</li>
          <li className="job">Lead Graphic + Web Designer</li>
          <li>Location: San Jose, California, United States</li>
          <li className="descrip">Design Presentaions, Websites, and various Media for customers needs. Also provided Web Development when needed.</li>
        </ul>
        <ul className="listSpacing">
        <li className="company">Trek Bicycle (formerly Livermore Cyclery)</li>
        <li className="job">Marketing and Media Manager</li>
        <li>Location: San Francisco Bay Area</li>
        <li className="descrip">My position primarily includes producing digital advertising campaigns, online sale, website design, in-store promotional material and display design. I have also worked on the branding of the business with custom designed graphics for clothing and accessories.</li>
        </ul>
        <ul className="listSpacing">
        <li className="company">Pacific Coast Building Products</li>
        <li className="job">Outside Sales Representative</li>
        <li>Location: San Francisco Bay Area</li>
        <li className="descrip">I started off as inside sales and yard worker to outside sales representative to the Home Depot Corporate account for the last three years of my time with the company. I left the position due to moving from the area.</li>
        </ul>
        <h2 className="cats">Education:</h2>

        <ul className="listSpacing">
        <li className="company">San Jose State University</li>
        <li className="job">Field Of Study: Illustration</li>
        <li className="descrip"></li>
        </ul>
        <ul className="listSpacing">
        <li className="company">Academy of Art University</li>
        <li className="job">Field Of Study: Illustration</li>
        <li className="descrip">Transitioned to San Jose State University for a more diverse educational background.</li>
        </ul>
        
        <h2 className="cats">Licenses and certifications:</h2>
        <ul className="listSpacing">
        <li className="company">University of California, Berkeley</li>
        <li className="job">UC Berkley- Full-Stack Development Bootcamp</li>
        </ul>
        <ul className="listSpacing">
        <li className="company">Kundalini Research Institute</li>
        <li className="job">Level 1 Certified Kundalini Yoga Teacher</li>
        </ul>
        <ul className="listSpacing">
        <li className="company">Specialized Bicycle Components</li>
        <li className="job">Business Management Training</li>
        </ul> 
      </div> 
    </section >
  );
}
export default Resume;
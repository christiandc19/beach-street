import React from 'react'
import "./CaseManagementSection.css";
import { BsCheckLg } from 'react-icons/bs';

import PHPSection1 from "../../assets/php-section1.webp";

const CaseManagementSection = () => {

  return (
    <>
    <div className="case-management-section">
      <div className="case-management-section-content container">

            <div className="case-management-section-header">
              <h1>Case Management Services</h1>
              <p>Welcome to Beach Street Rehab's Case Management Services. Our dedicated case management team is here to provide comprehensive support and coordination to individuals seeking assistance on their journey to recovery.</p> 
            </div>

        <div className="case-management-section-flex">

          <div className="case-management-section-flex-left">
            <h1>What is Case Management?</h1>
            <p>Case management is a collaborative approach to care that focuses on assessing, planning, and coordinating services to meet the unique needs of each individual. Our case managers serve as advocates, helping you navigate the complexities of treatment, recovery, and life beyond.</p>

            <h1>Our Case Management Approach</h1>
            <p><span><BsCheckLg /></span><b> Assessment</b>: Our case managers begin by conducting a thorough assessment of your unique situation, including medical, social, and psychological needs.</p>

            <p><span><BsCheckLg /></span><b>  Personalized Planning</b>: Based on the assessment, we work with you to create a personalized care plan that outlines specific goals, services, and resources.</p>

            <p><span><BsCheckLg /></span><b> Advocacy and Coordination</b>: We act as your advocate, ensuring that you have access to the appropriate services, resources, and support networks.</p>

            <p><span><BsCheckLg /></span><b> Monitoring and Follow-Up</b>: Our team continually monitors your progress, making adjustments to the plan as needed, and providing ongoing support.</p>

            <p><span><BsCheckLg /></span><b> Crisis Intervention</b>: In the event of a crisis, our case managers are available to provide immediate support and assistance.</p>

            <h1>How Case Management Can Help You</h1>
            <p><span><BsCheckLg /></span><b> Streamlined Care</b>: We work to ensure that you receive the right services at the right time, reducing gaps in care and improving outcomes.</p>

            <p><span><BsCheckLg /></span><b> Advocacy and Support</b>: Our case managers are your advocates, helping you navigate the complexities of the healthcare system and other support services.</p>

            <p><span><BsCheckLg /></span><b> Resource Navigation</b>: We connect you with a wide range of resources, including medical care, therapy, support groups, housing assistance, and more.</p>

            <p><span><BsCheckLg /></span><b> Empowerment and Education</b>: We provide you with the knowledge and tools to take an active role in your own recovery and overall well-being. </p>



          </div>

          <div className="case-management-section-flex-right">
            <img src={PHPSection1} alt="Man thinking in from of the ocean" loading="lazy" />
          </div>

        </div>


      </div>

    </div>

    </>
  );
};

export default CaseManagementSection;

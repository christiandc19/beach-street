import React from 'react'
import "./FamilyTherapySection.css";

import PHPSection1 from "../../assets/php-section1.webp";

const FamilyTherapySection = () => {

  return (
    <>
    <div className="FamilyTherapy-section">
      <div className="FamilyTherapy-section-content container">

            <div className="FamilyTherapy-section-header">
              <h1>About Family Addiction Therapy</h1>
              <p>Welcome to Beach Street Rehab's Family Addiction Therapy program. We understand that addiction affects not only the individual struggling with it but also their loved ones. Our Family Addiction Therapy program is designed to provide support, education, and healing for families affected by addiction.</p> 
              <p>At Beach Street Rehab, we understand that addiction is a family affair, affecting not only the individual struggling with substance use but also their loved ones. Our Family Addiction Therapy Program is designed to provide comprehensive support and healing for families impacted by addiction. We believe that involving the entire family in the recovery process is essential for lasting change and rebuilding healthy relationships.</p>
            </div>

        <div className="FamilyTherapy-section-flex">

          <div className="FamilyTherapy-section-flex-left">
            
            <h1>Comprehensive Family-Centered Approach:</h1>
            <p>Our Family Addiction Therapy Program takes a holistic approach, recognizing that addiction affects the emotional, psychological, and social well-being of the entire family unit. Through a series of tailored counseling sessions, educational workshops, and support groups, our experienced therapists guide families towards open communication, understanding, and resilience. We focus on providing practical coping skills, setting healthy boundaries, and rebuilding trust to create a supportive environment for both the individual in recovery and their loved ones.</p>

            <h1>Building Stronger Foundations:</h1>
            <p>One of the key objectives of our program is to empower families with the tools and knowledge needed to navigate the challenges of addiction and recovery. By participating in our Family Addiction Therapy, families can expect to develop improved communication strategies, acquire effective coping mechanisms, and gain a deeper understanding of addiction as a disease. This knowledge equips families with the resilience to support their loved ones throughout their recovery journey and fosters a healthier family dynamic.</p>

            <h1>Creating Lasting Change Together:</h1>
            <p>We believe that by involving the entire family in the recovery process, we not only strengthen the support system for the individual in recovery but also create a foundation for lasting change within the family unit. Our Family Addiction Therapy Program is a collaborative effort between our experienced therapists and the families we serve. Together, we work towards rebuilding trust, fostering empathy, and creating an environment where healing can thrive.</p><br/>
            <p>If you're ready to embark on this journey towards healing and recovery as a family, please <a href='tel:3239025644'>contact us</a> to schedule an initial assessment. Our compassionate team is dedicated to helping families find hope, understanding, and lasting change at Beach Street Rehab.</p>
          </div>

          <div className="FamilyTherapy-section-flex-right">
            <img src={PHPSection1} alt="Man thinking in from of the ocean" loading="lazy" />
          </div>

        </div>


      </div>

    </div>

    </>
  );
};

export default FamilyTherapySection;

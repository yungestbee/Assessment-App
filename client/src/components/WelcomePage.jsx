import { Link } from 'react-router-dom';

export const WelcomePage = () => {
  return (
    <div className = "welcome">
      <div className = "welcome__secondary">
        <header className = "heading mb-lg">
          <h1 className = "heading__primary">Welcome To Talent Code Africa Assessment Platform</h1>
        </header>

        <section className = "description mb-xlg">
          <p className = "description__para mb-lg">
            Unlock the potential of every student with our comprehensive assessment tools.  Identify strengths, address challenges, and foster a culture of continuous improvement.
          </p>
          <p className = "description__ready mb-lg">
            Ready to get started?
          </p>
          <Link to="/student-bio-data" className = "description__link">Proceed With Assessment</Link>
        </section>

        <section className = "benefits mb-lg">
          <h2 className = "benefits__heading">Key Features And Benefits</h2>
          <ul className = "benefits__ul">
                <li className = "benefits__li">Personalized Assessment: Tailor assessments to individual student needs and learning styles.</li>
                {/* <li className = "benefits__li">Actionable Data: Gain deep insights into student performance with detailed reports and analytics.</li> */}
                <li className = "benefits__li">Progress Tracking: Monitor student growth over time and measure the effectiveness of interventions.</li>
                {/* <li className = "benefits__li">Seamless Integration: Easily integrate with your existing learning management systems (LMS).</li> */}
                <li className = "benefits__li">Time-Saving Tools: Streamline the assessment process with automated scoring and feedback.</li>
            </ul>
        </section>

        <section className = "commitment mb-lg">
          <h2 className = "commitment__heading">Our Commitment</h2>
            <p className ="commitment__para mb-sm">
              We are dedicated to providing educators with the tools they need to support student success.  Our assessment solutions are designed to be reliable, valid, and easy to use.
            </p>
            <p className = "commitment__join">
              Join us in empowering the next generation of learners.
            </p>
        </section>
      </div>
    </div>
  )
}

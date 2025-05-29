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

      </div>
    </div>
  )
}

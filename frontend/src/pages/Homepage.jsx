import { Link } from 'react-router-dom'
import './Homepage.css'

function Homepage() {
  return (
    <div className="homepage">
      <header className="homepage-header">
        <div className="logo">AETURNUS</div>
        <nav className="header-nav">
          <Link to="/login" className="nav-link">LOGIN</Link>
          <Link to="/signup" className="nav-link">SIGN UP</Link>
        </nav>
      </header>

      <div className="separator"></div>

      <main className="homepage-main">
        <div className="tagline">THE SYSTEM USES ME, AND I USE THE SYSTEM</div>

        <div className="cta-section">
          <Link to="/signup" className="cta-button">START LEVELING</Link>
          <div className="cta-subtext">YOUR NEXT LEVEL STARTS NOW</div>
        </div>

        <div className="bottom-text">
          <div className="bottom-line-1">Your COMPETITIVE PROGRAMMING UNIVERSE</div>
          <div className="bottom-line-2">ALL IN ONE PLACE.</div>
        </div>
      </main>
    </div>
  )
}

export default Homepage


import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { authAPI, recommendationAPI } from '../services/api'
import './Recommendations.css'

function Recommendations() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)
  const [activeTab, setActiveTab] = useState('problems')
  const [filterDifficulty, setFilterDifficulty] = useState('All')

  // Problem recommendations state
  const [problemRecommendations, setProblemRecommendations] = useState([])
  const [filteredProblems, setFilteredProblems] = useState([])

  // Learning paths state
  const [learningPaths, setLearningPaths] = useState([])
  const [learningRecommendation, setLearningRecommendation] = useState(null)
  const [expandedPath, setExpandedPath] = useState(null)

  // Initialize
  useEffect(() => {
    const currentUser = authAPI.getUser()
    if (!currentUser) {
      navigate('/login')
      return
    }
    setUser(currentUser)
    loadRecommendations()
  }, [navigate])

  const loadRecommendations = async () => {
    try {
      setLoading(true)
      const [problems, paths, recommendation] = await Promise.all([
        recommendationAPI.getProblemRecommendations(15),
        recommendationAPI.getLearningPaths(),
        recommendationAPI.getLearningRecommendation()
      ])

      setProblemRecommendations(problems)
      setFilteredProblems(problems)
      setLearningPaths(paths)
      setLearningRecommendation(recommendation)
    } catch (error) {
      console.error('Error loading recommendations:', error)
    } finally {
      setLoading(false)
    }
  }

  // Filter problems by difficulty
  const handleDifficultyFilter = (difficulty) => {
    setFilterDifficulty(difficulty)
    if (difficulty === 'All') {
      setFilteredProblems(problemRecommendations)
    } else {
      setFilteredProblems(problemRecommendations.filter(p => p.difficulty === difficulty))
    }
  }

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Easy':
        return '#4ade80'
      case 'Medium':
        return '#fbbf24'
      case 'Hard':
        return '#ff6b6b'
      default:
        return '#888'
    }
  }

  const getPlatformColor = (platform) => {
    const colors = {
      'Codeforces': '#1f1c8f',
      'LeetCode': '#ffa500',
      'CodeChef': '#3d3d3d',
      'HackerRank': '#2ec866',
      'AtCoder': '#0066cc'
    }
    return colors[platform] || '#666'
  }

  const handleLogout = () => {
    authAPI.logout()
    navigate('/login')
  }

  if (loading) {
    return (
      <div className="recommendations">
        <div className="loading">Loading recommendations...</div>
      </div>
    )
  }

  return (
    <div className="recommendations">
      {/* Header */}
      <header className="recommendations-header">
        <div className="header-left">
          <h1 className="recommendations-title">AETURNUS</h1>
          <p className="recommendations-subtitle">Personalized Recommendations</p>
        </div>
        <div className="header-right">
          <div className="user-info">
            <span className="user-email">{user?.email}</span>
          </div>
          <button className="logout-btn" onClick={handleLogout}>Logout</button>
        </div>
      </header>

      {/* Main Content */}
      <main className="recommendations-content">
        
        {/* Tab Navigation */}
        <div className="tab-navigation">
          <button 
            className={`tab-btn ${activeTab === 'problems' ? 'active' : ''}`}
            onClick={() => setActiveTab('problems')}
          >
            Problem Recommendations
          </button>
          <button 
            className={`tab-btn ${activeTab === 'learning' ? 'active' : ''}`}
            onClick={() => setActiveTab('learning')}
          >
            Learning Paths
          </button>
        </div>

        {/* Problem Recommendations Tab */}
        {activeTab === 'problems' && (
          <section className="problems-section">
            <div className="section-header">
              <h2>Recommended Problems</h2>
              <p className="section-description">
                Personalized problems based on your solving history and weak areas
              </p>
            </div>

            {/* Difficulty Filter */}
            <div className="filter-bar">
              <span className="filter-label">Filter by Difficulty:</span>
              <div className="filter-buttons">
                {['All', 'Easy', 'Medium', 'Hard'].map(difficulty => (
                  <button
                    key={difficulty}
                    className={`filter-btn ${filterDifficulty === difficulty ? 'active' : ''}`}
                    onClick={() => handleDifficultyFilter(difficulty)}
                  >
                    {difficulty}
                  </button>
                ))}
              </div>
            </div>

            {/* Problems Grid */}
            <div className="problems-grid">
              {filteredProblems.length > 0 ? (
                filteredProblems.map(problem => (
                  <div key={problem.id} className="problem-card">
                    <div className="problem-header">
                      <h3 className="problem-title">{problem.title}</h3>
                      <span 
                        className="platform-tag"
                        style={{ backgroundColor: getPlatformColor(problem.platform) }}
                      >
                        {problem.platform}
                      </span>
                    </div>

                    <div className="problem-meta">
                      <span 
                        className="difficulty-badge"
                        style={{ color: getDifficultyColor(problem.difficulty) }}
                      >
                        {problem.difficulty}
                      </span>
                      <span className="rating">⭐ {problem.rating}</span>
                    </div>

                    <div className="problem-topics">
                      {problem.topics.map((topic, idx) => (
                        <span key={idx} className="topic-badge">{topic}</span>
                      ))}
                    </div>

                    <div className="problem-stats">
                      <div className="stat">
                        <span className="stat-label">Success Rate:</span>
                        <span className="stat-value">{problem.successRate}%</span>
                      </div>
                      <div className="stat">
                        <span className="stat-label">Est. Time:</span>
                        <span className="stat-value">{problem.estimatedTime}min</span>
                      </div>
                      <div className="stat">
                        <span className="stat-label">Solves:</span>
                        <span className="stat-value">{problem.solves.toLocaleString()}</span>
                      </div>
                    </div>

                    <button className="solve-btn">Solve Now</button>
                  </div>
                ))
              ) : (
                <div className="no-results">No problems found for this difficulty</div>
              )}
            </div>
          </section>
        )}

        {/* Learning Paths Tab */}
        {activeTab === 'learning' && (
          <section className="learning-section">
            
            {/* Personalized Recommendation */}
            {learningRecommendation && (
              <div className="personalized-rec">
                <div className="rec-icon">💡</div>
                <div className="rec-content">
                  <h3>Your Personalized Recommendation</h3>
                  <p>{learningRecommendation.recommendation}</p>
                  <div className="rec-steps">
                    <h4>Next Steps:</h4>
                    <ul>
                      {learningRecommendation.nextSteps.map((step, idx) => (
                        <li key={idx}>{step}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="rec-meta">
                    <span>📚 Focus Topics: {learningRecommendation.focusTopics.join(', ')}</span>
                    <span>⏱️ Estimated Time: {learningRecommendation.estimatedTime}</span>
                  </div>
                </div>
              </div>
            )}

            {/* Learning Paths List */}
            <div className="learning-paths-list">
              <h2>Learning Paths</h2>
              {learningPaths.map(path => (
                <div key={path.id} className="learning-path-card">
                  <div 
                    className="path-header"
                    onClick={() => setExpandedPath(expandedPath === path.id ? null : path.id)}
                  >
                    <div className="path-title-section">
                      <h3>{path.name}</h3>
                      <p>{path.description}</p>
                      <div className="path-meta">
                        <span className="difficulty-level">{path.difficulty}</span>
                        <span className="duration">⏱️ {path.duration}</span>
                      </div>
                    </div>
                    <div className="expand-icon">
                      {expandedPath === path.id ? '▼' : '▶'}
                    </div>
                  </div>

                  {/* Progress Bar */}
                  <div className="progress-section">
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${path.progress}%` }}
                      ></div>
                    </div>
                    <span className="progress-text">{path.progress}% Complete</span>
                  </div>

                  {/* Expanded Topics */}
                  {expandedPath === path.id && (
                    <div className="path-topics">
                      {path.topics.map((topic, topicIdx) => (
                        <div key={topicIdx} className="topic-item">
                          <h4>{topic.topic}</h4>
                          
                          <div className="concepts">
                            <span className="concept-label">Concepts:</span>
                            {topic.concepts.map((concept, idx) => (
                              <span key={idx} className="concept">{concept}</span>
                            ))}
                          </div>

                          <div className="related-problems">
                            <span className="problems-label">Related Problems:</span>
                            <div className="problems-mini-grid">
                              {topic.relatedProblems.map((problem, idx) => (
                                problem && (
                                  <div key={idx} className="problem-mini">
                                    <div className="mini-title">{problem.title}</div>
                                    <span className="mini-difficulty" style={{ color: getDifficultyColor(problem.difficulty) }}>
                                      {problem.difficulty}
                                    </span>
                                  </div>
                                )
                              ))}
                            </div>
                          </div>

                          <div className="resources">
                            <span className="resources-label">📖 Resources:</span>
                            {topic.resources.map((resource, idx) => (
                              <div key={idx} className="resource-item">{resource}</div>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>
        )}
      </main>
    </div>
  )
}

export default Recommendations

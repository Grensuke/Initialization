import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { authAPI } from '../services/api'
import './Dashboard.css'

function Dashboard() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const [linkedAccounts, setLinkedAccounts] = useState([
    {
      id: 1,
      platform: 'Codeforces',
      username: 'user123',
      rating: 1450,
      rank: 'Expert',
      problemsSolved: 234,
      lastActive: '2 hours ago',
      color: '#1f1c8f'
    },
    {
      id: 2,
      platform: 'LeetCode',
      username: 'dev_ninja',
      rating: 1850,
      rank: 'Master',
      problemsSolved: 156,
      lastActive: '30 minutes ago',
      color: '#ffa500'
    },
    {
      id: 3,
      platform: 'CodeChef',
      username: 'coder_pro',
      rating: 1620,
      rank: '5 Star',
      problemsSolved: 89,
      lastActive: '5 hours ago',
      color: '#3d3d3d'
    }
  ])

  const [aggregatedStats, setAggregatedStats] = useState({
    totalSolved: 479,
    totalSubmissions: 1240,
    acceptanceRate: '38.6%',
    weeklyProgress: [5, 12, 8, 15, 20, 10, 3],
    difficulty: {
      easy: 120,
      medium: 214,
      hard: 145
    },
    topics: {
      'Arrays': 65,
      'Dynamic Programming': 58,
      'Graphs': 45,
      'Strings': 42,
      'Trees': 38,
      'Sorting': 32
    }
  })

  const [activityFeed, setActivityFeed] = useState([
    {
      id: 1,
      platform: 'LeetCode',
      type: 'accepted',
      problem: 'Two Sum',
      difficulty: 'Easy',
      timestamp: '2 hours ago',
      link: '#'
    },
    {
      id: 2,
      platform: 'Codeforces',
      type: 'accepted',
      problem: 'A. Soldier and Bananas',
      difficulty: 'Easy',
      timestamp: '4 hours ago',
      link: '#'
    },
    {
      id: 3,
      platform: 'CodeChef',
      type: 'attempted',
      problem: 'Chef and Notebooks',
      difficulty: 'Medium',
      timestamp: '1 day ago',
      link: '#'
    },
    {
      id: 4,
      platform: 'LeetCode',
      type: 'accepted',
      problem: 'Median of Two Sorted Arrays',
      difficulty: 'Hard',
      timestamp: '2 days ago',
      link: '#'
    }
  ])

  useEffect(() => {
    const currentUser = authAPI.getUser()
    if (!currentUser) {
      navigate('/login')
    } else {
      setUser(currentUser)
    }
  }, [navigate])

  const handleLogout = () => {
    authAPI.logout()
    navigate('/login')
  }

  return (
    <div className="dashboard">
      {/* Header */}
      <header className="dashboard-header">
        <div className="header-left">
          <h1 className="dashboard-title">AETURNUS</h1>
          <p className="dashboard-subtitle">Your CP Universe</p>
        </div>
        <div className="header-right">
          <div className="user-info">
            <span className="user-email">{user?.email || 'User'}</span>
          </div>
          <div className="profile-nav">
            <button
              className="profile-avatar"
              onClick={() => setShowProfileMenu(prev => !prev)}
              aria-label="Open profile menu"
            >
              {user?.email ? user.email.charAt(0).toUpperCase() : 'U'}
            </button>

            {showProfileMenu && (
              <div className="profile-menu" onMouseLeave={() => setShowProfileMenu(false)}>
                <div className="profile-menu-header">
                  <div className="menu-avatar">{user?.email ? user.email.charAt(0).toUpperCase() : 'U'}</div>
                  <div className="menu-user">
                    <div className="menu-user-email">{user?.email}</div>
                    <div className="menu-user-action">View & manage your profile</div>
                  </div>
                </div>
                <ul className="profile-menu-list">
                  <li className="profile-menu-item" onClick={() => { navigate('/dashboard'); setShowProfileMenu(false); }}>Dashboard</li>
                  <li className="profile-menu-item" onClick={() => { navigate('/recommendations'); setShowProfileMenu(false); }}>Recommendations</li>
                  <li className="profile-menu-item" onClick={() => { navigate('/profile'); setShowProfileMenu(false); }}>Profile & Link Accounts</li>
                  <li className="profile-menu-item" onClick={() => { navigate('/settings'); setShowProfileMenu(false); }}>Settings</li>
                  <li className="profile-menu-divider" />
                  <li className="profile-menu-item logout" onClick={() => { handleLogout(); setShowProfileMenu(false); }}>Logout</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="dashboard-content">
        
        {/* Profile Overview Section */}
        <section className="profile-overview">
          <div className="overview-header">
            <h2>Profile Overview</h2>
            <button className="link-account-btn" onClick={() => navigate('/profile')}>+ Link Account</button>
          </div>
          
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-value">{aggregatedStats.totalSolved}</div>
              <div className="stat-label">Total Problems Solved</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{aggregatedStats.totalSubmissions}</div>
              <div className="stat-label">Total Submissions</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{aggregatedStats.acceptanceRate}</div>
              <div className="stat-label">Acceptance Rate</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{linkedAccounts.length}</div>
              <div className="stat-label">Linked Platforms</div>
            </div>
          </div>
        </section>

        {/* Linked Accounts Section */}
        <section className="linked-accounts">
          <h2>Linked Accounts</h2>
          <div className="accounts-grid">
            {linkedAccounts.map((account) => (
              <div key={account.id} className="account-card">
                <div className="account-header" style={{ borderLeftColor: account.color }}>
                  <h3 className="platform-name">{account.platform}</h3>
                  <span className="rank-badge">{account.rank}</span>
                </div>
                <div className="account-body">
                  <div className="account-row">
                    <span className="label">Username:</span>
                    <span className="value">{account.username}</span>
                  </div>
                  <div className="account-row">
                    <span className="label">Rating:</span>
                    <span className="value rating">{account.rating}</span>
                  </div>
                  <div className="account-row">
                    <span className="label">Problems Solved:</span>
                    <span className="value">{account.problemsSolved}</span>
                  </div>
                  <div className="account-row">
                    <span className="label">Last Active:</span>
                    <span className="value timestamp">{account.lastActive}</span>
                  </div>
                </div>
                <div className="account-footer">
                  <button className="view-profile-btn">View Profile</button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Difficulty Distribution */}
        <section className="difficulty-section">
          <h2>Difficulty Distribution</h2>
          <div className="difficulty-chart">
            <div className="difficulty-bar">
              <div className="bar-label">Easy</div>
              <div className="bar-container">
                <div className="bar-fill easy" style={{ width: `${(aggregatedStats.difficulty.easy / aggregatedStats.totalSolved) * 100}%` }}></div>
              </div>
              <span className="bar-value">{aggregatedStats.difficulty.easy}</span>
            </div>
            <div className="difficulty-bar">
              <div className="bar-label">Medium</div>
              <div className="bar-container">
                <div className="bar-fill medium" style={{ width: `${(aggregatedStats.difficulty.medium / aggregatedStats.totalSolved) * 100}%` }}></div>
              </div>
              <span className="bar-value">{aggregatedStats.difficulty.medium}</span>
            </div>
            <div className="difficulty-bar">
              <div className="bar-label">Hard</div>
              <div className="bar-container">
                <div className="bar-fill hard" style={{ width: `${(aggregatedStats.difficulty.hard / aggregatedStats.totalSolved) * 100}%` }}></div>
              </div>
              <span className="bar-value">{aggregatedStats.difficulty.hard}</span>
            </div>
          </div>
        </section>

        {/* Topic Tags Distribution */}
        <section className="topics-section">
          <h2>Top Topics</h2>
          <div className="topics-grid">
            {Object.entries(aggregatedStats.topics).map(([topic, count]) => (
              <div key={topic} className="topic-tag">
                <div className="topic-name">{topic}</div>
                <div className="topic-count">{count}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Recent Activity Feed */}
        <section className="activity-feed">
          <h2>Recent Activity</h2>
          <div className="activity-list">
            {activityFeed.map((activity) => (
              <div key={activity.id} className={`activity-item ${activity.type}`}>
                <div className="activity-indicator"></div>
                <div className="activity-content">
                  <div className="activity-title">
                    <span className="platform-badge" style={{ 
                      backgroundColor: linkedAccounts.find(a => a.platform === activity.platform)?.color || '#666'
                    }}>
                      {activity.platform}
                    </span>
                    <span className="problem-name">{activity.problem}</span>
                  </div>
                  <div className="activity-meta">
                    <span className={`difficulty ${activity.difficulty.toLowerCase()}`}>
                      {activity.difficulty}
                    </span>
                    <span className="timestamp">{activity.timestamp}</span>
                  </div>
                </div>
                <div className={`status-icon ${activity.type}`}>
                  {activity.type === 'accepted' ? '✓' : '○'}
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default Dashboard


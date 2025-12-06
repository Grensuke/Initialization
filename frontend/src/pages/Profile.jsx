import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { authAPI } from '../services/api'
import './Dashboard.css'

function Profile() {
  const navigate = useNavigate()
  const [user, setUser] = useState(null)
  const [linkedAccounts] = useState([
    { id: 1, platform: 'Codeforces', username: 'user123', rating: 1450, problemsSolved: 234, color: '#1f1c8f' },
    { id: 2, platform: 'LeetCode', username: 'dev_ninja', rating: 1850, problemsSolved: 156, color: '#ffa500' }
  ])

  useEffect(() => {
    const currentUser = authAPI.getUser()
    if (!currentUser) return navigate('/login')
    setUser(currentUser)
  }, [navigate])

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="header-left">
          <h1 className="dashboard-title">Profile</h1>
          <p className="dashboard-subtitle">Manage your account and linked platforms</p>
        </div>
      </header>

      <main className="dashboard-content">
        <section className="profile-overview">
          <div className="overview-header">
            <h2>{user?.email}</h2>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-value">{linkedAccounts.length}</div>
              <div className="stat-label">Linked Platforms</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{user?.totalSolves || '-'}</div>
              <div className="stat-label">Total Solves</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{user?.currentStreak || '-'}</div>
              <div className="stat-label">Current Streak</div>
            </div>
            <div className="stat-card">
              <div className="stat-value">{user?.averageAccuracy ? user.averageAccuracy + '%' : '-'}</div>
              <div className="stat-label">Accuracy</div>
            </div>
          </div>
        </section>

        <section className="linked-accounts">
          <h2>Linked Accounts</h2>
          <div className="accounts-grid">
            {linkedAccounts.map(a => (
              <div key={a.id} className="account-card">
                <div className="account-header" style={{ borderLeftColor: a.color }}>
                  <h3 className="platform-name">{a.platform}</h3>
                </div>
                <div className="account-body">
                  <div className="account-row"><span className="label">Username:</span><span className="value">{a.username}</span></div>
                  <div className="account-row"><span className="label">Rating:</span><span className="value rating">{a.rating}</span></div>
                  <div className="account-row"><span className="label">Solved:</span><span className="value">{a.problemsSolved}</span></div>
                </div>
                <div className="account-footer">
                  <button className="view-profile-btn">Manage</button>
                </div>
              </div>
            ))}
            <div className="account-card">
              <div className="account-header" style={{ borderLeftColor: '#ff0000' }}>
                <h3 className="platform-name">Link New Account</h3>
              </div>
              <div className="account-body">
                <div className="account-row"><span className="label">Connect a platform</span></div>
              </div>
              <div className="account-footer">
                <button className="view-profile-btn" onClick={() => navigate('/onboard')}>Link Account</button>
              </div>
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}

export default Profile

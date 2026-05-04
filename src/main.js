import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="glass-card">
    <div class="icon-container">
      <img src="/success_icon.png" class="success-icon" alt="Success" />
    </div>
    
    <div class="status-badge">
      <span class="status-dot"></span>
      SYSTEM LIVE
    </div>
    
    <h1>Deployment Successful</h1>
    <p>Your application is now successfully hosted on AWS Amplify. All systems are operational and performing optimally.</p>
    
    <div class="stats">
      <div class="stat-item">
        <span class="stat-label">Platform</span>
        <span class="stat-value">AWS Amplify</span>
      </div>
      <div class="stat-item">
        <span class="stat-label">Status</span>
        <span class="stat-value" style="color: #00ff80;">Active</span>
      </div>
    </div>
  </div>
`

import React from 'react';
import GitHubUserRepositoriesComponent from "./github-user-repositories-component/github-user-repositories-component";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
          <h1>GitHub User Repositories Viewer</h1>
      </header>
      <GitHubUserRepositoriesComponent />
    </div>
  );
}

export default App;

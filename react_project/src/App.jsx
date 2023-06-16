import styles from './App.module.css';
import react_logo from './assets/images/react_logo.png';

function App() {
  return (
    <main className={styles.main}>
      <img src={react_logo} />
      <h1>Project Template</h1>
      <div className={styles.instructions}>
        <div>
          <p>Installed: React Router, React Query</p>
          <p>
            Add any additional packages you need to the json file when
            installing.
          </p>

          <ul>
            <li><a href="/">App</a></li>
            <li><a href="/layout">Step 2: Layout</a></li>
            <li><a href="/table">Step 3: Cool Table!</a></li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default App;

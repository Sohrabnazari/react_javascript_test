import styles from './App.module.css';
import react_logo from './assets/images/react_logo.png';
import {Link} from 'react-router-dom'

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
            <li>
              <Link to='/'>Step: Routes Like App</Link>
            </li>
            <li>
              <Link to='/layout'>Step 2: Layout</Link>
            </li>
            <li>
              <Link to='/table'>Step 3: Cool Table!</Link>
            </li>
            <li>
              <Link to='/searchbar'>Step 4: Searchbar</Link>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default App;

import styles from './Layout.module.css';

function Layout() {
  return (
    <>
      <main className={styles.main}>
        <span>main content</span>
      </main>

      <aside className={styles.sidebar}>
        <span>sidebar</span>
      </aside>
    </>
  );
}

export default Layout;

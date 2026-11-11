import MainContent from './components/MainContent';
import logo from './assets/images/logo.png';

function App() {
  return (
    <>
      <header>
        <div id="logo-img">
          <img src={logo} />
        </div>
        <p>Learn & Master GitHub Actions</p>
      </header>
      <MainContent />
    </>
  );
}

export default App;

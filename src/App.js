import { AllRoutes } from './routes/AllRoutes';
import { Header,Footer } from './components';
import './App.css';

function App() {
  return (
    <main>
      <Header/>
      <AllRoutes/>
      <Footer />
    </main>
  );
}

export default App;

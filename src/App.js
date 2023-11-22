import { AllRoutes } from './routes/AllRoutes';
import { Header,Footer } from './components';


function App() {
  return (
    <main className='relative'>
      <Header/>
      <AllRoutes/>
      <Footer />
    </main>
  );
}

export default App;

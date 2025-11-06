import Header from './components/Header';
import Hero from './components/Hero';
import Steps from './components/Steps';
import Tips from './components/Tips';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white text-gray-900">
      <Header />
      <main>
        <Hero />
        <Steps />
        <Tips />
      </main>
      <Footer />
    </div>
  );
}

export default App;

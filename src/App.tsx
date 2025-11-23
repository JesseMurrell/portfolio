
import { Layout } from './components/Layout';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';

function App() {
  return (
    <Layout>
      <Nav />
      <div className="lg:pl-32">
        <Hero />
        <Projects />
        <Contact />
      </div>
    </Layout>
  );
}

export default App;

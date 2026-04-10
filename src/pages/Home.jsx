import Hero from '../components/Hero.jsx';
import FeaturedCollection from '../components/FeaturedCollection.jsx';
import BrandStory from '../components/BrandStory.jsx';
import ClientServices from '../components/ClientServices.jsx';

function Home() {
  return (
    <div className="overflow-hidden">
      <Hero />
      <FeaturedCollection />
      <BrandStory />
      <ClientServices />
    </div>
  );
}

export default Home;

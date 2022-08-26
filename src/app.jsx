import Header from './components/header';
import Slider from './components/slider';
import Footer from './components/footer';
import WhoWeAre from './components/whoweare';
import WhatWeDo from './components/whatwedo';

const App = () => {
  return (
    <div className="app-wrapper">
      <Header />
      <Slider />
      <WhoWeAre />
      <WhatWeDo />
      <Footer />
    </div>
  );
};

export default App;

import Features from "./components/Features";
import Homes from "./components/Homes";
import StoryContent from "./components/StoryContent";
import StoryPictures from "./components/StoryPictures";
import "./scss/main.scss";

function App() {
  return (
    <div className="container">
      <div className="sidebar">sidebar</div>
      <header className="header"><p>lloremadafafafaf </p></header>

      <div className="realtors">top 3 realtors</div>
      <section className="features">
        <Features/>
      </section>
      <div className="story__pictures"><StoryPictures/></div>
      <div className="story__content"><StoryContent/></div>
      <section className="homes"> <Homes/> </section>
      <section className="gllery">gllery</section>
      <footer className="footer">footer</footer>
    </div>   
  );
}

export default App;

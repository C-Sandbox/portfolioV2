import '../../index.css';
import './Home.css';
import { screenContent } from '../shared/text.js';

function Home() {
  return(
    <div className="Home">
      <img className="Home-pic" src={screenContent.home.pic} alt="Caroline Stephenson"></img>
      <p>{screenContent.home.text1}
        <a href={screenContent.home.gitLink[1]}>{screenContent.home.gitLink[0]}
        </a>
      </p>
    </div>
  )
}

export default Home;



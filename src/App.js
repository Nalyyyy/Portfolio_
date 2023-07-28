import './styles/App.css';
import Content from './page/Content';
//on importe la librairie pour toute l'app
import { library } from '@fortawesome/fontawesome-svg-core';
//puis on importe les icônes
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';

function App() {
  return (
    <div className="App">
      <Content/>
    </div>
  );
}

export default App;
//on ajoute nos icônes fontawesome a la librairie
library.add(fab, fas, far)
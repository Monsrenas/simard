import cristian from './img/profe.png';
import puente from './img/puente.png';
import whatsico from './img/whatsapp-icon-150x150.png';


import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <header className="App-header" style={{ backgroundImage: `url(${puente})`}}>
          <div>
            <h1>
            Cours privés
            </h1>
            <h2>d'espagnol et de portugais</h2>
            
          </div>
          <div className='barra'>
            <div className='contacto'>
                <a href='https://api.whatsapp.com/send?phone=+15799579257' className='icowhatsapp'><img src={whatsico} alt='Whatsapp'/></a>
            </div>
          </div>         
      </header>

      <body>
      <div className='container'>
        <div className='row'>
          <div className='col-md-9 col-sm-12 producto'>
            <p  className='prime'>
              Dans la ville de Trois-Rivières, vous avez à portée de main toute l'expérience nécessaire pour entamer votre chemin vers la maîtrise totale et véritable de cette langue dans laquelle vous avez tant voulu pouvoir communiquer.
            </p>
            <p>
              Nous utilisons une méthode personnalisée où la maîtrise de l'apprentissage des langues sera soutenue par une approche de la culture et de la réalité spécifique du pays ou de la région qui intéresse l'étudiant, afin qu'il puisse articuler les structures sémantiques appropriées pour une communication efficace.
            </p>
            <p>
            Nous proposons des tarifs compétitifs et des horaires flexibles adaptés à vos disponibilités.
            </p>
          </div>
          <div className='col-sm-9  col-md-3 profe'>
            <div className='marco'>
              <img src={cristian} alt='Cristian Simard'/>
            </div>
              <p>
              Baccalauréat en études hispaniques et luso-brésiliennes de l'Université de Montréal.
              </p>
              <p>
              J'ai une vaste expérience de vie dans divers pays d'Amérique latine, dont le Brésil, Cuba, le Mexique, l'Équateur et le Honduras.
              </p>
          </div>
        </div>
      </div>  
      </body>  
    </div>
    
  );
}

export default App;

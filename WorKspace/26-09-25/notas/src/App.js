import logo from './logo.svg';
import './App.css';
import Lista from './Lista';
import Footer from './Footer';

function App() {
  let estudiantes = [
    {nombre: "Fulanito", apellido: "de tal"},
    {nombre: "peranito", apellido: "perez"},
    {nombre: "megamente ", apellido: "ospina"},
    {nombre: "jeronimo ", apellido: "vasquez"},
    {nombre: "Dylan", apellido: "ocampo"},
    {nombre: "juan", apellido: "avila"},
    {nombre: "johan", apellido: "tejada"},
    {nombre: "simon", apellido: "salgado"},
  ];
  return (
    <div className="App">
      <Lista listaestudiantes={estudiantes} />
      <Footer />
    </div>
  );
}

export default App;

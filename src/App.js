import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Container } from 'react-bootstrap';
import Top from './components/Top';
import Bottom from './components/Bottom';
import Menu from './components/Menu';
import About from './components/About';
function App() {
  return (
    <Container className="App">
            <Top/>
            <Menu />
            <Bottom/>
        </Container>
  );
}

export default App;

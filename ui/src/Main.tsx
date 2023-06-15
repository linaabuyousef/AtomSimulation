import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home/Home';
import Simulation from './Simulation/Simulation';
import AtomForm from './FieldsPage/Form';
import { StartSimulationButton } from './Home/CardContent';
import AccordionExampleStyled from './ElectronData/ElectronData';

const Main = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home children={<StartSimulationButton />} />} />
        <Route path="/form" element={<Home children={<AtomForm />} />} />
        <Route
          path="/simulation"
          element={
            <Home children={
              <div style={{ flexDirection: 'row', display: 'flex' }}>
                <AccordionExampleStyled />
                <div style={{ flex: 'none' }}>
                  <Simulation />
                </div>
              </div>
            } />
          }
        />
      </Routes>
    </Router>
  );
};

export default Main;

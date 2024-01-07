import { Routes, Route } from "react-router-dom";
import GlossaryPage from "../../pages/glossary-page/glossary-page";
import GraphPage from "../../pages/graph-page/graph-page";
import { AppRoutes } from '../../consts';

function App() {
  return (
    <Routes>
      <Route 
        path={AppRoutes.Glossary}
        element={<GlossaryPage />}
      />
      <Route
        path={AppRoutes.Graph}
        element={<GraphPage />}
      />
    </Routes>
  );
}

export default App;

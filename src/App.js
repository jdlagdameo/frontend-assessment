
/**
 * Main App JS File
 * 
 * @author: John Dave Lagdameo <jdlagdameo.dev@gmail.com>
 * @since: 03/07/2023 
 * 
 * @internal revisions:
 * + 
 * + 
 * + 
 * 
 */
import './App.scss';
import { Routes, Route } from "react-router-dom";

import Excercise1 from './pages/Excercise1';
import Excercise2 from './pages/Excercise2';
import NotFound from './pages/NotFound';

function App() {
  return (
    <div className="p-0 m-0">
      <Routes>
      <Route
          path="*"
          element={<NotFound />}/>

        <Route 
          path={`/`} 
          element={<Excercise1 />} />

        <Route 
          path={`/exercise1`} 
          element={<Excercise1 />} />

        <Route 
          path={`/exercise2`} 
          element={<Excercise2 />} />

      </Routes >
    </div>
  );
}

export default App;

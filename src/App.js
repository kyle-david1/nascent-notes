import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import Header from './components/Header';
import NotesPage from './pages/NotesPage';
import NotePage from './pages/NotePage';



function App() {
  return (
    <Router>
    <div className="App">
      <Header/>  
      <Route component={NotesPage} path="/" exact />
      <Route component={NotePage} path="/note/:id" />
    </div>
    </Router>
  );
}

export default App;

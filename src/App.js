import {Link, BrowserRouter} from "react-router-dom"
import Router from './Router';
import './App.css';

function App() {
  return (
    <div className="App">
       <BrowserRouter>
        <Link to = '/add'>상품등록</Link> | 
        <Link to = '/list'>목록</Link>
        <hr/>
        <Router/>
      </BrowserRouter>
    </div>
  );
}

export default App;

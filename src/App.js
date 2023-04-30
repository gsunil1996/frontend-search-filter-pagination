import './App.css';
import LocalPagination from './components/LocalPagination';
import LocalSearch from './components/LocalSearch';
import LocalSearchWithFilter from './components/LocalSearchWithFilter';
import LocalSearchWithFilterAndPagination from './components/LocalSearchWithFilterAndPagination';
import MuiSearchAndPagination from './components/material-ui/MuiSearchAndPagination';

function App() {
  return (
    <div className="App">
      <MuiSearchAndPagination />

      {/* <LocalPagination /> */}
      {/* <LocalSearch /> */}
      {/* <LocalSearchWithFilter /> */}
      {/* <LocalSearchWithFilterAndPagination /> */}
    </div>
  );
}

export default App;

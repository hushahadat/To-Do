import Dashboard from './component/Dashboard/Dashboard';
import DetailedView from './component/Profile/DetailedView';
import Gallery from './component/Gallery/Gallery'
import Post from './component/Post/Post'
import Todo from './component/ToDo/Todo'
import { Route,Routes } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div >
      <Routes>
        <Route path ='/' element = {<Dashboard />}/>
        <Route path ='/profile' element = {<DetailedView />}/>
        <Route path ='/post-page' element = {<Post />  }/>
        <Route path ='/gallery' element = { <Gallery />}/>
        <Route path ='/to-do' element = {<Todo />}/>
      </Routes>
      
    </div>
  );
}

export default App;

// App.js
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Write from './Write'
import ResponsiveAppBar from './components/navbar';

const App = () => {
 return (
    <>
      <ResponsiveAppBar />
       <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/write" element={<Write />} />
       </Routes>
    </>
 );
};

export default App;
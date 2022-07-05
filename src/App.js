import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoContainer from './components/TodoContainer';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route index element={<TodoContainer />} />
    </Routes>
  </BrowserRouter>
);

export default App;

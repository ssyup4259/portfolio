import React from 'react';
import { HashRouter, Route, BrowserRouter } from 'react-router-dom';
import About from './routes/About';
import Home from './routes/Home';
import Navigation from './components/Navigation';
function App() {
  return (
    // 두개를 동시에 렌더링 하려면 fragment vlfdy
    <>
    {/* BrowserRouter 써도되는데 애는 /#/ 가 없어서 github page 에서 조금 힘듬 */}
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
    </HashRouter>
    <footer></footer>
    </>
  );
}

export default App;
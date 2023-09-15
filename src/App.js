
import Content from './component/content/content';
import Header from './component/header/header';
import Sidebar from './component/sidebar/sidebar';

function App() {
  return (
      <div className='DAT_Container'>
        <Header/>
        <div className='DAT_Container-Main'>
        <Sidebar></Sidebar>
        <Content></Content>
        </div>
      </div>
  );
}

export default App;

import './App.css';
import Sidebar from './Sidebar'
import Feed from './Feed';
import Widget from './Widget';
function App() {
  return (
    <div className="App">


{/* Sidebar */}
<Sidebar/>
{/* feed */}
<Feed></Feed>
{/* Widgets */}
<Widget></Widget>
    </div>
  );
}


export default App;

import logo from '../assets/holberton-logo.jpg';
import './App.css'; // Now in src/App/App.css
import { getFullYear, getFooterCopy } from '../utils/utils';
import Notifications from '../Notifications/Notifications';

function App() {
  return (
    <div className="App">
      {/* header */}
      <div className="App-header">
        {/* notifications */}
        <Notifications />

        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>

      {/* body */}
      <div className="App-body">
        <p>Login to access the full dashboard</p>
         {/* Email Input */}
         <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />

        {/* Password Input */}
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />

        {/* Button */}
        <button type="button">OK</button>
      </div>

      {/* footer */}
      <div className="App-footer">
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    </div>
  );
}

export default App;

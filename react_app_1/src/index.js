//import ReactDOM  from 'react-dom';
import {createRoot} from 'react-dom/client';
import App from './App.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const header = <h1>this is a React App</h1>;
const container = document.getElementById('root');


console.log(header);


//ReactDOM.render(header , container);
//new way
const root = createRoot(container);
root.render(<App/>);

// tradional way 
//container.append(App());



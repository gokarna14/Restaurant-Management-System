import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route} from "react-router-dom";
import { useState } from 'react';

// import Example from './js/Example';
// import All from './js/All';
import AlwaysRender from './js/AlwaysRender'
import CustomerIndex from './js/Customer/CustomerIndex';
import StatusIndex from './js/Status/StatusIndex';
import OrderIndex from './js/Order/OrderIndex';


function App() {

  const CustomerDomain = "/Customer"

  const [routing, setRouting] = useState([    // [path, component]
    [CustomerDomain, CustomerIndex],
    ['/Order', OrderIndex],
    ['/Status', StatusIndex],
])

  const routeInfo = routing.map(
    (i)=>{
      return <Route path={i[0]} component={i[1]} exact></Route>
    }
  )


  return (
    <div className="App">
      <BrowserRouter>
        <AlwaysRender></AlwaysRender>
          {routeInfo}
      </BrowserRouter>
    </div>
  );
}

export default App;

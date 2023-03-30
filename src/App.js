
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import './App.css';
import { actionCreators } from './Redux/ReduxActions/actionCreators';

function App() {
  const reduxStates=useSelector((state)=>state)
  const dispatch = useDispatch();
  //binding all action creators
  const {purchaseProduct, restoreProduct} = bindActionCreators(actionCreators,dispatch)
  
  console.log(reduxStates)
  return (
    <div className="App">
      
    </div>
  );
}

export default App;

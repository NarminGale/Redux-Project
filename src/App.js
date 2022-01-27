import './App.css';
import Header from './containers/Header'
import ProductListing from "./containers/ProductListing";
import ProductComponent from "./containers/ProductComponent";
import ProductDetails from "./containers/ProductDetails";

function App() {
  return (
    <div className="App">
      <Header/>
        <ProductListing/>
        <ProductComponent/>
        <ProductDetails/>
    </div>
  );
}

export default App;

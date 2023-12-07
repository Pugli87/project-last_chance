/* export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      Proyecto Final Node.js y React
    </div>
  );
};
 */
import React from 'react';
import GramosComponent from './GramosComponent/GramosComponent';
import ButtonComponent from './ButtonComponent/ButtonComponent';
import ProductNameComponent from './ProductNameComponent/ProductName';

function App() {
  return (
    <div className="App">
      <h1>13.08.2023</h1>
      <ProductNameComponent />
      <GramosComponent />
      <ButtonComponent />
    </div>
  );
}

export default App;

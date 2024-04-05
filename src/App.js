import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { Shop } from "./components/Shop";
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Header />
      <Shop />
      <Footer />
    </React.Fragment>
  );
}

export default App;

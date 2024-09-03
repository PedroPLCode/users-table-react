import React from 'react';
import UserTable from './components/userTable/userTable.tsx';
import Header from './views/Header/Header.tsx';
import Footer from './views/Footer/Footer.tsx';

function App() {
  return (
    <div className="App">
      <Header />
      <UserTable />
      <Footer />
    </div>
  );
}

export default App;
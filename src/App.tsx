import React from 'react';
import UserTable from './components/features/userTable/userTable.tsx';
import Header from './components/views/Header/Header.tsx';
import Footer from './components/views/Footer/Footer.tsx';

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
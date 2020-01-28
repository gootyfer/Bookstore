import React from 'react';
import './App.css';
import BookList from '../container/booklist';
import BooksForm from './component/BooksForm';

function App() {
  return (
    <div className="App">
      <BookList />
      <BooksForm />
    </div>
  );
}

export default App;
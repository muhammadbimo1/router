import './App.css';
import { BrowserRouter, Link, Outlet, Route, Routes } from 'react-router-dom';
import AppRouters from './routes/AppRouters';
import Sidebar from './layout/Sidebar';
import Header from './layout/Header';
import ColumnLayout from './layout/ColumnLayout';

function App() {
  return (
    <BrowserRouter>
    <ColumnLayout/>
    </BrowserRouter>
  );
}

export default App;

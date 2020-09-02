import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Pages
import Home from './pages/Home';
import Page404 from './pages/404';
import Category from './pages/Category';
import CategoryPage from './pages/Register/CategoryPage';
import VideoPage from './pages/Register/VideoPage';

// Styles
import './styles/global.css';



ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />,
      <Route path="/category/:slug" component={Category} />,
      <Route path="/register-category" component={CategoryPage} />,
      <Route path="/register-video" component={VideoPage} />,

      <Route path="*" component={Page404} />,
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

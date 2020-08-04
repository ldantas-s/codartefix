import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Pages
import Home from './pages/Home';
import Page404 from './pages/404';
import Categories from './pages/Categories';
import Category from './pages/Category';
import RegisterCategory from './pages/RegisterCategory';
import RegisterVideo from './pages/RegisterVideo';

// Styles
import './styles/global.css';



ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={Home} exact />,
      <Route path="/categories" component={Categories} />,
      <Route path="/category" component={Category} />,
      <Route path="/register-category" component={RegisterCategory} />,
      <Route path="/register-video" component={RegisterVideo} />,

      <Route component={Page404} />,
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './css/style.css';
import Preloader from './components/components_preloader/Preloader';
import Navbar from './components/components_navbar/Navbar';
import Hero from './components/section_hero/Hero';
import Articles from './components/section_articles/Articles';
import {Article_id_0} from './components/section_articles/SingleArticles';
import {Article_id_1} from './components/section_articles/SingleArticles';
import {Article_id_2} from './components/section_articles/SingleArticles';
import {Article_id_3} from './components/section_articles/SingleArticles';
import {Article_id_4} from './components/section_articles/SingleArticles';
import {Article_id_5} from './components/section_articles/SingleArticles';
import {Article_id_6} from './components/section_articles/SingleArticles';
import {Article_id_7} from './components/section_articles/SingleArticles';
import {Article_id_8} from './components/section_articles/SingleArticles';
import {Article_id_9} from './components/section_articles/SingleArticles';
import {Article_id_10} from './components/section_articles/SingleArticles';
import {Article_id_11} from './components/section_articles/SingleArticles';
import {Article_id_12} from './components/section_articles/SingleArticles';
import {Article_id_13} from './components/section_articles/SingleArticles';
import {Article_id_14} from './components/section_articles/SingleArticles';
import {Article_id_15} from './components/section_articles/SingleArticles';
import {Article_id_16} from './components/section_articles/SingleArticles';
import {Article_id_17} from './components/section_articles/SingleArticles';
import {Article_id_18} from './components/section_articles/SingleArticles';
import {Article_id_19} from './components/section_articles/SingleArticles';
import {Article_id_20} from './components/section_articles/SingleArticles';
import Calculators from './components/section_calculators/Calculators';
import Calc1 from './components/section_calculators/Calc1';
import Calc2 from './components/section_calculators/Calc2';
import Calc3 from './components/section_calculators/Calc3';
import Gallery from './components/section_gallery/Gallery';
import Contact from './components/section_contact/Contact';

function App() {
  return (
    <>
      <Router>
        <Preloader />
        <Navbar />
        <Switch>
          <Route path="/" exact component={Hero} />
          <Route path="/calculators" exact component={Calculators} />
          <Route path="/calculators/calc_1" component={Calc1} />
          <Route path="/calculators/calc_2" component={Calc2} />
          <Route path="/calculators/calc_3" component={Calc3} />
          <Route path="/articles" exact component={Articles} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/contact" component={Contact} />
          <Route path='/articles/article_id-2' component={Article_id_2} />
          <Route path='/articles/article_id-6' component={Article_id_6} />
          <Route path='/articles/article_id-8' component={Article_id_8} />
          <Route path='/articles/article_id-13' component={Article_id_13} />
          <Route path='/articles/article_id-0' component={Article_id_0} />
          <Route path='/articles/article_id-1' component={Article_id_1} />
          <Route path='/articles/article_id-4' component={Article_id_4} />
          <Route path='/articles/article_id-5' component={Article_id_5} />
          <Route path='/articles/article_id-9' component={Article_id_9} />
          <Route path='/articles/article_id-10' component={Article_id_10} />
          <Route path='/articles/article_id-12' component={Article_id_12} />
          <Route path='/articles/article_id-14' component={Article_id_14} />
          <Route path='/articles/article_id-15' component={Article_id_15} />
          <Route path='/articles/article_id-17' component={Article_id_17} />
          <Route path='/articles/article_id-20' component={Article_id_20} />
          <Route path='/articles/article_id-3' component={Article_id_3} />
          <Route path='/articles/article_id-11' component={Article_id_11} />
          <Route path='/articles/article_id-19' component={Article_id_19} />
          <Route path='/articles/article_id-7' component={Article_id_7} />
          <Route path='/articles/article_id-16' component={Article_id_16} />
          <Route path='/articles/article_id-18' component={Article_id_18} />
        </Switch> 
      </Router>
    </>
  );
}

export default App;
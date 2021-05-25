import React, {useState} from 'react';
import ArticleCard from './ArticleCard';
import { FaBars } from 'react-icons/fa';
import { AiOutlineClose } from 'react-icons/ai';
import { sideMenuData } from './SideMenuData';
import SubMenu from './SubMenu';
import Footer from '../components_footer/Footer';
import '../../css/style.css';

function Articles() {
  const [showSidebar, setShowSidebar] = useState(false);

  const handleShowSidebar = () => {
    setShowSidebar(!showSidebar);
    document.querySelector('.articles_menu').classList.toggle('open');
    document.querySelector('.burger').classList.toggle('open');
    document.querySelector('.burger__title').classList.toggle('open');
    document.querySelector('.burger__icon').classList.toggle('open');
  }

  return (
    <>
      <div className="articles">
        <div className="articles_menu">
          <div className="burger" onClick={handleShowSidebar}>
            <div className="burger__title">{!showSidebar ? 'Show articles menu' : 'Close articles menu'}</div>
            <div className="burger__icon">{showSidebar ? <AiOutlineClose /> : <FaBars />}
            </div>
          </div>
          {sideMenuData.map((item, index)=> {
            return showSidebar ? <SubMenu item={item} key={index}/> : null
          })}
        </div>
        
        {/* articles cards */}
        <div className="articles-title-cards__container">
          <div className="articles__titles-container">
            <h1 className="main__title">Articles</h1>
            <h2 className="articles__subtitle">Latest articles</h2><em className="articles__update-info">Update: 16th, March 2021</em>
          </div>
          <ul className="cards__items">
            <ArticleCard
              title='Andromeda Is Coming!'
              text= "Adromeda (the Milky Way's closest galaxy) is getting closer! In about 5 billion years, there will be a collision with our Milky Way."
              src='../images/andromeda_640.jpg' 
              path='/articles/article_id-1'
            />
            <ArticleCard
              title='Cosmic Rays'
              text='New scientific findings on cosmic rays'
              src='../images/space_640.jpg'           
              path='/articles/article_id-3'
            />
            <ArticleCard
              title='Black Holes'
              text='Black holes and their nature. Will there be a solution to the puzzle of black hole vaporization?'
              src='../images/black-hole_640.jpg'
              path='/articles/article_id-4'
            />
            <ArticleCard
              title='Herzprung-Russell Diagram'
              text="Herzprung-Russell's diagram and stellar magnitudes."
              src='../images/supernova_640.png' 
              path='/articles/article_id-5'
            />
            <ArticleCard
              title="Kepler's Laws"
              text="Kepler's laws - still fresh, current and transparent"
              src='../images/solar-system_640.jpg' 
              path='/articles/article_id-6'
            />
            <ArticleCard
              title="Antimatter"
              text="Antimatter - a challenge for particle physics"
              src='../images/atom_640.jpg' 
              path='/articles/article_id-7'
            />
          </ul>  
        </div>
      </div>
    <Footer />
  </>
  )
}

export default Articles

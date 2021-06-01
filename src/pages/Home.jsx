import React from 'react'
import {Categories, SortPopup , PizzaBlock} from '../components';






function Home({ items }) {
    return (
        <div className="container">
          <div className="content__top">
            <Categories
            setActiveItem={(name) => console.log(name)} 
            items={['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые']} />
           <SortPopup items={[{name:'Популярности', type:'popular'}, 
           {name: 'Цене', type:'price'}, 
           {name: 'Алфавит', type:'alphabet'}
           ]} />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {
            items.map((obj) => (<PizzaBlock key={obj.id} {...obj} />
            ))}
              
            
            
          </div>
        </div>
    )
}

export default Home

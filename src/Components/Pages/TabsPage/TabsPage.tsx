import React from 'react'
import TabOne from './TabOne';
import Tabtree from './Tabtree';
import Tabtwo from './Tabtwo';

const TabsPage = () => {
    return (
        <div>
            <h1>Описание</h1>
            <div className='pages-description'>
            <p>Tab — это компонент, который систематизирует контент, группируя похожую информацию на одной странице. Это позволяет просматривать контент без необходимости уходить с этой страницы.</p>
            
            <TabOne/>
            <Tabtwo/>
            <Tabtree/>
            </div>
        </div>
    )
}

export default TabsPage
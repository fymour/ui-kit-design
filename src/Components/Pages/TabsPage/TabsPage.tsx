import React from 'react'
import TabOne from './TabOne';
import Tabtree from './Tabtree';
import Tabtwo from './Tabtwo';

const TabsPage = () => {
    return (
        <div>
            <h1>Описание</h1>
            <p>Tab — это компонент, который систематизирует контент, группируя похожую информацию на одной странице. Это позволяет просматривать контент без необходимости уходить с этой страницы.</p>
            
            <TabOne/>
            <Tabtwo/>
            <Tabtree/>
            
        </div>
    )
}

export default TabsPage
import React from 'react'
import TabOne from './TabOne';
import Tabtree from './Tabtree';
import Tabtwo from './Tabtwo';
import './TabsPage.css'

const TabsPage = () => {
    return (
        <div className='content'>
            <h1 className='pages-title'>
                Описание
            </h1>
            <div className='pages-description'>
                <p>Tab — это компонент, который систематизирует контент, группируя похожую информацию на одной странице. Это позволяет просматривать контент без необходимости уходить с этой страницы.</p>

                <h3>Tabs - normal</h3>
                <TabOne />
                <h3>Tabs - filled</h3>
                <Tabtwo />
                <h3>Tabs - outlined</h3>
                <Tabtree />

            </div>
        </div>
    )
}

export default TabsPage
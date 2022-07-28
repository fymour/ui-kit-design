import React from 'react'
import './gridspaddingpage.css'
import breakpoint from '../../Assets/image/breakpoint.png'
import gridlayout from '../../Assets/image/gridlayout.png'


export const GridsPaddingPage = () => {
  return (
    <div>
      <div className='header-title'>
        <h2>Модуль и сетка</h2>
      </div>
      <div>
        <div className='wide-container'>
          <h3>Сетка</h3>
          <p>В интерфейсах Вышки мы используем гибкую сетку — ширина столбцов будет постоянно увеличиваться/уменьшаться в размере при изменении области просмотра.</p>
          <p>Межколоночное расстояние меняется в заивисмости от брейкпоинтов следующим образом:</p>
          <img src={breakpoint} alt="" />
        </div>
        <div className='thin-container'>
          <h3>Как пользоваться сеткой</h3>
          <p>Мы подготовили набор базовых состояний сетки для различных разрешений экрана. Все они есть в панеле стилей библиотеки компонентов.</p>
          <p>В некоторых интерфейсах ВШЭ возможно использование левого сайдбара. Для этого случая мы также подготовили сетку, где ширина сайдбара и ширина колонки выстраивается в зависимости от ширины экрана.</p>
          <p>Чтобы включить отображение сетки нажмите</p>
          <img src={gridlayout} alt="" />
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat repellat architecto nihil accusamus, ipsam, maxime veniam provident quas quod suscipit fugit error. Non excepturi id, autem sed nesciunt illo provident, voluptas nostrum vero inventore laboriosam voluptatem corrupti quo asperiores beatae magni explicabo sunt ipsam facilis saepe quidem molestias eaque iusto. Perferendis est ab quidem laborum dignissimos praesentium sit vitae. Autem reiciendis omnis facere aspernatur dolor ipsa cupiditate culpa voluptates harum laborum quis enim, velit exercitationem repellat provident nemo a vero! Harum, voluptas ullam. Quia maiores vitae ad nulla fugiat hic cupiditate aut temporibus esse laboriosam. Tenetur recusandae omnis earum, a laboriosam voluptate fuga quod, ea magni itaque sequi. Est ad qui nostrum voluptatum quidem iste dolore inventore officia id ea velit maiores reprehenderit consequuntur, ut, placeat tempore eveniet, dolores labore rem dolorum asperiores repudiandae numquam doloremque. Delectus ipsa dolorum perspiciatis deleniti corporis quaerat error repellendus nisi voluptate quae, modi asperiores, dolore cumque eaque perferendis sapiente velit magni. Quae laborum eveniet dolorem repellendus, hic nemo deserunt optio ad harum eos sunt officiis a commodi, consequatur, porro sit debitis ullam natus incidunt odit. Eligendi doloremque, sapiente, et amet sed asperiores adipisci hic, ex nesciunt odit commodi dicta ducimus quaerat qui accusamus tempore quia a dolorum quae quasi unde! Dignissimos error consequatur perspiciatis nesciunt deleniti inventore sequi numquam cum, quasi cupiditate? Sint ullam quis reprehenderit adipisci, est, odio excepturi esse sunt impedit, voluptas eos accusamus molestiae reiciendis quae! Unde ratione tenetur impedit, quod provident reprehenderit sint voluptatibus quisquam beatae inventore possimus consectetur dolor, earum dicta omnis? Eum assumenda accusantium nam accusamus repudiandae libero eveniet tenetur soluta praesentium quidem ut amet dolores aliquam, alias molestias omnis iste. Dolorem itaque sapiente, qui maxime, odio ipsum dolorum neque quisquam ducimus repellat assumenda delectus sed et dicta tempore debitis officiis voluptatem atque mollitia! Assumenda error consectetur commodi!</p>
        </div>
      </div>
    </div>
  )
}

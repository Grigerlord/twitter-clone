import { useState } from 'react';
import '../styles/componentsStyles/MenuItem.css'

function MenuItem({text, item}) {

    const [isItemActive, setIsItemActive] = useState(false)
    const className = `${isItemActive ? 'menu-item--active' : 'menu-item--children'}`

    const toActiveItem = () => {
        isItemActive
            ? setIsItemActive(false)
            : setIsItemActive(true)
    }

    return (
        <a href='#' className='menu-item' onClick={ toActiveItem }>
            <div className={ className }>
                <span className='menu-item--icon'>
                    {
                        isItemActive
                            ? item.on
                            : item.off
                    }
                </span>
                <p className='menu-item--text'>{text}</p>
            </div>
        </a>
    )
}

export default MenuItem
import menu from '../../data/menu.json';
import Link from 'next/link'
import LoginBtn from '../login-btn';

const MenuHeader = () => {
    return (
        <div id="navbarBasicExample" className="navbar-menu">
            <div className="navbar-start">
                {menu.map((object, i) => <Link href={object.to} key={i}><a className="navbar-item">{object.title}</a></Link>)}
            </div>
            
            <div className="navbar-end">
                <div className="navbar-item">
                    <div className="buttons">
                        <LoginBtn/> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuHeader

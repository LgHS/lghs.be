import menu from '../../contents/_data/menu.json'
import Link from 'next/link'

const MenuHeader = () => {
    return (
       <>
            {menu.map((object, i) => <li className="mr-4" key={i}><Link href={object.to} >
                <a className="button is-white">{object.title}</a>
            </Link></li>)}
        </>
    )
}

export default MenuHeader

import React from 'react'
import {
    Dropdown,
    Menu,
    Input
} from 'semantic-ui-react'
import './NavBar.css';
import logo from './logo.png';
import CartWidget from './../CartWidget/CartWidget'
import { Link, useHistory  } from 'react-router-dom';

const NavBar = () => {
    const history = useHistory();
    const search = (e) =>{
        if (e.key === 'Enter') {
            console.log(e.target.value);
            history.push("/search/" + e.target.value);
        }
    }
    return (
        <div className="navBar">
            <div className="upper">
                <p>CABA y GBA NORTE Entrega en el día.</p>
            <div className="right">
                <p>Atención Telefónica 0810-555-5432 / (0379) 155112405</p>
            </div>
            </div>
            <div className="mid">
                <Link to="/">
                    <div className="logo">
                        <img src={logo}
                            alt="Tienda Lujan"/>
                    </div>
                </Link>
                <Input onKeyDown={search} placeholder='Buscar...'/>
                <div></div>
            </div>
            <Menu id="categorias" size='small' stackable>
                <Dropdown className="subMenu" item text='Celulares y Tecnologia'>
                    <Dropdown.Menu>
                        <Link to="/Category/1"><Dropdown.Item>Celulares</Dropdown.Item></Link>
                        <Link to="/Category/2"><Dropdown.Item>Tablets</Dropdown.Item></Link>
                        <Link to="/Category/3"><Dropdown.Item>Computación</Dropdown.Item></Link>
                        <Link to="/Category/4"> <Dropdown.Item>Accesorios</Dropdown.Item></Link>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="subMenu" item text='TV, Audio y Video'>
                    <Dropdown.Menu>
                        <Link to="/Category/5"><Dropdown.Item>TV</Dropdown.Item></Link>
                        <Link to="/Category/6"><Dropdown.Item>Audio</Dropdown.Item></Link>
                        <Link to="/Category/7"><Dropdown.Item>Monitores</Dropdown.Item></Link>
                    </Dropdown.Menu>
                </Dropdown>
                <Dropdown className="subMenu" item text='ElectroHogar'>
                    <Dropdown.Menu>
                        <Link to="/Category/8"><Dropdown.Item>Heladeras</Dropdown.Item></Link>
                        <Link to="/Category/9"><Dropdown.Item>Cocinas y Hornos</Dropdown.Item></Link>
                        <Link to="/Category/10"><Dropdown.Item>Climatización</Dropdown.Item></Link>
                    </Dropdown.Menu>
                </Dropdown>
                <Menu.Menu position='right'>
                    <Menu.Item>
                        <CartWidget />
                    </Menu.Item>
                </Menu.Menu>

            </Menu>
        </div>
    )
}

export default NavBar

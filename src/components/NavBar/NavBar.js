import React, {Component} from 'react'
import {
    Dropdown,
    Menu,
    Icon,
    Input
} from 'semantic-ui-react'
import './NavBar.css';
import logo from './logo.png';
import CartWidget from './../CartWidget/CartWidget'
import { Link } from 'react-router-dom';

export default class NavBar extends Component {
    state = {
        activeItem: 'home'
    }

    handleItemClick = (e, {name}) => this.setState({activeItem: name})

    render() {
        const {activeItem} = this.state

        return (
            <div className="navBar">
                <div className="upper">
                    <p>Atención Telefónica 0810-555-5432 / (0379) 155112405</p>
                    <div className="right">
                        <a href="./">Centro de Ayuda</a>
                        <a href="./">Contacto</a>
                        <a href="./">Sobre Nosotros</a>
                    </div>
                </div>
                <div className="mid">
                    <Link to="/">
                        <div className="logo">
                            <img src={logo}
                                alt="Tienda Lujan"/>
                        </div>
                    </Link>
                    <Input icon={
                            {
                                name: 'search',
                                circular: true,
                                link: true
                            }
                        }
                        placeholder='Buscar...'/>
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
                            <Link to="/Category/8"><Dropdown.Item>Pequeños Electro</Dropdown.Item></Link>
                            <Link to="/Category/9"><Dropdown.Item>Heladeras</Dropdown.Item></Link>
                            <Link to="/Category/10"><Dropdown.Item>Cocinas y Hornos</Dropdown.Item></Link>
                            <Link to="/Category/11"><Dropdown.Item>Lavado</Dropdown.Item></Link>
                            <Link to="/Category/12"><Dropdown.Item>Climatización</Dropdown.Item></Link>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="subMenu" item text='Cuidado Personal'>
                        <Dropdown.Menu>
                            <Link to="/Category/13"><Dropdown.Item>Belleza</Dropdown.Item></Link>
                            <Link to="/Category/14"><Dropdown.Item>Salud</Dropdown.Item></Link>
                            <Link to="/Category/15"><Dropdown.Item>Deportes y Fitness</Dropdown.Item></Link>
                        </Dropdown.Menu>
                    </Dropdown>

                    <Menu.Item className="subMenu" name='Novedades'
                        active={
                            activeItem === 'Novedades'
                        }
                        onClick={
                            this.handleItemClick
                        }/>
                    <Menu.Menu position='right'>
                        <Menu.Item>
                            <Icon name='user' size='large'/>
                            <CartWidget />
                        </Menu.Item>
                    </Menu.Menu>

                </Menu>
            </div>
        )
    }
}

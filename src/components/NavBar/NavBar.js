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
                    <div className="logo">
                        <img src={logo}
                            alt="Tienda Lujan"/>
                    </div>
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
                <Menu id="categorias" size='small'>
                    <Dropdown className="subMenu" item text='Celulares y Tecnologia'>
                        <Dropdown.Menu>
                            <Dropdown.Item>Celulares</Dropdown.Item>
                            <Dropdown.Item>Tablets</Dropdown.Item>
                            <Dropdown.Item>Computación</Dropdown.Item>
                            <Dropdown.Item>Accesorios</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="subMenu" item text='TV, Audio y Video'>
                        <Dropdown.Menu>
                            <Dropdown.Item>TV</Dropdown.Item>
                            <Dropdown.Item>Audio</Dropdown.Item>
                            <Dropdown.Item>Monitores</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="subMenu" item text='ElectroHogar'>
                        <Dropdown.Menu>
                            <Dropdown.Item>Pequeños Electro</Dropdown.Item>
                            <Dropdown.Item>Heladeras</Dropdown.Item>
                            <Dropdown.Item>Cocinas y Hornos</Dropdown.Item>
                            <Dropdown.Item>Lavado</Dropdown.Item>
                            <Dropdown.Item>Climatización</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="subMenu" item text='Cuidado Personal'>
                        <Dropdown.Menu>
                            <Dropdown.Item>Belleza</Dropdown.Item>
                            <Dropdown.Item>Salud</Dropdown.Item>
                            <Dropdown.Item>Deportes y Fitness</Dropdown.Item>
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

import React, { Component } from 'react'
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';
import {Link } from 'react-router-dom';

export default class Header extends Component {
    constructor(props){
        super(props);
        this.state={
            isOpen:false
        }
    }
    toggle=()=>{
        this.setState({isOpen:!this.state.isOpen})
    }
    onLogoutButton=()=>{
        this.props.onLogout(this.props.history)
    }
    render() {
        const {isOpen}=this.state

        return (
            <Navbar color="secondary" className='rounded mx-1 mt-1' light expand="md">
            <NavbarBrand href="/">LOGO</NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={isOpen} navbar>
              <Nav className="mr-auto " navbar>
                <NavItem>
                  <Link className='nav-link' to="/">Home</Link>
                </NavItem>
                <NavItem>
                  <Link className='nav-link' to="/task">Tasks</Link>
                </NavItem>
                <NavItem>
                  <Link className='nav-link' to="/user">User</Link>
                </NavItem>
              </Nav>
            </Collapse>
          </Navbar> 
        )
    }
}


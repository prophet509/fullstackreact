import React,{Component} from 'react';

class Header extends Component{
    render(){
        return(
            <nav>
                <div class="nav-wrapper">
                <a href="/" class="brand-logo">Emaily</a>
                <ul  class="right">
                    <li><a href="/auth/google">Login with google</a></li>
                    
                </ul>
                </div>
            </nav>
        )
    }
}
export default Header;
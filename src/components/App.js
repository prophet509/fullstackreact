import React,{Component} from 'react';
import {BrowserRouter,Route} from 'react-router-dom';

import meterialize from 'materialize-css/dist/css/materialize.min.css'
import Header from './Header';
import * as actions from '../actions';
import { connect } from 'http2';

const Dashboard = () => <h2>Dasboard</h2>;
const SurveyNew = () => <h2>Survey New</h2>;
const Landing = () => <h2>Landing</h2>;



class App extends Component{
    componentDidMount(){
        this.props.fetchUser();
    }
    render(){
        return( 
            <div>
                <BrowserRouter>
                    <div>
                        <Header />
                        <Route exact path="/" component={Landing}></Route>
                        <Route exact path="/surveys" component={Dashboard}></Route>
                        <Route path="/surveys/new" component={SurveyNew}></Route>
                    </div>
                </BrowserRouter>
            </div>
        )
    }
    
}
export default connect(null,actions)( App);
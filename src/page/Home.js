import React, { Component } from 'react';

import Footer from '../components/Footer';
import Header from '../components/Header';
import Jumbotron from '../components/Jumbotron';
import Media from '../components/Media';
import PartnerList from '../components/PartnerList';
import Team from '../components/Team';
import TeamMember from '../components/TeamMember';
import Template from '../components/Template';


export default class Home extends Component {
    render() {
        return (
            <>
            <Template/>
            <Header/>
            <Jumbotron/>
            <PartnerList/>
            <Media/>
            <Media/>
            <Media/>
            <Team/>
            <Jumbotron/>
            <Footer/>
            </>
        );
    }
}

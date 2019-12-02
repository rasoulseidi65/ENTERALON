import React from 'react';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.css';
import 'mdbootstrap/css/mdb.lite.min.css';
import 'mdbootstrap/css/mdb.min.css'
import 'mdbootstrap/css/modules/animations-extended.min.css';
import "font-awesome/css/font-awesome.min.css";
import 'react-id-swiper/lib/styles/css/swiper.css';
import 'all-animation/assets/css/all-animation.min.css';
import { Route,Switch } from "react-router-dom";
import ScrollAnimation from 'react-animate-on-scroll';
import Header from './Header/Header';
import Footer from '../layouts/Footer/Footer';
import SearchBox from "./SearchBox/SearchBox";

const BaseLayout = (props) => {
  const { className, children, isAuthenticated, user, isSiteOwner, cannonical } = props;
  const headerType = props.headerType || 'default';
  const title = props.title || 'ENTRALON';
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta name="description" content="My name is ENTRALON INTERNATIONAL REAL ESTATE " />
        <meta name="keywords" content="ENTRALON, REAL ESTATE"/>
        <meta property="og:title" content="ENTRALON, REAL ESTATE" />
        <meta property="og:locale" content="en_EU" />
        <meta property="og:url" content={`${process.env.BASE_URL}`}/>
        <meta property="og:type" content="website"/>
        <meta property="og:description" content="My name is ENTRALON"/>
        <link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet"/>
        {cannonical && <link rel="cannonical" href={`${process.env.BASE_URL}${cannonical}`}/>}
        <link rel="icon" type="image/ico" href="/static/favicon.ico"/>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.8.11/js/mdb.min.js"></script>
        </Head>

      <div>
        <Header/>
          <div>
            {children}
          </div>
       
        <Footer/>
      </div>
    </React.Fragment>
  )
}

export default BaseLayout;


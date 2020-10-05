import React from 'react';
import imgPath from '../assets/avatar.jpg';
import '../styles/introduce.css';

class Introduce extends React.Component{
    render(){
        return(
            <div className={'introduce'}>
                <img src={imgPath} alt=''  ></img>
                <p>Hello,</p>
                <p>MY NAME IS KAMIL 24YO AND THIS IS MY RESUME/CV </p>
            </div>
        );
    }
}

export default Introduce;
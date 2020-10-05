import React from 'react';
import '../styles/Educations.css';

class Educations extends React.Component{
    render(){
        return(
            <div className="educations">
                <h1>
                    EDUCATION
                </h1>
                <div className="education">
                    <h2>1990</h2>
                    <ul>
                        <li id="li1">I was born in Katowice</li>
                        <li id="li2">Lorem ipsum dolor sit amet,consectetur adipisicing elot.Sapiente,exercitationem,totam,dolores iste est aut modi.</li>
                    </ul>
                </div>
                <div className="education">
                    <h2>2005</h2>
                    <ul>
                        <li id="li1">Secondary school specializing in artistic</li>
                        <li id="li2">Eos,explicabo,nam,renetur et ab eius deserunt aspernatur ipsum ducimus quibsdam quis voluptatibus. </li>
                    </ul>
                </div>
                <div className="education">
                    <h2>2009</h2>
                    <ul>
                        <li id="li1">First level graduation in Graphic Design</li>
                        <li id="li2">Aspernatur,mollitia,quos maxime eius suscipit sed beatae ducimus quaerat quibusdam perferendis?lusto,quibusdam asperiores unde repellat.</li>
                    </ul>
                </div>
                <div className="education">
                    <h2>2012</h2>
                    <ul>
                        <li id="li1">Second level graduation in Graphic Design</li>
                        <li id="li2">Ducimus,aliquam tempore autem itaque et accusantium!</li>
                    </ul>
                </div>
            </div>
        );
    }
}
export default Educations;
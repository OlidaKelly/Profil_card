import React, { useState } from 'react'; 
import "./Profil.css";
import man from './../assets/man.svg';
import woman from './../assets/woman.svg';

import skinColor from './../assets/skin.svg';
import skinColor1 from './../assets/color-FCD7B8.svg';
import skinColor2 from './../assets/color-E0A39A.svg';
import skinColor3 from './../assets/color-FCCC84.svg';
import skinColor4 from './../assets/color-533724.svg';

import tColor from './../assets/t-shirt.svg';
import tColor1 from './../assets/color-B2C7C7.svg';
import tColor2 from './../assets/color-88C10F.svg';
import tColor3 from './../assets/color-FF1414.svg';
import tColor4 from './../assets/color-striped.svg';

export const Profil = () => {
  
    const [validate, setValidate] = useState(false);

    const handleSubmit = () => {
      setValidate(!false)
      alert("Votre choix a été validé");
    };

  return (
    <div className="container-profil-div">
      <div className="profil-div">
        <header className="header-profil">
          <h1>profil</h1>
        </header>
        <div className="container-avatar-div">
          <p>Lequel de ces deux avatars préférez-vous ?</p>
          <section className="avatar-section">
            <img className="img-avatar" src={man} alt="man avatar"/>
            <img className="img-avatar"src={woman} alt="woman avatar"/>
          </section> 
          <hr></hr>
          <section className="choice-section">
            <div className="skin-colors-div" >
              <img className="item" src={skinColor} alt="choix de la couleur de la peau"/>
              <img className="cercle-color" src={skinColor1} alt="la couleur de la peau beige"/>
              <img className="cercle-color" src={skinColor2} alt="la couleur de la peau rosée"/>
              <img className="cercle-color" src={skinColor3} alt="la couleur de la peau jaune"/>
              <img className="cercle-color" src={skinColor4} alt="la couleur de la peau marron"/>
            </div>
            <div className="t-shirt-colors-div" >
              <img className="item"src={tColor} alt="choix de la couleur du t-shirt"/>
              <img className="cercle-color" src={tColor1} alt="t-shirt bleu"/>
              <img className="cercle-color" src={tColor2} alt="t-shirt vert"/>
              <img className="cercle-color" src={tColor3} alt="t-shirt rouge"/>
              <img className="cercle-color" src={tColor4} alt="t-shirt à rayures"/>
            </div>
          </section>
          <button className='validate' onClick={handleSubmit}>valider</button>
        </div>
      </div>  
    </div>
  )
}
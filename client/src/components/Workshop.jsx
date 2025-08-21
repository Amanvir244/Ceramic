
import React from 'react';
import './Workshop.css';

function Workshop() {
  return (
    <section className="workshop-section">
      <div className="workshop-image">
        <img src="/images/workshop.jpg" alt="Workshop" />
      </div>
      <div className="workshop-text">
        <h2>Workshops</h2>
        <p>
     Lorem ipsum dolor sit amet, eos eu pertinax evertitur, semper deleniti at sed. Et eos semper quaeque, per scripta tritani quaerendum ut, eam te virtute epicuri. 
        </p>
        <p>
        Tollit iracundia pro an, in ius vide iracundia interesset, cu mel vidit posse expetendis. Tale offendit ex est, et modus nostro per, dicit corrumpit has eu.
         Mea mutat viris probatus te, no dicunt oporteat reprimique per, partem ancillae efficiantur te duo. Vero clita ad mea.
        </p>
        <button className="subscribe-button">Subscribe</button>
      </div>
    </section>
  );
}

export default Workshop;

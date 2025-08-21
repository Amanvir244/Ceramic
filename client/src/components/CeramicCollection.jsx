import React from 'react';
import './CeramicCollection.css';

function CeramicCollection() {
  return (
    <section className="ceramic-section">
      <div className="ceramic-grid">
        <img src="/images/img4.jpg" alt="Ceramic 1" className="grid-item large" />
        <img src="/images/img5.jpg" alt="Ceramic 2" className="grid-item small" />
        <img src="/images/img6.jpg" alt="Ceramic 3" className="grid-item small" />
      
      </div>
    </section>
  );
}

export default CeramicCollection;


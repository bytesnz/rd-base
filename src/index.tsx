import * as React from 'react';

export const RDHeader = () => (
  <header className="rdHeader">
    <div className="logo"></div>
    <div className="nav" tabIndex="1">
      <div className="hamburger"></div>
      <nav>
        <a href="//www.rd" title="Information about Reef Doctor">Information</a>
        <a href="//files.rd" title="Useful files including all Reef Doctor presentations, useful software and sustaintable living (SL) data templates">Files</a>
        <a href="//data.rd" title="Aquaculture and science data">Data</a>
        <a href="//maps.rd" title="Maps and POI of the Bay of Ranobe">Maps</a>
        <a href="//upload.rd" title="The place to upload completed SL data worksheets">Upload</a>
        <a href="//www.rd/weather.html" title="Show the current weather forecase">Weather</a>
      </nav>
    </div>
    <div className="logo-text"></div>
  </header>
);

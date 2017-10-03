import * as React from 'react';

export const RDHeader = () => (
  <header className="rdHeader">
    <div className="logo"></div>
    <div className="nav" tabIndex="1">
      <div className="hamburger"></div>
      <nav>
        <a href="//www.rd">Information</a>
        <a href="//files.rd">Files</a>
        <a href="//data.rd">Data</a>
        <a href="//maps.rd">Maps</a>
        <a href="//upload.rd">Upload</a>
      </nav>
    </div>
    <div className="logo-text"></div>
  </header>
);

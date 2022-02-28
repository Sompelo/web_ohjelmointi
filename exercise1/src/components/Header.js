import React from 'react';

export default function Header() {
  return <div className='headerOuter'>
    <div className='headerInner'>
      <div className='menuBarLeft'>
        <div className='logo'>Hulsingin Sanomat</div>
        <div className='menuItem'><a>Etusivu</a></div>
        <div className='menuItem'><a>Uutiset</a></div>
        <div className='menuItem'><a>Julkkisjuorut</a></div>
        <div className='menuItem'><a>Kalja</a></div>
      </div>
      <div className='menuBarRight'>
        <div className='menuHighlighted'><a>Tilaa</a></div>
        <div className='menuItem'><a>Kirjaudu</a></div>
        <div className='menuValikko'>
          <div className="valikko"><a>Valikko</a></div>
          <div className="valikko_icon"><img src='valikko_icon.png'></img></div>
        </div>
      </div>
      {/* <div className='menuHighlighted'>Un-Subscribe</div> */}
    </div>
  </div>;
}

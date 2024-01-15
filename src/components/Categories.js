import React from 'react'
import maleshoe from '../Images/maleshoe.png';
import womenshoe from '../Images/womenshoe.png';
import kidsshoe from '../Images/kidsshoe.png';
import { Container } from 'react-bootstrap';

function Categories() {
  return (
    <div>
      <h1 style={{padding:'20px'}}>FOR MENS</h1>
      <hr/>
      <img src={maleshoe} style={{height:'650px',width:'100%'}} alt='' />
      <br/>
      <h1 style={{padding:'20px'}}>FOR WOMENS</h1>
      <hr/>
      <img src={womenshoe} style={{height:'650px'}} alt='' />
      <br/>
      <h1 style={{padding:'20px'}}>KIDS WEAR</h1>
      <hr/>
      <img src={kidsshoe} style={{height:'650px',width:'100%'}} alt='' />
    </div>

  )
}

export default Categories

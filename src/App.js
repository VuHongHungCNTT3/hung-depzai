import React, { Component } from 'react'
import VHH_EventForm1 from './components/VHH_EventForm1';
import VHH_EventForm2 from './components/VHH_EventForm2';
import VHH_EventForm3 from './components/VHH_EventForm3';
import VHH_EventForm4 from './components/VHH_EventForm4';

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Event Form Demo </h1>
        <VHH_EventForm1 />
        <VHH_EventForm2 />
        <VHH_EventForm3 />
        <VHH_EventForm4 name="Vu Hong Hung" />
      </div>
    );
  }
}

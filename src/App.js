import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {

  userMedia = () => {
    //  alert('hi there');
    navigator.getUserMedia = navigator.getUserMedia || navigator.webkitGetUserMedia;

    if (navigator.getUserMedia) {
      navigator.getUserMedia(
        { audio: true, video: { width: 880, height: 420 } }
        , function (stream) {
          var video = document.getElementById('video');
          video.srcObject = stream;
          video.onloadedmetadata = function (e) {
            video.play();
          }
        }
        , function (err) {
          console.log('error = ');
        })
    }
  }

 photo =()=>{
 //alert('photo');
  var canvas = document.getElementById('canvas');
  var context = canvas.getContext('2d');
  canvas.width = 880;
  canvas.height =420;
  var video = document.getElementById('video');
  context.drawImage(video,0,0,880,420);
  var image = canvas.toDataURL('image/jpeg');
  // document.getElementById('img').src=image ;
  console.log('photo');
  document.querySelector('a').href=image;


 }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <button style={{ height: '30px' }} onClick={this.userMedia}>open Camera</button>
          <button style={{ height: '30px' }} onClick={this.photo}>Take Snapshot</button>
          <a download='imageFromCamera'>download</a>
          <video id='video' controls />
          <canvas id='canvas'> {'no support canvas'} </canvas>
         {/*
          <h1>{'your photo/image'}</h1>
          
          <img id='img' alt='noImageAvailable'/>
         */}
          </header>
      </div>
    );
  }
}

export default App;

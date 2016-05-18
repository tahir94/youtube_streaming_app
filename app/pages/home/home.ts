import {Page, NavController} from 'ionic-angular';
import {AboutPage} from "../about/about"
import {OnInit} from 'angular2/core'
@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  streamingData: any = [];
  firebaseRef;
  getData;
  player;

  constructor(public nav: NavController) {
    this.nav = nav;
    this.firebaseRef = new Firebase("https://webcastpanacloud.firebaseio.com/");
    this.firebaseRef.child("webcasts").on("child_added", (snapshot) => {
    this.getData = snapshot.val()
    this.streamingData.push(snapshot.val())

    })


  }
  goToAbout(event) {

    this.nav.push(AboutPage, {youtubeEvent: event})
   
  }

}

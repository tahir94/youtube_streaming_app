import {Page, NavParams, NavController} from 'ionic-angular';
import {OnInit} from "angular2/core"
@Page({
  templateUrl: 'build/pages/about/about.html'
})
export class AboutPage implements OnInit {

  player;
  geteventId;
  
  
  constructor(private navcontroller: NavController, private navParams: NavParams) {
    this.navcontroller = navcontroller
    this.navParams     = navParams;
    
    this.geteventId = this.navParams.get('youtubeEvent')
   

}
  ngOnInit() {

    this.onYouTubePlayerAPIReady()

  }


  onYouTubePlayerAPIReady() {

    this.player = new YT.Player('video', {
      height: '500',
      width: '600',
      videoId: this.geteventId.event.id
    });

  }






}

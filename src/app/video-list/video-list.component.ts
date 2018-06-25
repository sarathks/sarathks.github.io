import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  public fullData = {"1":{"page":{"title":"Romantic Comedy","total-content-items":"54","page-num-requested":"1","page-size-requested":"20","page-size-returned":"20","content-items":{"content":[{"name":"The Birds","poster-image":"poster1.jpg"},{"name":"Rear Window","poster-image":"poster2.jpg"},{"name":"Family Pot","poster-image":"poster3.jpg"},{"name":"Family Pot","poster-image":"poster2.jpg"},{"name":"Rear Window","poster-image":"poster1.jpg"},{"name":"The Birds","poster-image":"poster3.jpg"},{"name":"Rear Window","poster-image":"poster3.jpg"},{"name":"The Birds","poster-image":"poster2.jpg"},{"name":"Family Pot","poster-image":"poster1.jpg"},{"name":"The Birds","poster-image":"poster1.jpg"},{"name":"The Birds","poster-image":"poster1.jpg"},{"name":"Rear Window","poster-image":"poster2.jpg"},{"name":"Family Pot","poster-image":"poster3.jpg"},{"name":"Family Pot","poster-image":"poster2.jpg"},{"name":"Rear Window","poster-image":"poster1.jpg"},{"name":"The Birds","poster-image":"poster3.jpg"},{"name":"Rear Window","poster-image":"poster3.jpg"},{"name":"The Birds","poster-image":"poster2.jpg"},{"name":"Family Pot","poster-image":"poster1.jpg"},{"name":"The Birds","poster-image":"poster1.jpg"}]}}},"2":{"page":{"title":"Romantic Comedy","total-content-items":"54","page-num-requested":"2","page-size-requested":"20","page-size-returned":"20","content-items":{"content":[{"name":"Rear Window","poster-image":"poster5.jpg"},{"name":"Family Pot","poster-image":"poster6.jpg"},{"name":"Family Pot","poster-image":"poster5.jpg"},{"name":"Rear Window","poster-image":"poster4.jpg"},{"name":"The Birds","poster-image":"poster6.jpg"},{"name":"Rear Window","poster-image":"poster6.jpg"},{"name":"The Birds","poster-image":"poster5.jpg"},{"name":"Family Pot","poster-image":"poster4.jpg"},{"name":"The Birds","poster-image":"poster4.jpg"},{"name":"Rear Window","poster-image":"poster5.jpg"},{"name":"Rear Window","poster-image":"poster5.jpg"},{"name":"Family Pot","poster-image":"poster6.jpg"},{"name":"Family Pot","poster-image":"poster5.jpg"},{"name":"Rear Window","poster-image":"poster4.jpg"},{"name":"The Birds","poster-image":"poster6.jpg"},{"name":"Rear Window","poster-image":"poster6.jpg"},{"name":"The Birds","poster-image":"poster5.jpg"},{"name":"Family Pot","poster-image":"poster4.jpg"},{"name":"The Birds","poster-image":"poster4.jpg"},{"name":"Rear Window","poster-image":"poster5.jpg"}]}}},"3":{"page":{"title":"Romantic Comedy","total-content-items":"54","page-num-requested":"3","page-size-requested":"20","page-size-returned":"14","content-items":{"content":[{"name":"Family Pot","poster-image":"poster9.jpg"},{"name":"Family Pot","poster-image":"poster8.jpg"},{"name":"Rear Window","poster-image":"poster7.jpg"},{"name":"The Birds","poster-image":"poster9.jpg"},{"name":"Rear Window","poster-image":"poster9.jpg"},{"name":"The Birds","poster-image":"poster8.jpg"},{"name":"Family Pot","poster-image":"poster7.jpg"},{"name":"Family Pot","poster-image":"poster9.jpg"},{"name":"Family Pot","poster-image":"poster8.jpg"},{"name":"Rear Window","poster-image":"poster7.jpg"},{"name":"The Birds with an Extra Long Title","poster-image":"poster9.jpg"},{"name":"Rear Window","poster-image":"poster9.jpg"},{"name":"The Birds","poster-image":"poster8.jpg"},{"name":"Family Pot","poster-image":"posterthatismissing.jpg"}]}}}};
	public movieContent : any = []; 
  public totalContent : number;
  public loadedContentlength: number;
  public pageCount: number;
  public fullDataLoaded: boolean;
  public movieGenre : string;
  public videoMode : boolean;
  public searchText : string;
  public searchContrents : any = [];

  constructor() { }

  ngOnInit() {

    this.videoMode = true;
    this.searchContrents = [];
    //scroll to top on reload the page
    window.onbeforeunload = function() {window.scrollTo(0,0);}
    this.pageCount = 1;
    this.movieGenre = this.fullData[this.pageCount]["page"]["title"];
    this.fullDataLoaded = false;
    this.totalContent = +this.fullData[this.pageCount]["page"]["total-content-items"];
    this.loadedContentlength = +this.fullData[this.pageCount]["page"]["page-size-returned"];
  	this.movieContent = this.fullData[this.pageCount]["page"]["content-items"]["content"];
    
    //fetch data on reaching near to the bottom of the page
    window.onscroll = (ev) => {
        if ((window.innerHeight + window.scrollY + 450) >= document.body.offsetHeight) {          
            if(this.totalContent>this.loadedContentlength){
                 this.pageCount = this.pageCount+1;
                 this.movieContent = this.movieContent.concat(this.fullData[this.pageCount]["page"]["content-items"]["content"]);
                 this.loadedContentlength  = this.loadedContentlength + (+this.fullData[this.pageCount]["page"]["page-size-returned"]);
            }
        }
    };

  }

  searchVideos=()=> {
    this.videoMode = false;
  }

  backToVideos=()=> {
    this.videoMode = true;
  }

  searching=()=> {
    this.searchContrents = [];
    let chunk;
    if(this.searchText){
      Object.keys(this.fullData).forEach((key)=> {
      chunk = (this.fullData[key]["page"]["content-items"]["content"]);
      this.searchContrents = this.searchContrents.concat(chunk.filter(result => (result["name"].toLowerCase().indexOf(this.searchText.toLowerCase()) != -1)));
    }); 
    }
    
  }

}

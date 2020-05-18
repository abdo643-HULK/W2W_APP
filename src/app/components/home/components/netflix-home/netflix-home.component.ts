import { Component, OnInit, ElementRef, EventEmitter, Input, Output, AfterViewInit, Renderer2, ViewChild } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';
import { faPlayCircle } from '@fortawesome/free-solid-svg-icons';
/*import { isPlatformBrowser } from '@angular/common';*/

interface netflixData {
  COUNT: string;
  ITEMS: [];
  proto: any;
}
class obj {
    COUNT: string;
    ITEMS: Array<Item>;
    proto: any;
}
class Item {
    netflixid: string;
    title: string;
    image: string;
    synopsis: string;
    rating: string;
    type: string;
    released: string;
    runtime: string;
    largeimage: string;
    unogsdate: string;
    imdbid: string;
    download: string;
}

@Component({
  selector: 'app-netflix-home',
  templateUrl: './netflix-home.component.html',
  styleUrls: ['./netflix-home.component.css']
})


export class NetflixHomeComponent implements OnInit {
  dataValue: obj = new obj;
  expire: obj = new obj;
  private isDataAvailable: boolean = false;
  @ViewChild('SwiperWrapperCS', { static: false }) cs: ElementRef;
  @ViewChild('SwiperWrapperLS', { static: false }) ls: ElementRef;
  @Output() tab = new EventEmitter();

  faPlayCircle = faPlayCircle;


  headers = new HttpHeaders().set('x-rapidapi-host', 'unogs-unogs-v1.p.rapidapi.com')
  .set('x-rapidapi-key', '2e75f12489msh4881df0eea4530ap1d9974jsnb1c9075c37c4')
  .append('Content-Type', 'application/json');

  constructor(private http: HttpClient/*, public element: ElementRef, private rd: Renderer2*/) {
    /*this.getNew();
    this.getLeaving();*/
  } 

  getNew() {
    this.http.get<netflixData>("https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?q=get%3Anew7%3ADE&p=1&t=ns&st=adv", { headers: this.headers }).
    subscribe(csdata => { this.dataValue = csdata; /*console.log(this.dataValue);*/ });
  }

  getLeaving() {
    this.http.get<netflixData>("https://unogs-unogs-v1.p.rapidapi.com/aaapi.cgi?q=get%3Aexp%3ADE&t=ns&st=adv&p=1", { headers: this.headers }).
    subscribe(lsdata => { this.expire = lsdata; /*console.log(this.expire);*/ });
  }

  ngOnInit() {

  }
  
  openTab(evt, tabName, swipertab, servicetab) {
    var i, x, tablinks;
    x = document.getElementsByClassName(swipertab);
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName(servicetab);
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" is-active", "");
    }
    document.getElementById(tabName).style.display = "";
    evt.currentTarget.className += " is-active";
  }

  /*openTab(tabName,swipertab) {
    this.tab.emit({Name: tabName, Swiper:swipertab});
  }*/

  ngAfterViewInit() {
    /*if (window.matchMedia("(min-width: 1024px) and (max-width: 2200px)").matches) {
      let swiperslider = this.rd.createElement("div");
      this.rd.addClass(swiperslider, 'swiper-slide');

      let flipcard = this.rd.createElement('div');
      this.rd.addClass(flipcard, 'flip-card-inner');

      let cardfront = this.rd.createElement('div');
      this.rd.addClass(cardfront, 'flip-card-front');

      let image = this.rd.createElement('img');
      this.rd.setProperty(image, 'src', './assets/prime/cs/Carnival_Row.jpg');

      let cardback = this.rd.createElement('div');
      this.rd.addClass(cardback, 'flip-card-back');

      let title = this.rd.createElement('h1');
      this.rd.setProperty(title, 'innerHTML', 'John Doe');

      this.rd.appendChild(cardback, title);
      this.rd.appendChild(flipcard, cardback);
      this.rd.appendChild(cardfront, image);
      this.rd.appendChild(flipcard, cardfront);
      this.rd.appendChild(swiperslider, flipcard);
      this.rd.appendChild(this.cs.nativeElement, swiperslider);
      this.rd.appendChild(this.ls.nativeElement, swiperslider);

      var sliderflipcard = Array.from(document.getElementsByClassName("swiper-slide") as HTMLCollectionOf<HTMLElement>);
      sliderflipcard.forEach(function () {
        this.rd.appendChild(this.cs.nativeElement, flipcard)
        console.log(this.cs.nativeElement, flipcard);
      });
    }*/
  }
}


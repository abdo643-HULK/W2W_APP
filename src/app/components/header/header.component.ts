import {
  Component,
  OnInit,
  OnDestroy,
  HostListener,
  AfterViewInit,
  ElementRef,
  Renderer2,
} from "@angular/core";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent implements OnInit, OnDestroy, AfterViewInit {
  /*_ref:any;*/

  y_position: number;
  burgeropen: boolean = false;
  nav_moved: boolean = true; //change color on desktop else bg black
  options = {
    threshold: 0,
  };
  // observer = new IntersectionObserver(this.changeNavbar(),this.options);

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnInit() {
    this.closeNavbarMenu();
    this.toggleDropDown();
  }

  ngAfterViewInit() {
    console.log(window.innerWidth);
    if (window.innerWidth >= 1028 || window.innerWidth < 1600)
      this.changeNavbar();
  }

  ngOnDestroy() {}

  toggleDropDown() {
    document
      .querySelector(".has-dropdown1 .navbar-link")
      .classList.toggle("is-active");
  }

  changeNavbar() {
    const navbar = document.getElementById("nav-moving");
    const start = document.getElementById("navigation");
    console.log(navbar);
    console.log(start);
    var observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log("observing");
        if (
          entry.isIntersecting &&
          window.innerWidth >= 1028 &&
          window.innerWidth < 2200
        ) {
          this.nav_moved = false;
          // navbar.style.backgroundColor = "transparent";
          console.log("transparent");
        } else if (
          !entry.isIntersecting &&
          window.innerWidth >= 1028 &&
          window.innerWidth < 2200
        ) {
          this.nav_moved = true;
          // navbar.style.backgroundColor = "black";
          console.log("black");
        } else {
          observer.disconnect();
        }
      });
    }, this.options);
    observer.observe(start);
    console.log("observing");
  }

  openHome() {
    var x = document.getElementsByClassName("active-link");
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("active-link");
    }
    document.getElementById("home").className += " active-link";
  }

  openPage(event) {
    var x = document.getElementsByClassName("active-link");
    for (var i = 0; i < x.length; i++) {
      x[i].classList.remove("active-link");
    }
    event.target.className += " active-link";
  }

  destroyBillboard() {
    /*this._ref.destroy();*/
  }

  closeNavbarMenu() {
    document.querySelector(".removeclick").addEventListener("click", () => {
      let has_dropdown = Array.from(
        document.getElementsByClassName("has-dropdown1")
      );
      has_dropdown.forEach((element) => {
        element.classList.remove("is-active");
      });

      document.querySelector(".navbar-burger").classList.remove("is-active");
      document.querySelector(".navbar-menu").classList.remove("is-active");
    });

    Array.from(document.getElementsByClassName("menu-close")).forEach((e) => {
      e.addEventListener("click", () => {
        document.querySelector(".navbar-burger").classList.remove("is-active");
        document.querySelector(".navbar-menu").classList.remove("is-active");
        document.querySelector(".has-dropdown1").classList.remove("is-active");
        document
          .querySelector(".has-dropdown1")
          .classList.remove("is-hoverable");
        setTimeout(() => {
          document
            .querySelector(".has-dropdown1")
            .classList.add("is-hoverable");
        }, 500);
      });
    });
  }

  toggleBurger() {
    this.burgeropen = !this.burgeropen;
  }

  // toggleBurger()
  // {
  // $(document).ready(function()
  // {
  //   $(".navbar-burger").click(function()
  //   {
  //       $(".navbar-burger").toggleClass("is-active");
  //       $(".navbar-menu").toggleClass("is-active");
  //   });
  // })
  // }

  // @HostListener('window:scroll', ['$scroll'])
  // changeNavbar(entrie)
  // {
  // if (window.matchMedia("(min-width: 1024px) and (max-width: 2200px)").matches)
  // {
  //   this.y_position = window.scrollY;
  //   if(this.y_position > 50)
  //   {
  //     document.getElementById("nav-moving").style.backgroundColor = "black";
  //   }
  //   else
  //   {
  //     document.getElementById("nav-moving").style.backgroundColor = "transparent";
  //   }
  // }
  // }

  // toggleDropDown()
  // {
  //   $(document).ready(function()
  //   {
  //     $(".has-dropdown1 .navbar-link").click(function()
  //     {
  //         $(".has-dropdown1").toggleClass("is-active");
  //     });
  //   })
  // }
}

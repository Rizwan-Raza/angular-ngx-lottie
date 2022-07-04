import { Component, VERSION } from "@angular/core";
import { AnimationOptions } from "ngx-lottie";

@Component({
  selector: "my-app",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Angular " + VERSION.major;

  options: AnimationOptions = {
    path: "https://assets3.lottiefiles.com/private_files/lf30_m6j5igxb.json"
  };


  constructor() {
    
  }
  // styles: Partial<CSSStyleDeclaration> = {
  //   maxWidth: '500px',
  //   margin: '0 auto',
  // };
}

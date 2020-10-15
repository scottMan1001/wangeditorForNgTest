import { Component } from '@angular/core';
import E from 'wangeditor'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-app';
  editor:any;
  ngOnInit(){
   
    this.editor = new E("#editor")
  }
}

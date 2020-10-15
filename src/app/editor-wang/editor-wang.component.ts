import { Component, OnInit } from '@angular/core';
import E from 'wangeditor'
@Component({
  selector: 'app-editor-wang',
  templateUrl: './editor-wang.component.html',
  styleUrls: ['./editor-wang.component.scss']
})
export class EditorWangComponent implements OnInit {
  editor:any;
  constructor() { }

  ngOnInit(): void {
    //  this.editor = new E("#editor")
  }
  ngAfterViewInit(){
     this.editor = new E("#editor")
  }
}

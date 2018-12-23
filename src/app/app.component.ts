import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private el: ElementRef) { }

  // 加载完毕后去掉预加载动画
  ngOnInit(): void {
    const preloader = this.el.nativeElement.parentNode.querySelector('.preloader');
    preloader.className += ' preloader-hidden-add preloader-hidden-add-active';
    setTimeout(function () { preloader.className += ' preloader-hidden'; }, 750); // 加载动画变为透明用时750ms，所以750ms后移除该动画
  }
}

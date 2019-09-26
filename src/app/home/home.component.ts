/**
 * https://www.jianshu.com/p/a2f1d54097f8
 * 1、ngOnChanges - 当数据绑定输入属性的值发生变化时调用
 * 2、ngOnInit - 在第一次 ngOnChanges 后调用
 * 3、ngDoCheck - 自定义的方法，用于检测和处理值的改变
 * 4、ngAfterContentInit - 在组件内容初始化之后调用
 * 5、ngAfterContentChecked - 组件每次检查内容时调用
 * 6、ngAfterViewInit - 组件相应的视图初始化之后调用
 * 7、ngAfterViewChecked - 组件每次检查视图时调用
 * 8、ngOnDestroy - 指令销毁前调用
 */
import { Component, OnInit, AfterViewInit } from '@angular/core';

declare let Swiper: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit {
  testSwiper = null;
  slides = [
    'https://via.placeholder.com/300x200/FF5733/ffffff',
    'https://via.placeholder.com/300x200/C70039/ffffff',
    'https://via.placeholder.com/300x200/900C3F/ffffff'
  ];

  constructor() {}

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.testSwiper = new Swiper('.swiper-container', {
      direction: 'horizontal',
      loop: true,
      // 如果需要分页器
      pagination: {
        el: '.swiper-pagination'
      },
      // 如果需要前进后退按钮
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
      },
      // 如果需要滚动条
      scrollbar: {
        el: '.swiper-scrollbar'
      }
    });
  }
}

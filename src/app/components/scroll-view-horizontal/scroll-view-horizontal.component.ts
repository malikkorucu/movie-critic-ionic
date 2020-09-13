import { Component, OnInit, Input } from '@angular/core';
import { title } from 'process';

@Component({
  selector: 'app-scroll-view-horizontal',
  templateUrl: './scroll-view-horizontal.component.html',
  styleUrls: ['./scroll-view-horizontal.component.scss'],
})
export class ScrollViewHorizontalComponent implements OnInit {

  @Input() movies: Array<any>;
  @Input() title: string;

  constructor() { }

  ngOnInit() { }
}

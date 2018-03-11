import {
  Component,
  OnInit,
  ContentChild,
  ElementRef,
  AfterContentInit,
  Renderer2
} from '@angular/core';
import { TreedHeaderComponent } from '../treed-header/treed-header.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tree-group',
  templateUrl: './treed-group.component.html',
  styleUrls: ['./treed-group.component.scss']
})
export class TreedGroupComponent implements OnInit, AfterContentInit {
  isOpen: boolean;
  @ContentChild(TreedHeaderComponent, { read: ElementRef })
  header: ElementRef;
  @ContentChild(TreedGroupComponent, { read: ElementRef })
  group: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.isOpen = true;
  }

  ngAfterContentInit() {}
}

import {
  Component,
  OnInit,
  ContentChild,
  ElementRef,
  Renderer2,
  AfterContentInit
} from '@angular/core';
import { TreedHeaderComponent } from '../treed-header/treed-header.component';
import { TreedGroupComponent } from '../treed-group/treed-group.component';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tree-list',
  templateUrl: './treed-body.component.html',
  styleUrls: ['./treed-body.component.scss']
})
export class TreedBodyComponent implements OnInit, AfterContentInit {
  isOpen: boolean;
  @ContentChild(TreedHeaderComponent, { read: ElementRef })
  header: ElementRef;
  @ContentChild(TreedGroupComponent, { read: ElementRef })
  group: ElementRef;

  constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.isOpen = false;
  }

  ngAfterContentInit() {
    if (this.header) {
      this.renderer.listen(this.header.nativeElement, 'click', () => {
        // console.log(this.header);
        this.isOpen = !this.isOpen;
        // this.renderer.setStyle(
        //   this.group.nativeElement,
        //   'display',
        //   this.isOpen ? 'none' : 'block'
        // );
        this.isOpen &&
          this.renderer.addClass(this.group.nativeElement, 'active');
        !this.isOpen &&
          this.renderer.removeClass(this.group.nativeElement, 'active');
      });
    }
  }
}

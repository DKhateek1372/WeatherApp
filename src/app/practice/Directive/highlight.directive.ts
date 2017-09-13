/* import { Directive, OnInit, Input } from '@angular/core';
import { ElementRef } from '@angular/core';
import { Renderer } from '@angular/core';
import 

@Directive({
    selector: '[myHighLight]',
})
@Host({
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
})

export class HighLightDirective implements OnInit {
    @Input()
    ['highlightcolor : myHighLight'];
    private _defaultColor: 'green';
    highlightcolor: string;

    constructor(private _elRef: ElementRef, private _renderer: Renderer) { }

    ngOnInit(): any {
        this._renderer.setElementStyle(this._elRef, 'background-Color', this.highlightcolor || this._defaultColor);
    }

    onMouseEnter() {
        this._renderer.setElementStyle(this._elRef, 'background-Color', this.highlightcolor || this._defaultColor);
    }
    onmouseleave() {
        this._renderer.setElementStyle(this._elRef, 'background-Color', this.highlightcolor || this._defaultColor);
    }
}

 */
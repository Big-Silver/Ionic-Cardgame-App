import { Directive, ElementRef, HostListener, EventEmitter, Output } from '@angular/core';

@Directive({
	selector: '[lazy-debossed]' // Attribute selector
})
export class LazyDebossedDirective {

	private element : HTMLElement;
	@Output() lazyClick : EventEmitter<any> = new EventEmitter();

	@HostListener('click',[]) click(){
		this.element.classList.add('debossed');
		this.lazyClick.next();
		setTimeout(()=>{
			this.element.classList.remove('debossed');
		},300);
	} 

	constructor(private el : ElementRef) {
		this.element = this.el.nativeElement as HTMLElement;
	}

}

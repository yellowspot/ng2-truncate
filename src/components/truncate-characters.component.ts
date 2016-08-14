import { Directive, Input, ElementRef } from "@angular/core";
import { TruncateCharactersPipe } from "../truncate-characters.pipe";

@Directive({
  selector: "[ng2Truncate]"
})

export class NgTruncateComponent {
  @Input() lenght: number = 40;
  @Input() elipsis: string = "...";
  @Input() ng2Truncate: string = "";
  @Input() skipTitle: boolean = false;

  private element: HTMLElement;
  private truncate = new TruncateCharactersPipe();

  constructor(private el: ElementRef) {
    this.element = el.nativeElement;
  }

  ngOnInit() {
    let text = document.createElement("span");
    text.innerText = this.truncate.transform(this.ng2Truncate, this.lenght, this.elipsis);
    if (!this.skipTitle)
      text.attributes["title"] = this.ng2Truncate;

    this.element.appendChild(text);
  }
}

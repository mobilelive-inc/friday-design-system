import {
  Directive,
  OnInit,
  ElementRef,
  Input,
  Renderer2,
  Inject,
  PLATFORM_ID,
  SecurityContext,
  HostBinding
} from "@angular/core";
import { isPlatformServer } from "@angular/common";
import tippy, { Instance } from "tippy.js";
import { NgxTippyProps, NgxTippyInstance } from "../shared/tippy/tippy.interfaces";
import { DomSanitizer } from "@angular/platform-browser";

interface TippyHTMLElement extends HTMLElement {
  _tippy: Instance;
}

let i = 0;

@Directive({
  selector: "[fdsTooltip]"
})
export class TooltipDirective implements OnInit {
  @Input() fdsTooltip: string | string[] | object;

  @HostBinding('attr.tabindex') tabindex = 1;

  public fdsTooltipUID = `fdsTooltip` + (i++);

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private domSanitizer: DomSanitizer,
    @Inject(PLATFORM_ID) private platform: Object
  ) {
  }

  ngOnInit() {
    if (isPlatformServer(this.platform)) return;
    this.initTippy();
  }

  ngOnDestroy() {
  }

  /**
   * Tooltip initialize
   * Template can be directly passed through `ngxTippy` selector
   */
  initTippy() {
    const tippyTarget = this.elementRef.nativeElement;
    const tippyTemplate = this.getBody();
    const defProps = {
      arrow: true,
      maxWidth: "auto",
      allowHTML: true,
      interactive: true,
      interactiveBorder: 50,
      trigger: "mouseenter focus",
      content: tippyTemplate
      // placement: 'top'
    };

    tippy(tippyTarget, defProps);//{ ...defProps, ...(tippyTemplate && { content: tippyTemplate }) });
    // this.setTippyInstance(tippyTarget);
  }

  getBody() {
    return this.domSanitizer.sanitize(SecurityContext.HTML, this.fdsTooltip || this.fdsTooltip);
  }

  setTippyInstance(tippyTarget: TippyHTMLElement) {
    const tippyInstance: NgxTippyInstance = tippyTarget._tippy;

    // this.writeInstancesToStorage(tippyInstance);
    // this.setClassName(tippyInstance);
  }
}

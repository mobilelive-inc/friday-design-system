import {
  Directive,
  OnInit,
  ElementRef,
  Input,
  Renderer2,
  Inject,
  PLATFORM_ID,
  SecurityContext,
  HostBinding, HostListener, OnChanges, SimpleChanges, InjectionToken, Optional
} from "@angular/core";
import { isPlatformServer } from "@angular/common";
import tippy, { Instance, Placement } from "tippy.js";
import { NgxTippyProps, NgxTippyInstance } from "../shared/tippy/tippy.interfaces";
import { DomSanitizer } from "@angular/platform-browser";

interface TippyHTMLElement extends HTMLElement {
  _tippy: Instance;
}

let uidIterator = 0;

/** Default `fdsPopover` options that can be overridden. */
export interface FdsPopoverDefaultOptions {
  closeBtnScreenReadersText: string,
  theme: "dark" | "light",
  placement: Placement,
  animation: string | boolean,
}

/** Injection token to be used to override the default options for `matPopover`. */
export const FDS_POPOVER_DEFAULT_OPTIONS =
  new InjectionToken<FdsPopoverDefaultOptions>("mat-tooltip-default-options", {
    providedIn: "root",
    factory: FDS_POPOVER_DEFAULT_OPTIONS_FACTORY
  });

/** @docs-private */
export function FDS_POPOVER_DEFAULT_OPTIONS_FACTORY(): FdsPopoverDefaultOptions {
  return {
    closeBtnScreenReadersText: "Close button",
    placement: "top",
    theme: "dark",
    animation: "shift-away"
  };
}

@Directive({
  selector: "[fdsPopover],[fdsPopoverBody]"
})
export class PopoverDirective implements OnInit, OnChanges {
  @Input() fdsPopover: NgxTippyProps = {};

  @Input() fdsPopoverBody?: string;

  @Input() fdsPopoverTitle?: string;

  @HostBinding("attr.tabindex") @Input() tabindex: string = "1";

  public fdsPopoverUID = `fdsPopover` + (uidIterator++);

  private tippyInstance: NgxTippyInstance;

  private defProps = {
    arrow: true,
    maxWidth: "auto",
    allowHTML: true,
    interactive: true,
    interactiveBorder: 50,
    trigger: "manual"
  };

  private config = {};

  constructor(
    private elementRef: ElementRef,
    private renderer: Renderer2,
    private domSanitizer: DomSanitizer,
    @Inject(PLATFORM_ID) private platform: Object,
    @Optional() @Inject(FDS_POPOVER_DEFAULT_OPTIONS)
    private _defaultOptions: FdsPopoverDefaultOptions
  ) {
  }

  @HostListener("click")
  @HostListener("keydown.space")
  @HostListener("keydown.enter")
  onClick() {
    if (this.tippyInstance) {
      if (!this.tippyInstance.state.isVisible) {
        this.tippyInstance.show();
      } else {
        this.tippyInstance.hide();
      }
    }
  }

  @HostListener("document:click", ["$event.target"])
  documentClick(e) {
    if (e.dataset && e.dataset.popoverId === this.fdsPopoverUID) {
      this.tippyInstance.hide();
    }
  }

  ngOnInit() {
    if (isPlatformServer(this.platform)) return;
    this.initTippy();
  }

  ngOnDestroy() {
    this.tippyInstance.destroy();
  }

  ngOnChanges(changes: SimpleChanges) {
    if (!this.tippyInstance) return;

    if (changes["fdsPopover"]) {
      // ReInit when any input was changed
      this.initTippy();
    } else if (changes["fdsPopoverBody"] || changes["fdsPopoverTitle"]) {
      this.updateTippyContent();
    }
  }

  /**
   * Popover initialize
   */
  initTippy() {
    if (this.tippyInstance) {
      this.tippyInstance.destroy();
    }

    tippy(this.elementRef.nativeElement, this.getConfig());
    this.setTippyInstance();
  }

  updateTippyContent() {
    const { content } = this.getConfig();
    this.tippyInstance.setContent(content);
  }

  getConfig() {
    const config = { ...this.defProps, ...this._defaultOptions, ...this.fdsPopover };
    config.content = this.getTemplate(config.theme, config.closeBtnScreenReadersText);
    return config;
  }

  getTemplate(theme = "dark", closeBtnText) {
    const classList = ["d-flex", "align-items-start", "p-small", "curved", theme];
    return `<div class="${classList.join(" ")}"
         data-type="popover" tabindex="1" 
         style="opacity: 1; visibility: visible; position:static;">
      <span></span>
      <span tabindex="1">
        ${this.getTitle() ? `<strong class="title">${this.getTitle()}</strong>` : ``}
        ${this.getBody()}
      </span>
      <a href="javascript:void(0)" tabindex="1" type="button" 
         class="btn--close ml-small" data-popover-id="${this.fdsPopoverUID}">
        <span class="icon icon-cross-circle" data-popover-id="${this.fdsPopoverUID}">
        <span class="sr-only">${closeBtnText}</span>
        </span>
      </a>
      </div>`;
  }


  getTitle() {
    return this.domSanitizer.sanitize(SecurityContext.HTML, this.fdsPopoverTitle);
  }

  getBody() {
    return this.domSanitizer.sanitize(SecurityContext.HTML, this.fdsPopoverBody);
  }

  setTippyInstance() {
    this.tippyInstance = this.elementRef.nativeElement._tippy;
  }
}

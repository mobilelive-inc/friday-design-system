export class ObjectUtils {

  public static equals(obj1: any, obj2: any, field?: string): boolean {
    if (field)
      return (this.resolveFieldData(obj1, field) === this.resolveFieldData(obj2, field));
    else
      return this.equalsByValue(obj1, obj2);
  }

  public static equalsByValue(obj1: any, obj2: any): boolean {
    if (obj1 === obj2) return true;

    if (obj1 && obj2 && typeof obj1 == "object" && typeof obj2 == "object") {
      var arrA = Array.isArray(obj1)
        , arrB = Array.isArray(obj2)
        , i
        , length
        , key;

      if (arrA && arrB) {
        length = obj1.length;
        if (length != obj2.length) return false;
        for (i = length; i-- !== 0;)
          if (!this.equalsByValue(obj1[i], obj2[i])) return false;
        return true;
      }

      if (arrA != arrB) return false;

      var dateA = obj1 instanceof Date
        , dateB = obj2 instanceof Date;
      if (dateA != dateB) return false;
      if (dateA && dateB) return obj1.getTime() == obj2.getTime();

      var regexpA = obj1 instanceof RegExp
        , regexpB = obj2 instanceof RegExp;
      if (regexpA != regexpB) return false;
      if (regexpA && regexpB) return obj1.toString() == obj2.toString();

      var keys = Object.keys(obj1);
      length = keys.length;

      if (length !== Object.keys(obj2).length)
        return false;

      for (i = length; i-- !== 0;)
        if (!Object.prototype.hasOwnProperty.call(obj2, keys[i])) return false;

      for (i = length; i-- !== 0;) {
        key = keys[i];
        if (!this.equalsByValue(obj1[key], obj2[key])) return false;
      }

      return true;
    }

    return obj1 !== obj1 && obj2 !== obj2;
  }

  public static resolveFieldData(data: any, field: any): any {
    if (data && field) {
      if (this.isFunction(field)) {
        return field(data);
      } else if (field.indexOf(".") == -1) {
        return data[field];
      } else {
        let fields: string[] = field.split(".");
        let value = data;
        for (let i = 0, len = fields.length; i < len; ++i) {
          if (value == null) {
            return null;
          }
          value = value[fields[i]];
        }
        return value;
      }
    } else {
      return null;
    }
  }

  public static isFunction(obj: any) {
    return !!(obj && obj.constructor && obj.call && obj.apply);
  }

  public static reorderArray(value: any[], from: number, to: number) {
    let target: number;
    if (value && from !== to) {
      if (to >= value.length) {
        to %= value.length;
        from %= value.length;
      }
      value.splice(to, 0, value.splice(from, 1)[0]);
    }
  }

  // public static generateSelectItems(val: any[], field: string): SelectItem[] {
  //   let selectItems: SelectItem[];
  //   if (val && val.length) {
  //     selectItems = [];
  //     for(let item of val) {
  //       selectItems.push({label: this.resolveFieldData(item, field), value: item});
  //     }
  //   }
  //
  //   return selectItems;
  // }
  //
  // public static insertIntoOrderedArray(item: any, index: number, arr: any[], sourceArr: any[]): void {
  //   if (arr.length > 0) {
  //     let injected = false;
  //     for(let i = 0; i < arr.length; i++) {
  //       let currentItemIndex = this.findIndexInList(arr[i], sourceArr);
  //       if (currentItemIndex > index) {
  //         arr.splice(i, 0, item);
  //         injected = true;
  //         break;
  //       }
  //     }
  //
  //     if (!injected) {
  //       arr.push(item);
  //     }
  //   }
  //   else {
  //     arr.push(item);
  //   }
  // }
  //
  // public static findIndexInList(item: any, list: any): number {
  //   let index: number = -1;
  //
  //   if (list) {
  //     for(let i = 0; i < list.length; i++) {
  //       if (list[i] == item) {
  //         index = i;
  //         break;
  //       }
  //     }
  //   }
  //
  //   return index;
  // }
  //
  // public static removeAccents(str) {
  //   if (str && str.search(/[\xC0-\xFF]/g) > -1) {
  //     str = str
  //       .replace(/[\xC0-\xC5]/g, "A")
  //       .replace(/[\xC6]/g, "AE")
  //       .replace(/[\xC7]/g, "C")
  //       .replace(/[\xC8-\xCB]/g, "E")
  //       .replace(/[\xCC-\xCF]/g, "I")
  //       .replace(/[\xD0]/g, "D")
  //       .replace(/[\xD1]/g, "N")
  //       .replace(/[\xD2-\xD6\xD8]/g, "O")
  //       .replace(/[\xD9-\xDC]/g, "U")
  //       .replace(/[\xDD]/g, "Y")
  //       .replace(/[\xDE]/g, "P")
  //       .replace(/[\xE0-\xE5]/g, "a")
  //       .replace(/[\xE6]/g, "ae")
  //       .replace(/[\xE7]/g, "c")
  //       .replace(/[\xE8-\xEB]/g, "e")
  //       .replace(/[\xEC-\xEF]/g, "i")
  //       .replace(/[\xF1]/g, "n")
  //       .replace(/[\xF2-\xF6\xF8]/g, "o")
  //       .replace(/[\xF9-\xFC]/g, "u")
  //       .replace(/[\xFE]/g, "p")
  //       .replace(/[\xFD\xFF]/g, "y");
  //   }
  //
  //   return str;
  // }
}


export class DomHandler {
  public static zindex: number = 1000;

  private static calculatedScrollbarWidth: number = null;

  private static calculatedScrollbarHeight: number = null;

  private static browser: any = undefined;

  public static scrollInView(container, item) {
    let borderTopValue: string = getComputedStyle(container).getPropertyValue("borderTopWidth");
    let borderTop: number = borderTopValue ? parseFloat(borderTopValue) : 0;
    let paddingTopValue: string = getComputedStyle(container).getPropertyValue("paddingTop");
    let paddingTop: number = paddingTopValue ? parseFloat(paddingTopValue) : 0;
    let containerRect = container.getBoundingClientRect();
    let itemRect = item.getBoundingClientRect();
    let offset = (itemRect.top + document.body.scrollTop) - (containerRect.top + document.body.scrollTop) - borderTop - paddingTop;
    let scroll = container.scrollTop;
    let elementHeight = container.clientHeight;
    let itemHeight = DomHandler.getOuterHeight(item);

    if (offset < 0) {
      container.scrollTop = scroll + offset;
    } else if ((offset + itemHeight) > elementHeight) {
      container.scrollTop = scroll + offset - elementHeight + itemHeight;
    }
  }

  public static getOuterHeight(el, margin?) {
    let height = el.offsetHeight;

    if (margin) {
      let style = getComputedStyle(el);
      height += parseFloat(style.marginTop) + parseFloat(style.marginBottom);
    }

    return height;
  }

  public static findSingle(element: any, selector: string): any {
    if (element) {
      return element.querySelector(selector);
    }
    return null;
  }

  public static appendChild(element: any, target: any) {
    if (this.isElement(target))
      target.appendChild(element);
    else if (target.el && target.el.nativeElement)
      target.el.nativeElement.appendChild(element);
    else
      throw "Cannot append " + target + " to " + element;
  }

  public static isElement(obj: any) {
    return (typeof HTMLElement === "object" ? obj instanceof HTMLElement :
        obj && typeof obj === "object" && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === "string"
    );
  }

  public static getWidth(el): number {
    let width = el.offsetWidth;
    let style = getComputedStyle(el);

    width -= parseFloat(style.paddingLeft) + parseFloat(style.paddingRight) + parseFloat(style.borderLeftWidth) + parseFloat(style.borderRightWidth);

    return width;
  }

  public static absolutePosition(element: any, target: any): void {
    let elementDimensions = element.offsetParent ? {
      width: element.offsetWidth,
      height: element.offsetHeight
    } : this.getHiddenElementDimensions(element);
    let elementOuterHeight = elementDimensions.height;
    let elementOuterWidth = elementDimensions.width;
    let targetOuterHeight = target.offsetHeight;
    let targetOuterWidth = target.offsetWidth;
    let targetOffset = target.getBoundingClientRect();
    let windowScrollTop = this.getWindowScrollTop();
    let windowScrollLeft = this.getWindowScrollLeft();
    let viewport = this.getViewport();
    let top, left;

    if (targetOffset.top + targetOuterHeight + elementOuterHeight > viewport.height) {
      top = targetOffset.top + windowScrollTop - elementOuterHeight;
      element.style.transformOrigin = "bottom";

      if (top < 0) {
        top = windowScrollTop;
      }
    } else {
      top = targetOuterHeight + targetOffset.top + windowScrollTop;
      element.style.transformOrigin = "top";
    }

    if (targetOffset.left + elementOuterWidth > viewport.width)
      left = Math.max(0, targetOffset.left + windowScrollLeft + targetOuterWidth - elementOuterWidth);
    else
      left = targetOffset.left + windowScrollLeft;

    element.style.top = top + "px";
    element.style.left = left + "px";
  }

  public static getWindowScrollTop(): number {
    let doc = document.documentElement;
    return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
  }

  public static getWindowScrollLeft(): number {
    let doc = document.documentElement;
    return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
  }

  public static getHiddenElementDimensions(element: any): any {
    let dimensions: any = {};
    element.style.visibility = "hidden";
    element.style.display = "block";
    dimensions.width = element.offsetWidth;
    dimensions.height = element.offsetHeight;
    element.style.display = "none";
    element.style.visibility = "visible";

    return dimensions;
  }

  public static getViewport(): any {
    let win = window,
      d = document,
      e = d.documentElement,
      g = d.getElementsByTagName("body")[0],
      w = win.innerWidth || e.clientWidth || g.clientWidth,
      h = win.innerHeight || e.clientHeight || g.clientHeight;

    return { width: w, height: h };
  }

  public static relativePosition(element: any, target: any): void {
    let elementDimensions = element.offsetParent ? {
      width: element.offsetWidth,
      height: element.offsetHeight
    } : this.getHiddenElementDimensions(element);
    const targetHeight = target.offsetHeight;
    const targetOffset = target.getBoundingClientRect();
    const viewport = this.getViewport();
    let top: number, left: number;

    if ((targetOffset.top + targetHeight + elementDimensions.height) > viewport.height) {
      top = -1 * (elementDimensions.height);
      element.style.transformOrigin = "bottom";
      if (targetOffset.top + top < 0) {
        top = -1 * targetOffset.top;
      }
    } else {
      top = targetHeight;
      element.style.transformOrigin = "top";
    }

    if (elementDimensions.width > viewport.width) {
      // element wider then viewport and cannot fit on screen (align at left side of viewport)
      left = targetOffset.left * -1;
    } else if ((targetOffset.left + elementDimensions.width) > viewport.width) {
      // element wider then viewport but can be fit on screen (align at right side of viewport)
      left = (targetOffset.left + elementDimensions.width - viewport.width) * -1;
    } else {
      // element fits on screen (align with target)
      left = 0;
    }

    element.style.top = top + "px";
    element.style.left = left + "px";
  }

  public static index(element: any): number {
    let children = element.parentNode.childNodes;
    let num = 0;
    for (var i = 0; i < children.length; i++) {
      if (children[i] == element) return num;
      if (children[i].nodeType == 1) num++;
    }
    return -1;
  }

  public static  isIE() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
      // IE 10 or older => return version number
      return true;
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
      // IE 11 => return version number
      var rv = ua.indexOf('rv:');
      return true;
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
      // Edge (IE 12+) => return version number
      return true;
    }

    // other browser
    return false;
  }
}

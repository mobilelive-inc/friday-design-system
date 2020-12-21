import {
  NgModule,
  Component,
  ChangeDetectionStrategy,
  Input,
  ElementRef,
  ViewChild,
  OnInit,
  EventEmitter,
  Output,
  forwardRef,
  ViewEncapsulation,
  ChangeDetectorRef, Injector
} from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor, NgControl } from "@angular/forms";
import { FdsFormFieldControl } from "../form-field/form-field-control";

let nextUniqueId = 0;

export const INPUTNUMBER_VALUE_ACCESSOR: any = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => InputNumberComponent),
  multi: true
};

@Component({
  selector: "fds-input-number",
  templateUrl: "input-number.component.html",
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    // INPUTNUMBER_VALUE_ACCESSOR,
    {
      provide: FdsFormFieldControl,
      useExisting: forwardRef(() => InputNumberComponent)
    }
  ],
  encapsulation: ViewEncapsulation.None,
  host: {
    "[class.p-inputwrapper-filled]": "filled",
    "[class.p-inputwrapper-focus]": "focused"
  }
})
export class InputNumberComponent implements OnInit, ControlValueAccessor {

  @Input() format: boolean = true;

  @Input() disabled: boolean;

  //TODO: @Dmitriy consider to rename to inputId
  @Input() id: string = "fdsInputNumber" + nextUniqueId;

  @Input() inputId: string;

  @Input() placeholder: string;

  @Input() size: number;

  @Input() maxlength: number;

  @Input() tabindex: string;

  @Input() title: string;

  @Input() ariaLabel: string;

  @Input() ariaRequired: boolean;

  @Input() name: string;

  @Input() required: boolean;

  @Input() autocomplete: string;

  @Input() min: number;

  @Input() max: number;

  @Input() step: number = 1;

  @Input() inputStyle: any;

  @Input() inputStyleClass: string;

  @ViewChild("input") input: ElementRef;

  @Output() onInput: EventEmitter<any> = new EventEmitter();

  @Output() onFocus: EventEmitter<any> = new EventEmitter();

  @Output() onBlur: EventEmitter<any> = new EventEmitter();

  @Output() onKeyDown: EventEmitter<any> = new EventEmitter();

  //TODO: Change to Enum
  controlType = "fds-input-number";
  ngControl: NgControl | null;

  value: number;
  focused: boolean;
  initialized: boolean;
  groupChar: string = "";
  prefixChar: string = "";
  suffixChar: string = "";
  isSpecialChar: boolean;
  timer: any;
  lastValue: string;
  _numeral: any;
  numberFormat: any;
  _decimal: any;
  _group: any;
  _minusSign: any;
  _index: any;
  _localeOption: string;
  _localeMatcherOption: string;
  _modeOption: string = "decimal";
  _currencyOption: string;
  _currencyDisplayOption: string;
  _useGroupingOption: boolean = true;
  _minFractionDigitsOption: number;
  _maxFractionDigitsOption: number;
  _prefixOption: string;
  _suffixOption: string;

  constructor(public el: ElementRef,
              private cd: ChangeDetectorRef,
              private _injector: Injector) {
    ++nextUniqueId;
    this.ngControl = this._injector.get(NgControl);
    if (this.ngControl) {
      this.ngControl.valueAccessor = this;
    }
  }

  _currency: any;

  @Input() get currency(): string {
    return this._currencyOption;
  }

  set currency(currencyOption: string) {
    this._currencyOption = currencyOption;
    this.updateConstructParser();
  }

  _prefix: any;

  @Input() get prefix(): string {
    return this._prefixOption;
  }

  set prefix(prefixOption: string) {
    this._prefixOption = prefixOption;
    this.updateConstructParser();
  }

  _suffix: any;

  @Input() get suffix(): string {
    return this._suffixOption;
  }

  set suffix(suffixOption: string) {
    this._suffixOption = suffixOption;
    this.updateConstructParser();
  }

  @Input() get locale(): string {
    return this._localeOption;
  }

  set locale(localeOption: string) {
    this._localeOption = localeOption;
    this.updateConstructParser();
  }

  @Input() get localeMatcher(): string {
    return this._localeMatcherOption;
  }

  set localeMatcher(localeMatcherOption: string) {
    this._localeMatcherOption = localeMatcherOption;
    this.updateConstructParser();
  }

  @Input() get mode(): string {
    return this._modeOption;
  }

  set mode(modeOption: string) {
    this._modeOption = modeOption;
    this.updateConstructParser();
  }

  @Input() get currencyDisplay(): string {
    return this._currencyDisplayOption;
  }

  set currencyDisplay(currencyDisplayOption: string) {
    this._currencyDisplayOption = currencyDisplayOption;
    this.updateConstructParser();
  }

  @Input() get useGrouping(): boolean {
    return this._useGroupingOption;
  }

  set useGrouping(useGroupingOption: boolean) {
    this._useGroupingOption = useGroupingOption;
    this.updateConstructParser();
  }

  @Input() get minFractionDigits(): number {
    return this._minFractionDigitsOption;
  }

  set minFractionDigits(minFractionDigitsOption: number) {
    this._minFractionDigitsOption = minFractionDigitsOption;
    this.updateConstructParser();
  }

  @Input() get maxFractionDigits(): number {
    return this._maxFractionDigitsOption;
  }

  set maxFractionDigits(maxFractionDigitsOption: number) {
    this._maxFractionDigitsOption = maxFractionDigitsOption;
    this.updateConstructParser();
  }

  get filled() {
    return (this.value != null && this.value.toString().length > 0);
  }

  onModelChange: Function = () => {
  };

  onModelTouched: Function = () => {
  };

  ngOnInit() {
    this.constructParser();

    this.initialized = true;
  }

  getOptions() {
    return {
      localeMatcher: this.localeMatcher,
      style: this.mode,
      currency: this.currency,
      currencyDisplay: this.currencyDisplay,
      useGrouping: this.useGrouping,
      minimumFractionDigits: this.minFractionDigits,
      maximumFractionDigits: this.maxFractionDigits
    };
  }

  constructParser() {
    this.numberFormat = new Intl.NumberFormat(this.locale, this.getOptions());
    const numerals = [...new Intl.NumberFormat(this.locale, { useGrouping: false }).format(9876543210)].reverse();
    const index = new Map(numerals.map((d, i) => [d, i]));
    this._numeral = new RegExp(`[${numerals.join("")}]`, "g");
    this._decimal = this.getDecimalExpression();
    this._group = this.getGroupingExpression();
    this._minusSign = this.getMinusSignExpression();
    this._currency = this.getCurrencyExpression();
    this._suffix = this.getSuffixExpression();
    this._prefix = this.getPrefixExpression();
    this._index = d => index.get(d);
  }

  updateConstructParser() {
    if (this.initialized) {
      this.constructParser();
    }
  }

  escapeRegExp(text) {
    return text.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
  }

  getDecimalExpression() {
    const formatter = new Intl.NumberFormat(this.locale, { useGrouping: false });
    return new RegExp(`[${formatter.format(1.1).trim().replace(this._numeral, "")}]`, "g");
  }

  getGroupingExpression() {
    const formatter = new Intl.NumberFormat(this.locale, { useGrouping: true });
    this.groupChar = formatter.format(1000000).trim().replace(this._numeral, "").charAt(0);
    return new RegExp(`[${this.groupChar}]`, "g");
  }

  getMinusSignExpression() {
    const formatter = new Intl.NumberFormat(this.locale, { useGrouping: false });
    return new RegExp(`[${formatter.format(-1).trim().replace(this._numeral, "")}]`, "g");
  }

  getCurrencyExpression() {
    if (this.currency) {
      const formatter = new Intl.NumberFormat(this.locale, {
        style: "currency",
        currency: this.currency,
        currencyDisplay: this.currencyDisplay
      });
      return new RegExp(`[${formatter.format(1).replace(/\s/g, "").replace(this._numeral, "").replace(this._decimal, "").replace(this._group, "")}]`, "g");
    }

    return new RegExp(`[]`, "g");
  }

  getPrefixExpression() {
    if (this.prefix) {
      this.prefixChar = this.prefix;
    } else {
      const formatter = new Intl.NumberFormat(this.locale, {
        style: this.mode,
        currency: this.currency,
        currencyDisplay: this.currencyDisplay
      });
      this.prefixChar = formatter.format(1).split("1")[0];
    }

    return new RegExp(`${this.escapeRegExp(this.prefixChar || "")}`, "g");
  }

  getSuffixExpression() {
    if (this.suffix) {
      this.suffixChar = this.suffix;
    } else {
      const formatter = new Intl.NumberFormat(this.locale, {
        style: this.mode, currency: this.currency, currencyDisplay: this.currencyDisplay,
        minimumFractionDigits: 0, maximumFractionDigits: 0
      });
      this.suffixChar = formatter.format(1).split("1")[1];
    }

    return new RegExp(`${this.escapeRegExp(this.suffixChar || "")}`, "g");
  }

  formatValue(value) {
    // TODO: @Dmitriy check why NULL and what if extend it to empty string ''
    if (value != null) {
      if (value === "-") { // Minus sign
        return value;
      }

      if (this.format) {
        let formatter = new Intl.NumberFormat(this.locale, this.getOptions());
        let formattedValue = formatter.format(value);
        if (this.prefix) {
          formattedValue = this.prefix + formattedValue;
        }

        if (this.suffix) {
          formattedValue = formattedValue + this.suffix;
        }

        return formattedValue;
      }

      return value.toString();
    }

    return "";
  }

  parseValue(text) {
    let filteredText = text
      .replace(this._suffix, "")
      .replace(this._prefix, "")
      .trim()
      .replace(/\s/g, "")
      .replace(this._currency, "")
      .replace(this._group, "")
      .replace(this._minusSign, "-")
      .replace(this._decimal, ".")
      .replace(this._numeral, this._index);

    if (filteredText) {
      if (filteredText === "-") // Minus sign
        return filteredText;

      let parsedValue = +filteredText;
      return isNaN(parsedValue) ? null : parsedValue;
    }

    return null;
  }

  repeat(event, interval, dir) {
    let i = interval || 500;

    this.clearTimer();
    this.timer = setTimeout(() => {
      this.repeat(event, 40, dir);
    }, i);

    this.spin(event, dir);
  }

  spin(event, dir) {
    let step = this.step * dir;
    let currentValue = this.parseValue(this.input.nativeElement.value) || 0;
    let newValue = this.validateValue(currentValue + step);
    if (this.maxlength && this.maxlength < this.formatValue(newValue).length) {
      return;
    }

    this.updateInput(newValue, null, "spin");
    this.updateModel(event, newValue);

    this.handleOnInput(event, currentValue, newValue);
  }

  onUpButtonMouseDown(event) {
    this.input.nativeElement.focus();
    this.repeat(event, null, 1);
    event.preventDefault();
  }

  onUpButtonMouseUp() {
    this.clearTimer();
  }

  onUpButtonMouseLeave() {
    this.clearTimer();
  }

  onUpButtonKeyDown(event) {
    if (event.keyCode === 32 || event.keyCode === 13) {
      this.repeat(event, null, 1);
    }
  }

  onUpButtonKeyUp() {
    this.clearTimer();
  }

  onDownButtonMouseDown(event) {
    this.input.nativeElement.focus();
    this.repeat(event, null, -1);
    event.preventDefault();
  }

  onDownButtonMouseUp() {
    this.clearTimer();
  }

  onDownButtonMouseLeave() {
    this.clearTimer();
  }

  onDownButtonKeyUp() {
    this.clearTimer();
  }

  onDownButtonKeyDown(event) {
    if (event.keyCode === 32 || event.keyCode === 13) {
      this.repeat(event, null, -1);
    }
  }

  onUserInput(event) {
    if (this.isSpecialChar) {
      event.target.value = this.lastValue;
    }
    this.isSpecialChar = false;
  }

  onInputKeyDown(event) {
    this.lastValue = event.target.value;
    if (event.shiftKey || event.altKey) {
      this.isSpecialChar = true;
      return;
    }

    let selectionStart = event.target.selectionStart;
    let selectionEnd = event.target.selectionEnd;
    let inputValue = event.target.value;
    let newValueStr = null;

    if (event.altKey) {
      event.preventDefault();
    }

    switch (event.which) {
      //up
      case 38:
        this.spin(event, 1);
        event.preventDefault();
        break;

      //down
      case 40:
        this.spin(event, -1);
        event.preventDefault();
        break;

      //left
      case 37:
        if (!this.isNumeralChar(inputValue.charAt(selectionStart - 1))) {
          event.preventDefault();
        }
        break;

      //right
      case 39:
        if (!this.isNumeralChar(inputValue.charAt(selectionStart))) {
          event.preventDefault();
        }
        break;

      //enter
      case 13:
        let newValue = this.validateValue(this.parseValue(this.input.nativeElement.value));
        this.input.nativeElement.value = this.formatValue(newValue);
        this.input.nativeElement.setAttribute("aria-valuenow", newValue);
        this.updateModel(event, newValue);
        break;

      //backspace
      case 8: {
        event.preventDefault();

        if (selectionStart === selectionEnd) {
          let deleteChar = inputValue.charAt(selectionStart - 1);
          let decimalCharIndex = inputValue.search(this._decimal);
          this._decimal.lastIndex = 0;

          if (this.isNumeralChar(deleteChar)) {
            if (this._group.test(deleteChar)) {
              this._group.lastIndex = 0;
              newValueStr = inputValue.slice(0, selectionStart - 2) + inputValue.slice(selectionStart - 1);
            } else if (this._decimal.test(deleteChar)) {
              this._decimal.lastIndex = 0;
              this.input.nativeElement.setSelectionRange(selectionStart - 1, selectionStart - 1);
            } else if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
              newValueStr = inputValue.slice(0, selectionStart - 1) + "0" + inputValue.slice(selectionStart);
            } else if (decimalCharIndex > 0 && decimalCharIndex === 1) {
              newValueStr = inputValue.slice(0, selectionStart - 1) + "0" + inputValue.slice(selectionStart);
              newValueStr = this.parseValue(newValueStr) > 0 ? newValueStr : "";
            } else {
              newValueStr = inputValue.slice(0, selectionStart - 1) + inputValue.slice(selectionStart);
            }
          }

          this.updateValue(event, newValueStr, null, "delete-single");
        } else {
          newValueStr = this.deleteRange(inputValue, selectionStart, selectionEnd);
          this.updateValue(event, newValueStr, null, "delete-range");
        }

        break;
      }

      // del
      case 46:
        event.preventDefault();

        if (selectionStart === selectionEnd) {
          let deleteChar = inputValue.charAt(selectionStart);
          let decimalCharIndex = inputValue.search(this._decimal);
          this._decimal.lastIndex = 0;

          if (this.isNumeralChar(deleteChar)) {
            if (this._group.test(deleteChar)) {
              this._group.lastIndex = 0;
              newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 2);
            } else if (this._decimal.test(deleteChar)) {
              this._decimal.lastIndex = 0;
              this.input.nativeElement.setSelectionRange(selectionStart + 1, selectionStart + 1);
            } else if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
              newValueStr = inputValue.slice(0, selectionStart) + "0" + inputValue.slice(selectionStart + 1);
            } else if (decimalCharIndex > 0 && decimalCharIndex === 1) {
              newValueStr = inputValue.slice(0, selectionStart) + "0" + inputValue.slice(selectionStart + 1);
              newValueStr = this.parseValue(newValueStr) > 0 ? newValueStr : "";
            } else {
              newValueStr = inputValue.slice(0, selectionStart) + inputValue.slice(selectionStart + 1);
            }
          }

          this.updateValue(event, newValueStr, null, "delete-back-single");
        } else {
          newValueStr = this.deleteRange(inputValue, selectionStart, selectionEnd);
          this.updateValue(event, newValueStr, null, "delete-range");
        }
        break;

      default:
        break;
    }

    this.onKeyDown.emit(event);
  }

  onInputKeyPress(event) {
    event.preventDefault();
    let code = event.which || event.keyCode;
    let char = String.fromCharCode(code);
    const isDecimalSign = this.isDecimalSign(char);
    const isMinusSign = this.isMinusSign(char);

    if ((48 <= code && code <= 57) || isMinusSign || isDecimalSign) {
      this.insert(event, char, { isDecimalSign, isMinusSign });
    }
  }

  onPaste(event) {
    event.preventDefault();
    let data = (event.clipboardData || window["clipboardData"]).getData("Text");
    if (data) {
      let filteredData = this.parseValue(data);
      if (filteredData != null) {
        this.insert(event, filteredData.toString());
      }
    }
  }

  isMinusSign(char) {
    if (this._minusSign.test(char)) {
      this._minusSign.lastIndex = 0;
      return true;
    }

    return false;
  }

  isDecimalSign(char) {
    if (this._decimal.test(char)) {
      this._decimal.lastIndex = 0;
      return true;
    }

    return false;
  }

  insert(event, text, sign = { isDecimalSign: false, isMinusSign: false }) {
    let selectionStart = this.input.nativeElement.selectionStart;
    let selectionEnd = this.input.nativeElement.selectionEnd;
    let inputValue = this.input.nativeElement.value.trim();
    const decimalCharIndex = inputValue.search(this._decimal);
    this._decimal.lastIndex = 0;
    const minusCharIndex = inputValue.search(this._minusSign);
    this._minusSign.lastIndex = 0;
    let newValueStr;

    if (sign.isMinusSign) {
      if (selectionStart === 0) {
        newValueStr = inputValue;
        if (minusCharIndex === -1 || selectionEnd !== 0) {
          newValueStr = this.insertText(inputValue, text, 0, selectionEnd);
        }

        this.updateValue(event, newValueStr, text, "insert");
      }
    } else if (sign.isDecimalSign) {
      if (decimalCharIndex > 0 && selectionStart === decimalCharIndex) {
        this.updateValue(event, inputValue, text, "insert");
      } else if (decimalCharIndex > selectionStart && decimalCharIndex < selectionEnd) {
        newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd);
        this.updateValue(event, newValueStr, text, "insert");
      }
    } else {
      const maxFractionDigits = this.numberFormat.resolvedOptions().maximumFractionDigits;
      const operation = selectionStart !== selectionEnd ? "range-insert" : "insert";

      if (decimalCharIndex > 0 && selectionStart > decimalCharIndex) {
        if ((selectionStart + text.length - (decimalCharIndex + 1)) <= maxFractionDigits) {
          newValueStr = inputValue.slice(0, selectionStart) + text + inputValue.slice(selectionStart + text.length);
          this.updateValue(event, newValueStr, text, operation);
        }
      } else {
        newValueStr = this.insertText(inputValue, text, selectionStart, selectionEnd);
        this.updateValue(event, newValueStr, text, operation);
      }
    }
  }

  insertText(value, text, start, end) {
    let textSplit = text.split(".");

    if (textSplit.length == 2) {
      const decimalCharIndex = value.slice(start, end).search(this._decimal);
      this._decimal.lastIndex = 0;
      return (decimalCharIndex > 0) ? value.slice(0, start) + this.formatValue(text) + value.slice(end) : (value || this.formatValue(text));
    } else if ((end - start) === value.length) {
      return this.formatValue(text);
    } else if (start === 0) {
      return text + value.slice(end);
    } else if (end === value.length) {
      return value.slice(0, start) + text;
    } else {
      return value.slice(0, start) + text + value.slice(end);
    }
  }

  deleteRange(value, start, end) {
    let newValueStr;

    if ((end - start) === value.length)
      newValueStr = "";
    else if (start === 0)
      newValueStr = value.slice(end);
    else if (end === value.length)
      newValueStr = value.slice(0, start);
    else
      newValueStr = value.slice(0, start) + value.slice(end);

    return newValueStr;
  }

  initCursor() {
    let selectionStart = this.input.nativeElement.selectionStart;
    let inputValue = this.input.nativeElement.value;
    let valueLength = inputValue.length;
    let index = null;

    let char = inputValue.charAt(selectionStart);
    if (this.isNumeralChar(char)) {
      return;
    }

    //left
    let i = selectionStart - 1;
    while (i >= 0) {
      char = inputValue.charAt(i);
      if (this.isNumeralChar(char)) {
        index = i;
        break;
      } else {
        i--;
      }
    }

    if (index !== null) {
      this.input.nativeElement.setSelectionRange(index + 1, index + 1);
    } else {
      i = selectionStart + 1;
      while (i < valueLength) {
        char = inputValue.charAt(i);
        if (this.isNumeralChar(char)) {
          index = i;
          break;
        } else {
          i++;
        }
      }

      if (index !== null) {
        this.input.nativeElement.setSelectionRange(index, index);
      }
    }
  }

  onInputClick() {
    this.initCursor();
  }

  isNumeralChar(char) {
    if (char.length === 1 && (this._numeral.test(char) || this._decimal.test(char) || this._group.test(char) || this._minusSign.test(char))) {
      this.resetRegex();
      return true;
    }

    return false;
  }

  resetRegex() {
    this._numeral.lastIndex = 0;
    this._decimal.lastIndex = 0;
    this._group.lastIndex = 0;
    this._minusSign.lastIndex = 0;
  }

  updateValue(event, valueStr, insertedValueStr, operation) {
    let currentValue = this.input.nativeElement.value;
    let newValue = null;

    if (valueStr != null) {
      newValue = this.parseValue(valueStr);
      this.updateInput(newValue, insertedValueStr, operation);
    }

    this.handleOnInput(event, currentValue, newValue);
  }

  handleOnInput(event, currentValue, newValue) {
    if (this.isValueChanged(currentValue, newValue)) {
      this.onInput.emit({ originalEvent: event, value: newValue });
    }
  }

  isValueChanged(currentValue, newValue) {
    if (newValue === null && currentValue !== null) {
      return true;
    }

    if (newValue != null) {
      let parsedCurrentValue = (typeof currentValue === "string") ? this.parseValue(currentValue) : currentValue;
      return newValue !== parsedCurrentValue;
    }

    return false;
  }

  validateValue(value) {
    if (this.min !== null && value < this.min) {
      return this.min;
    }

    if (this.max !== null && value > this.max) {
      return this.max;
    }

    if (value === "-") { // Minus sign
      return null;
    }

    return value;
  }

  updateInput(value, insertedValueStr, operation) {
    insertedValueStr = insertedValueStr || "";

    let inputValue = this.input.nativeElement.value;
    let newValue = this.formatValue(value);
    let currentLength = inputValue.length;

    if (currentLength === 0) {
      this.input.nativeElement.value = newValue;
      this.input.nativeElement.setSelectionRange(0, 0);
      this.initCursor();
      const prefixLength = (this.prefixChar || "").length;
      const selectionEnd = prefixLength + insertedValueStr.length;
      this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
    } else {
      let selectionStart = this.input.nativeElement.selectionStart;
      let selectionEnd = this.input.nativeElement.selectionEnd;
      if (this.maxlength && this.maxlength < newValue.length) {
        return;
      }

      this.input.nativeElement.value = newValue;
      let newLength = newValue.length;

      if (operation === "range-insert") {
        const startValue = this.parseValue((inputValue || "").slice(0, selectionStart));
        const startValueStr = startValue !== null ? startValue.toString() : "";
        const startExpr = startValueStr.split("").join(`(${this.groupChar})?`);
        const sRegex = new RegExp(startExpr, "g");
        sRegex.test(newValue);

        const tExpr = insertedValueStr.split("").join(`(${this.groupChar})?`);
        const tRegex = new RegExp(tExpr, "g");
        tRegex.test(newValue.slice(sRegex.lastIndex));

        selectionEnd = sRegex.lastIndex + tRegex.lastIndex;
        this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
      } else if (newLength === currentLength) {
        if (operation === "insert" || operation === "delete-back-single")
          this.input.nativeElement.setSelectionRange(selectionEnd + 1, selectionEnd + 1);
        else if (operation === "delete-single")
          this.input.nativeElement.setSelectionRange(selectionEnd - 1, selectionEnd - 1);
        else if (operation === "delete-range" || operation === "spin")
          this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
      } else if (operation === "delete-back-single") {
        let prevChar = inputValue.charAt(selectionEnd - 1);
        let nextChar = inputValue.charAt(selectionEnd);
        let diff = currentLength - newLength;
        let isGroupChar = this._group.test(nextChar);

        if (isGroupChar && diff === 1) {
          selectionEnd += 1;
        } else if (!isGroupChar && this.isNumeralChar(prevChar)) {
          selectionEnd += (-1 * diff) + 1;
        }

        this._group.lastIndex = 0;
        this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
      } else {
        selectionEnd = selectionEnd + (newLength - currentLength);
        this.input.nativeElement.setSelectionRange(selectionEnd, selectionEnd);
      }
    }

    this.input.nativeElement.setAttribute("aria-valuenow", value);
  }

  onInputFocus(event) {
    this.focused = true;
    this.onFocus.emit(event);
  }

  onInputBlur(event) {
    this.focused = false;

    let newValue = this.validateValue(this.parseValue(this.input.nativeElement.value));
    this.input.nativeElement.value = this.formatValue(newValue);
    this.input.nativeElement.setAttribute("aria-valuenow", newValue);
    this.updateModel(event, newValue);

    this.onBlur.emit(event);
  }

  formattedValue() {
    return this.formatValue(this.value);
  }

  updateModel(event, value) {
    if (this.value !== value) {
      this.value = value;
      this.onModelChange(value);
    }

    this.onModelTouched();
  }

  writeValue(value: any): void {
    this.value = value;
    this.cd.markForCheck();
  }

  registerOnChange(fn: Function): void {
    this.onModelChange = fn;
  }

  registerOnTouched(fn: Function): void {
    this.onModelTouched = fn;
  }

  setDisabledState(val: boolean): void {
    this.disabled = val;
    this.cd.markForCheck();
  }

  clearTimer() {
    if (this.timer) {
      clearInterval(this.timer);
    }
  }
}

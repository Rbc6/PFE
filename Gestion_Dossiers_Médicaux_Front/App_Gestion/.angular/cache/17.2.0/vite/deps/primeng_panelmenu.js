import {
  RouterLink,
  RouterLinkActive,
  RouterModule
} from "./chunk-34KFHO5Y.js";
import {
  animate,
  state,
  style,
  transition,
  trigger
} from "./chunk-UCKDGZ4V.js";
import "./chunk-XU6KJFTU.js";
import "./chunk-NKASZPQJ.js";
import {
  CommonModule,
  NgClass,
  NgForOf,
  NgIf,
  NgStyle,
  NgTemplateOutlet,
  isPlatformBrowser
} from "./chunk-BM37EVK5.js";
import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Injectable,
  Input,
  InputFlags,
  NgModule,
  NgZone,
  Output,
  PLATFORM_ID,
  Renderer2,
  Subject,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation$1,
  __spreadValues,
  computed,
  forwardRef,
  setClassMetadata,
  signal,
  ɵɵInheritDefinitionFeature,
  ɵɵNgOnChangesFeature,
  ɵɵStandaloneFeature,
  ɵɵadvance,
  ɵɵattribute,
  ɵɵclassMap,
  ɵɵclassProp,
  ɵɵcontentQuery,
  ɵɵdefineComponent,
  ɵɵdefineDirective,
  ɵɵdefineInjectable,
  ɵɵdefineInjector,
  ɵɵdefineNgModule,
  ɵɵdirectiveInject,
  ɵɵelement,
  ɵɵelementContainerEnd,
  ɵɵelementContainerStart,
  ɵɵelementEnd,
  ɵɵelementStart,
  ɵɵgetCurrentView,
  ɵɵgetInheritedFactory,
  ɵɵlistener,
  ɵɵloadQuery,
  ɵɵnamespaceSVG,
  ɵɵnextContext,
  ɵɵprojection,
  ɵɵprojectionDef,
  ɵɵproperty,
  ɵɵpureFunction0,
  ɵɵpureFunction1,
  ɵɵpureFunction2,
  ɵɵqueryRefresh,
  ɵɵreference,
  ɵɵresetView,
  ɵɵresolveDocument,
  ɵɵrestoreView,
  ɵɵsanitizeHtml,
  ɵɵsanitizeUrl,
  ɵɵtemplate,
  ɵɵtemplateRefExtractor,
  ɵɵtext,
  ɵɵtextInterpolate,
  ɵɵviewQuery
} from "./chunk-F5VXPRTG.js";

// node_modules/primeng/fesm2022/primeng-utils.mjs
var ObjectUtils = class _ObjectUtils {
  static isArray(value, empty = true) {
    return Array.isArray(value) && (empty || value.length !== 0);
  }
  static isObject(value, empty = true) {
    return value instanceof Object && value.constructor === Object && (empty || Object.keys(value).length !== 0);
  }
  static equals(obj1, obj2, field) {
    if (field)
      return this.resolveFieldData(obj1, field) === this.resolveFieldData(obj2, field);
    else
      return this.equalsByValue(obj1, obj2);
  }
  static equalsByValue(obj1, obj2) {
    if (obj1 === obj2)
      return true;
    if (obj1 && obj2 && typeof obj1 == "object" && typeof obj2 == "object") {
      var arrA = Array.isArray(obj1), arrB = Array.isArray(obj2), i, length, key;
      if (arrA && arrB) {
        length = obj1.length;
        if (length != obj2.length)
          return false;
        for (i = length; i-- !== 0; )
          if (!this.equalsByValue(obj1[i], obj2[i]))
            return false;
        return true;
      }
      if (arrA != arrB)
        return false;
      var dateA = this.isDate(obj1), dateB = this.isDate(obj2);
      if (dateA != dateB)
        return false;
      if (dateA && dateB)
        return obj1.getTime() == obj2.getTime();
      var regexpA = obj1 instanceof RegExp, regexpB = obj2 instanceof RegExp;
      if (regexpA != regexpB)
        return false;
      if (regexpA && regexpB)
        return obj1.toString() == obj2.toString();
      var keys = Object.keys(obj1);
      length = keys.length;
      if (length !== Object.keys(obj2).length)
        return false;
      for (i = length; i-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(obj2, keys[i]))
          return false;
      for (i = length; i-- !== 0; ) {
        key = keys[i];
        if (!this.equalsByValue(obj1[key], obj2[key]))
          return false;
      }
      return true;
    }
    return obj1 !== obj1 && obj2 !== obj2;
  }
  static resolveFieldData(data, field) {
    if (data && field) {
      if (this.isFunction(field)) {
        return field(data);
      } else if (field.indexOf(".") == -1) {
        return data[field];
      } else {
        let fields = field.split(".");
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
  static isFunction(obj) {
    return !!(obj && obj.constructor && obj.call && obj.apply);
  }
  static reorderArray(value, from, to) {
    let target;
    if (value && from !== to) {
      if (to >= value.length) {
        to %= value.length;
        from %= value.length;
      }
      value.splice(to, 0, value.splice(from, 1)[0]);
    }
  }
  static insertIntoOrderedArray(item, index, arr, sourceArr) {
    if (arr.length > 0) {
      let injected = false;
      for (let i = 0; i < arr.length; i++) {
        let currentItemIndex = this.findIndexInList(arr[i], sourceArr);
        if (currentItemIndex > index) {
          arr.splice(i, 0, item);
          injected = true;
          break;
        }
      }
      if (!injected) {
        arr.push(item);
      }
    } else {
      arr.push(item);
    }
  }
  static findIndexInList(item, list) {
    let index = -1;
    if (list) {
      for (let i = 0; i < list.length; i++) {
        if (list[i] == item) {
          index = i;
          break;
        }
      }
    }
    return index;
  }
  static contains(value, list) {
    if (value != null && list && list.length) {
      for (let val of list) {
        if (this.equals(value, val))
          return true;
      }
    }
    return false;
  }
  static removeAccents(str) {
    if (str) {
      str = str.normalize("NFKD").replace(new RegExp("\\p{Diacritic}", "gu"), "");
    }
    return str;
  }
  static isDate(input) {
    return Object.prototype.toString.call(input) === "[object Date]";
  }
  static isEmpty(value) {
    return value === null || value === void 0 || value === "" || Array.isArray(value) && value.length === 0 || !this.isDate(value) && typeof value === "object" && Object.keys(value).length === 0;
  }
  static isNotEmpty(value) {
    return !this.isEmpty(value);
  }
  static compare(value1, value2, locale, order = 1) {
    let result = -1;
    const emptyValue1 = this.isEmpty(value1);
    const emptyValue2 = this.isEmpty(value2);
    if (emptyValue1 && emptyValue2)
      result = 0;
    else if (emptyValue1)
      result = order;
    else if (emptyValue2)
      result = -order;
    else if (typeof value1 === "string" && typeof value2 === "string")
      result = value1.localeCompare(value2, locale, { numeric: true });
    else
      result = value1 < value2 ? -1 : value1 > value2 ? 1 : 0;
    return result;
  }
  static sort(value1, value2, order = 1, locale, nullSortOrder = 1) {
    const result = _ObjectUtils.compare(value1, value2, locale, order);
    let finalSortOrder = order;
    if (_ObjectUtils.isEmpty(value1) || _ObjectUtils.isEmpty(value2)) {
      finalSortOrder = nullSortOrder === 1 ? order : nullSortOrder;
    }
    return finalSortOrder * result;
  }
  static merge(obj1, obj2) {
    if (obj1 == void 0 && obj2 == void 0) {
      return void 0;
    } else if ((obj1 == void 0 || typeof obj1 === "object") && (obj2 == void 0 || typeof obj2 === "object")) {
      return __spreadValues(__spreadValues({}, obj1 || {}), obj2 || {});
    } else if ((obj1 == void 0 || typeof obj1 === "string") && (obj2 == void 0 || typeof obj2 === "string")) {
      return [obj1 || "", obj2 || ""].join(" ");
    }
    return obj2 || obj1;
  }
  static isPrintableCharacter(char = "") {
    return this.isNotEmpty(char) && char.length === 1 && char.match(/\S| /);
  }
  static getItemValue(obj, ...params) {
    return this.isFunction(obj) ? obj(...params) : obj;
  }
  static findLastIndex(arr, callback) {
    let index = -1;
    if (this.isNotEmpty(arr)) {
      try {
        index = arr.findLastIndex(callback);
      } catch {
        index = arr.lastIndexOf([...arr].reverse().find(callback));
      }
    }
    return index;
  }
  static findLast(arr, callback) {
    let item;
    if (this.isNotEmpty(arr)) {
      try {
        item = arr.findLast(callback);
      } catch {
        item = [...arr].reverse().find(callback);
      }
    }
    return item;
  }
  static deepEquals(a, b) {
    if (a === b)
      return true;
    if (a && b && typeof a == "object" && typeof b == "object") {
      var arrA = Array.isArray(a), arrB = Array.isArray(b), i, length, key;
      if (arrA && arrB) {
        length = a.length;
        if (length != b.length)
          return false;
        for (i = length; i-- !== 0; )
          if (!this.deepEquals(a[i], b[i]))
            return false;
        return true;
      }
      if (arrA != arrB)
        return false;
      var dateA = a instanceof Date, dateB = b instanceof Date;
      if (dateA != dateB)
        return false;
      if (dateA && dateB)
        return a.getTime() == b.getTime();
      var regexpA = a instanceof RegExp, regexpB = b instanceof RegExp;
      if (regexpA != regexpB)
        return false;
      if (regexpA && regexpB)
        return a.toString() == b.toString();
      var keys = Object.keys(a);
      length = keys.length;
      if (length !== Object.keys(b).length)
        return false;
      for (i = length; i-- !== 0; )
        if (!Object.prototype.hasOwnProperty.call(b, keys[i]))
          return false;
      for (i = length; i-- !== 0; ) {
        key = keys[i];
        if (!this.deepEquals(a[key], b[key]))
          return false;
      }
      return true;
    }
    return a !== a && b !== b;
  }
};
var lastId = 0;
function UniqueComponentId(prefix = "pn_id_") {
  lastId++;
  return `${prefix}${lastId}`;
}
function ZIndexUtils() {
  let zIndexes = [];
  const generateZIndex = (key, baseZIndex) => {
    let lastZIndex = zIndexes.length > 0 ? zIndexes[zIndexes.length - 1] : { key, value: baseZIndex };
    let newZIndex = lastZIndex.value + (lastZIndex.key === key ? 0 : baseZIndex) + 2;
    zIndexes.push({ key, value: newZIndex });
    return newZIndex;
  };
  const revertZIndex = (zIndex) => {
    zIndexes = zIndexes.filter((obj) => obj.value !== zIndex);
  };
  const getCurrentZIndex = () => {
    return zIndexes.length > 0 ? zIndexes[zIndexes.length - 1].value : 0;
  };
  const getZIndex = (el) => {
    return el ? parseInt(el.style.zIndex, 10) || 0 : 0;
  };
  return {
    get: getZIndex,
    set: (key, el, baseZIndex) => {
      if (el) {
        el.style.zIndex = String(generateZIndex(key, baseZIndex));
      }
    },
    clear: (el) => {
      if (el) {
        revertZIndex(getZIndex(el));
        el.style.zIndex = "";
      }
    },
    getCurrent: () => getCurrentZIndex()
  };
}
var zindexutils = ZIndexUtils();

// node_modules/primeng/fesm2022/primeng-api.mjs
var _c0 = ["*"];
var ConfirmEventType;
(function(ConfirmEventType2) {
  ConfirmEventType2[ConfirmEventType2["ACCEPT"] = 0] = "ACCEPT";
  ConfirmEventType2[ConfirmEventType2["REJECT"] = 1] = "REJECT";
  ConfirmEventType2[ConfirmEventType2["CANCEL"] = 2] = "CANCEL";
})(ConfirmEventType || (ConfirmEventType = {}));
var ConfirmationService = class _ConfirmationService {
  requireConfirmationSource = new Subject();
  acceptConfirmationSource = new Subject();
  requireConfirmation$ = this.requireConfirmationSource.asObservable();
  accept = this.acceptConfirmationSource.asObservable();
  /**
   * Callback to invoke on confirm.
   * @param {Confirmation} confirmation - Represents a confirmation dialog configuration.
   * @group Method
   */
  confirm(confirmation) {
    this.requireConfirmationSource.next(confirmation);
    return this;
  }
  /**
   * Closes the dialog.
   * @group Method
   */
  close() {
    this.requireConfirmationSource.next(null);
    return this;
  }
  /**
   * Accepts the dialog.
   * @group Method
   */
  onAccept() {
    this.acceptConfirmationSource.next(null);
  }
  static ɵfac = function ConfirmationService_Factory(t) {
    return new (t || _ConfirmationService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _ConfirmationService,
    factory: _ConfirmationService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ConfirmationService, [{
    type: Injectable
  }], null, null);
})();
var ContextMenuService = class _ContextMenuService {
  activeItemKeyChange = new Subject();
  activeItemKeyChange$ = this.activeItemKeyChange.asObservable();
  activeItemKey;
  changeKey(key) {
    this.activeItemKey = key;
    this.activeItemKeyChange.next(this.activeItemKey);
  }
  reset() {
    this.activeItemKey = null;
    this.activeItemKeyChange.next(this.activeItemKey);
  }
  static ɵfac = function ContextMenuService_Factory(t) {
    return new (t || _ContextMenuService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _ContextMenuService,
    factory: _ContextMenuService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ContextMenuService, [{
    type: Injectable
  }], null, null);
})();
var FilterMatchMode = class {
  static STARTS_WITH = "startsWith";
  static CONTAINS = "contains";
  static NOT_CONTAINS = "notContains";
  static ENDS_WITH = "endsWith";
  static EQUALS = "equals";
  static NOT_EQUALS = "notEquals";
  static IN = "in";
  static LESS_THAN = "lt";
  static LESS_THAN_OR_EQUAL_TO = "lte";
  static GREATER_THAN = "gt";
  static GREATER_THAN_OR_EQUAL_TO = "gte";
  static BETWEEN = "between";
  static IS = "is";
  static IS_NOT = "isNot";
  static BEFORE = "before";
  static AFTER = "after";
  static DATE_IS = "dateIs";
  static DATE_IS_NOT = "dateIsNot";
  static DATE_BEFORE = "dateBefore";
  static DATE_AFTER = "dateAfter";
};
var FilterService = class _FilterService {
  filter(value, fields, filterValue, filterMatchMode, filterLocale) {
    let filteredItems = [];
    if (value) {
      for (let item of value) {
        for (let field of fields) {
          let fieldValue = ObjectUtils.resolveFieldData(item, field);
          if (this.filters[filterMatchMode](fieldValue, filterValue, filterLocale)) {
            filteredItems.push(item);
            break;
          }
        }
      }
    }
    return filteredItems;
  }
  filters = {
    startsWith: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null || filter.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      let filterValue = ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
      let stringValue = ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.slice(0, filterValue.length) === filterValue;
    },
    contains: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null || typeof filter === "string" && filter.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      let filterValue = ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
      let stringValue = ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.indexOf(filterValue) !== -1;
    },
    notContains: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null || typeof filter === "string" && filter.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      let filterValue = ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
      let stringValue = ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.indexOf(filterValue) === -1;
    },
    endsWith: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null || filter.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      let filterValue = ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
      let stringValue = ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale);
      return stringValue.indexOf(filterValue, stringValue.length - filterValue.length) !== -1;
    },
    equals: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null || typeof filter === "string" && filter.trim() === "") {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter.getTime)
        return value.getTime() === filter.getTime();
      else
        return ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale) == ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
    },
    notEquals: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null || typeof filter === "string" && filter.trim() === "") {
        return false;
      }
      if (value === void 0 || value === null) {
        return true;
      }
      if (value.getTime && filter.getTime)
        return value.getTime() !== filter.getTime();
      else
        return ObjectUtils.removeAccents(value.toString()).toLocaleLowerCase(filterLocale) != ObjectUtils.removeAccents(filter.toString()).toLocaleLowerCase(filterLocale);
    },
    in: (value, filter) => {
      if (filter === void 0 || filter === null || filter.length === 0) {
        return true;
      }
      for (let i = 0; i < filter.length; i++) {
        if (ObjectUtils.equals(value, filter[i])) {
          return true;
        }
      }
      return false;
    },
    between: (value, filter) => {
      if (filter == null || filter[0] == null || filter[1] == null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime)
        return filter[0].getTime() <= value.getTime() && value.getTime() <= filter[1].getTime();
      else
        return filter[0] <= value && value <= filter[1];
    },
    lt: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter.getTime)
        return value.getTime() < filter.getTime();
      else
        return value < filter;
    },
    lte: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter.getTime)
        return value.getTime() <= filter.getTime();
      else
        return value <= filter;
    },
    gt: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter.getTime)
        return value.getTime() > filter.getTime();
      else
        return value > filter;
    },
    gte: (value, filter, filterLocale) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      if (value.getTime && filter.getTime)
        return value.getTime() >= filter.getTime();
      else
        return value >= filter;
    },
    is: (value, filter, filterLocale) => {
      return this.filters.equals(value, filter, filterLocale);
    },
    isNot: (value, filter, filterLocale) => {
      return this.filters.notEquals(value, filter, filterLocale);
    },
    before: (value, filter, filterLocale) => {
      return this.filters.lt(value, filter, filterLocale);
    },
    after: (value, filter, filterLocale) => {
      return this.filters.gt(value, filter, filterLocale);
    },
    dateIs: (value, filter) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.toDateString() === filter.toDateString();
    },
    dateIsNot: (value, filter) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.toDateString() !== filter.toDateString();
    },
    dateBefore: (value, filter) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.getTime() < filter.getTime();
    },
    dateAfter: (value, filter) => {
      if (filter === void 0 || filter === null) {
        return true;
      }
      if (value === void 0 || value === null) {
        return false;
      }
      return value.getTime() > filter.getTime();
    }
  };
  register(rule, fn) {
    this.filters[rule] = fn;
  }
  static ɵfac = function FilterService_Factory(t) {
    return new (t || _FilterService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _FilterService,
    factory: _FilterService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(FilterService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var MessageService = class _MessageService {
  messageSource = new Subject();
  clearSource = new Subject();
  messageObserver = this.messageSource.asObservable();
  clearObserver = this.clearSource.asObservable();
  /**
   * Inserts single message.
   * @param {Message} message - Message to be added.
   * @group Method
   */
  add(message) {
    if (message) {
      this.messageSource.next(message);
    }
  }
  /**
   * Insterts new messages.
   * @param {Message[]} messages - Messages to be added.
   * @group Method
   */
  addAll(messages) {
    if (messages && messages.length) {
      this.messageSource.next(messages);
    }
  }
  /**
   * Clears the message with the given key.
   * @param {string} key - Key of the message to be cleared.
   * @group Method
   */
  clear(key) {
    this.clearSource.next(key || null);
  }
  static ɵfac = function MessageService_Factory(t) {
    return new (t || _MessageService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _MessageService,
    factory: _MessageService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(MessageService, [{
    type: Injectable
  }], null, null);
})();
var OverlayService = class _OverlayService {
  clickSource = new Subject();
  clickObservable = this.clickSource.asObservable();
  add(event) {
    if (event) {
      this.clickSource.next(event);
    }
  }
  static ɵfac = function OverlayService_Factory(t) {
    return new (t || _OverlayService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _OverlayService,
    factory: _OverlayService.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(OverlayService, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var PrimeNGConfig = class _PrimeNGConfig {
  ripple = false;
  inputStyle = "outlined";
  overlayOptions = {};
  filterMatchModeOptions = {
    text: [FilterMatchMode.STARTS_WITH, FilterMatchMode.CONTAINS, FilterMatchMode.NOT_CONTAINS, FilterMatchMode.ENDS_WITH, FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS],
    numeric: [FilterMatchMode.EQUALS, FilterMatchMode.NOT_EQUALS, FilterMatchMode.LESS_THAN, FilterMatchMode.LESS_THAN_OR_EQUAL_TO, FilterMatchMode.GREATER_THAN, FilterMatchMode.GREATER_THAN_OR_EQUAL_TO],
    date: [FilterMatchMode.DATE_IS, FilterMatchMode.DATE_IS_NOT, FilterMatchMode.DATE_BEFORE, FilterMatchMode.DATE_AFTER]
  };
  translation = {
    startsWith: "Starts with",
    contains: "Contains",
    notContains: "Not contains",
    endsWith: "Ends with",
    equals: "Equals",
    notEquals: "Not equals",
    noFilter: "No Filter",
    lt: "Less than",
    lte: "Less than or equal to",
    gt: "Greater than",
    gte: "Greater than or equal to",
    is: "Is",
    isNot: "Is not",
    before: "Before",
    after: "After",
    dateIs: "Date is",
    dateIsNot: "Date is not",
    dateBefore: "Date is before",
    dateAfter: "Date is after",
    clear: "Clear",
    apply: "Apply",
    matchAll: "Match All",
    matchAny: "Match Any",
    addRule: "Add Rule",
    removeRule: "Remove Rule",
    accept: "Yes",
    reject: "No",
    choose: "Choose",
    upload: "Upload",
    cancel: "Cancel",
    pending: "Pending",
    fileSizeTypes: ["B", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"],
    dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
    monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
    monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
    chooseYear: "Choose Year",
    chooseMonth: "Choose Month",
    chooseDate: "Choose Date",
    prevDecade: "Previous Decade",
    nextDecade: "Next Decade",
    prevYear: "Previous Year",
    nextYear: "Next Year",
    prevMonth: "Previous Month",
    nextMonth: "Next Month",
    prevHour: "Previous Hour",
    nextHour: "Next Hour",
    prevMinute: "Previous Minute",
    nextMinute: "Next Minute",
    prevSecond: "Previous Second",
    nextSecond: "Next Second",
    am: "am",
    pm: "pm",
    dateFormat: "mm/dd/yy",
    firstDayOfWeek: 0,
    today: "Today",
    weekHeader: "Wk",
    weak: "Weak",
    medium: "Medium",
    strong: "Strong",
    passwordPrompt: "Enter a password",
    emptyMessage: "No results found",
    searchMessage: "{0} results are available",
    selectionMessage: "{0} items selected",
    emptySelectionMessage: "No selected item",
    emptySearchMessage: "No results found",
    emptyFilterMessage: "No results found",
    aria: {
      trueLabel: "True",
      falseLabel: "False",
      nullLabel: "Not Selected",
      star: "1 star",
      stars: "{star} stars",
      selectAll: "All items selected",
      unselectAll: "All items unselected",
      close: "Close",
      previous: "Previous",
      next: "Next",
      navigation: "Navigation",
      scrollTop: "Scroll Top",
      moveTop: "Move Top",
      moveUp: "Move Up",
      moveDown: "Move Down",
      moveBottom: "Move Bottom",
      moveToTarget: "Move to Target",
      moveToSource: "Move to Source",
      moveAllToTarget: "Move All to Target",
      moveAllToSource: "Move All to Source",
      pageLabel: "{page}",
      firstPageLabel: "First Page",
      lastPageLabel: "Last Page",
      nextPageLabel: "Next Page",
      prevPageLabel: "Previous Page",
      rowsPerPageLabel: "Rows per page",
      previousPageLabel: "Previous Page",
      jumpToPageDropdownLabel: "Jump to Page Dropdown",
      jumpToPageInputLabel: "Jump to Page Input",
      selectRow: "Row Selected",
      unselectRow: "Row Unselected",
      expandRow: "Row Expanded",
      collapseRow: "Row Collapsed",
      showFilterMenu: "Show Filter Menu",
      hideFilterMenu: "Hide Filter Menu",
      filterOperator: "Filter Operator",
      filterConstraint: "Filter Constraint",
      editRow: "Row Edit",
      saveEdit: "Save Edit",
      cancelEdit: "Cancel Edit",
      listView: "List View",
      gridView: "Grid View",
      slide: "Slide",
      slideNumber: "{slideNumber}",
      zoomImage: "Zoom Image",
      zoomIn: "Zoom In",
      zoomOut: "Zoom Out",
      rotateRight: "Rotate Right",
      rotateLeft: "Rotate Left",
      listLabel: "Option List"
    }
  };
  zIndex = {
    modal: 1100,
    overlay: 1e3,
    menu: 1e3,
    tooltip: 1100
  };
  translationSource = new Subject();
  translationObserver = this.translationSource.asObservable();
  getTranslation(key) {
    return this.translation[key];
  }
  setTranslation(value) {
    this.translation = __spreadValues(__spreadValues({}, this.translation), value);
    this.translationSource.next(this.translation);
  }
  static ɵfac = function PrimeNGConfig_Factory(t) {
    return new (t || _PrimeNGConfig)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _PrimeNGConfig,
    factory: _PrimeNGConfig.ɵfac,
    providedIn: "root"
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrimeNGConfig, [{
    type: Injectable,
    args: [{
      providedIn: "root"
    }]
  }], null, null);
})();
var Header = class _Header {
  static ɵfac = function Header_Factory(t) {
    return new (t || _Header)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _Header,
    selectors: [["p-header"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function Header_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Header, [{
    type: Component,
    args: [{
      selector: "p-header",
      template: "<ng-content></ng-content>"
    }]
  }], null, null);
})();
var Footer = class _Footer {
  static ɵfac = function Footer_Factory(t) {
    return new (t || _Footer)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _Footer,
    selectors: [["p-footer"]],
    ngContentSelectors: _c0,
    decls: 1,
    vars: 0,
    template: function Footer_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Footer, [{
    type: Component,
    args: [{
      selector: "p-footer",
      template: "<ng-content></ng-content>"
    }]
  }], null, null);
})();
var PrimeTemplate = class _PrimeTemplate {
  template;
  type;
  name;
  constructor(template) {
    this.template = template;
  }
  getType() {
    return this.name;
  }
  static ɵfac = function PrimeTemplate_Factory(t) {
    return new (t || _PrimeTemplate)(ɵɵdirectiveInject(TemplateRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _PrimeTemplate,
    selectors: [["", "pTemplate", ""]],
    inputs: {
      type: "type",
      name: [InputFlags.None, "pTemplate", "name"]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PrimeTemplate, [{
    type: Directive,
    args: [{
      selector: "[pTemplate]",
      host: {}
    }]
  }], () => [{
    type: TemplateRef
  }], {
    type: [{
      type: Input
    }],
    name: [{
      type: Input,
      args: ["pTemplate"]
    }]
  });
})();
var SharedModule = class _SharedModule {
  static ɵfac = function SharedModule_Factory(t) {
    return new (t || _SharedModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _SharedModule,
    declarations: [Header, Footer, PrimeTemplate],
    imports: [CommonModule],
    exports: [Header, Footer, PrimeTemplate]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(SharedModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [Header, Footer, PrimeTemplate],
      declarations: [Header, Footer, PrimeTemplate]
    }]
  }], null, null);
})();
var TreeDragDropService = class _TreeDragDropService {
  dragStartSource = new Subject();
  dragStopSource = new Subject();
  dragStart$ = this.dragStartSource.asObservable();
  dragStop$ = this.dragStopSource.asObservable();
  startDrag(event) {
    this.dragStartSource.next(event);
  }
  stopDrag(event) {
    this.dragStopSource.next(event);
  }
  static ɵfac = function TreeDragDropService_Factory(t) {
    return new (t || _TreeDragDropService)();
  };
  static ɵprov = ɵɵdefineInjectable({
    token: _TreeDragDropService,
    factory: _TreeDragDropService.ɵfac
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TreeDragDropService, [{
    type: Injectable
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-dom.mjs
var DomHandler = class _DomHandler {
  static zindex = 1e3;
  static calculatedScrollbarWidth = null;
  static calculatedScrollbarHeight = null;
  static browser;
  static addClass(element, className) {
    if (element && className) {
      if (element.classList)
        element.classList.add(className);
      else
        element.className += " " + className;
    }
  }
  static addMultipleClasses(element, className) {
    if (element && className) {
      if (element.classList) {
        let styles = className.trim().split(" ");
        for (let i = 0; i < styles.length; i++) {
          element.classList.add(styles[i]);
        }
      } else {
        let styles = className.split(" ");
        for (let i = 0; i < styles.length; i++) {
          element.className += " " + styles[i];
        }
      }
    }
  }
  static removeClass(element, className) {
    if (element && className) {
      if (element.classList)
        element.classList.remove(className);
      else
        element.className = element.className.replace(new RegExp("(^|\\b)" + className.split(" ").join("|") + "(\\b|$)", "gi"), " ");
    }
  }
  static removeMultipleClasses(element, classNames) {
    if (element && classNames) {
      [classNames].flat().filter(Boolean).forEach((cNames) => cNames.split(" ").forEach((className) => this.removeClass(element, className)));
    }
  }
  static hasClass(element, className) {
    if (element && className) {
      if (element.classList)
        return element.classList.contains(className);
      else
        return new RegExp("(^| )" + className + "( |$)", "gi").test(element.className);
    }
    return false;
  }
  static siblings(element) {
    return Array.prototype.filter.call(element.parentNode.children, function(child) {
      return child !== element;
    });
  }
  static find(element, selector) {
    return Array.from(element.querySelectorAll(selector));
  }
  static findSingle(element, selector) {
    return this.isElement(element) ? element.querySelector(selector) : null;
  }
  static index(element) {
    let children = element.parentNode.childNodes;
    let num = 0;
    for (var i = 0; i < children.length; i++) {
      if (children[i] == element)
        return num;
      if (children[i].nodeType == 1)
        num++;
    }
    return -1;
  }
  static indexWithinGroup(element, attributeName) {
    let children = element.parentNode ? element.parentNode.childNodes : [];
    let num = 0;
    for (var i = 0; i < children.length; i++) {
      if (children[i] == element)
        return num;
      if (children[i].attributes && children[i].attributes[attributeName] && children[i].nodeType == 1)
        num++;
    }
    return -1;
  }
  static appendOverlay(overlay, target, appendTo = "self") {
    if (appendTo !== "self" && overlay && target) {
      this.appendChild(overlay, target);
    }
  }
  static alignOverlay(overlay, target, appendTo = "self", calculateMinWidth = true) {
    if (overlay && target) {
      if (calculateMinWidth) {
        overlay.style.minWidth = `${_DomHandler.getOuterWidth(target)}px`;
      }
      if (appendTo === "self") {
        this.relativePosition(overlay, target);
      } else {
        this.absolutePosition(overlay, target);
      }
    }
  }
  static relativePosition(element, target) {
    const getClosestRelativeElement = (el) => {
      if (!el)
        return;
      return getComputedStyle(el).getPropertyValue("position") === "relative" ? el : getClosestRelativeElement(el.parentElement);
    };
    const elementDimensions = element.offsetParent ? { width: element.offsetWidth, height: element.offsetHeight } : this.getHiddenElementDimensions(element);
    const targetHeight = target.offsetHeight;
    const targetOffset = target.getBoundingClientRect();
    const windowScrollTop = this.getWindowScrollTop();
    const windowScrollLeft = this.getWindowScrollLeft();
    const viewport = this.getViewport();
    const relativeElement = getClosestRelativeElement(element);
    const relativeElementOffset = relativeElement?.getBoundingClientRect() || { top: -1 * windowScrollTop, left: -1 * windowScrollLeft };
    let top, left;
    if (targetOffset.top + targetHeight + elementDimensions.height > viewport.height) {
      top = targetOffset.top - relativeElementOffset.top - elementDimensions.height;
      element.style.transformOrigin = "bottom";
      if (targetOffset.top + top < 0) {
        top = -1 * targetOffset.top;
      }
    } else {
      top = targetHeight + targetOffset.top - relativeElementOffset.top;
      element.style.transformOrigin = "top";
    }
    const horizontalOverflow = targetOffset.left + elementDimensions.width - viewport.width;
    const targetLeftOffsetInSpaceOfRelativeElement = targetOffset.left - relativeElementOffset.left;
    if (elementDimensions.width > viewport.width) {
      left = (targetOffset.left - relativeElementOffset.left) * -1;
    } else if (horizontalOverflow > 0) {
      left = targetLeftOffsetInSpaceOfRelativeElement - horizontalOverflow;
    } else {
      left = targetOffset.left - relativeElementOffset.left;
    }
    element.style.top = top + "px";
    element.style.left = left + "px";
  }
  static absolutePosition(element, target) {
    const elementDimensions = element.offsetParent ? { width: element.offsetWidth, height: element.offsetHeight } : this.getHiddenElementDimensions(element);
    const elementOuterHeight = elementDimensions.height;
    const elementOuterWidth = elementDimensions.width;
    const targetOuterHeight = target.offsetHeight;
    const targetOuterWidth = target.offsetWidth;
    const targetOffset = target.getBoundingClientRect();
    const windowScrollTop = this.getWindowScrollTop();
    const windowScrollLeft = this.getWindowScrollLeft();
    const viewport = this.getViewport();
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
  static getParents(element, parents = []) {
    return element["parentNode"] === null ? parents : this.getParents(element.parentNode, parents.concat([element.parentNode]));
  }
  static getScrollableParents(element) {
    let scrollableParents = [];
    if (element) {
      let parents = this.getParents(element);
      const overflowRegex = /(auto|scroll)/;
      const overflowCheck = (node) => {
        let styleDeclaration = window["getComputedStyle"](node, null);
        return overflowRegex.test(styleDeclaration.getPropertyValue("overflow")) || overflowRegex.test(styleDeclaration.getPropertyValue("overflowX")) || overflowRegex.test(styleDeclaration.getPropertyValue("overflowY"));
      };
      for (let parent of parents) {
        let scrollSelectors = parent.nodeType === 1 && parent.dataset["scrollselectors"];
        if (scrollSelectors) {
          let selectors = scrollSelectors.split(",");
          for (let selector of selectors) {
            let el = this.findSingle(parent, selector);
            if (el && overflowCheck(el)) {
              scrollableParents.push(el);
            }
          }
        }
        if (parent.nodeType !== 9 && overflowCheck(parent)) {
          scrollableParents.push(parent);
        }
      }
    }
    return scrollableParents;
  }
  static getHiddenElementOuterHeight(element) {
    element.style.visibility = "hidden";
    element.style.display = "block";
    let elementHeight = element.offsetHeight;
    element.style.display = "none";
    element.style.visibility = "visible";
    return elementHeight;
  }
  static getHiddenElementOuterWidth(element) {
    element.style.visibility = "hidden";
    element.style.display = "block";
    let elementWidth = element.offsetWidth;
    element.style.display = "none";
    element.style.visibility = "visible";
    return elementWidth;
  }
  static getHiddenElementDimensions(element) {
    let dimensions = {};
    element.style.visibility = "hidden";
    element.style.display = "block";
    dimensions.width = element.offsetWidth;
    dimensions.height = element.offsetHeight;
    element.style.display = "none";
    element.style.visibility = "visible";
    return dimensions;
  }
  static scrollInView(container, item) {
    let borderTopValue = getComputedStyle(container).getPropertyValue("borderTopWidth");
    let borderTop = borderTopValue ? parseFloat(borderTopValue) : 0;
    let paddingTopValue = getComputedStyle(container).getPropertyValue("paddingTop");
    let paddingTop = paddingTopValue ? parseFloat(paddingTopValue) : 0;
    let containerRect = container.getBoundingClientRect();
    let itemRect = item.getBoundingClientRect();
    let offset = itemRect.top + document.body.scrollTop - (containerRect.top + document.body.scrollTop) - borderTop - paddingTop;
    let scroll = container.scrollTop;
    let elementHeight = container.clientHeight;
    let itemHeight = this.getOuterHeight(item);
    if (offset < 0) {
      container.scrollTop = scroll + offset;
    } else if (offset + itemHeight > elementHeight) {
      container.scrollTop = scroll + offset - elementHeight + itemHeight;
    }
  }
  static fadeIn(element, duration) {
    element.style.opacity = 0;
    let last = +/* @__PURE__ */ new Date();
    let opacity = 0;
    let tick = function() {
      opacity = +element.style.opacity.replace(",", ".") + ((/* @__PURE__ */ new Date()).getTime() - last) / duration;
      element.style.opacity = opacity;
      last = +/* @__PURE__ */ new Date();
      if (+opacity < 1) {
        window.requestAnimationFrame && requestAnimationFrame(tick) || setTimeout(tick, 16);
      }
    };
    tick();
  }
  static fadeOut(element, ms) {
    var opacity = 1, interval = 50, duration = ms, gap = interval / duration;
    let fading = setInterval(() => {
      opacity = opacity - gap;
      if (opacity <= 0) {
        opacity = 0;
        clearInterval(fading);
      }
      element.style.opacity = opacity;
    }, interval);
  }
  static getWindowScrollTop() {
    let doc = document.documentElement;
    return (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);
  }
  static getWindowScrollLeft() {
    let doc = document.documentElement;
    return (window.pageXOffset || doc.scrollLeft) - (doc.clientLeft || 0);
  }
  static matches(element, selector) {
    var p = Element.prototype;
    var f = p["matches"] || p.webkitMatchesSelector || p["mozMatchesSelector"] || p["msMatchesSelector"] || function(s) {
      return [].indexOf.call(document.querySelectorAll(s), this) !== -1;
    };
    return f.call(element, selector);
  }
  static getOuterWidth(el, margin) {
    let width = el.offsetWidth;
    if (margin) {
      let style2 = getComputedStyle(el);
      width += parseFloat(style2.marginLeft) + parseFloat(style2.marginRight);
    }
    return width;
  }
  static getHorizontalPadding(el) {
    let style2 = getComputedStyle(el);
    return parseFloat(style2.paddingLeft) + parseFloat(style2.paddingRight);
  }
  static getHorizontalMargin(el) {
    let style2 = getComputedStyle(el);
    return parseFloat(style2.marginLeft) + parseFloat(style2.marginRight);
  }
  static innerWidth(el) {
    let width = el.offsetWidth;
    let style2 = getComputedStyle(el);
    width += parseFloat(style2.paddingLeft) + parseFloat(style2.paddingRight);
    return width;
  }
  static width(el) {
    let width = el.offsetWidth;
    let style2 = getComputedStyle(el);
    width -= parseFloat(style2.paddingLeft) + parseFloat(style2.paddingRight);
    return width;
  }
  static getInnerHeight(el) {
    let height = el.offsetHeight;
    let style2 = getComputedStyle(el);
    height += parseFloat(style2.paddingTop) + parseFloat(style2.paddingBottom);
    return height;
  }
  static getOuterHeight(el, margin) {
    let height = el.offsetHeight;
    if (margin) {
      let style2 = getComputedStyle(el);
      height += parseFloat(style2.marginTop) + parseFloat(style2.marginBottom);
    }
    return height;
  }
  static getHeight(el) {
    let height = el.offsetHeight;
    let style2 = getComputedStyle(el);
    height -= parseFloat(style2.paddingTop) + parseFloat(style2.paddingBottom) + parseFloat(style2.borderTopWidth) + parseFloat(style2.borderBottomWidth);
    return height;
  }
  static getWidth(el) {
    let width = el.offsetWidth;
    let style2 = getComputedStyle(el);
    width -= parseFloat(style2.paddingLeft) + parseFloat(style2.paddingRight) + parseFloat(style2.borderLeftWidth) + parseFloat(style2.borderRightWidth);
    return width;
  }
  static getViewport() {
    let win = window, d = document, e = d.documentElement, g = d.getElementsByTagName("body")[0], w = win.innerWidth || e.clientWidth || g.clientWidth, h = win.innerHeight || e.clientHeight || g.clientHeight;
    return { width: w, height: h };
  }
  static getOffset(el) {
    var rect = el.getBoundingClientRect();
    return {
      top: rect.top + (window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0),
      left: rect.left + (window.pageXOffset || document.documentElement.scrollLeft || document.body.scrollLeft || 0)
    };
  }
  static replaceElementWith(element, replacementElement) {
    let parentNode = element.parentNode;
    if (!parentNode)
      throw `Can't replace element`;
    return parentNode.replaceChild(replacementElement, element);
  }
  static getUserAgent() {
    if (navigator && this.isClient()) {
      return navigator.userAgent;
    }
  }
  static isIE() {
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf("MSIE ");
    if (msie > 0) {
      return true;
    }
    var trident = ua.indexOf("Trident/");
    if (trident > 0) {
      var rv = ua.indexOf("rv:");
      return true;
    }
    var edge = ua.indexOf("Edge/");
    if (edge > 0) {
      return true;
    }
    return false;
  }
  static isIOS() {
    return /iPad|iPhone|iPod/.test(navigator.userAgent) && !window["MSStream"];
  }
  static isAndroid() {
    return /(android)/i.test(navigator.userAgent);
  }
  static isTouchDevice() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  }
  static appendChild(element, target) {
    if (this.isElement(target))
      target.appendChild(element);
    else if (target && target.el && target.el.nativeElement)
      target.el.nativeElement.appendChild(element);
    else
      throw "Cannot append " + target + " to " + element;
  }
  static removeChild(element, target) {
    if (this.isElement(target))
      target.removeChild(element);
    else if (target.el && target.el.nativeElement)
      target.el.nativeElement.removeChild(element);
    else
      throw "Cannot remove " + element + " from " + target;
  }
  static removeElement(element) {
    if (!("remove" in Element.prototype))
      element.parentNode.removeChild(element);
    else
      element.remove();
  }
  static isElement(obj) {
    return typeof HTMLElement === "object" ? obj instanceof HTMLElement : obj && typeof obj === "object" && obj !== null && obj.nodeType === 1 && typeof obj.nodeName === "string";
  }
  static calculateScrollbarWidth(el) {
    if (el) {
      let style2 = getComputedStyle(el);
      return el.offsetWidth - el.clientWidth - parseFloat(style2.borderLeftWidth) - parseFloat(style2.borderRightWidth);
    } else {
      if (this.calculatedScrollbarWidth !== null)
        return this.calculatedScrollbarWidth;
      let scrollDiv = document.createElement("div");
      scrollDiv.className = "p-scrollbar-measure";
      document.body.appendChild(scrollDiv);
      let scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      this.calculatedScrollbarWidth = scrollbarWidth;
      return scrollbarWidth;
    }
  }
  static calculateScrollbarHeight() {
    if (this.calculatedScrollbarHeight !== null)
      return this.calculatedScrollbarHeight;
    let scrollDiv = document.createElement("div");
    scrollDiv.className = "p-scrollbar-measure";
    document.body.appendChild(scrollDiv);
    let scrollbarHeight = scrollDiv.offsetHeight - scrollDiv.clientHeight;
    document.body.removeChild(scrollDiv);
    this.calculatedScrollbarWidth = scrollbarHeight;
    return scrollbarHeight;
  }
  static invokeElementMethod(element, methodName, args) {
    element[methodName].apply(element, args);
  }
  static clearSelection() {
    if (window.getSelection) {
      if (window.getSelection().empty) {
        window.getSelection().empty();
      } else if (window.getSelection().removeAllRanges && window.getSelection().rangeCount > 0 && window.getSelection().getRangeAt(0).getClientRects().length > 0) {
        window.getSelection().removeAllRanges();
      }
    } else if (document["selection"] && document["selection"].empty) {
      try {
        document["selection"].empty();
      } catch (error) {
      }
    }
  }
  static getBrowser() {
    if (!this.browser) {
      let matched = this.resolveUserAgent();
      this.browser = {};
      if (matched.browser) {
        this.browser[matched.browser] = true;
        this.browser["version"] = matched.version;
      }
      if (this.browser["chrome"]) {
        this.browser["webkit"] = true;
      } else if (this.browser["webkit"]) {
        this.browser["safari"] = true;
      }
    }
    return this.browser;
  }
  static resolveUserAgent() {
    let ua = navigator.userAgent.toLowerCase();
    let match = /(chrome)[ \/]([\w.]+)/.exec(ua) || /(webkit)[ \/]([\w.]+)/.exec(ua) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua) || /(msie) ([\w.]+)/.exec(ua) || ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua) || [];
    return {
      browser: match[1] || "",
      version: match[2] || "0"
    };
  }
  static isInteger(value) {
    if (Number.isInteger) {
      return Number.isInteger(value);
    } else {
      return typeof value === "number" && isFinite(value) && Math.floor(value) === value;
    }
  }
  static isHidden(element) {
    return !element || element.offsetParent === null;
  }
  static isVisible(element) {
    return element && element.offsetParent != null;
  }
  static isExist(element) {
    return element !== null && typeof element !== "undefined" && element.nodeName && element.parentNode;
  }
  static focus(element, options) {
    element && document.activeElement !== element && element.focus(options);
  }
  static getFocusableElements(element, selector = "") {
    let focusableElements = this.find(element, `button:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [href][clientHeight][clientWidth]:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                input:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                select:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                textarea:not([tabindex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [tabIndex]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector},
                [contenteditable]:not([tabIndex = "-1"]):not([disabled]):not([style*="display:none"]):not([hidden])${selector}`);
    let visibleFocusableElements = [];
    for (let focusableElement of focusableElements) {
      const computedStyle = getComputedStyle(focusableElement);
      if (this.isVisible(focusableElement) && computedStyle.display != "none" && computedStyle.visibility != "hidden")
        visibleFocusableElements.push(focusableElement);
    }
    return visibleFocusableElements;
  }
  static getFirstFocusableElement(element, selector) {
    const focusableElements = this.getFocusableElements(element, selector);
    return focusableElements.length > 0 ? focusableElements[0] : null;
  }
  static getLastFocusableElement(element, selector) {
    const focusableElements = this.getFocusableElements(element, selector);
    return focusableElements.length > 0 ? focusableElements[focusableElements.length - 1] : null;
  }
  static getNextFocusableElement(element, reverse = false) {
    const focusableElements = _DomHandler.getFocusableElements(element);
    let index = 0;
    if (focusableElements && focusableElements.length > 0) {
      const focusedIndex = focusableElements.indexOf(focusableElements[0].ownerDocument.activeElement);
      if (reverse) {
        if (focusedIndex == -1 || focusedIndex === 0) {
          index = focusableElements.length - 1;
        } else {
          index = focusedIndex - 1;
        }
      } else if (focusedIndex != -1 && focusedIndex !== focusableElements.length - 1) {
        index = focusedIndex + 1;
      }
    }
    return focusableElements[index];
  }
  static generateZIndex() {
    this.zindex = this.zindex || 999;
    return ++this.zindex;
  }
  static getSelection() {
    if (window.getSelection)
      return window.getSelection().toString();
    else if (document.getSelection)
      return document.getSelection().toString();
    else if (document["selection"])
      return document["selection"].createRange().text;
    return null;
  }
  static getTargetElement(target, el) {
    if (!target)
      return null;
    switch (target) {
      case "document":
        return document;
      case "window":
        return window;
      case "@next":
        return el?.nextElementSibling;
      case "@prev":
        return el?.previousElementSibling;
      case "@parent":
        return el?.parentElement;
      case "@grandparent":
        return el?.parentElement.parentElement;
      default:
        const type = typeof target;
        if (type === "string") {
          return document.querySelector(target);
        } else if (type === "object" && target.hasOwnProperty("nativeElement")) {
          return this.isExist(target.nativeElement) ? target.nativeElement : void 0;
        }
        const isFunction = (obj) => !!(obj && obj.constructor && obj.call && obj.apply);
        const element = isFunction(target) ? target() : target;
        return element && element.nodeType === 9 || this.isExist(element) ? element : null;
    }
  }
  static isClient() {
    return !!(typeof window !== "undefined" && window.document && window.document.createElement);
  }
  static getAttribute(element, name) {
    if (element) {
      const value = element.getAttribute(name);
      if (!isNaN(value)) {
        return +value;
      }
      if (value === "true" || value === "false") {
        return value === "true";
      }
      return value;
    }
    return void 0;
  }
  static calculateBodyScrollbarWidth() {
    return window.innerWidth - document.documentElement.offsetWidth;
  }
  static blockBodyScroll(className = "p-overflow-hidden") {
    document.body.style.setProperty("--scrollbar-width", this.calculateBodyScrollbarWidth() + "px");
    this.addClass(document.body, className);
  }
  static unblockBodyScroll(className = "p-overflow-hidden") {
    document.body.style.removeProperty("--scrollbar-width");
    this.removeClass(document.body, className);
  }
};
var ConnectedOverlayScrollHandler = class {
  element;
  listener;
  scrollableParents;
  constructor(element, listener = () => {
  }) {
    this.element = element;
    this.listener = listener;
  }
  bindScrollListener() {
    this.scrollableParents = DomHandler.getScrollableParents(this.element);
    for (let i = 0; i < this.scrollableParents.length; i++) {
      this.scrollableParents[i].addEventListener("scroll", this.listener);
    }
  }
  unbindScrollListener() {
    if (this.scrollableParents) {
      for (let i = 0; i < this.scrollableParents.length; i++) {
        this.scrollableParents[i].removeEventListener("scroll", this.listener);
      }
    }
  }
  destroy() {
    this.unbindScrollListener();
    this.element = null;
    this.listener = null;
    this.scrollableParents = null;
  }
};

// node_modules/primeng/fesm2022/primeng-baseicon.mjs
var _c02 = ["*"];
var BaseIcon = class _BaseIcon {
  label;
  spin = false;
  styleClass;
  role;
  ariaLabel;
  ariaHidden;
  ngOnInit() {
    this.getAttributes();
  }
  getAttributes() {
    const isLabelEmpty = ObjectUtils.isEmpty(this.label);
    this.role = !isLabelEmpty ? "img" : void 0;
    this.ariaLabel = !isLabelEmpty ? this.label : void 0;
    this.ariaHidden = isLabelEmpty;
  }
  getClassNames() {
    return `p-icon ${this.styleClass ? this.styleClass + " " : ""}${this.spin ? "p-icon-spin" : ""}`;
  }
  static ɵfac = function BaseIcon_Factory(t) {
    return new (t || _BaseIcon)();
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _BaseIcon,
    selectors: [["ng-component"]],
    hostAttrs: [1, "p-element", "p-icon-wrapper"],
    inputs: {
      label: "label",
      spin: "spin",
      styleClass: "styleClass"
    },
    standalone: true,
    features: [ɵɵStandaloneFeature],
    ngContentSelectors: _c02,
    decls: 1,
    vars: 0,
    template: function BaseIcon_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵprojectionDef();
        ɵɵprojection(0);
      }
    },
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(BaseIcon, [{
    type: Component,
    args: [{
      template: ` <ng-content></ng-content> `,
      standalone: true,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element p-icon-wrapper"
      }
    }]
  }], null, {
    label: [{
      type: Input
    }],
    spin: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }]
  });
})();

// node_modules/primeng/fesm2022/primeng-icons-angledown.mjs
var AngleDownIcon = class _AngleDownIcon extends BaseIcon {
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵAngleDownIcon_BaseFactory;
    return function AngleDownIcon_Factory(t) {
      return (ɵAngleDownIcon_BaseFactory || (ɵAngleDownIcon_BaseFactory = ɵɵgetInheritedFactory(_AngleDownIcon)))(t || _AngleDownIcon);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _AngleDownIcon,
    selectors: [["AngleDownIcon"]],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z", "fill", "currentColor"]],
    template: function AngleDownIcon_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵnamespaceSVG();
        ɵɵelementStart(0, "svg", 0);
        ɵɵelement(1, "path", 1);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.getClassNames());
        ɵɵattribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AngleDownIcon, [{
    type: Component,
    args: [{
      selector: "AngleDownIcon",
      standalone: true,
      imports: [BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                d="M3.58659 4.5007C3.68513 4.50023 3.78277 4.51945 3.87379 4.55723C3.9648 4.59501 4.04735 4.65058 4.11659 4.7207L7.11659 7.7207L10.1166 4.7207C10.2619 4.65055 10.4259 4.62911 10.5843 4.65956C10.7427 4.69002 10.8871 4.77074 10.996 4.88976C11.1049 5.00877 11.1726 5.15973 11.1889 5.32022C11.2052 5.48072 11.1693 5.6422 11.0866 5.7807L7.58659 9.2807C7.44597 9.42115 7.25534 9.50004 7.05659 9.50004C6.85784 9.50004 6.66722 9.42115 6.52659 9.2807L3.02659 5.7807C2.88614 5.64007 2.80725 5.44945 2.80725 5.2507C2.80725 5.05195 2.88614 4.86132 3.02659 4.7207C3.09932 4.64685 3.18675 4.58911 3.28322 4.55121C3.37969 4.51331 3.48305 4.4961 3.58659 4.5007Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-angleright.mjs
var AngleRightIcon = class _AngleRightIcon extends BaseIcon {
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵAngleRightIcon_BaseFactory;
    return function AngleRightIcon_Factory(t) {
      return (ɵAngleRightIcon_BaseFactory || (ɵAngleRightIcon_BaseFactory = ɵɵgetInheritedFactory(_AngleRightIcon)))(t || _AngleRightIcon);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _AngleRightIcon,
    selectors: [["AngleRightIcon"]],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z", "fill", "currentColor"]],
    template: function AngleRightIcon_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵnamespaceSVG();
        ɵɵelementStart(0, "svg", 0);
        ɵɵelement(1, "path", 1);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.getClassNames());
        ɵɵattribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(AngleRightIcon, [{
    type: Component,
    args: [{
      selector: "AngleRightIcon",
      standalone: true,
      imports: [BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                d="M5.25 11.1728C5.14929 11.1694 5.05033 11.1455 4.9592 11.1025C4.86806 11.0595 4.78666 10.9984 4.72 10.9228C4.57955 10.7822 4.50066 10.5916 4.50066 10.3928C4.50066 10.1941 4.57955 10.0035 4.72 9.86283L7.72 6.86283L4.72 3.86283C4.66067 3.71882 4.64765 3.55991 4.68275 3.40816C4.71785 3.25642 4.79932 3.11936 4.91585 3.01602C5.03238 2.91268 5.17819 2.84819 5.33305 2.83149C5.4879 2.81479 5.64411 2.84671 5.78 2.92283L9.28 6.42283C9.42045 6.56346 9.49934 6.75408 9.49934 6.95283C9.49934 7.15158 9.42045 7.34221 9.28 7.48283L5.78 10.9228C5.71333 10.9984 5.63193 11.0595 5.5408 11.1025C5.44966 11.1455 5.35071 11.1694 5.25 11.1728Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-chevrondown.mjs
var ChevronDownIcon = class _ChevronDownIcon extends BaseIcon {
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵChevronDownIcon_BaseFactory;
    return function ChevronDownIcon_Factory(t) {
      return (ɵChevronDownIcon_BaseFactory || (ɵChevronDownIcon_BaseFactory = ɵɵgetInheritedFactory(_ChevronDownIcon)))(t || _ChevronDownIcon);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _ChevronDownIcon,
    selectors: [["ChevronDownIcon"]],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z", "fill", "currentColor"]],
    template: function ChevronDownIcon_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵnamespaceSVG();
        ɵɵelementStart(0, "svg", 0);
        ɵɵelement(1, "path", 1);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.getClassNames());
        ɵɵattribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChevronDownIcon, [{
    type: Component,
    args: [{
      selector: "ChevronDownIcon",
      standalone: true,
      imports: [BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                d="M7.01744 10.398C6.91269 10.3985 6.8089 10.378 6.71215 10.3379C6.61541 10.2977 6.52766 10.2386 6.45405 10.1641L1.13907 4.84913C1.03306 4.69404 0.985221 4.5065 1.00399 4.31958C1.02276 4.13266 1.10693 3.95838 1.24166 3.82747C1.37639 3.69655 1.55301 3.61742 1.74039 3.60402C1.92777 3.59062 2.11386 3.64382 2.26584 3.75424L7.01744 8.47394L11.769 3.75424C11.9189 3.65709 12.097 3.61306 12.2748 3.62921C12.4527 3.64535 12.6199 3.72073 12.7498 3.84328C12.8797 3.96582 12.9647 4.12842 12.9912 4.30502C13.0177 4.48162 12.9841 4.662 12.8958 4.81724L7.58083 10.1322C7.50996 10.2125 7.42344 10.2775 7.32656 10.3232C7.22968 10.3689 7.12449 10.3944 7.01744 10.398Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-icons-chevronright.mjs
var ChevronRightIcon = class _ChevronRightIcon extends BaseIcon {
  static ɵfac = /* @__PURE__ */ (() => {
    let ɵChevronRightIcon_BaseFactory;
    return function ChevronRightIcon_Factory(t) {
      return (ɵChevronRightIcon_BaseFactory || (ɵChevronRightIcon_BaseFactory = ɵɵgetInheritedFactory(_ChevronRightIcon)))(t || _ChevronRightIcon);
    };
  })();
  static ɵcmp = ɵɵdefineComponent({
    type: _ChevronRightIcon,
    selectors: [["ChevronRightIcon"]],
    standalone: true,
    features: [ɵɵInheritDefinitionFeature, ɵɵStandaloneFeature],
    decls: 2,
    vars: 5,
    consts: [["width", "14", "height", "14", "viewBox", "0 0 14 14", "fill", "none", "xmlns", "http://www.w3.org/2000/svg"], ["d", "M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z", "fill", "currentColor"]],
    template: function ChevronRightIcon_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵnamespaceSVG();
        ɵɵelementStart(0, "svg", 0);
        ɵɵelement(1, "path", 1);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.getClassNames());
        ɵɵattribute("aria-label", ctx.ariaLabel)("aria-hidden", ctx.ariaHidden)("role", ctx.role);
      }
    },
    encapsulation: 2
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(ChevronRightIcon, [{
    type: Component,
    args: [{
      selector: "ChevronRightIcon",
      standalone: true,
      imports: [BaseIcon],
      template: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" [attr.aria-label]="ariaLabel" [attr.aria-hidden]="ariaHidden" [attr.role]="role" [class]="getClassNames()">
            <path
                d="M4.38708 13C4.28408 13.0005 4.18203 12.9804 4.08691 12.9409C3.99178 12.9014 3.9055 12.8433 3.83313 12.7701C3.68634 12.6231 3.60388 12.4238 3.60388 12.2161C3.60388 12.0084 3.68634 11.8091 3.83313 11.6622L8.50507 6.99022L3.83313 2.31827C3.69467 2.16968 3.61928 1.97313 3.62287 1.77005C3.62645 1.56698 3.70872 1.37322 3.85234 1.22959C3.99596 1.08597 4.18972 1.00371 4.3928 1.00012C4.59588 0.996539 4.79242 1.07192 4.94102 1.21039L10.1669 6.43628C10.3137 6.58325 10.3962 6.78249 10.3962 6.99022C10.3962 7.19795 10.3137 7.39718 10.1669 7.54416L4.94102 12.7701C4.86865 12.8433 4.78237 12.9014 4.68724 12.9409C4.59212 12.9804 4.49007 13.0005 4.38708 13Z"
                fill="currentColor"
            />
        </svg>
    `
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-tooltip.mjs
var Tooltip = class _Tooltip {
  platformId;
  el;
  zone;
  config;
  renderer;
  viewContainer;
  /**
   * Position of the tooltip.
   * @group Props
   */
  tooltipPosition;
  /**
   * Event to show the tooltip.
   * @group Props
   */
  tooltipEvent = "hover";
  /**
   *  Target element to attach the overlay, valid values are "body", "target" or a local ng-F variable of another element (note: use binding with brackets for template variables, e.g. [appendTo]="mydiv" for a div element having #mydiv as variable name).
   * @group Props
   */
  appendTo;
  /**
   * Type of CSS position.
   * @group Props
   */
  positionStyle;
  /**
   * Style class of the tooltip.
   * @group Props
   */
  tooltipStyleClass;
  /**
   * Whether the z-index should be managed automatically to always go on top or have a fixed value.
   * @group Props
   */
  tooltipZIndex;
  /**
   * By default the tooltip contents are rendered as text. Set to false to support html tags in the content.
   * @group Props
   */
  escape = true;
  /**
   * Delay to show the tooltip in milliseconds.
   * @group Props
   */
  showDelay;
  /**
   * Delay to hide the tooltip in milliseconds.
   * @group Props
   */
  hideDelay;
  /**
   * Time to wait in milliseconds to hide the tooltip even it is active.
   * @group Props
   */
  life;
  /**
   * Specifies the additional vertical offset of the tooltip from its default position.
   * @group Props
   */
  positionTop;
  /**
   * Specifies the additional horizontal offset of the tooltip from its default position.
   * @group Props
   */
  positionLeft;
  /**
   * Whether to hide tooltip when hovering over tooltip content.
   * @group Props
   */
  autoHide = true;
  /**
   * Automatically adjusts the element position when there is not enough space on the selected position.
   * @group Props
   */
  fitContent = true;
  /**
   * Whether to hide tooltip on escape key press.
   * @group Props
   */
  hideOnEscape = true;
  /**
   * Content of the tooltip.
   * @group Props
   */
  content;
  /**
   * When present, it specifies that the component should be disabled.
   * @defaultValue false
   * @group Props
   */
  get disabled() {
    return this._disabled;
  }
  set disabled(val) {
    this._disabled = val;
    this.deactivate();
  }
  /**
   * Specifies the tooltip configuration options for the component.
   * @group Props
   */
  tooltipOptions;
  _tooltipOptions = {
    tooltipLabel: null,
    tooltipPosition: "right",
    tooltipEvent: "hover",
    appendTo: "body",
    positionStyle: null,
    tooltipStyleClass: null,
    tooltipZIndex: "auto",
    escape: true,
    disabled: null,
    showDelay: null,
    hideDelay: null,
    positionTop: null,
    positionLeft: null,
    life: null,
    autoHide: true,
    hideOnEscape: true,
    id: UniqueComponentId() + "_tooltip"
  };
  _disabled;
  container;
  styleClass;
  tooltipText;
  showTimeout;
  hideTimeout;
  active;
  mouseEnterListener;
  mouseLeaveListener;
  containerMouseleaveListener;
  clickListener;
  focusListener;
  blurListener;
  scrollHandler;
  resizeListener;
  constructor(platformId, el, zone, config, renderer, viewContainer) {
    this.platformId = platformId;
    this.el = el;
    this.zone = zone;
    this.config = config;
    this.renderer = renderer;
    this.viewContainer = viewContainer;
  }
  ngAfterViewInit() {
    if (isPlatformBrowser(this.platformId)) {
      this.zone.runOutsideAngular(() => {
        if (this.getOption("tooltipEvent") === "hover") {
          this.mouseEnterListener = this.onMouseEnter.bind(this);
          this.mouseLeaveListener = this.onMouseLeave.bind(this);
          this.clickListener = this.onInputClick.bind(this);
          this.el.nativeElement.addEventListener("mouseenter", this.mouseEnterListener);
          this.el.nativeElement.addEventListener("click", this.clickListener);
          this.el.nativeElement.addEventListener("mouseleave", this.mouseLeaveListener);
        } else if (this.getOption("tooltipEvent") === "focus") {
          this.focusListener = this.onFocus.bind(this);
          this.blurListener = this.onBlur.bind(this);
          let target = this.getTarget(this.el.nativeElement);
          target.addEventListener("focus", this.focusListener);
          target.addEventListener("blur", this.blurListener);
        }
      });
    }
  }
  ngOnChanges(simpleChange) {
    if (simpleChange.tooltipPosition) {
      this.setOption({
        tooltipPosition: simpleChange.tooltipPosition.currentValue
      });
    }
    if (simpleChange.tooltipEvent) {
      this.setOption({
        tooltipEvent: simpleChange.tooltipEvent.currentValue
      });
    }
    if (simpleChange.appendTo) {
      this.setOption({
        appendTo: simpleChange.appendTo.currentValue
      });
    }
    if (simpleChange.positionStyle) {
      this.setOption({
        positionStyle: simpleChange.positionStyle.currentValue
      });
    }
    if (simpleChange.tooltipStyleClass) {
      this.setOption({
        tooltipStyleClass: simpleChange.tooltipStyleClass.currentValue
      });
    }
    if (simpleChange.tooltipZIndex) {
      this.setOption({
        tooltipZIndex: simpleChange.tooltipZIndex.currentValue
      });
    }
    if (simpleChange.escape) {
      this.setOption({
        escape: simpleChange.escape.currentValue
      });
    }
    if (simpleChange.showDelay) {
      this.setOption({
        showDelay: simpleChange.showDelay.currentValue
      });
    }
    if (simpleChange.hideDelay) {
      this.setOption({
        hideDelay: simpleChange.hideDelay.currentValue
      });
    }
    if (simpleChange.life) {
      this.setOption({
        life: simpleChange.life.currentValue
      });
    }
    if (simpleChange.positionTop) {
      this.setOption({
        positionTop: simpleChange.positionTop.currentValue
      });
    }
    if (simpleChange.positionLeft) {
      this.setOption({
        positionLeft: simpleChange.positionLeft.currentValue
      });
    }
    if (simpleChange.disabled) {
      this.setOption({
        disabled: simpleChange.disabled.currentValue
      });
    }
    if (simpleChange.content) {
      this.setOption({
        tooltipLabel: simpleChange.content.currentValue
      });
      if (this.active) {
        if (simpleChange.content.currentValue) {
          if (this.container && this.container.offsetParent) {
            this.updateText();
            this.align();
          } else {
            this.show();
          }
        } else {
          this.hide();
        }
      }
    }
    if (simpleChange.autoHide) {
      this.setOption({
        autoHide: simpleChange.autoHide.currentValue
      });
    }
    if (simpleChange.id) {
      this.setOption({
        id: simpleChange.id.currentValue
      });
    }
    if (simpleChange.tooltipOptions) {
      this._tooltipOptions = __spreadValues(__spreadValues({}, this._tooltipOptions), simpleChange.tooltipOptions.currentValue);
      this.deactivate();
      if (this.active) {
        if (this.getOption("tooltipLabel")) {
          if (this.container && this.container.offsetParent) {
            this.updateText();
            this.align();
          } else {
            this.show();
          }
        } else {
          this.hide();
        }
      }
    }
  }
  isAutoHide() {
    return this.getOption("autoHide");
  }
  onMouseEnter(e) {
    if (!this.container && !this.showTimeout) {
      this.activate();
    }
  }
  onMouseLeave(e) {
    if (!this.isAutoHide()) {
      const valid = DomHandler.hasClass(e.relatedTarget, "p-tooltip") || DomHandler.hasClass(e.relatedTarget, "p-tooltip-text") || DomHandler.hasClass(e.relatedTarget, "p-tooltip-arrow");
      !valid && this.deactivate();
    } else {
      this.deactivate();
    }
  }
  onFocus(e) {
    this.activate();
  }
  onBlur(e) {
    this.deactivate();
  }
  onInputClick(e) {
    this.deactivate();
  }
  onPressEscape() {
    if (this.hideOnEscape) {
      this.deactivate();
    }
  }
  activate() {
    this.active = true;
    this.clearHideTimeout();
    if (this.getOption("showDelay"))
      this.showTimeout = setTimeout(() => {
        this.show();
      }, this.getOption("showDelay"));
    else
      this.show();
    if (this.getOption("life")) {
      let duration = this.getOption("showDelay") ? this.getOption("life") + this.getOption("showDelay") : this.getOption("life");
      this.hideTimeout = setTimeout(() => {
        this.hide();
      }, duration);
    }
  }
  deactivate() {
    this.active = false;
    this.clearShowTimeout();
    if (this.getOption("hideDelay")) {
      this.clearHideTimeout();
      this.hideTimeout = setTimeout(() => {
        this.hide();
      }, this.getOption("hideDelay"));
    } else {
      this.hide();
    }
  }
  create() {
    if (this.container) {
      this.clearHideTimeout();
      this.remove();
    }
    this.container = document.createElement("div");
    this.container.setAttribute("id", this.getOption("id"));
    this.container.setAttribute("role", "tooltip");
    let tooltipArrow = document.createElement("div");
    tooltipArrow.className = "p-tooltip-arrow";
    this.container.appendChild(tooltipArrow);
    this.tooltipText = document.createElement("div");
    this.tooltipText.className = "p-tooltip-text";
    this.updateText();
    if (this.getOption("positionStyle")) {
      this.container.style.position = this.getOption("positionStyle");
    }
    this.container.appendChild(this.tooltipText);
    if (this.getOption("appendTo") === "body")
      document.body.appendChild(this.container);
    else if (this.getOption("appendTo") === "target")
      DomHandler.appendChild(this.container, this.el.nativeElement);
    else
      DomHandler.appendChild(this.container, this.getOption("appendTo"));
    this.container.style.display = "inline-block";
    if (this.fitContent) {
      this.container.style.width = "fit-content";
    }
    if (this.isAutoHide()) {
      this.container.style.pointerEvents = "none";
    } else {
      this.container.style.pointerEvents = "unset";
      this.bindContainerMouseleaveListener();
    }
  }
  bindContainerMouseleaveListener() {
    if (!this.containerMouseleaveListener) {
      const targetEl = this.container ?? this.container.nativeElement;
      this.containerMouseleaveListener = this.renderer.listen(targetEl, "mouseleave", (e) => {
        this.deactivate();
      });
    }
  }
  unbindContainerMouseleaveListener() {
    if (this.containerMouseleaveListener) {
      this.bindContainerMouseleaveListener();
      this.containerMouseleaveListener = null;
    }
  }
  show() {
    if (!this.getOption("tooltipLabel") || this.getOption("disabled")) {
      return;
    }
    this.create();
    this.align();
    DomHandler.fadeIn(this.container, 250);
    if (this.getOption("tooltipZIndex") === "auto")
      zindexutils.set("tooltip", this.container, this.config.zIndex.tooltip);
    else
      this.container.style.zIndex = this.getOption("tooltipZIndex");
    this.bindDocumentResizeListener();
    this.bindScrollListener();
  }
  hide() {
    if (this.getOption("tooltipZIndex") === "auto") {
      zindexutils.clear(this.container);
    }
    this.remove();
  }
  updateText() {
    const content = this.getOption("tooltipLabel");
    if (content instanceof TemplateRef) {
      const embeddedViewRef = this.viewContainer.createEmbeddedView(content);
      embeddedViewRef.detectChanges();
      embeddedViewRef.rootNodes.forEach((node) => this.tooltipText.appendChild(node));
    } else if (this.getOption("escape")) {
      this.tooltipText.innerHTML = "";
      this.tooltipText.appendChild(document.createTextNode(content));
    } else {
      this.tooltipText.innerHTML = content;
    }
  }
  align() {
    let position = this.getOption("tooltipPosition");
    switch (position) {
      case "top":
        this.alignTop();
        if (this.isOutOfBounds()) {
          this.alignBottom();
          if (this.isOutOfBounds()) {
            this.alignRight();
            if (this.isOutOfBounds()) {
              this.alignLeft();
            }
          }
        }
        break;
      case "bottom":
        this.alignBottom();
        if (this.isOutOfBounds()) {
          this.alignTop();
          if (this.isOutOfBounds()) {
            this.alignRight();
            if (this.isOutOfBounds()) {
              this.alignLeft();
            }
          }
        }
        break;
      case "left":
        this.alignLeft();
        if (this.isOutOfBounds()) {
          this.alignRight();
          if (this.isOutOfBounds()) {
            this.alignTop();
            if (this.isOutOfBounds()) {
              this.alignBottom();
            }
          }
        }
        break;
      case "right":
        this.alignRight();
        if (this.isOutOfBounds()) {
          this.alignLeft();
          if (this.isOutOfBounds()) {
            this.alignTop();
            if (this.isOutOfBounds()) {
              this.alignBottom();
            }
          }
        }
        break;
    }
  }
  getHostOffset() {
    if (this.getOption("appendTo") === "body" || this.getOption("appendTo") === "target") {
      let offset = this.el.nativeElement.getBoundingClientRect();
      let targetLeft = offset.left + DomHandler.getWindowScrollLeft();
      let targetTop = offset.top + DomHandler.getWindowScrollTop();
      return {
        left: targetLeft,
        top: targetTop
      };
    } else {
      return {
        left: 0,
        top: 0
      };
    }
  }
  alignRight() {
    this.preAlign("right");
    let hostOffset = this.getHostOffset();
    let left = hostOffset.left + DomHandler.getOuterWidth(this.el.nativeElement);
    let top = hostOffset.top + (DomHandler.getOuterHeight(this.el.nativeElement) - DomHandler.getOuterHeight(this.container)) / 2;
    this.container.style.left = left + this.getOption("positionLeft") + "px";
    this.container.style.top = top + this.getOption("positionTop") + "px";
  }
  alignLeft() {
    this.preAlign("left");
    let hostOffset = this.getHostOffset();
    let left = hostOffset.left - DomHandler.getOuterWidth(this.container);
    let top = hostOffset.top + (DomHandler.getOuterHeight(this.el.nativeElement) - DomHandler.getOuterHeight(this.container)) / 2;
    this.container.style.left = left + this.getOption("positionLeft") + "px";
    this.container.style.top = top + this.getOption("positionTop") + "px";
  }
  alignTop() {
    this.preAlign("top");
    let hostOffset = this.getHostOffset();
    let left = hostOffset.left + (DomHandler.getOuterWidth(this.el.nativeElement) - DomHandler.getOuterWidth(this.container)) / 2;
    let top = hostOffset.top - DomHandler.getOuterHeight(this.container);
    this.container.style.left = left + this.getOption("positionLeft") + "px";
    this.container.style.top = top + this.getOption("positionTop") + "px";
  }
  alignBottom() {
    this.preAlign("bottom");
    let hostOffset = this.getHostOffset();
    let left = hostOffset.left + (DomHandler.getOuterWidth(this.el.nativeElement) - DomHandler.getOuterWidth(this.container)) / 2;
    let top = hostOffset.top + DomHandler.getOuterHeight(this.el.nativeElement);
    this.container.style.left = left + this.getOption("positionLeft") + "px";
    this.container.style.top = top + this.getOption("positionTop") + "px";
  }
  setOption(option) {
    this._tooltipOptions = __spreadValues(__spreadValues({}, this._tooltipOptions), option);
  }
  getOption(option) {
    return this._tooltipOptions[option];
  }
  getTarget(el) {
    return DomHandler.hasClass(el, "p-inputwrapper") ? DomHandler.findSingle(el, "input") : el;
  }
  preAlign(position) {
    this.container.style.left = "-999px";
    this.container.style.top = "-999px";
    let defaultClassName = "p-tooltip p-component p-tooltip-" + position;
    this.container.className = this.getOption("tooltipStyleClass") ? defaultClassName + " " + this.getOption("tooltipStyleClass") : defaultClassName;
  }
  isOutOfBounds() {
    let offset = this.container.getBoundingClientRect();
    let targetTop = offset.top;
    let targetLeft = offset.left;
    let width = DomHandler.getOuterWidth(this.container);
    let height = DomHandler.getOuterHeight(this.container);
    let viewport = DomHandler.getViewport();
    return targetLeft + width > viewport.width || targetLeft < 0 || targetTop < 0 || targetTop + height > viewport.height;
  }
  onWindowResize(e) {
    this.hide();
  }
  bindDocumentResizeListener() {
    this.zone.runOutsideAngular(() => {
      this.resizeListener = this.onWindowResize.bind(this);
      window.addEventListener("resize", this.resizeListener);
    });
  }
  unbindDocumentResizeListener() {
    if (this.resizeListener) {
      window.removeEventListener("resize", this.resizeListener);
      this.resizeListener = null;
    }
  }
  bindScrollListener() {
    if (!this.scrollHandler) {
      this.scrollHandler = new ConnectedOverlayScrollHandler(this.el.nativeElement, () => {
        if (this.container) {
          this.hide();
        }
      });
    }
    this.scrollHandler.bindScrollListener();
  }
  unbindScrollListener() {
    if (this.scrollHandler) {
      this.scrollHandler.unbindScrollListener();
    }
  }
  unbindEvents() {
    if (this.getOption("tooltipEvent") === "hover") {
      this.el.nativeElement.removeEventListener("mouseenter", this.mouseEnterListener);
      this.el.nativeElement.removeEventListener("mouseleave", this.mouseLeaveListener);
      this.el.nativeElement.removeEventListener("click", this.clickListener);
    } else if (this.getOption("tooltipEvent") === "focus") {
      let target = this.getTarget(this.el.nativeElement);
      target.removeEventListener("focus", this.focusListener);
      target.removeEventListener("blur", this.blurListener);
    }
    this.unbindDocumentResizeListener();
  }
  remove() {
    if (this.container && this.container.parentElement) {
      if (this.getOption("appendTo") === "body")
        document.body.removeChild(this.container);
      else if (this.getOption("appendTo") === "target")
        this.el.nativeElement.removeChild(this.container);
      else
        DomHandler.removeChild(this.container, this.getOption("appendTo"));
    }
    this.unbindDocumentResizeListener();
    this.unbindScrollListener();
    this.unbindContainerMouseleaveListener();
    this.clearTimeouts();
    this.container = null;
    this.scrollHandler = null;
  }
  clearShowTimeout() {
    if (this.showTimeout) {
      clearTimeout(this.showTimeout);
      this.showTimeout = null;
    }
  }
  clearHideTimeout() {
    if (this.hideTimeout) {
      clearTimeout(this.hideTimeout);
      this.hideTimeout = null;
    }
  }
  clearTimeouts() {
    this.clearShowTimeout();
    this.clearHideTimeout();
  }
  ngOnDestroy() {
    this.unbindEvents();
    if (this.container) {
      zindexutils.clear(this.container);
    }
    this.remove();
    if (this.scrollHandler) {
      this.scrollHandler.destroy();
      this.scrollHandler = null;
    }
  }
  static ɵfac = function Tooltip_Factory(t) {
    return new (t || _Tooltip)(ɵɵdirectiveInject(PLATFORM_ID), ɵɵdirectiveInject(ElementRef), ɵɵdirectiveInject(NgZone), ɵɵdirectiveInject(PrimeNGConfig), ɵɵdirectiveInject(Renderer2), ɵɵdirectiveInject(ViewContainerRef));
  };
  static ɵdir = ɵɵdefineDirective({
    type: _Tooltip,
    selectors: [["", "pTooltip", ""]],
    hostAttrs: [1, "p-element"],
    hostBindings: function Tooltip_HostBindings(rf, ctx) {
      if (rf & 1) {
        ɵɵlistener("keydown.escape", function Tooltip_keydown_escape_HostBindingHandler($event) {
          return ctx.onPressEscape($event);
        }, false, ɵɵresolveDocument);
      }
    },
    inputs: {
      tooltipPosition: "tooltipPosition",
      tooltipEvent: "tooltipEvent",
      appendTo: "appendTo",
      positionStyle: "positionStyle",
      tooltipStyleClass: "tooltipStyleClass",
      tooltipZIndex: "tooltipZIndex",
      escape: "escape",
      showDelay: "showDelay",
      hideDelay: "hideDelay",
      life: "life",
      positionTop: "positionTop",
      positionLeft: "positionLeft",
      autoHide: "autoHide",
      fitContent: "fitContent",
      hideOnEscape: "hideOnEscape",
      content: [InputFlags.None, "pTooltip", "content"],
      disabled: [InputFlags.None, "tooltipDisabled", "disabled"],
      tooltipOptions: "tooltipOptions"
    },
    features: [ɵɵNgOnChangesFeature]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(Tooltip, [{
    type: Directive,
    args: [{
      selector: "[pTooltip]",
      host: {
        class: "p-element"
      }
    }]
  }], () => [{
    type: void 0,
    decorators: [{
      type: Inject,
      args: [PLATFORM_ID]
    }]
  }, {
    type: ElementRef
  }, {
    type: NgZone
  }, {
    type: PrimeNGConfig
  }, {
    type: Renderer2
  }, {
    type: ViewContainerRef
  }], {
    tooltipPosition: [{
      type: Input
    }],
    tooltipEvent: [{
      type: Input
    }],
    appendTo: [{
      type: Input
    }],
    positionStyle: [{
      type: Input
    }],
    tooltipStyleClass: [{
      type: Input
    }],
    tooltipZIndex: [{
      type: Input
    }],
    escape: [{
      type: Input
    }],
    showDelay: [{
      type: Input
    }],
    hideDelay: [{
      type: Input
    }],
    life: [{
      type: Input
    }],
    positionTop: [{
      type: Input
    }],
    positionLeft: [{
      type: Input
    }],
    autoHide: [{
      type: Input
    }],
    fitContent: [{
      type: Input
    }],
    hideOnEscape: [{
      type: Input
    }],
    content: [{
      type: Input,
      args: ["pTooltip"]
    }],
    disabled: [{
      type: Input,
      args: ["tooltipDisabled"]
    }],
    tooltipOptions: [{
      type: Input
    }],
    onPressEscape: [{
      type: HostListener,
      args: ["document:keydown.escape", ["$event"]]
    }]
  });
})();
var TooltipModule = class _TooltipModule {
  static ɵfac = function TooltipModule_Factory(t) {
    return new (t || _TooltipModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _TooltipModule,
    declarations: [Tooltip],
    imports: [CommonModule],
    exports: [Tooltip]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(TooltipModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule],
      exports: [Tooltip],
      declarations: [Tooltip]
    }]
  }], null, null);
})();

// node_modules/primeng/fesm2022/primeng-panelmenu.mjs
var _c03 = ["list"];
function PanelMenuSub_ng_template_2_li_0_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "li", 5);
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_ng_container_1_AngleDownIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "AngleDownIcon", 20);
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(6).$implicit;
    const ctx_r19 = ɵɵnextContext();
    ɵɵproperty("styleClass", "p-submenu-icon")("ngStyle", ctx_r19.getItemProp(processedItem_r2, "iconStyle"));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_ng_container_1_AngleRightIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "AngleRightIcon", 20);
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(6).$implicit;
    const ctx_r20 = ɵɵnextContext();
    ɵɵproperty("styleClass", "p-submenu-icon")("ngStyle", ctx_r20.getItemProp(processedItem_r2, "iconStyle"));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_ng_container_1_AngleDownIcon_1_Template, 1, 2, "AngleDownIcon", 19)(2, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_ng_container_1_AngleRightIcon_2_Template, 1, 2, "AngleRightIcon", 19);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(5).$implicit;
    const ctx_r17 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r17.isItemActive(processedItem_r2));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r17.isItemActive(processedItem_r2));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_2_ng_template_0_Template(rf, ctx) {
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_ng_container_1_Template, 3, 2, "ng-container", 8)(2, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_2_Template, 1, 0, null, 18);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r11 = ɵɵnextContext(5);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r11.panelMenu.submenuIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r11.panelMenu.submenuIconTemplate);
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 21);
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(4).$implicit;
    const ctx_r12 = ɵɵnextContext();
    ɵɵproperty("ngClass", processedItem_r2.icon)("ngStyle", ctx_r12.getItemProp(processedItem_r2, "iconStyle"));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 22);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(4).$implicit;
    const ctx_r13 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r13.getItemProp(processedItem_r2, "label"));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 23);
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(4).$implicit;
    const ctx_r14 = ɵɵnextContext();
    ɵɵproperty("innerHTML", ctx_r14.getItemProp(processedItem_r2, "label"), ɵɵsanitizeHtml);
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_span_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 24);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(4).$implicit;
    ɵɵproperty("ngClass", processedItem_r2.badgeStyleClass);
    ɵɵadvance();
    ɵɵtextInterpolate(processedItem_r2.badge);
  }
}
var _c1 = (a0) => ({
  "p-disabled": a0
});
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 13);
    ɵɵtemplate(1, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_container_1_Template, 3, 2, "ng-container", 8)(2, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_span_2_Template, 1, 2, "span", 14)(3, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_span_3_Template, 2, 1, "span", 15)(4, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_ng_template_4_Template, 1, 1, "ng-template", null, 16, ɵɵtemplateRefExtractor)(6, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_span_6_Template, 2, 2, "span", 17);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const _r15 = ɵɵreference(5);
    const processedItem_r2 = ɵɵnextContext(3).$implicit;
    const ctx_r9 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction1(10, _c1, ctx_r9.getItemProp(processedItem_r2, "disabled")))("target", ctx_r9.getItemProp(processedItem_r2, "target"));
    ɵɵattribute("href", ctx_r9.getItemProp(processedItem_r2, "url"), ɵɵsanitizeUrl)("data-pc-section", "action")("tabindex", !!ctx_r9.parentExpanded ? "0" : "-1");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r9.isItemGroup(processedItem_r2));
    ɵɵadvance();
    ɵɵproperty("ngIf", processedItem_r2.icon);
    ɵɵadvance();
    ɵɵproperty("ngIf", (processedItem_r2.item == null ? null : processedItem_r2.item.escape) !== false)("ngIfElse", _r15);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", processedItem_r2.badge);
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_ng_container_1_AngleDownIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "AngleDownIcon", 20);
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(6).$implicit;
    const ctx_r38 = ɵɵnextContext();
    ɵɵproperty("styleClass", "p-submenu-icon")("ngStyle", ctx_r38.getItemProp(processedItem_r2, "iconStyle"));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_ng_container_1_AngleRightIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "AngleRightIcon", 20);
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(6).$implicit;
    const ctx_r39 = ɵɵnextContext();
    ɵɵproperty("styleClass", "p-submenu-icon")("ngStyle", ctx_r39.getItemProp(processedItem_r2, "iconStyle"));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_ng_container_1_AngleDownIcon_1_Template, 1, 2, "AngleDownIcon", 19)(2, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_ng_container_1_AngleRightIcon_2_Template, 1, 2, "AngleRightIcon", 19);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(5).$implicit;
    const ctx_r36 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r36.isItemActive(processedItem_r2));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r36.isItemActive(processedItem_r2));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_2_ng_template_0_Template(rf, ctx) {
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_ng_container_1_Template, 3, 2, "ng-container", 8)(2, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_2_Template, 1, 0, null, 18);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r30 = ɵɵnextContext(5);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r30.panelMenu.submenuIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r30.panelMenu.submenuIconTemplate);
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 21);
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(4).$implicit;
    const ctx_r31 = ɵɵnextContext();
    ɵɵproperty("ngClass", processedItem_r2.icon)("ngStyle", ctx_r31.getItemProp(processedItem_r2, "iconStyle"));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 22);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(4).$implicit;
    const ctx_r32 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r32.getItemProp(processedItem_r2, "label"));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 23);
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(4).$implicit;
    const ctx_r33 = ɵɵnextContext();
    ɵɵproperty("innerHTML", ctx_r33.getItemProp(processedItem_r2, "label"), ɵɵsanitizeHtml);
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_span_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 24);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(4).$implicit;
    const ctx_r35 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r35.getItemProp(processedItem_r2, "badgeStyleClass"));
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r35.getItemProp(processedItem_r2, "badge"));
  }
}
var _c2 = () => ({
  exact: false
});
function PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 25);
    ɵɵtemplate(1, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_container_1_Template, 3, 2, "ng-container", 8)(2, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_span_2_Template, 1, 2, "span", 14)(3, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_span_3_Template, 2, 1, "span", 15)(4, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_ng_template_4_Template, 1, 1, "ng-template", null, 26, ɵɵtemplateRefExtractor)(6, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_span_6_Template, 2, 2, "span", 17);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const _r34 = ɵɵreference(5);
    const processedItem_r2 = ɵɵnextContext(3).$implicit;
    const ctx_r10 = ɵɵnextContext();
    ɵɵproperty("routerLink", ctx_r10.getItemProp(processedItem_r2, "routerLink"))("queryParams", ctx_r10.getItemProp(processedItem_r2, "queryParams"))("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", ctx_r10.getItemProp(processedItem_r2, "routerLinkActiveOptions") || ɵɵpureFunction0(20, _c2))("ngClass", ɵɵpureFunction1(21, _c1, ctx_r10.getItemProp(processedItem_r2, "disabled")))("target", ctx_r10.getItemProp(processedItem_r2, "target"))("fragment", ctx_r10.getItemProp(processedItem_r2, "fragment"))("queryParamsHandling", ctx_r10.getItemProp(processedItem_r2, "queryParamsHandling"))("preserveFragment", ctx_r10.getItemProp(processedItem_r2, "preserveFragment"))("skipLocationChange", ctx_r10.getItemProp(processedItem_r2, "skipLocationChange"))("replaceUrl", ctx_r10.getItemProp(processedItem_r2, "replaceUrl"))("state", ctx_r10.getItemProp(processedItem_r2, "state"));
    ɵɵattribute("title", ctx_r10.getItemProp(processedItem_r2, "title"))("data-pc-section", "action")("tabindex", !!ctx_r10.parentExpanded ? "0" : "-1");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r10.isItemGroup(processedItem_r2));
    ɵɵadvance();
    ɵɵproperty("ngIf", processedItem_r2.icon);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r10.getItemProp(processedItem_r2, "escape") !== false)("ngIfElse", _r34);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", processedItem_r2.badge);
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_1_Template, 7, 12, "a", 11)(2, PanelMenuSub_ng_template_2_li_1_ng_container_2_a_2_Template, 7, 23, "a", 12);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(2).$implicit;
    const ctx_r6 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r6.getItemProp(processedItem_r2, "routerLink"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r6.getItemProp(processedItem_r2, "routerLink"));
  }
}
function PanelMenuSub_ng_template_2_li_1_ng_container_3_1_ng_template_0_Template(rf, ctx) {
}
function PanelMenuSub_ng_template_2_li_1_ng_container_3_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PanelMenuSub_ng_template_2_li_1_ng_container_3_1_ng_template_0_Template, 0, 0, "ng-template");
  }
}
var _c3 = (a0) => ({
  $implicit: a0
});
function PanelMenuSub_ng_template_2_li_1_ng_container_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PanelMenuSub_ng_template_2_li_1_ng_container_3_1_Template, 1, 0, null, 27);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(2).$implicit;
    const ctx_r7 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r7.itemTemplate)("ngTemplateOutletContext", ɵɵpureFunction1(2, _c3, processedItem_r2.item));
  }
}
function PanelMenuSub_ng_template_2_li_1_p_panelMenuSub_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r54 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "p-panelMenuSub", 28);
    ɵɵlistener("itemToggle", function PanelMenuSub_ng_template_2_li_1_p_panelMenuSub_5_Template_p_panelMenuSub_itemToggle_0_listener($event) {
      ɵɵrestoreView(_r54);
      const ctx_r53 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r53.onItemToggle($event));
    });
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const processedItem_r2 = ɵɵnextContext(2).$implicit;
    const ctx_r8 = ɵɵnextContext();
    ɵɵproperty("id", ctx_r8.getItemId(processedItem_r2) + "_list")("panelId", ctx_r8.panelId)("items", processedItem_r2.items)("itemTemplate", ctx_r8.itemTemplate)("transitionOptions", ctx_r8.transitionOptions)("focusedItemId", ctx_r8.focusedItemId)("activeItemPath", ctx_r8.activeItemPath)("level", ctx_r8.level + 1)("parentExpanded", !!ctx_r8.parentExpanded && ctx_r8.isItemExpanded(processedItem_r2));
  }
}
function PanelMenuSub_ng_template_2_li_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r58 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "li", 6)(1, "div", 7);
    ɵɵlistener("click", function PanelMenuSub_ng_template_2_li_1_Template_div_click_1_listener($event) {
      ɵɵrestoreView(_r58);
      const processedItem_r2 = ɵɵnextContext().$implicit;
      const ctx_r56 = ɵɵnextContext();
      return ɵɵresetView(ctx_r56.onItemClick($event, processedItem_r2));
    });
    ɵɵtemplate(2, PanelMenuSub_ng_template_2_li_1_ng_container_2_Template, 3, 2, "ng-container", 8)(3, PanelMenuSub_ng_template_2_li_1_ng_container_3_Template, 2, 4, "ng-container", 8);
    ɵɵelementEnd();
    ɵɵelementStart(4, "div", 9);
    ɵɵtemplate(5, PanelMenuSub_ng_template_2_li_1_p_panelMenuSub_5_Template, 1, 9, "p-panelMenuSub", 10);
    ɵɵelementEnd()();
  }
  if (rf & 2) {
    const ctx_r59 = ɵɵnextContext();
    const processedItem_r2 = ctx_r59.$implicit;
    const index_r3 = ctx_r59.index;
    const ctx_r5 = ɵɵnextContext();
    ɵɵclassMap(ctx_r5.getItemProp(processedItem_r2, "styleClass"));
    ɵɵclassProp("p-hidden", processedItem_r2.visible === false)("p-focus", ctx_r5.isItemFocused(processedItem_r2) && !ctx_r5.isItemDisabled(processedItem_r2));
    ɵɵproperty("ngClass", ctx_r5.getItemClass(processedItem_r2))("ngStyle", ctx_r5.getItemProp(processedItem_r2, "style"))("pTooltip", ctx_r5.getItemProp(processedItem_r2, "tooltip"))("tooltipOptions", ctx_r5.getItemProp(processedItem_r2, "tooltipOptions"));
    ɵɵattribute("id", ctx_r5.getItemId(processedItem_r2))("aria-label", ctx_r5.getItemProp(processedItem_r2, "label"))("aria-expanded", ctx_r5.isItemGroup(processedItem_r2) ? ctx_r5.isItemActive(processedItem_r2) : void 0)("aria-level", ctx_r5.level + 1)("aria-setsize", ctx_r5.getAriaSetSize())("aria-posinset", ctx_r5.getAriaPosInset(index_r3))("data-p-disabled", ctx_r5.isItemDisabled(processedItem_r2));
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r5.itemTemplate);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r5.itemTemplate);
    ɵɵadvance();
    ɵɵproperty("@submenu", ctx_r5.getAnimation(processedItem_r2));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r5.isItemVisible(processedItem_r2) && ctx_r5.isItemGroup(processedItem_r2));
  }
}
function PanelMenuSub_ng_template_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PanelMenuSub_ng_template_2_li_0_Template, 1, 0, "li", 3)(1, PanelMenuSub_ng_template_2_li_1_Template, 6, 21, "li", 4);
  }
  if (rf & 2) {
    const processedItem_r2 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵproperty("ngIf", processedItem_r2.separator);
    ɵɵadvance();
    ɵɵproperty("ngIf", !processedItem_r2.separator && ctx_r1.isItemVisible(processedItem_r2));
  }
}
var _c4 = (a1) => ({
  "p-submenu-list": true,
  "p-panelmenu-root-list": a1
});
var _c5 = ["submenu"];
var _c6 = ["container"];
function PanelMenu_ng_container_2_div_1_a_3_ng_container_1_ng_container_1_ChevronDownIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronDownIcon", 18);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-submenu-icon");
  }
}
function PanelMenu_ng_container_2_div_1_a_3_ng_container_1_ng_container_1_ChevronRightIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronRightIcon", 18);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-submenu-icon");
  }
}
function PanelMenu_ng_container_2_div_1_a_3_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PanelMenu_ng_container_2_div_1_a_3_ng_container_1_ng_container_1_ChevronDownIcon_1_Template, 1, 1, "ChevronDownIcon", 17)(2, PanelMenu_ng_container_2_div_1_a_3_ng_container_1_ng_container_1_ChevronRightIcon_2_Template, 1, 1, "ChevronRightIcon", 17);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r2 = ɵɵnextContext(4).$implicit;
    const ctx_r16 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r16.isItemActive(item_r2));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r16.isItemActive(item_r2));
  }
}
function PanelMenu_ng_container_2_div_1_a_3_ng_container_1_2_ng_template_0_Template(rf, ctx) {
}
function PanelMenu_ng_container_2_div_1_a_3_ng_container_1_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PanelMenu_ng_container_2_div_1_a_3_ng_container_1_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function PanelMenu_ng_container_2_div_1_a_3_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PanelMenu_ng_container_2_div_1_a_3_ng_container_1_ng_container_1_Template, 3, 2, "ng-container", 11)(2, PanelMenu_ng_container_2_div_1_a_3_ng_container_1_2_Template, 1, 0, null, 16);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r10 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r10.submenuIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r10.submenuIconTemplate);
  }
}
function PanelMenu_ng_container_2_div_1_a_3_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 19);
  }
  if (rf & 2) {
    const item_r2 = ɵɵnextContext(3).$implicit;
    const ctx_r11 = ɵɵnextContext();
    ɵɵproperty("ngClass", item_r2.icon)("ngStyle", ctx_r11.getItemProp(item_r2, "iconStyle"));
  }
}
function PanelMenu_ng_container_2_div_1_a_3_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 20);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r2 = ɵɵnextContext(3).$implicit;
    const ctx_r12 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r12.getItemProp(item_r2, "label"));
  }
}
function PanelMenu_ng_container_2_div_1_a_3_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 21);
  }
  if (rf & 2) {
    const item_r2 = ɵɵnextContext(3).$implicit;
    const ctx_r13 = ɵɵnextContext();
    ɵɵproperty("innerHTML", ctx_r13.getItemProp(item_r2, "label"), ɵɵsanitizeHtml);
  }
}
function PanelMenu_ng_container_2_div_1_a_3_span_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 22);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r2 = ɵɵnextContext(3).$implicit;
    const ctx_r15 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r15.getItemProp(item_r2, "badgeStyleClass"));
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r15.getItemProp(item_r2, "badge"));
  }
}
function PanelMenu_ng_container_2_div_1_a_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 10);
    ɵɵtemplate(1, PanelMenu_ng_container_2_div_1_a_3_ng_container_1_Template, 3, 2, "ng-container", 11)(2, PanelMenu_ng_container_2_div_1_a_3_span_2_Template, 1, 2, "span", 12)(3, PanelMenu_ng_container_2_div_1_a_3_span_3_Template, 2, 1, "span", 13)(4, PanelMenu_ng_container_2_div_1_a_3_ng_template_4_Template, 1, 1, "ng-template", null, 14, ɵɵtemplateRefExtractor)(6, PanelMenu_ng_container_2_div_1_a_3_span_6_Template, 2, 2, "span", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const _r14 = ɵɵreference(5);
    const item_r2 = ɵɵnextContext(2).$implicit;
    const ctx_r7 = ɵɵnextContext();
    ɵɵproperty("target", ctx_r7.getItemProp(item_r2, "target"));
    ɵɵattribute("href", ctx_r7.getItemProp(item_r2, "url"), ɵɵsanitizeUrl)("tabindex", -1)("title", ctx_r7.getItemProp(item_r2, "title"))("data-pc-section", "headeraction");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r7.isItemGroup(item_r2));
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r2.icon);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r7.getItemProp(item_r2, "escape") !== false)("ngIfElse", _r14);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r7.getItemProp(item_r2, "badge"));
  }
}
function PanelMenu_ng_container_2_div_1_a_4_ng_container_1_ng_container_1_ChevronDownIcon_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronDownIcon", 18);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-submenu-icon");
  }
}
function PanelMenu_ng_container_2_div_1_a_4_ng_container_1_ng_container_1_ChevronRightIcon_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "ChevronRightIcon", 18);
  }
  if (rf & 2) {
    ɵɵproperty("styleClass", "p-submenu-icon");
  }
}
function PanelMenu_ng_container_2_div_1_a_4_ng_container_1_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PanelMenu_ng_container_2_div_1_a_4_ng_container_1_ng_container_1_ChevronDownIcon_1_Template, 1, 1, "ChevronDownIcon", 17)(2, PanelMenu_ng_container_2_div_1_a_4_ng_container_1_ng_container_1_ChevronRightIcon_2_Template, 1, 1, "ChevronRightIcon", 17);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r2 = ɵɵnextContext(4).$implicit;
    const ctx_r33 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r33.isItemActive(item_r2));
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r33.isItemActive(item_r2));
  }
}
function PanelMenu_ng_container_2_div_1_a_4_ng_container_1_2_ng_template_0_Template(rf, ctx) {
}
function PanelMenu_ng_container_2_div_1_a_4_ng_container_1_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵtemplate(0, PanelMenu_ng_container_2_div_1_a_4_ng_container_1_2_ng_template_0_Template, 0, 0, "ng-template");
  }
}
function PanelMenu_ng_container_2_div_1_a_4_ng_container_1_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PanelMenu_ng_container_2_div_1_a_4_ng_container_1_ng_container_1_Template, 3, 2, "ng-container", 11)(2, PanelMenu_ng_container_2_div_1_a_4_ng_container_1_2_Template, 1, 0, null, 16);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const ctx_r27 = ɵɵnextContext(4);
    ɵɵadvance();
    ɵɵproperty("ngIf", !ctx_r27.submenuIconTemplate);
    ɵɵadvance();
    ɵɵproperty("ngTemplateOutlet", ctx_r27.submenuIconTemplate);
  }
}
function PanelMenu_ng_container_2_div_1_a_4_span_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 19);
  }
  if (rf & 2) {
    const item_r2 = ɵɵnextContext(3).$implicit;
    const ctx_r28 = ɵɵnextContext();
    ɵɵproperty("ngClass", item_r2.icon)("ngStyle", ctx_r28.getItemProp(item_r2, "iconStyle"));
  }
}
function PanelMenu_ng_container_2_div_1_a_4_span_3_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 20);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r2 = ɵɵnextContext(3).$implicit;
    const ctx_r29 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r29.getItemProp(item_r2, "label"));
  }
}
function PanelMenu_ng_container_2_div_1_a_4_ng_template_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelement(0, "span", 21);
  }
  if (rf & 2) {
    const item_r2 = ɵɵnextContext(3).$implicit;
    const ctx_r30 = ɵɵnextContext();
    ɵɵproperty("innerHTML", ctx_r30.getItemProp(item_r2, "label"), ɵɵsanitizeHtml);
  }
}
function PanelMenu_ng_container_2_div_1_a_4_span_6_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "span", 22);
    ɵɵtext(1);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const item_r2 = ɵɵnextContext(3).$implicit;
    const ctx_r32 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r32.getItemProp(item_r2, "badgeStyleClass"));
    ɵɵadvance();
    ɵɵtextInterpolate(ctx_r32.getItemProp(item_r2, "badge"));
  }
}
function PanelMenu_ng_container_2_div_1_a_4_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementStart(0, "a", 23);
    ɵɵtemplate(1, PanelMenu_ng_container_2_div_1_a_4_ng_container_1_Template, 3, 2, "ng-container", 11)(2, PanelMenu_ng_container_2_div_1_a_4_span_2_Template, 1, 2, "span", 12)(3, PanelMenu_ng_container_2_div_1_a_4_span_3_Template, 2, 1, "span", 13)(4, PanelMenu_ng_container_2_div_1_a_4_ng_template_4_Template, 1, 1, "ng-template", null, 24, ɵɵtemplateRefExtractor)(6, PanelMenu_ng_container_2_div_1_a_4_span_6_Template, 2, 2, "span", 15);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const _r31 = ɵɵreference(5);
    const item_r2 = ɵɵnextContext(2).$implicit;
    const ctx_r8 = ɵɵnextContext();
    ɵɵproperty("routerLink", ctx_r8.getItemProp(item_r2, "routerLink"))("queryParams", ctx_r8.getItemProp(item_r2, "queryParams"))("routerLinkActive", "p-menuitem-link-active")("routerLinkActiveOptions", ctx_r8.getItemProp(item_r2, "routerLinkActiveOptions") || ɵɵpureFunction0(18, _c2))("target", ctx_r8.getItemProp(item_r2, "target"))("fragment", ctx_r8.getItemProp(item_r2, "fragment"))("queryParamsHandling", ctx_r8.getItemProp(item_r2, "queryParamsHandling"))("preserveFragment", ctx_r8.getItemProp(item_r2, "preserveFragment"))("skipLocationChange", ctx_r8.getItemProp(item_r2, "skipLocationChange"))("replaceUrl", ctx_r8.getItemProp(item_r2, "replaceUrl"))("state", ctx_r8.getItemProp(item_r2, "state"));
    ɵɵattribute("tabindex", -1)("data-pc-section", "headeraction");
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r8.isItemGroup(item_r2));
    ɵɵadvance();
    ɵɵproperty("ngIf", item_r2.icon);
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r8.getItemProp(item_r2, "escape") !== false)("ngIfElse", _r31);
    ɵɵadvance(3);
    ɵɵproperty("ngIf", ctx_r8.getItemProp(item_r2, "badge"));
  }
}
var _c7 = (a0) => ({
  "p-panelmenu-expanded": a0
});
function PanelMenu_ng_container_2_div_1_div_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r45 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 25);
    ɵɵlistener("@rootItem.done", function PanelMenu_ng_container_2_div_1_div_5_Template_div_animation_rootItem_done_0_listener() {
      ɵɵrestoreView(_r45);
      const ctx_r44 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r44.onToggleDone());
    });
    ɵɵelementStart(1, "div", 26)(2, "p-panelMenuList", 27);
    ɵɵlistener("headerFocus", function PanelMenu_ng_container_2_div_1_div_5_Template_p_panelMenuList_headerFocus_2_listener($event) {
      ɵɵrestoreView(_r45);
      const ctx_r46 = ɵɵnextContext(3);
      return ɵɵresetView(ctx_r46.updateFocusedHeader($event));
    });
    ɵɵelementEnd()()();
  }
  if (rf & 2) {
    const ctx_r47 = ɵɵnextContext(2);
    const item_r2 = ctx_r47.$implicit;
    const i_r5 = ctx_r47.index;
    const ctx_r9 = ɵɵnextContext();
    ɵɵproperty("ngClass", ɵɵpureFunction1(14, _c7, ctx_r9.isItemActive(item_r2)))("@rootItem", ctx_r9.getAnimation(item_r2));
    ɵɵattribute("id", ctx_r9.getContentId(item_r2, i_r5))("aria-labelledby", ctx_r9.getHeaderId(item_r2, i_r5))("data-pc-section", "toggleablecontent");
    ɵɵadvance();
    ɵɵattribute("data-pc-section", "menucontent");
    ɵɵadvance();
    ɵɵproperty("panelId", ctx_r9.getPanelId(i_r5, item_r2))("items", ctx_r9.getItemProp(item_r2, "items"))("itemTemplate", ctx_r9.itemTemplate)("transitionOptions", ctx_r9.transitionOptions)("root", true)("activeItem", ctx_r9.activeItem())("tabindex", ctx_r9.tabindex)("parentExpanded", ctx_r9.isItemActive(item_r2));
  }
}
var _c8 = (a1, a2) => ({
  "p-component p-panelmenu-header": true,
  "p-highlight": a1,
  "p-disabled": a2
});
function PanelMenu_ng_container_2_div_1_Template(rf, ctx) {
  if (rf & 1) {
    const _r50 = ɵɵgetCurrentView();
    ɵɵelementStart(0, "div", 4)(1, "div", 5);
    ɵɵlistener("click", function PanelMenu_ng_container_2_div_1_Template_div_click_1_listener($event) {
      ɵɵrestoreView(_r50);
      const ctx_r49 = ɵɵnextContext();
      const item_r2 = ctx_r49.$implicit;
      const i_r5 = ctx_r49.index;
      const ctx_r48 = ɵɵnextContext();
      return ɵɵresetView(ctx_r48.onHeaderClick($event, item_r2, i_r5));
    })("keydown", function PanelMenu_ng_container_2_div_1_Template_div_keydown_1_listener($event) {
      ɵɵrestoreView(_r50);
      const ctx_r52 = ɵɵnextContext();
      const item_r2 = ctx_r52.$implicit;
      const i_r5 = ctx_r52.index;
      const ctx_r51 = ɵɵnextContext();
      return ɵɵresetView(ctx_r51.onHeaderKeyDown($event, item_r2, i_r5));
    });
    ɵɵelementStart(2, "div", 6);
    ɵɵtemplate(3, PanelMenu_ng_container_2_div_1_a_3_Template, 7, 10, "a", 7)(4, PanelMenu_ng_container_2_div_1_a_4_Template, 7, 19, "a", 8);
    ɵɵelementEnd()();
    ɵɵtemplate(5, PanelMenu_ng_container_2_div_1_div_5_Template, 3, 16, "div", 9);
    ɵɵelementEnd();
  }
  if (rf & 2) {
    const ctx_r53 = ɵɵnextContext();
    const item_r2 = ctx_r53.$implicit;
    const i_r5 = ctx_r53.index;
    const ctx_r6 = ɵɵnextContext();
    ɵɵproperty("ngClass", ctx_r6.getItemProp(item_r2, "headerClass"))("ngStyle", ctx_r6.getItemProp(item_r2, "style"));
    ɵɵattribute("data-pc-section", "panel");
    ɵɵadvance();
    ɵɵclassMap(ctx_r6.getItemProp(item_r2, "styleClass"));
    ɵɵproperty("ngClass", ɵɵpureFunction2(21, _c8, ctx_r6.isItemActive(item_r2), ctx_r6.isItemDisabled(item_r2)))("ngStyle", ctx_r6.getItemProp(item_r2, "style"))("pTooltip", ctx_r6.getItemProp(item_r2, "tooltip"))("tabindex", 0)("tooltipOptions", ctx_r6.getItemProp(item_r2, "tooltipOptions"));
    ɵɵattribute("id", ctx_r6.getHeaderId(item_r2, i_r5))("aria-expanded", ctx_r6.isItemActive(item_r2))("aria-label", ctx_r6.getItemProp(item_r2, "label"))("aria-controls", ctx_r6.getContentId(item_r2, i_r5))("aria-disabled", ctx_r6.isItemDisabled(item_r2))("data-p-highlight", ctx_r6.isItemActive(item_r2))("data-p-disabled", ctx_r6.isItemDisabled(item_r2))("data-pc-section", "header");
    ɵɵadvance(2);
    ɵɵproperty("ngIf", !ctx_r6.getItemProp(item_r2, "routerLink"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r6.getItemProp(item_r2, "routerLink"));
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r6.isItemGroup(item_r2));
  }
}
function PanelMenu_ng_container_2_Template(rf, ctx) {
  if (rf & 1) {
    ɵɵelementContainerStart(0);
    ɵɵtemplate(1, PanelMenu_ng_container_2_div_1_Template, 6, 24, "div", 3);
    ɵɵelementContainerEnd();
  }
  if (rf & 2) {
    const item_r2 = ctx.$implicit;
    const ctx_r1 = ɵɵnextContext();
    ɵɵadvance();
    ɵɵproperty("ngIf", ctx_r1.isItemVisible(item_r2));
  }
}
var _c9 = "@layer primeng{.p-panelmenu .p-panelmenu-header-action{display:flex;align-items:center;-webkit-user-select:none;user-select:none;cursor:pointer;position:relative;text-decoration:none}.p-panelmenu .p-panelmenu-header-action:focus{z-index:1}.p-panelmenu .p-submenu-list{margin:0;padding:0;list-style:none}.p-panelmenu .p-menuitem-link{display:flex;align-items:center;-webkit-user-select:none;user-select:none;cursor:pointer;text-decoration:none;position:relative;overflow:hidden;outline:none}.p-panelmenu .p-menuitem-text{line-height:1}.p-panelmenu-expanded.p-toggleable-content:not(.ng-animating),.p-panelmenu .p-submenu-expanded:not(.ng-animating){overflow:visible}.p-panelmenu .p-toggleable-content,.p-panelmenu .p-submenu-list{overflow:hidden}}\n";
var PanelMenuSub = class _PanelMenuSub {
  panelMenu;
  el;
  panelId;
  focusedItemId;
  items;
  itemTemplate;
  level = 0;
  activeItemPath;
  root;
  tabindex;
  transitionOptions;
  parentExpanded;
  itemToggle = new EventEmitter();
  menuFocus = new EventEmitter();
  menuBlur = new EventEmitter();
  menuKeyDown = new EventEmitter();
  listViewChild;
  constructor(panelMenu, el) {
    this.panelMenu = panelMenu;
    this.el = el;
  }
  getItemId(processedItem) {
    return processedItem.item?.id ?? `${this.panelId}_${processedItem.key}`;
  }
  getItemKey(processedItem) {
    return this.getItemId(processedItem);
  }
  getItemClass(processedItem) {
    return {
      "p-menuitem": true,
      "p-disabled": this.isItemDisabled(processedItem)
    };
  }
  getItemProp(processedItem, name, params) {
    return processedItem && processedItem.item ? ObjectUtils.getItemValue(processedItem.item[name], params) : void 0;
  }
  getItemLabel(processedItem) {
    return this.getItemProp(processedItem, "label");
  }
  isItemExpanded(processedItem) {
    return processedItem.expanded;
  }
  isItemActive(processedItem) {
    return this.isItemExpanded(processedItem) || this.activeItemPath.some((path) => path && path.key === processedItem.key);
  }
  isItemVisible(processedItem) {
    return this.getItemProp(processedItem, "visible") !== false;
  }
  isItemDisabled(processedItem) {
    return this.getItemProp(processedItem, "disabled");
  }
  isItemFocused(processedItem) {
    return this.focusedItemId === this.getItemId(processedItem);
  }
  isItemGroup(processedItem) {
    return ObjectUtils.isNotEmpty(processedItem.items);
  }
  getAnimation(processedItem) {
    return this.isItemActive(processedItem) ? {
      value: "visible",
      params: {
        transitionParams: this.transitionOptions,
        height: "*"
      }
    } : {
      value: "hidden",
      params: {
        transitionParams: this.transitionOptions,
        height: "0"
      }
    };
  }
  getAriaSetSize() {
    return this.items.filter((processedItem) => this.isItemVisible(processedItem) && !this.getItemProp(processedItem, "separator")).length;
  }
  getAriaPosInset(index) {
    return index - this.items.slice(0, index).filter((processedItem) => this.isItemVisible(processedItem) && this.getItemProp(processedItem, "separator")).length + 1;
  }
  onItemClick(event, processedItem) {
    if (!this.isItemDisabled(processedItem)) {
      this.getItemProp(processedItem, "command", {
        originalEvent: event,
        item: processedItem.item
      });
      this.itemToggle.emit({
        processedItem,
        expanded: !this.isItemActive(processedItem)
      });
    }
  }
  onItemToggle(event) {
    this.itemToggle.emit(event);
  }
  static ɵfac = function PanelMenuSub_Factory(t) {
    return new (t || _PanelMenuSub)(ɵɵdirectiveInject(forwardRef(() => PanelMenu)), ɵɵdirectiveInject(ElementRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _PanelMenuSub,
    selectors: [["p-panelMenuSub"]],
    viewQuery: function PanelMenuSub_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c03, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.listViewChild = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      panelId: "panelId",
      focusedItemId: "focusedItemId",
      items: "items",
      itemTemplate: "itemTemplate",
      level: "level",
      activeItemPath: "activeItemPath",
      root: "root",
      tabindex: "tabindex",
      transitionOptions: "transitionOptions",
      parentExpanded: "parentExpanded"
    },
    outputs: {
      itemToggle: "itemToggle",
      menuFocus: "menuFocus",
      menuBlur: "menuBlur",
      menuKeyDown: "menuKeyDown"
    },
    decls: 3,
    vars: 8,
    consts: [["role", "tree", 3, "ngClass", "tabindex", "focusin", "focusout", "keydown"], ["list", ""], ["ngFor", "", 3, "ngForOf"], ["class", "p-menuitem-separator", "role", "separator", 4, "ngIf"], ["role", "treeitem", 3, "ngClass", "class", "p-hidden", "p-focus", "ngStyle", "pTooltip", "tooltipOptions", 4, "ngIf"], ["role", "separator", 1, "p-menuitem-separator"], ["role", "treeitem", 3, "ngClass", "ngStyle", "pTooltip", "tooltipOptions"], [1, "p-menuitem-content", 3, "click"], [4, "ngIf"], [1, "p-toggleable-content"], [3, "id", "panelId", "items", "itemTemplate", "transitionOptions", "focusedItemId", "activeItemPath", "level", "parentExpanded", "itemToggle", 4, "ngIf"], ["class", "p-menuitem-link", 3, "ngClass", "target", 4, "ngIf"], ["class", "p-menuitem-link", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "ngClass", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", 4, "ngIf"], [1, "p-menuitem-link", 3, "ngClass", "target"], ["class", "p-menuitem-icon", 3, "ngClass", "ngStyle", 4, "ngIf"], ["class", "p-menuitem-text", 4, "ngIf", "ngIfElse"], ["htmlLabel", ""], ["class", "p-menuitem-badge", 3, "ngClass", 4, "ngIf"], [4, "ngTemplateOutlet"], [3, "styleClass", "ngStyle", 4, "ngIf"], [3, "styleClass", "ngStyle"], [1, "p-menuitem-icon", 3, "ngClass", "ngStyle"], [1, "p-menuitem-text"], [1, "p-menuitem-text", 3, "innerHTML"], [1, "p-menuitem-badge", 3, "ngClass"], [1, "p-menuitem-link", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "ngClass", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state"], ["htmlRouteLabel", ""], [4, "ngTemplateOutlet", "ngTemplateOutletContext"], [3, "id", "panelId", "items", "itemTemplate", "transitionOptions", "focusedItemId", "activeItemPath", "level", "parentExpanded", "itemToggle"]],
    template: function PanelMenuSub_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "ul", 0, 1);
        ɵɵlistener("focusin", function PanelMenuSub_Template_ul_focusin_0_listener($event) {
          return ctx.menuFocus.emit($event);
        })("focusout", function PanelMenuSub_Template_ul_focusout_0_listener($event) {
          return ctx.menuBlur.emit($event);
        })("keydown", function PanelMenuSub_Template_ul_keydown_0_listener($event) {
          return ctx.menuKeyDown.emit($event);
        });
        ɵɵtemplate(2, PanelMenuSub_ng_template_2_Template, 2, 2, "ng-template", 2);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵproperty("ngClass", ɵɵpureFunction1(6, _c4, ctx.root))("tabindex", -1);
        ɵɵattribute("aria-activedescendant", ctx.focusedItemId)("data-pc-section", "menu")("aria-hidden", !ctx.parentExpanded);
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ctx.items);
      }
    },
    dependencies: () => [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, RouterLink, RouterLinkActive, Tooltip, AngleDownIcon, AngleRightIcon, _PanelMenuSub],
    encapsulation: 2,
    data: {
      animation: [trigger("submenu", [state("hidden", style({
        height: "0"
      })), state("visible", style({
        height: "*"
      })), transition("visible <=> hidden", [animate("{{transitionParams}}")]), transition("void => *", animate(0))])]
    }
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelMenuSub, [{
    type: Component,
    args: [{
      selector: "p-panelMenuSub",
      template: `
        <ul
            #list
            [ngClass]="{ 'p-submenu-list': true, 'p-panelmenu-root-list': root }"
            role="tree"
            [tabindex]="-1"
            [attr.aria-activedescendant]="focusedItemId"
            [attr.data-pc-section]="'menu'"
            [attr.aria-hidden]="!parentExpanded"
            (focusin)="menuFocus.emit($event)"
            (focusout)="menuBlur.emit($event)"
            (keydown)="menuKeyDown.emit($event)"
        >
            <ng-template ngFor let-processedItem let-index="index" [ngForOf]="items">
                <li *ngIf="processedItem.separator" class="p-menuitem-separator" role="separator"></li>
                <li
                    *ngIf="!processedItem.separator && isItemVisible(processedItem)"
                    [ngClass]="getItemClass(processedItem)"
                    role="treeitem"
                    [attr.id]="getItemId(processedItem)"
                    [attr.aria-label]="getItemProp(processedItem, 'label')"
                    [attr.aria-expanded]="isItemGroup(processedItem) ? isItemActive(processedItem) : undefined"
                    [attr.aria-level]="level + 1"
                    [attr.aria-setsize]="getAriaSetSize()"
                    [attr.aria-posinset]="getAriaPosInset(index)"
                    [class]="getItemProp(processedItem, 'styleClass')"
                    [class.p-hidden]="processedItem.visible === false"
                    [class.p-focus]="isItemFocused(processedItem) && !isItemDisabled(processedItem)"
                    [ngStyle]="getItemProp(processedItem, 'style')"
                    [pTooltip]="getItemProp(processedItem, 'tooltip')"
                    [attr.data-p-disabled]="isItemDisabled(processedItem)"
                    [tooltipOptions]="getItemProp(processedItem, 'tooltipOptions')"
                >
                    <div class="p-menuitem-content" (click)="onItemClick($event, processedItem)">
                        <ng-container *ngIf="!itemTemplate">
                            <a
                                *ngIf="!getItemProp(processedItem, 'routerLink')"
                                [attr.href]="getItemProp(processedItem, 'url')"
                                class="p-menuitem-link"
                                [ngClass]="{ 'p-disabled': getItemProp(processedItem, 'disabled') }"
                                [target]="getItemProp(processedItem, 'target')"
                                [attr.data-pc-section]="'action'"
                                [attr.tabindex]="!!parentExpanded ? '0' : '-1'"
                            >
                                <ng-container *ngIf="isItemGroup(processedItem)">
                                    <ng-container *ngIf="!panelMenu.submenuIconTemplate">
                                        <AngleDownIcon [styleClass]="'p-submenu-icon'" *ngIf="isItemActive(processedItem)" [ngStyle]="getItemProp(processedItem, 'iconStyle')" />
                                        <AngleRightIcon [styleClass]="'p-submenu-icon'" *ngIf="!isItemActive(processedItem)" [ngStyle]="getItemProp(processedItem, 'iconStyle')" />
                                    </ng-container>
                                    <ng-template *ngTemplateOutlet="panelMenu.submenuIconTemplate"></ng-template>
                                </ng-container>
                                <span class="p-menuitem-icon" [ngClass]="processedItem.icon" *ngIf="processedItem.icon" [ngStyle]="getItemProp(processedItem, 'iconStyle')"></span>
                                <span class="p-menuitem-text" *ngIf="processedItem.item?.escape !== false; else htmlLabel">{{ getItemProp(processedItem, 'label') }}</span>
                                <ng-template #htmlLabel><span class="p-menuitem-text" [innerHTML]="getItemProp(processedItem, 'label')"></span></ng-template>
                                <span class="p-menuitem-badge" *ngIf="processedItem.badge" [ngClass]="processedItem.badgeStyleClass">{{ processedItem.badge }}</span>
                            </a>
                            <a
                                *ngIf="getItemProp(processedItem, 'routerLink')"
                                [routerLink]="getItemProp(processedItem, 'routerLink')"
                                [queryParams]="getItemProp(processedItem, 'queryParams')"
                                [routerLinkActive]="'p-menuitem-link-active'"
                                [routerLinkActiveOptions]="getItemProp(processedItem, 'routerLinkActiveOptions') || { exact: false }"
                                class="p-menuitem-link"
                                [ngClass]="{ 'p-disabled': getItemProp(processedItem, 'disabled') }"
                                [target]="getItemProp(processedItem, 'target')"
                                [attr.title]="getItemProp(processedItem, 'title')"
                                [fragment]="getItemProp(processedItem, 'fragment')"
                                [queryParamsHandling]="getItemProp(processedItem, 'queryParamsHandling')"
                                [preserveFragment]="getItemProp(processedItem, 'preserveFragment')"
                                [skipLocationChange]="getItemProp(processedItem, 'skipLocationChange')"
                                [replaceUrl]="getItemProp(processedItem, 'replaceUrl')"
                                [state]="getItemProp(processedItem, 'state')"
                                [attr.data-pc-section]="'action'"
                                [attr.tabindex]="!!parentExpanded ? '0' : '-1'"
                            >
                                <ng-container *ngIf="isItemGroup(processedItem)">
                                    <ng-container *ngIf="!panelMenu.submenuIconTemplate">
                                        <AngleDownIcon *ngIf="isItemActive(processedItem)" [styleClass]="'p-submenu-icon'" [ngStyle]="getItemProp(processedItem, 'iconStyle')" />
                                        <AngleRightIcon *ngIf="!isItemActive(processedItem)" [styleClass]="'p-submenu-icon'" [ngStyle]="getItemProp(processedItem, 'iconStyle')" />
                                    </ng-container>
                                    <ng-template *ngTemplateOutlet="panelMenu.submenuIconTemplate"></ng-template>
                                </ng-container>
                                <span class="p-menuitem-icon" [ngClass]="processedItem.icon" *ngIf="processedItem.icon" [ngStyle]="getItemProp(processedItem, 'iconStyle')"></span>
                                <span class="p-menuitem-text" *ngIf="getItemProp(processedItem, 'escape') !== false; else htmlRouteLabel">{{ getItemProp(processedItem, 'label') }}</span>
                                <ng-template #htmlRouteLabel><span class="p-menuitem-text" [innerHTML]="getItemProp(processedItem, 'label')"></span></ng-template>
                                <span class="p-menuitem-badge" *ngIf="processedItem.badge" [ngClass]="getItemProp(processedItem, 'badgeStyleClass')">{{ getItemProp(processedItem, 'badge') }}</span>
                            </a>
                        </ng-container>
                        <ng-container *ngIf="itemTemplate">
                            <ng-template *ngTemplateOutlet="itemTemplate; context: { $implicit: processedItem.item }"></ng-template>
                        </ng-container>
                    </div>
                    <div class="p-toggleable-content" [@submenu]="getAnimation(processedItem)">
                        <p-panelMenuSub
                            *ngIf="isItemVisible(processedItem) && isItemGroup(processedItem)"
                            [id]="getItemId(processedItem) + '_list'"
                            [panelId]="panelId"
                            [items]="processedItem.items"
                            [itemTemplate]="itemTemplate"
                            [transitionOptions]="transitionOptions"
                            [focusedItemId]="focusedItemId"
                            [activeItemPath]="activeItemPath"
                            [level]="level + 1"
                            [parentExpanded]="!!parentExpanded && isItemExpanded(processedItem)"
                            (itemToggle)="onItemToggle($event)"
                        ></p-panelMenuSub>
                    </div>
                </li>
            </ng-template>
        </ul>
    `,
      animations: [trigger("submenu", [state("hidden", style({
        height: "0"
      })), state("visible", style({
        height: "*"
      })), transition("visible <=> hidden", [animate("{{transitionParams}}")]), transition("void => *", animate(0))])],
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      }
    }]
  }], () => [{
    type: PanelMenu,
    decorators: [{
      type: Inject,
      args: [forwardRef(() => PanelMenu)]
    }]
  }, {
    type: ElementRef
  }], {
    panelId: [{
      type: Input
    }],
    focusedItemId: [{
      type: Input
    }],
    items: [{
      type: Input
    }],
    itemTemplate: [{
      type: Input
    }],
    level: [{
      type: Input
    }],
    activeItemPath: [{
      type: Input
    }],
    root: [{
      type: Input
    }],
    tabindex: [{
      type: Input
    }],
    transitionOptions: [{
      type: Input
    }],
    parentExpanded: [{
      type: Input
    }],
    itemToggle: [{
      type: Output
    }],
    menuFocus: [{
      type: Output
    }],
    menuBlur: [{
      type: Output
    }],
    menuKeyDown: [{
      type: Output
    }],
    listViewChild: [{
      type: ViewChild,
      args: ["list"]
    }]
  });
})();
var PanelMenuList = class _PanelMenuList {
  el;
  panelId;
  id;
  items;
  itemTemplate;
  parentExpanded;
  expanded;
  transitionOptions;
  root;
  tabindex;
  activeItem;
  itemToggle = new EventEmitter();
  headerFocus = new EventEmitter();
  subMenuViewChild;
  searchTimeout;
  searchValue;
  focused;
  focusedItem = signal(null);
  activeItemPath = signal([]);
  processedItems = signal([]);
  visibleItems = computed(() => {
    const processedItems = this.processedItems();
    return this.flatItems(processedItems);
  });
  get focusedItemId() {
    const focusedItem = this.focusedItem();
    return focusedItem && focusedItem.item?.id ? focusedItem.item.id : ObjectUtils.isNotEmpty(this.focusedItem()) ? `${this.panelId}_${this.focusedItem().key}` : void 0;
  }
  constructor(el) {
    this.el = el;
  }
  ngOnChanges(changes) {
    if (changes && changes.items && changes.items.currentValue) {
      this.processedItems.set(this.createProcessedItems(changes.items.currentValue || []));
    }
  }
  getItemProp(processedItem, name) {
    return processedItem && processedItem.item ? ObjectUtils.getItemValue(processedItem.item[name]) : void 0;
  }
  getItemLabel(processedItem) {
    return this.getItemProp(processedItem, "label");
  }
  isItemVisible(processedItem) {
    return this.getItemProp(processedItem, "visible") !== false;
  }
  isItemDisabled(processedItem) {
    return this.getItemProp(processedItem, "disabled");
  }
  isItemActive(processedItem) {
    return this.activeItemPath().some((path) => path.key === processedItem.parentKey);
  }
  isItemGroup(processedItem) {
    return ObjectUtils.isNotEmpty(processedItem.items);
  }
  isElementInPanel(event, element) {
    const panel = event.currentTarget.closest('[data-pc-section="panel"]');
    return panel && panel.contains(element);
  }
  isItemMatched(processedItem) {
    return this.isValidItem(processedItem) && this.getItemLabel(processedItem).toLocaleLowerCase().startsWith(this.searchValue.toLocaleLowerCase());
  }
  isVisibleItem(processedItem) {
    return !!processedItem && (processedItem.level === 0 || this.isItemActive(processedItem)) && this.isItemVisible(processedItem);
  }
  isValidItem(processedItem) {
    return !!processedItem && !this.isItemDisabled(processedItem) && !processedItem.separator;
  }
  findFirstItem() {
    return this.visibleItems().find((processedItem) => this.isValidItem(processedItem));
  }
  findLastItem() {
    return ObjectUtils.findLast(this.visibleItems(), (processedItem) => this.isValidItem(processedItem));
  }
  createProcessedItems(items, level = 0, parent = {}, parentKey = "") {
    const processedItems = [];
    items && items.forEach((item, index) => {
      const key = (parentKey !== "" ? parentKey + "_" : "") + index;
      const newItem = {
        icon: item.icon,
        expanded: item.expanded,
        separator: item.separator,
        item,
        index,
        level,
        key,
        parent,
        parentKey
      };
      newItem["items"] = this.createProcessedItems(item.items, level + 1, newItem, key);
      processedItems.push(newItem);
    });
    return processedItems;
  }
  findProcessedItemByItemKey(key, processedItems, level = 0) {
    processedItems = processedItems || this.processedItems();
    if (processedItems && processedItems.length) {
      for (let i = 0; i < processedItems.length; i++) {
        const processedItem = processedItems[i];
        if (this.getItemProp(processedItem, "key") === key)
          return processedItem;
        const matchedItem = this.findProcessedItemByItemKey(key, processedItem.items, level + 1);
        if (matchedItem)
          return matchedItem;
      }
    }
  }
  flatItems(processedItems, processedFlattenItems = []) {
    processedItems && processedItems.forEach((processedItem) => {
      if (this.isVisibleItem(processedItem)) {
        processedFlattenItems.push(processedItem);
        this.flatItems(processedItem.items, processedFlattenItems);
      }
    });
    return processedFlattenItems;
  }
  changeFocusedItem(event) {
    const {
      originalEvent,
      processedItem,
      focusOnNext,
      selfCheck,
      allowHeaderFocus = true
    } = event;
    if (ObjectUtils.isNotEmpty(this.focusedItem()) && this.focusedItem().key !== processedItem.key) {
      this.focusedItem.set(processedItem);
      this.scrollInView();
    } else if (allowHeaderFocus) {
      this.headerFocus.emit({
        originalEvent,
        focusOnNext,
        selfCheck
      });
    }
  }
  scrollInView() {
    const element = DomHandler.findSingle(this.subMenuViewChild.listViewChild.nativeElement, `li[id="${`${this.focusedItemId}`}"]`);
    if (element) {
      element.scrollIntoView && element.scrollIntoView({
        block: "nearest",
        inline: "nearest"
      });
    }
  }
  onFocus(event) {
    if (!this.focused) {
      this.focused = true;
      const focusedItem = this.focusedItem() || (this.isElementInPanel(event, event.relatedTarget) ? this.findFirstItem() : this.findLastItem());
      if (event.relatedTarget !== null)
        this.focusedItem.set(focusedItem);
    }
  }
  onBlur(event) {
    const target = event.relatedTarget;
    if (this.focused && !this.el.nativeElement.contains(target)) {
      this.focused = false;
      this.focusedItem.set(null);
      this.searchValue = "";
    }
  }
  onItemToggle(event) {
    const {
      processedItem,
      expanded
    } = event;
    processedItem.expanded = !processedItem.expanded;
    const activeItemPath = this.activeItemPath().filter((p) => p.parentKey !== processedItem.parentKey);
    expanded && activeItemPath.push(processedItem);
    this.activeItemPath.set(activeItemPath);
    this.processedItems.update((value) => value.map((i) => i === processedItem ? processedItem : i));
    this.focusedItem.set(processedItem);
  }
  onKeyDown(event) {
    const metaKey = event.metaKey || event.ctrlKey;
    switch (event.code) {
      case "ArrowDown":
        this.onArrowDownKey(event);
        break;
      case "ArrowUp":
        this.onArrowUpKey(event);
        break;
      case "ArrowLeft":
        this.onArrowLeftKey(event);
        break;
      case "ArrowRight":
        this.onArrowRightKey(event);
        break;
      case "Home":
        this.onHomeKey(event);
        break;
      case "End":
        this.onEndKey(event);
        break;
      case "Space":
        this.onSpaceKey(event);
        break;
      case "Enter":
        this.onEnterKey(event);
        break;
      case "Escape":
      case "Tab":
      case "PageDown":
      case "PageUp":
      case "Backspace":
      case "ShiftLeft":
      case "ShiftRight":
        break;
      default:
        if (!metaKey && ObjectUtils.isPrintableCharacter(event.key)) {
          this.searchItems(event, event.key);
        }
        break;
    }
  }
  onArrowDownKey(event) {
    const processedItem = ObjectUtils.isNotEmpty(this.focusedItem()) ? this.findNextItem(this.focusedItem()) : this.findFirstItem();
    this.changeFocusedItem({
      originalEvent: event,
      processedItem,
      focusOnNext: true
    });
    event.preventDefault();
  }
  onArrowUpKey(event) {
    const processedItem = ObjectUtils.isNotEmpty(this.focusedItem()) ? this.findPrevItem(this.focusedItem()) : this.findLastItem();
    this.changeFocusedItem({
      originalEvent: event,
      processedItem,
      selfCheck: true
    });
    event.preventDefault();
  }
  onArrowLeftKey(event) {
    if (ObjectUtils.isNotEmpty(this.focusedItem())) {
      const matched = this.activeItemPath().some((p) => p.key === this.focusedItem().key);
      if (matched) {
        const activeItemPath = this.activeItemPath().filter((p) => p.key !== this.focusedItem().key);
        this.activeItemPath.set(activeItemPath);
      } else {
        const focusedItem = ObjectUtils.isNotEmpty(this.focusedItem().parent) ? this.focusedItem().parent : this.focusedItem();
        this.focusedItem.set(focusedItem);
      }
      event.preventDefault();
    }
  }
  onArrowRightKey(event) {
    if (ObjectUtils.isNotEmpty(this.focusedItem())) {
      const grouped = this.isItemGroup(this.focusedItem());
      if (grouped) {
        const matched = this.activeItemPath().some((p) => p.key === this.focusedItem().key);
        if (matched) {
          this.onArrowDownKey(event);
        } else {
          const activeItemPath = this.activeItemPath().filter((p) => p.parentKey !== this.focusedItem().parentKey);
          activeItemPath.push(this.focusedItem());
          this.activeItemPath.set(activeItemPath);
        }
      }
      event.preventDefault();
    }
  }
  onHomeKey(event) {
    this.changeFocusedItem({
      originalEvent: event,
      processedItem: this.findFirstItem(),
      allowHeaderFocus: false
    });
    event.preventDefault();
  }
  onEndKey(event) {
    this.changeFocusedItem({
      originalEvent: event,
      processedItem: this.findLastItem(),
      focusOnNext: true,
      allowHeaderFocus: false
    });
    event.preventDefault();
  }
  onEnterKey(event) {
    if (ObjectUtils.isNotEmpty(this.focusedItem())) {
      const element = DomHandler.findSingle(this.subMenuViewChild.listViewChild.nativeElement, `li[id="${`${this.focusedItemId}`}"]`);
      const anchorElement = element && (DomHandler.findSingle(element, '[data-pc-section="action"]') || DomHandler.findSingle(element, "a,button"));
      anchorElement ? anchorElement.click() : element && element.click();
    }
    event.preventDefault();
  }
  onSpaceKey(event) {
    this.onEnterKey(event);
  }
  findNextItem(processedItem) {
    const index = this.visibleItems().findIndex((item) => item.key === processedItem.key);
    const matchedItem = index < this.visibleItems().length - 1 ? this.visibleItems().slice(index + 1).find((pItem) => this.isValidItem(pItem)) : void 0;
    return matchedItem || processedItem;
  }
  findPrevItem(processedItem) {
    const index = this.visibleItems().findIndex((item) => item.key === processedItem.key);
    const matchedItem = index > 0 ? ObjectUtils.findLast(this.visibleItems().slice(0, index), (pItem) => this.isValidItem(pItem)) : void 0;
    return matchedItem || processedItem;
  }
  searchItems(event, char) {
    this.searchValue = (this.searchValue || "") + char;
    let matchedItem = null;
    let matched = false;
    if (ObjectUtils.isNotEmpty(this.focusedItem())) {
      const focusedItemIndex = this.visibleItems().findIndex((processedItem) => processedItem.key === this.focusedItem().key);
      matchedItem = this.visibleItems().slice(focusedItemIndex).find((processedItem) => this.isItemMatched(processedItem));
      matchedItem = ObjectUtils.isEmpty(matchedItem) ? this.visibleItems().slice(0, focusedItemIndex).find((processedItem) => this.isItemMatched(processedItem)) : matchedItem;
    } else {
      matchedItem = this.visibleItems().find((processedItem) => this.isItemMatched(processedItem));
    }
    if (ObjectUtils.isNotEmpty(matchedItem)) {
      matched = true;
    }
    if (ObjectUtils.isEmpty(matchedItem) && ObjectUtils.isEmpty(this.focusedItem())) {
      matchedItem = this.findFirstItem();
    }
    if (ObjectUtils.isNotEmpty(matchedItem)) {
      this.changeFocusedItem({
        originalEvent: event,
        processedItem: matchedItem,
        allowHeaderFocus: false
      });
    }
    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }
    this.searchTimeout = setTimeout(() => {
      this.searchValue = "";
      this.searchTimeout = null;
    }, 500);
    return matched;
  }
  static ɵfac = function PanelMenuList_Factory(t) {
    return new (t || _PanelMenuList)(ɵɵdirectiveInject(ElementRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _PanelMenuList,
    selectors: [["p-panelMenuList"]],
    viewQuery: function PanelMenuList_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c5, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.subMenuViewChild = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      panelId: "panelId",
      id: "id",
      items: "items",
      itemTemplate: "itemTemplate",
      parentExpanded: "parentExpanded",
      expanded: "expanded",
      transitionOptions: "transitionOptions",
      root: "root",
      tabindex: "tabindex",
      activeItem: "activeItem"
    },
    outputs: {
      itemToggle: "itemToggle",
      headerFocus: "headerFocus"
    },
    features: [ɵɵNgOnChangesFeature],
    decls: 2,
    vars: 10,
    consts: [[3, "root", "id", "panelId", "tabindex", "itemTemplate", "focusedItemId", "activeItemPath", "transitionOptions", "items", "parentExpanded", "itemToggle", "keydown", "menuFocus", "menuBlur"], ["submenu", ""]],
    template: function PanelMenuList_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "p-panelMenuSub", 0, 1);
        ɵɵlistener("itemToggle", function PanelMenuList_Template_p_panelMenuSub_itemToggle_0_listener($event) {
          return ctx.onItemToggle($event);
        })("keydown", function PanelMenuList_Template_p_panelMenuSub_keydown_0_listener($event) {
          return ctx.onKeyDown($event);
        })("menuFocus", function PanelMenuList_Template_p_panelMenuSub_menuFocus_0_listener($event) {
          return ctx.onFocus($event);
        })("menuBlur", function PanelMenuList_Template_p_panelMenuSub_menuBlur_0_listener($event) {
          return ctx.onBlur($event);
        });
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵproperty("root", true)("id", ctx.panelId + "_list")("panelId", ctx.panelId)("tabindex", ctx.tabindex)("itemTemplate", ctx.itemTemplate)("focusedItemId", ctx.focused ? ctx.focusedItemId : void 0)("activeItemPath", ctx.activeItemPath())("transitionOptions", ctx.transitionOptions)("items", ctx.processedItems())("parentExpanded", ctx.parentExpanded);
      }
    },
    dependencies: [PanelMenuSub],
    styles: ["@layer primeng{.p-panelmenu .p-panelmenu-header-action{display:flex;align-items:center;-webkit-user-select:none;user-select:none;cursor:pointer;position:relative;text-decoration:none}.p-panelmenu .p-panelmenu-header-action:focus{z-index:1}.p-panelmenu .p-submenu-list{margin:0;padding:0;list-style:none}.p-panelmenu .p-menuitem-link{display:flex;align-items:center;-webkit-user-select:none;user-select:none;cursor:pointer;text-decoration:none;position:relative;overflow:hidden;outline:none}.p-panelmenu .p-menuitem-text{line-height:1}.p-panelmenu-expanded.p-toggleable-content:not(.ng-animating),.p-panelmenu .p-submenu-expanded:not(.ng-animating){overflow:visible}.p-panelmenu .p-toggleable-content,.p-panelmenu .p-submenu-list{overflow:hidden}}\n"],
    encapsulation: 2,
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelMenuList, [{
    type: Component,
    args: [{
      selector: "p-panelMenuList",
      template: `
        <p-panelMenuSub
            #submenu
            [root]="true"
            [id]="panelId + '_list'"
            [panelId]="panelId"
            [tabindex]="tabindex"
            [itemTemplate]="itemTemplate"
            [focusedItemId]="focused ? focusedItemId : undefined"
            [activeItemPath]="activeItemPath()"
            [transitionOptions]="transitionOptions"
            [items]="processedItems()"
            [parentExpanded]="parentExpanded"
            (itemToggle)="onItemToggle($event)"
            (keydown)="onKeyDown($event)"
            (menuFocus)="onFocus($event)"
            (menuBlur)="onBlur($event)"
        ></p-panelMenuSub>
    `,
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-panelmenu .p-panelmenu-header-action{display:flex;align-items:center;-webkit-user-select:none;user-select:none;cursor:pointer;position:relative;text-decoration:none}.p-panelmenu .p-panelmenu-header-action:focus{z-index:1}.p-panelmenu .p-submenu-list{margin:0;padding:0;list-style:none}.p-panelmenu .p-menuitem-link{display:flex;align-items:center;-webkit-user-select:none;user-select:none;cursor:pointer;text-decoration:none;position:relative;overflow:hidden;outline:none}.p-panelmenu .p-menuitem-text{line-height:1}.p-panelmenu-expanded.p-toggleable-content:not(.ng-animating),.p-panelmenu .p-submenu-expanded:not(.ng-animating){overflow:visible}.p-panelmenu .p-toggleable-content,.p-panelmenu .p-submenu-list{overflow:hidden}}\n"]
    }]
  }], () => [{
    type: ElementRef
  }], {
    panelId: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    items: [{
      type: Input
    }],
    itemTemplate: [{
      type: Input
    }],
    parentExpanded: [{
      type: Input
    }],
    expanded: [{
      type: Input
    }],
    transitionOptions: [{
      type: Input
    }],
    root: [{
      type: Input
    }],
    tabindex: [{
      type: Input
    }],
    activeItem: [{
      type: Input
    }],
    itemToggle: [{
      type: Output
    }],
    headerFocus: [{
      type: Output
    }],
    subMenuViewChild: [{
      type: ViewChild,
      args: ["submenu"]
    }]
  });
})();
var PanelMenu = class _PanelMenu {
  cd;
  /**
   * An array of menuitems.
   * @group Props
   */
  model;
  /**
   * Inline style of the component.
   * @group Props
   */
  style;
  /**
   * Style class of the component.
   * @group Props
   */
  styleClass;
  /**
   * Whether multiple tabs can be activated at the same time or not.
   * @group Props
   */
  multiple = false;
  /**
   * Transition options of the animation.
   * @group Props
   */
  transitionOptions = "400ms cubic-bezier(0.86, 0, 0.07, 1)";
  /**
   * Current id state as a string.
   * @group Props
   */
  id;
  /**
   * Index of the element in tabbing order.
   * @group Props
   */
  tabindex = 0;
  templates;
  containerViewChild;
  submenuIconTemplate;
  itemTemplate;
  animating;
  activeItem = signal(null);
  ngOnInit() {
    this.id = this.id || UniqueComponentId();
  }
  ngAfterContentInit() {
    this.templates?.forEach((item) => {
      switch (item.getType()) {
        case "submenuicon":
          this.submenuIconTemplate = item.template;
          break;
        case "item":
          this.itemTemplate = item.template;
          break;
        default:
          this.itemTemplate = item.template;
          break;
      }
    });
  }
  constructor(cd) {
    this.cd = cd;
  }
  /**
   * Collapses open panels.
   * @group Method
   */
  collapseAll() {
    for (let item of this.model) {
      if (item.expanded) {
        item.expanded = false;
      }
    }
    this.cd.detectChanges();
  }
  onToggleDone() {
    this.animating = false;
  }
  changeActiveItem(event, item, index, selfActive = false) {
    if (!this.isItemDisabled(item)) {
      const activeItem = selfActive ? item : this.activeItem && ObjectUtils.equals(item, this.activeItem) ? null : item;
      this.activeItem.set(activeItem);
    }
  }
  getAnimation(item) {
    return item.expanded ? {
      value: "visible",
      params: {
        transitionParams: this.animating ? this.transitionOptions : "0ms",
        height: "*"
      }
    } : {
      value: "hidden",
      params: {
        transitionParams: this.transitionOptions,
        height: "0"
      }
    };
  }
  getItemProp(item, name) {
    return item ? ObjectUtils.getItemValue(item[name]) : void 0;
  }
  getItemLabel(item) {
    return this.getItemProp(item, "label");
  }
  isItemActive(item) {
    return item.expanded;
  }
  isItemVisible(item) {
    return this.getItemProp(item, "visible") !== false;
  }
  isItemDisabled(item) {
    return this.getItemProp(item, "disabled");
  }
  isItemGroup(item) {
    return ObjectUtils.isNotEmpty(item.items);
  }
  getPanelId(index, item) {
    return item && item.id ? item.id : `${this.id}_${index}`;
  }
  getHeaderId(item, index) {
    return item.id ? item.id + "_header" : `${this.getPanelId(index)}_header`;
  }
  getContentId(item, index) {
    return item.id ? item.id + "_content" : `${this.getPanelId(index)}_content`;
  }
  updateFocusedHeader(event) {
    const {
      originalEvent,
      focusOnNext,
      selfCheck
    } = event;
    const panelElement = originalEvent.currentTarget.closest('[data-pc-section="panel"]');
    const header = selfCheck ? DomHandler.findSingle(panelElement, '[data-pc-section="header"]') : focusOnNext ? this.findNextHeader(panelElement) : this.findPrevHeader(panelElement);
    header ? this.changeFocusedHeader(originalEvent, header) : focusOnNext ? this.onHeaderHomeKey(originalEvent) : this.onHeaderEndKey(originalEvent);
  }
  changeFocusedHeader(event, element) {
    element && DomHandler.focus(element);
  }
  findNextHeader(panelElement, selfCheck = false) {
    const nextPanelElement = selfCheck ? panelElement : panelElement.nextElementSibling;
    const headerElement = DomHandler.findSingle(nextPanelElement, '[data-pc-section="header"]');
    return headerElement ? DomHandler.getAttribute(headerElement, "data-p-disabled") ? this.findNextHeader(headerElement.parentElement) : headerElement : null;
  }
  findPrevHeader(panelElement, selfCheck = false) {
    const prevPanelElement = selfCheck ? panelElement : panelElement.previousElementSibling;
    const headerElement = DomHandler.findSingle(prevPanelElement, '[data-pc-section="header"]');
    return headerElement ? DomHandler.getAttribute(headerElement, "data-p-disabled") ? this.findPrevHeader(headerElement.parentElement) : headerElement : null;
  }
  findFirstHeader() {
    return this.findNextHeader(this.containerViewChild.nativeElement.firstElementChild, true);
  }
  findLastHeader() {
    return this.findPrevHeader(this.containerViewChild.nativeElement.lastElementChild, true);
  }
  onHeaderClick(event, item, index) {
    if (this.isItemDisabled(item)) {
      event.preventDefault();
      return;
    }
    if (item.command) {
      item.command({
        originalEvent: event,
        item
      });
    }
    if (!this.multiple) {
      for (let modelItem of this.model) {
        if (item !== modelItem && modelItem.expanded) {
          modelItem.expanded = false;
        }
      }
    }
    item.expanded = !item.expanded;
    this.changeActiveItem(event, item, index);
    this.animating = true;
    DomHandler.focus(event.currentTarget);
  }
  onHeaderKeyDown(event, item, index) {
    switch (event.code) {
      case "ArrowDown":
        this.onHeaderArrowDownKey(event);
        break;
      case "ArrowUp":
        this.onHeaderArrowUpKey(event);
        break;
      case "Home":
        this.onHeaderHomeKey(event);
        break;
      case "End":
        this.onHeaderEndKey(event);
        break;
      case "Enter":
      case "Space":
        this.onHeaderEnterKey(event, item, index);
        break;
      default:
        break;
    }
  }
  onHeaderArrowDownKey(event) {
    const rootList = DomHandler.getAttribute(event.currentTarget, "data-p-highlight") === true ? DomHandler.findSingle(event.currentTarget.nextElementSibling, '[data-pc-section="menu"]') : null;
    rootList ? DomHandler.focus(rootList) : this.updateFocusedHeader({
      originalEvent: event,
      focusOnNext: true
    });
    event.preventDefault();
  }
  onHeaderArrowUpKey(event) {
    const prevHeader = this.findPrevHeader(event.currentTarget.parentElement) || this.findLastHeader();
    const rootList = DomHandler.getAttribute(prevHeader, "data-p-highlight") === true ? DomHandler.findSingle(prevHeader.nextElementSibling, '[data-pc-section="menu"]') : null;
    rootList ? DomHandler.focus(rootList) : this.updateFocusedHeader({
      originalEvent: event,
      focusOnNext: false
    });
    event.preventDefault();
  }
  onHeaderHomeKey(event) {
    this.changeFocusedHeader(event, this.findFirstHeader());
    event.preventDefault();
  }
  onHeaderEndKey(event) {
    this.changeFocusedHeader(event, this.findLastHeader());
    event.preventDefault();
  }
  onHeaderEnterKey(event, item, index) {
    const headerAction = DomHandler.findSingle(event.currentTarget, '[data-pc-section="headeraction"]');
    headerAction ? headerAction.click() : this.onHeaderClick(event, item, index);
    event.preventDefault();
  }
  static ɵfac = function PanelMenu_Factory(t) {
    return new (t || _PanelMenu)(ɵɵdirectiveInject(ChangeDetectorRef));
  };
  static ɵcmp = ɵɵdefineComponent({
    type: _PanelMenu,
    selectors: [["p-panelMenu"]],
    contentQueries: function PanelMenu_ContentQueries(rf, ctx, dirIndex) {
      if (rf & 1) {
        ɵɵcontentQuery(dirIndex, PrimeTemplate, 4);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.templates = _t);
      }
    },
    viewQuery: function PanelMenu_Query(rf, ctx) {
      if (rf & 1) {
        ɵɵviewQuery(_c6, 5);
      }
      if (rf & 2) {
        let _t;
        ɵɵqueryRefresh(_t = ɵɵloadQuery()) && (ctx.containerViewChild = _t.first);
      }
    },
    hostAttrs: [1, "p-element"],
    inputs: {
      model: "model",
      style: "style",
      styleClass: "styleClass",
      multiple: "multiple",
      transitionOptions: "transitionOptions",
      id: "id",
      tabindex: "tabindex"
    },
    decls: 3,
    vars: 5,
    consts: [[3, "ngStyle", "ngClass"], ["container", ""], [4, "ngFor", "ngForOf"], ["class", "p-panelmenu-panel", 3, "ngClass", "ngStyle", 4, "ngIf"], [1, "p-panelmenu-panel", 3, "ngClass", "ngStyle"], ["role", "button", 3, "ngClass", "ngStyle", "pTooltip", "tabindex", "tooltipOptions", "click", "keydown"], [1, "p-panelmenu-header-content"], ["class", "p-panelmenu-header-action", 3, "target", 4, "ngIf"], ["class", "p-panelmenu-header-action", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", 4, "ngIf"], ["class", "p-toggleable-content", "role", "region", 3, "ngClass", 4, "ngIf"], [1, "p-panelmenu-header-action", 3, "target"], [4, "ngIf"], ["class", "p-menuitem-icon", 3, "ngClass", "ngStyle", 4, "ngIf"], ["class", "p-menuitem-text", 4, "ngIf", "ngIfElse"], ["htmlLabel", ""], ["class", "p-menuitem-badge", 3, "ngClass", 4, "ngIf"], [4, "ngTemplateOutlet"], [3, "styleClass", 4, "ngIf"], [3, "styleClass"], [1, "p-menuitem-icon", 3, "ngClass", "ngStyle"], [1, "p-menuitem-text"], [1, "p-menuitem-text", 3, "innerHTML"], [1, "p-menuitem-badge", 3, "ngClass"], [1, "p-panelmenu-header-action", 3, "routerLink", "queryParams", "routerLinkActive", "routerLinkActiveOptions", "target", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state"], ["htmlRouteLabel", ""], ["role", "region", 1, "p-toggleable-content", 3, "ngClass"], [1, "p-panelmenu-content"], [3, "panelId", "items", "itemTemplate", "transitionOptions", "root", "activeItem", "tabindex", "parentExpanded", "headerFocus"]],
    template: function PanelMenu_Template(rf, ctx) {
      if (rf & 1) {
        ɵɵelementStart(0, "div", 0, 1);
        ɵɵtemplate(2, PanelMenu_ng_container_2_Template, 2, 1, "ng-container", 2);
        ɵɵelementEnd();
      }
      if (rf & 2) {
        ɵɵclassMap(ctx.styleClass);
        ɵɵproperty("ngStyle", ctx.style)("ngClass", "p-panelmenu p-component");
        ɵɵadvance(2);
        ɵɵproperty("ngForOf", ctx.model);
      }
    },
    dependencies: () => [NgClass, NgForOf, NgIf, NgTemplateOutlet, NgStyle, RouterLink, RouterLinkActive, Tooltip, ChevronDownIcon, ChevronRightIcon, PanelMenuList],
    styles: [_c9],
    encapsulation: 2,
    data: {
      animation: [trigger("rootItem", [state("hidden", style({
        height: "0"
      })), state("visible", style({
        height: "*"
      })), transition("visible <=> hidden", [animate("{{transitionParams}}")]), transition("void => *", animate(0))])]
    },
    changeDetection: 0
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelMenu, [{
    type: Component,
    args: [{
      selector: "p-panelMenu",
      template: `
        <div [class]="styleClass" [ngStyle]="style" [ngClass]="'p-panelmenu p-component'" #container>
            <ng-container *ngFor="let item of model; let f = first; let l = last; let i = index">
                <div *ngIf="isItemVisible(item)" class="p-panelmenu-panel" [ngClass]="getItemProp(item, 'headerClass')" [ngStyle]="getItemProp(item, 'style')" [attr.data-pc-section]="'panel'">
                    <div
                        [ngClass]="{ 'p-component p-panelmenu-header': true, 'p-highlight': isItemActive(item), 'p-disabled': isItemDisabled(item) }"
                        [class]="getItemProp(item, 'styleClass')"
                        [ngStyle]="getItemProp(item, 'style')"
                        [pTooltip]="getItemProp(item, 'tooltip')"
                        [attr.id]="getHeaderId(item, i)"
                        [tabindex]="0"
                        role="button"
                        [tooltipOptions]="getItemProp(item, 'tooltipOptions')"
                        [attr.aria-expanded]="isItemActive(item)"
                        [attr.aria-label]="getItemProp(item, 'label')"
                        [attr.aria-controls]="getContentId(item, i)"
                        [attr.aria-disabled]="isItemDisabled(item)"
                        [attr.data-p-highlight]="isItemActive(item)"
                        [attr.data-p-disabled]="isItemDisabled(item)"
                        [attr.data-pc-section]="'header'"
                        (click)="onHeaderClick($event, item, i)"
                        (keydown)="onHeaderKeyDown($event, item, i)"
                    >
                        <div class="p-panelmenu-header-content">
                            <a
                                *ngIf="!getItemProp(item, 'routerLink')"
                                [attr.href]="getItemProp(item, 'url')"
                                [attr.tabindex]="-1"
                                [target]="getItemProp(item, 'target')"
                                [attr.title]="getItemProp(item, 'title')"
                                class="p-panelmenu-header-action"
                                [attr.data-pc-section]="'headeraction'"
                            >
                                <ng-container *ngIf="isItemGroup(item)">
                                    <ng-container *ngIf="!submenuIconTemplate">
                                        <ChevronDownIcon [styleClass]="'p-submenu-icon'" *ngIf="isItemActive(item)" />
                                        <ChevronRightIcon [styleClass]="'p-submenu-icon'" *ngIf="!isItemActive(item)" />
                                    </ng-container>
                                    <ng-template *ngTemplateOutlet="submenuIconTemplate"></ng-template>
                                </ng-container>
                                <span class="p-menuitem-icon" [ngClass]="item.icon" *ngIf="item.icon" [ngStyle]="getItemProp(item, 'iconStyle')"></span>
                                <span class="p-menuitem-text" *ngIf="getItemProp(item, 'escape') !== false; else htmlLabel">{{ getItemProp(item, 'label') }}</span>
                                <ng-template #htmlLabel><span class="p-menuitem-text" [innerHTML]="getItemProp(item, 'label')"></span></ng-template>
                                <span class="p-menuitem-badge" *ngIf="getItemProp(item, 'badge')" [ngClass]="getItemProp(item, 'badgeStyleClass')">{{ getItemProp(item, 'badge') }}</span>
                            </a>
                            <a
                                *ngIf="getItemProp(item, 'routerLink')"
                                [routerLink]="getItemProp(item, 'routerLink')"
                                [queryParams]="getItemProp(item, 'queryParams')"
                                [routerLinkActive]="'p-menuitem-link-active'"
                                [routerLinkActiveOptions]="getItemProp(item, 'routerLinkActiveOptions') || { exact: false }"
                                [target]="getItemProp(item, 'target')"
                                class="p-panelmenu-header-action"
                                [attr.tabindex]="-1"
                                [fragment]="getItemProp(item, 'fragment')"
                                [queryParamsHandling]="getItemProp(item, 'queryParamsHandling')"
                                [preserveFragment]="getItemProp(item, 'preserveFragment')"
                                [skipLocationChange]="getItemProp(item, 'skipLocationChange')"
                                [replaceUrl]="getItemProp(item, 'replaceUrl')"
                                [state]="getItemProp(item, 'state')"
                                [attr.data-pc-section]="'headeraction'"
                            >
                                <ng-container *ngIf="isItemGroup(item)">
                                    <ng-container *ngIf="!submenuIconTemplate">
                                        <ChevronDownIcon [styleClass]="'p-submenu-icon'" *ngIf="isItemActive(item)" />
                                        <ChevronRightIcon [styleClass]="'p-submenu-icon'" *ngIf="!isItemActive(item)" />
                                    </ng-container>
                                    <ng-template *ngTemplateOutlet="submenuIconTemplate"></ng-template>
                                </ng-container>
                                <span class="p-menuitem-icon" [ngClass]="item.icon" *ngIf="item.icon" [ngStyle]="getItemProp(item, 'iconStyle')"></span>
                                <span class="p-menuitem-text" *ngIf="getItemProp(item, 'escape') !== false; else htmlRouteLabel">{{ getItemProp(item, 'label') }}</span>
                                <ng-template #htmlRouteLabel><span class="p-menuitem-text" [innerHTML]="getItemProp(item, 'label')"></span></ng-template>
                                <span class="p-menuitem-badge" *ngIf="getItemProp(item, 'badge')" [ngClass]="getItemProp(item, 'badgeStyleClass')">{{ getItemProp(item, 'badge') }}</span>
                            </a>
                        </div>
                    </div>
                    <div
                        *ngIf="isItemGroup(item)"
                        class="p-toggleable-content"
                        [ngClass]="{ 'p-panelmenu-expanded': isItemActive(item) }"
                        [@rootItem]="getAnimation(item)"
                        (@rootItem.done)="onToggleDone()"
                        role="region"
                        [attr.id]="getContentId(item, i)"
                        [attr.aria-labelledby]="getHeaderId(item, i)"
                        [attr.data-pc-section]="'toggleablecontent'"
                    >
                        <div class="p-panelmenu-content" [attr.data-pc-section]="'menucontent'">
                            <p-panelMenuList
                                [panelId]="getPanelId(i, item)"
                                [items]="getItemProp(item, 'items')"
                                [itemTemplate]="itemTemplate"
                                [transitionOptions]="transitionOptions"
                                [root]="true"
                                [activeItem]="activeItem()"
                                [tabindex]="tabindex"
                                [parentExpanded]="isItemActive(item)"
                                (headerFocus)="updateFocusedHeader($event)"
                            ></p-panelMenuList>
                        </div>
                    </div>
                </div>
            </ng-container>
        </div>
    `,
      animations: [trigger("rootItem", [state("hidden", style({
        height: "0"
      })), state("visible", style({
        height: "*"
      })), transition("visible <=> hidden", [animate("{{transitionParams}}")]), transition("void => *", animate(0))])],
      changeDetection: ChangeDetectionStrategy.OnPush,
      encapsulation: ViewEncapsulation$1.None,
      host: {
        class: "p-element"
      },
      styles: ["@layer primeng{.p-panelmenu .p-panelmenu-header-action{display:flex;align-items:center;-webkit-user-select:none;user-select:none;cursor:pointer;position:relative;text-decoration:none}.p-panelmenu .p-panelmenu-header-action:focus{z-index:1}.p-panelmenu .p-submenu-list{margin:0;padding:0;list-style:none}.p-panelmenu .p-menuitem-link{display:flex;align-items:center;-webkit-user-select:none;user-select:none;cursor:pointer;text-decoration:none;position:relative;overflow:hidden;outline:none}.p-panelmenu .p-menuitem-text{line-height:1}.p-panelmenu-expanded.p-toggleable-content:not(.ng-animating),.p-panelmenu .p-submenu-expanded:not(.ng-animating){overflow:visible}.p-panelmenu .p-toggleable-content,.p-panelmenu .p-submenu-list{overflow:hidden}}\n"]
    }]
  }], () => [{
    type: ChangeDetectorRef
  }], {
    model: [{
      type: Input
    }],
    style: [{
      type: Input
    }],
    styleClass: [{
      type: Input
    }],
    multiple: [{
      type: Input
    }],
    transitionOptions: [{
      type: Input
    }],
    id: [{
      type: Input
    }],
    tabindex: [{
      type: Input
    }],
    templates: [{
      type: ContentChildren,
      args: [PrimeTemplate]
    }],
    containerViewChild: [{
      type: ViewChild,
      args: ["container"]
    }]
  });
})();
var PanelMenuModule = class _PanelMenuModule {
  static ɵfac = function PanelMenuModule_Factory(t) {
    return new (t || _PanelMenuModule)();
  };
  static ɵmod = ɵɵdefineNgModule({
    type: _PanelMenuModule,
    declarations: [PanelMenu, PanelMenuSub, PanelMenuList],
    imports: [CommonModule, RouterModule, TooltipModule, SharedModule, AngleDownIcon, AngleRightIcon, ChevronDownIcon, ChevronRightIcon],
    exports: [PanelMenu, RouterModule, TooltipModule, SharedModule]
  });
  static ɵinj = ɵɵdefineInjector({
    imports: [CommonModule, RouterModule, TooltipModule, SharedModule, AngleDownIcon, AngleRightIcon, ChevronDownIcon, ChevronRightIcon, RouterModule, TooltipModule, SharedModule]
  });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && setClassMetadata(PanelMenuModule, [{
    type: NgModule,
    args: [{
      imports: [CommonModule, RouterModule, TooltipModule, SharedModule, AngleDownIcon, AngleRightIcon, ChevronDownIcon, ChevronRightIcon],
      exports: [PanelMenu, RouterModule, TooltipModule, SharedModule],
      declarations: [PanelMenu, PanelMenuSub, PanelMenuList]
    }]
  }], null, null);
})();
export {
  PanelMenu,
  PanelMenuList,
  PanelMenuModule,
  PanelMenuSub
};
//# sourceMappingURL=primeng_panelmenu.js.map

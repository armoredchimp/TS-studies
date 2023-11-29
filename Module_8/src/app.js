var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
var _this = this;
function Logger(logString) {
    return function (constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
// function WithTemplate(template: string, hookId: string) {
//   return function (_: Function) {
//     const hookEl = document.getElementById(hookId);
//     if (hookEl) {
//       hookEl.innerHTML = template
//     }
//   }
// }
function WithTemplate(template, hookId) {
    return function (originalConstructor) {
        return /** @class */ (function (_super) {
            __extends(class_1, _super);
            function class_1() {
                var _ = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    _[_i] = arguments[_i];
                }
                var _this = _super.call(this) || this;
                var hookEl = document.getElementById(hookId);
                if (hookEl) {
                    hookEl.innerHTML = template;
                    hookEl.querySelector('h1').textContent = _this.name;
                }
                return _this;
            }
            return class_1;
        }(originalConstructor));
    };
}
var Person = function () {
    var _classDecorators = [Logger('LOGGING - PERSON'), WithTemplate('<h1>HTML Thing Here</h1>', 'app')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var Person = _classThis = /** @class */ (function () {
        function Person_1() {
            this.name = 'Max';
            console.log('Creating');
        }
        return Person_1;
    }());
    __setFunctionName(_classThis, "Person");
    (function () {
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name }, null, _classExtraInitializers);
        Person = _classThis = _classDescriptor.value;
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Person = _classThis;
}();
var pers = new Person();
console.log(pers);
//Property Decorator
function Log(target, propertyName) {
    console.log('Property decorator');
    console.log(target, propertyName);
}
//Accessor Decorator
function Log2(target, name, descriptor) {
    console.log('Accessor Decorator)');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
//Method Decorator
function Log3(target, name, descriptor) {
    console.log('Method Decorator)');
    console.log(target);
    console.log(name);
    console.log(descriptor);
}
//Parameter Decorator
function Log4(target, name, position) {
    console.log('Parameter Decorator)');
    console.log(target);
    console.log(name);
    console.log(position);
}
var Product = function () {
    var _a;
    var _instanceExtraInitializers = [];
    var _title_decorators;
    var _title_initializers = [];
    var _set_price_decorators;
    var _getPriceWithTax_decorators;
    return _a = /** @class */ (function () {
            function Product(t, p) {
                this.title = (__runInitializers(this, _instanceExtraInitializers), __runInitializers(this, _title_initializers, void 0));
                this.title = t;
                this._price = p;
            }
            Object.defineProperty(Product.prototype, "price", {
                set: function (val) {
                    if (val > 0) {
                        this._price = val;
                    }
                    else {
                        throw new Error('Invalid!');
                    }
                },
                enumerable: false,
                configurable: true
            });
            Product.prototype.getPriceWithTax = function (tax) {
                return this.price * (1 + tax);
            };
            return Product;
        }()),
        (function () {
            _title_decorators = [Log];
            _set_price_decorators = [Log2];
            _getPriceWithTax_decorators = [Log3];
            __esDecorate(_a, null, _set_price_decorators, { kind: "setter", name: "price", static: false, private: false, access: { has: function (obj) { return "price" in obj; }, set: function (obj, value) { obj.price = value; } } }, null, _instanceExtraInitializers);
            __esDecorate(_a, null, _getPriceWithTax_decorators, { kind: "method", name: "getPriceWithTax", static: false, private: false, access: { has: function (obj) { return "getPriceWithTax" in obj; }, get: function (obj) { return obj.getPriceWithTax; } } }, null, _instanceExtraInitializers);
            __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: function (obj) { return "title" in obj; }, get: function (obj) { return obj.title; }, set: function (obj, value) { obj.title = value; } } }, _title_initializers, _instanceExtraInitializers);
        })(),
        _a;
}();

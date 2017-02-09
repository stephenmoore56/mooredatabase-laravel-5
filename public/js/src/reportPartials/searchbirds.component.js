System.register(["@angular/core"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, SearchBirdsComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            }
        ],
        execute: function () {
            SearchBirdsComponent = (function () {
                function SearchBirdsComponent() {
                    this.birds = [];
                }
                return SearchBirdsComponent;
            }());
            __decorate([
                core_1.Input(),
                __metadata("design:type", Array)
            ], SearchBirdsComponent.prototype, "birds", void 0);
            SearchBirdsComponent = __decorate([
                core_1.Component({
                    selector: 'search-birds',
                    template: "\n    <div class=\"form-group\" style=\"margin-bottom: 10px;\">\n\t<label for=\"searchBirds\" class=\"control-label\">Filter:</label>\n\t<input type=\"search\" id=\"searchBirds\" name=\"searchBirds\" class=\"form-control input-sm\"\n\t\t   placeholder=\"Search for...\"\n\t\t   data-ng-model=\"birdQuery\" size=\"50\" maxlength=\"50\">\n    </div>\n"
                })
            ], SearchBirdsComponent);
            exports_1("SearchBirdsComponent", SearchBirdsComponent);
        }
    };
});
//# sourceMappingURL=searchbirds.component.js.map
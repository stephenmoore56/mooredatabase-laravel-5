System.register(["@angular/core", "../sortable"], function (exports_1, context_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
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
    var core_1, sortable_1, SpeciesListComponent;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (sortable_1_1) {
                sortable_1 = sortable_1_1;
            }
        ],
        execute: function () {
            SpeciesListComponent = (function (_super) {
                __extends(SpeciesListComponent, _super);
                function SpeciesListComponent() {
                    var _this = _super !== null && _super.apply(this, arguments) || this;
                    _this.birds = [];
                    return _this;
                }
                return SpeciesListComponent;
            }(sortable_1.Sortable));
            __decorate([
                core_1.Input(),
                __metadata("design:type", Array)
            ], SpeciesListComponent.prototype, "birds", void 0);
            SpeciesListComponent = __decorate([
                core_1.Component({
                    selector: 'species-list',
                    templateUrl: 'templates/directives/species-list.html'
                })
            ], SpeciesListComponent);
            exports_1("SpeciesListComponent", SpeciesListComponent);
        }
    };
});
//# sourceMappingURL=specieslist.component.js.map
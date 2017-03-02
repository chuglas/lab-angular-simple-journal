var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EntryFinderService } from '../entry-finder.service';
var SingleEntryComponent = (function () {
    function SingleEntryComponent(route, finder) {
        this.route = route;
        this.finder = finder;
        this.entry = {};
    }
    SingleEntryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.getEntry(params['id']);
        });
    };
    SingleEntryComponent.prototype.getEntry = function (id) {
        var _this = this;
        this.finder.get(id)
            .subscribe(function (entry) {
            _this.entry = entry;
            console.log('hey:  ', _this.entry);
        });
    };
    return SingleEntryComponent;
}());
SingleEntryComponent = __decorate([
    Component({
        selector: 'app-single-entry',
        templateUrl: './single-entry.component.html',
        styleUrls: ['./single-entry.component.css']
    }),
    __metadata("design:paramtypes", [ActivatedRoute,
        EntryFinderService])
], SingleEntryComponent);
export { SingleEntryComponent };
//# sourceMappingURL=../../../../src/app/single-entry/single-entry.component.js.map
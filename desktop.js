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
var core_1 = require('@angular/core');
var widget_1 = require('components/widget/widget');
var tabs_1 = require('components/tabs/tabs');
var controller_frame_1 = require('components/controller/controller-frame');
var ng2_bs3_modal_1 = require('ng2-bs3-modal/ng2-bs3-modal');
var desktop_service_1 = require('components/desktop/desktop.service');
var Desktop = (function () {
    function Desktop(cd, desktop) {
        this.cd = cd;
        this.desktop = desktop;
    }
    Desktop.prototype.close = function () {
        this.modal.close();
    };
    Desktop.prototype.open = function () {
        this.modal.open();
    };
    __decorate([
        core_1.ViewChild('modal'), 
        __metadata('design:type', ng2_bs3_modal_1.ModalComponent)
    ], Desktop.prototype, "modal", void 0);
    Desktop = __decorate([
        core_1.Component({
            selector: 'desktop',
            templateUrl: '/app/components/desktop/desktop.html',
            directives: [widget_1.Widget, tabs_1.Tab, tabs_1.Tabs, controller_frame_1.ControllerFrame, ng2_bs3_modal_1.MODAL_DIRECTIVES],
            providers: [desktop_service_1.DesktopService]
        }), 
        __metadata('design:paramtypes', [core_1.ChangeDetectorRef, (typeof (_a = typeof desktop_service_1.DesktopService !== 'undefined' && desktop_service_1.DesktopService) === 'function' && _a) || Object])
    ], Desktop);
    return Desktop;
    var _a;
}());
exports.Desktop = Desktop;
//# sourceMappingURL=desktop.js.map
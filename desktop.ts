import {Component, ChangeDetectionStrategy, ChangeDetectorRef, Injectable, ViewChild} from '@angular/core';
import {Widget} from 'components/widget/widget';
import {Tab, Tabs} from 'components/tabs/tabs';
import {ControllerFrame} from 'components/controller/controller-frame';
import {MODAL_DIRECTIVES, ModalComponent} from 'ng2-bs3-modal/ng2-bs3-modal';
import {DesktopService} from 'components/desktop/desktop.service';

@Component({
	selector:					'desktop',
	templateUrl:			'/app/components/desktop/desktop.html',
	directives:				[Widget, Tab, Tabs, ControllerFrame, MODAL_DIRECTIVES],
	providers:				[DesktopService]
})

export class Desktop {
	@ViewChild('modal') modal: ModalComponent;

    close() {
        this.modal.close();
    }

    open() {
        this.modal.open();
    }
	constructor(private cd: ChangeDetectorRef, private desktop: DesktopService) {}
}
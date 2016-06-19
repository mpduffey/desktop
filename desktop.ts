import {Component, ChangeDetectionStrategy, ChangeDetectorRef, Injectable} from '@angular/core';
import {Widget} from 'components/widget/widget';
import {Tab, Tabs} from 'components/tabs/tabs';
import {ControllerFrame} from 'components/controller/controller-frame';
import {Menu} from 'components/dropdown-menu/dropdown-menu';
import {DesktopService} from 'components/desktop/desktop.service';

@Component({
	selector:					'desktop',
	templateUrl:			'/app/components/desktop/desktop.html',
	directives:				[Widget, Tab, Tabs, ControllerFrame, Menu],
	providers:				[DesktopService]
})

export class Desktop {
	constructor(private cd: ChangeDetectorRef, private desktop: DesktopService) {}
}
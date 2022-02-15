/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectorRef } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthService } from '../../services/auth.service';
import * as i0 from "@angular/core";
export declare class NbRequestPasswordComponent {
    protected service: NbAuthService;
    protected options: {};
    protected cd: ChangeDetectorRef;
    protected router: Router;
    redirectDelay: number;
    showMessages: any;
    strategy: string;
    submitted: boolean;
    errors: string[];
    messages: string[];
    user: any;
    constructor(service: NbAuthService, options: {}, cd: ChangeDetectorRef, router: Router);
    requestPass(): void;
    getConfigValue(key: string): any;
    static ɵfac: i0.ɵɵFactoryDeclaration<NbRequestPasswordComponent, never>;
    static ɵcmp: i0.ɵɵComponentDeclaration<NbRequestPasswordComponent, "nb-request-password-page", never, {}, {}, never, never>;
}

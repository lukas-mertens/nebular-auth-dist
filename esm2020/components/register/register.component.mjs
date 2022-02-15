/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { NB_AUTH_OPTIONS } from '../../auth.options';
import { getDeepFromObject } from '../../helpers';
import * as i0 from "@angular/core";
import * as i1 from "../../services/auth.service";
import * as i2 from "@angular/router";
import * as i3 from "@nebular/theme";
import * as i4 from "@angular/common";
import * as i5 from "@angular/forms";
export class NbRegisterComponent {
    constructor(service, options = {}, cd, router) {
        this.service = service;
        this.options = options;
        this.cd = cd;
        this.router = router;
        this.redirectDelay = 0;
        this.showMessages = {};
        this.strategy = '';
        this.submitted = false;
        this.errors = [];
        this.messages = [];
        this.user = {};
        this.socialLinks = [];
        this.redirectDelay = this.getConfigValue('forms.register.redirectDelay');
        this.showMessages = this.getConfigValue('forms.register.showMessages');
        this.strategy = this.getConfigValue('forms.register.strategy');
        this.socialLinks = this.getConfigValue('forms.login.socialLinks');
    }
    register() {
        this.errors = this.messages = [];
        this.submitted = true;
        this.service.register(this.strategy, this.user).subscribe((result) => {
            this.submitted = false;
            if (result.isSuccess()) {
                this.messages = result.getMessages();
            }
            else {
                this.errors = result.getErrors();
            }
            const redirect = result.getRedirect();
            if (redirect) {
                setTimeout(() => {
                    return this.router.navigateByUrl(redirect);
                }, this.redirectDelay);
            }
            this.cd.detectChanges();
        });
    }
    getConfigValue(key) {
        return getDeepFromObject(this.options, key, null);
    }
}
NbRegisterComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbRegisterComponent, deps: [{ token: i1.NbAuthService }, { token: NB_AUTH_OPTIONS }, { token: i0.ChangeDetectorRef }, { token: i2.Router }], target: i0.ɵɵFactoryTarget.Component });
NbRegisterComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbRegisterComponent, selector: "nb-register", ngImport: i0, template: "<h1 id=\"title\" class=\"title\">Register</h1>\n\n<nb-alert *ngIf=\"showMessages.error && errors?.length && !submitted\" outline=\"danger\" role=\"alert\">\n  <p class=\"alert-title\"><b>Oh snap!</b></p>\n  <ul class=\"alert-message-list\">\n    <li *ngFor=\"let error of errors\" class=\"alert-message\">{{ error }}</li>\n  </ul>\n</nb-alert>\n\n<nb-alert *ngIf=\"showMessages.success && messages?.length && !submitted\" outline=\"success\" role=\"alert\">\n  <p class=\"alert-title\"><b>Hooray!</b></p>\n  <ul class=\"alert-message-list\">\n    <li *ngFor=\"let message of messages\" class=\"alert-message\">{{ message }}</li>\n  </ul>\n</nb-alert>\n\n<form (ngSubmit)=\"register()\" #form=\"ngForm\" aria-labelledby=\"title\">\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-name\">Full name:</label>\n    <input nbInput\n           [(ngModel)]=\"user.fullName\"\n           #fullName=\"ngModel\"\n           id=\"input-name\"\n           name=\"fullName\"\n           placeholder=\"Full name\"\n           autofocus\n           fullWidth\n           fieldSize=\"large\"\n           [status]=\"fullName.dirty ? (fullName.invalid  ? 'danger' : 'success') : 'basic'\"\n           [required]=\"getConfigValue('forms.validation.fullName.required')\"\n           [minlength]=\"getConfigValue('forms.validation.fullName.minLength')\"\n           [maxlength]=\"getConfigValue('forms.validation.fullName.maxLength')\"\n           [attr.aria-invalid]=\"fullName.invalid && fullName.touched ? true : null\">\n    <ng-container *ngIf=\"fullName.invalid && fullName.touched\">\n      <p class=\"caption status-danger\" *ngIf=\"fullName.errors?.required\">\n        Full name is required!\n      </p>\n      <p class=\"caption status-danger\" *ngIf=\"fullName.errors?.minlength || fullName.errors?.maxlength\">\n        Full name should contains\n        from {{getConfigValue('forms.validation.fullName.minLength')}}\n        to {{getConfigValue('forms.validation.fullName.maxLength')}}\n        characters\n      </p>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-email\">Email address:</label>\n    <input nbInput\n           [(ngModel)]=\"user.email\"\n           #email=\"ngModel\"\n           id=\"input-email\"\n           name=\"email\"\n           pattern=\".+@.+..+\"\n           placeholder=\"Email address\"\n           fullWidth\n           fieldSize=\"large\"\n           [status]=\"email.dirty ? (email.invalid  ? 'danger' : 'success') : 'basic'\"\n           [required]=\"getConfigValue('forms.validation.email.required')\"\n           [attr.aria-invalid]=\"email.invalid && email.touched ? true : null\">\n    <ng-container *ngIf=\"email.invalid && email.touched\">\n      <p class=\"caption status-danger\" *ngIf=\"email.errors?.required\">\n        Email is required!\n      </p>\n      <p class=\"caption status-danger\" *ngIf=\"email.errors?.pattern\">\n        Email should be the real one!\n      </p>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-password\">Password:</label>\n    <input nbInput\n           [(ngModel)]=\"user.password\"\n           #password=\"ngModel\"\n           type=\"password\"\n           id=\"input-password\"\n           name=\"password\"\n           placeholder=\"Password\"\n           fullWidth\n           fieldSize=\"large\"\n           [status]=\"password.dirty ? (password.invalid  ? 'danger' : 'success') : 'basic'\"\n           [required]=\"getConfigValue('forms.validation.password.required')\"\n           [minlength]=\"getConfigValue('forms.validation.password.minLength')\"\n           [maxlength]=\"getConfigValue('forms.validation.password.maxLength')\"\n           [attr.aria-invalid]=\"password.invalid && password.touched ? true : null\">\n    <ng-container *ngIf=\"password.invalid && password.touched\">\n      <p class=\"caption status-danger\" *ngIf=\"password.errors?.required\">\n        Password is required!\n      </p>\n      <p class=\"caption status-danger\" *ngIf=\"password.errors?.minlength || password.errors?.maxlength\">\n        Password should contain\n        from {{ getConfigValue('forms.validation.password.minLength') }}\n        to {{ getConfigValue('forms.validation.password.maxLength') }}\n        characters\n      </p>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-re-password\">Repeat password:</label>\n    <input nbInput\n           [(ngModel)]=\"user.confirmPassword\"\n           #rePass=\"ngModel\"\n           type=\"password\"\n           id=\"input-re-password\"\n           name=\"rePass\"\n           placeholder=\"Confirm Password\"\n           fullWidth\n           fieldSize=\"large\"\n           [status]=\"rePass.dirty ? (rePass.invalid || password.value != rePass.value  ? 'danger' : 'success') : 'basic'\"\n           [required]=\"getConfigValue('forms.validation.password.required')\"\n           [attr.aria-invalid]=\"rePass.invalid && rePass.touched ? true : null\">\n    <ng-container *ngIf=\"rePass.invalid && rePass.touched\">\n      <p class=\"caption status-danger\" *ngIf=\"rePass.errors?.required\">\n        Password confirmation is required!\n      </p>\n      <p class=\"caption status-danger\" *ngIf=\"password.value != rePass.value && !rePass.errors?.required\">\n        Password does not match the confirm password.\n      </p>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group accept-group\" *ngIf=\"getConfigValue('forms.register.terms')\">\n    <nb-checkbox name=\"terms\" [(ngModel)]=\"user.terms\" [required]=\"getConfigValue('forms.register.terms')\">\n      Agree to <a href=\"#\" target=\"_blank\"><strong>Terms & Conditions</strong></a>\n    </nb-checkbox>\n  </div>\n\n  <button nbButton\n          fullWidth\n          status=\"primary\"\n          size=\"large\"\n          [disabled]=\"submitted || !form.valid\"\n          [class.btn-pulse]=\"submitted\">\n    Register\n  </button>\n</form>\n\n<section *ngIf=\"socialLinks && socialLinks.length > 0\" class=\"links\" aria-label=\"Social sign in\">\n  or enter with:\n  <div class=\"socials\">\n    <ng-container *ngFor=\"let socialLink of socialLinks\">\n      <a *ngIf=\"socialLink.link\"\n         [routerLink]=\"socialLink.link\"\n         [attr.target]=\"socialLink.target\"\n         [attr.class]=\"socialLink.icon\"\n         [class.with-icon]=\"socialLink.icon\">\n        <nb-icon *ngIf=\"socialLink.icon; else title\" [icon]=\"socialLink.icon\"></nb-icon>\n        <ng-template #title>{{ socialLink.title }}</ng-template>\n      </a>\n      <a *ngIf=\"socialLink.url\"\n         [attr.href]=\"socialLink.url\"\n         [attr.target]=\"socialLink.target\"\n         [attr.class]=\"socialLink.icon\"\n         [class.with-icon]=\"socialLink.icon\">\n        <nb-icon *ngIf=\"socialLink.icon; else title\" [icon]=\"socialLink.icon\"></nb-icon>\n        <ng-template #title>{{ socialLink.title }}</ng-template>\n      </a>\n    </ng-container>\n  </div>\n</section>\n\n<section class=\"another-action\" aria-label=\"Sign in\">\n  Already have an account? <a class=\"text-link\" routerLink=\"../login\">Log in</a>\n</section>\n", styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host .title{margin-bottom:2rem}\n"], components: [{ type: i3.NbAlertComponent, selector: "nb-alert", inputs: ["size", "status", "accent", "outline", "closable"], outputs: ["close"] }, { type: i3.NbCheckboxComponent, selector: "nb-checkbox", inputs: ["checked", "disabled", "status", "indeterminate"], outputs: ["checkedChange"] }, { type: i3.NbButtonComponent, selector: "button[nbButton],a[nbButton],input[type=\"button\"][nbButton],input[type=\"submit\"][nbButton]", inputs: ["hero"] }, { type: i3.NbIconComponent, selector: "nb-icon", inputs: ["icon", "pack", "options", "status", "config"] }], directives: [{ type: i4.NgIf, selector: "[ngIf]", inputs: ["ngIf", "ngIfThen", "ngIfElse"] }, { type: i4.NgForOf, selector: "[ngFor][ngForOf]", inputs: ["ngForOf", "ngForTrackBy", "ngForTemplate"] }, { type: i5.ɵNgNoValidate, selector: "form:not([ngNoForm]):not([ngNativeValidate])" }, { type: i5.NgControlStatusGroup, selector: "[formGroupName],[formArrayName],[ngModelGroup],[formGroup],form:not([ngNoForm]),[ngForm]" }, { type: i5.NgForm, selector: "form:not([ngNoForm]):not([formGroup]),ng-form,[ngForm]", inputs: ["ngFormOptions"], outputs: ["ngSubmit"], exportAs: ["ngForm"] }, { type: i3.NbInputDirective, selector: "input[nbInput],textarea[nbInput]", inputs: ["fieldSize", "status", "shape", "fullWidth"] }, { type: i5.DefaultValueAccessor, selector: "input:not([type=checkbox])[formControlName],textarea[formControlName],input:not([type=checkbox])[formControl],textarea[formControl],input:not([type=checkbox])[ngModel],textarea[ngModel],[ngDefaultControl]" }, { type: i5.NgControlStatus, selector: "[formControlName],[ngModel],[formControl]" }, { type: i5.NgModel, selector: "[ngModel]:not([formControlName]):not([formControl])", inputs: ["name", "disabled", "ngModel", "ngModelOptions"], outputs: ["ngModelChange"], exportAs: ["ngModel"] }, { type: i5.RequiredValidator, selector: ":not([type=checkbox])[required][formControlName],:not([type=checkbox])[required][formControl],:not([type=checkbox])[required][ngModel]", inputs: ["required"] }, { type: i5.MinLengthValidator, selector: "[minlength][formControlName],[minlength][formControl],[minlength][ngModel]", inputs: ["minlength"] }, { type: i5.MaxLengthValidator, selector: "[maxlength][formControlName],[maxlength][formControl],[maxlength][ngModel]", inputs: ["maxlength"] }, { type: i5.PatternValidator, selector: "[pattern][formControlName],[pattern][formControl],[pattern][ngModel]", inputs: ["pattern"] }, { type: i2.RouterLinkWithHref, selector: "a[routerLink],area[routerLink]", inputs: ["target", "queryParams", "fragment", "queryParamsHandling", "preserveFragment", "skipLocationChange", "replaceUrl", "state", "relativeTo", "routerLink"] }], changeDetection: i0.ChangeDetectionStrategy.OnPush });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbRegisterComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nb-register', changeDetection: ChangeDetectionStrategy.OnPush, template: "<h1 id=\"title\" class=\"title\">Register</h1>\n\n<nb-alert *ngIf=\"showMessages.error && errors?.length && !submitted\" outline=\"danger\" role=\"alert\">\n  <p class=\"alert-title\"><b>Oh snap!</b></p>\n  <ul class=\"alert-message-list\">\n    <li *ngFor=\"let error of errors\" class=\"alert-message\">{{ error }}</li>\n  </ul>\n</nb-alert>\n\n<nb-alert *ngIf=\"showMessages.success && messages?.length && !submitted\" outline=\"success\" role=\"alert\">\n  <p class=\"alert-title\"><b>Hooray!</b></p>\n  <ul class=\"alert-message-list\">\n    <li *ngFor=\"let message of messages\" class=\"alert-message\">{{ message }}</li>\n  </ul>\n</nb-alert>\n\n<form (ngSubmit)=\"register()\" #form=\"ngForm\" aria-labelledby=\"title\">\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-name\">Full name:</label>\n    <input nbInput\n           [(ngModel)]=\"user.fullName\"\n           #fullName=\"ngModel\"\n           id=\"input-name\"\n           name=\"fullName\"\n           placeholder=\"Full name\"\n           autofocus\n           fullWidth\n           fieldSize=\"large\"\n           [status]=\"fullName.dirty ? (fullName.invalid  ? 'danger' : 'success') : 'basic'\"\n           [required]=\"getConfigValue('forms.validation.fullName.required')\"\n           [minlength]=\"getConfigValue('forms.validation.fullName.minLength')\"\n           [maxlength]=\"getConfigValue('forms.validation.fullName.maxLength')\"\n           [attr.aria-invalid]=\"fullName.invalid && fullName.touched ? true : null\">\n    <ng-container *ngIf=\"fullName.invalid && fullName.touched\">\n      <p class=\"caption status-danger\" *ngIf=\"fullName.errors?.required\">\n        Full name is required!\n      </p>\n      <p class=\"caption status-danger\" *ngIf=\"fullName.errors?.minlength || fullName.errors?.maxlength\">\n        Full name should contains\n        from {{getConfigValue('forms.validation.fullName.minLength')}}\n        to {{getConfigValue('forms.validation.fullName.maxLength')}}\n        characters\n      </p>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-email\">Email address:</label>\n    <input nbInput\n           [(ngModel)]=\"user.email\"\n           #email=\"ngModel\"\n           id=\"input-email\"\n           name=\"email\"\n           pattern=\".+@.+..+\"\n           placeholder=\"Email address\"\n           fullWidth\n           fieldSize=\"large\"\n           [status]=\"email.dirty ? (email.invalid  ? 'danger' : 'success') : 'basic'\"\n           [required]=\"getConfigValue('forms.validation.email.required')\"\n           [attr.aria-invalid]=\"email.invalid && email.touched ? true : null\">\n    <ng-container *ngIf=\"email.invalid && email.touched\">\n      <p class=\"caption status-danger\" *ngIf=\"email.errors?.required\">\n        Email is required!\n      </p>\n      <p class=\"caption status-danger\" *ngIf=\"email.errors?.pattern\">\n        Email should be the real one!\n      </p>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-password\">Password:</label>\n    <input nbInput\n           [(ngModel)]=\"user.password\"\n           #password=\"ngModel\"\n           type=\"password\"\n           id=\"input-password\"\n           name=\"password\"\n           placeholder=\"Password\"\n           fullWidth\n           fieldSize=\"large\"\n           [status]=\"password.dirty ? (password.invalid  ? 'danger' : 'success') : 'basic'\"\n           [required]=\"getConfigValue('forms.validation.password.required')\"\n           [minlength]=\"getConfigValue('forms.validation.password.minLength')\"\n           [maxlength]=\"getConfigValue('forms.validation.password.maxLength')\"\n           [attr.aria-invalid]=\"password.invalid && password.touched ? true : null\">\n    <ng-container *ngIf=\"password.invalid && password.touched\">\n      <p class=\"caption status-danger\" *ngIf=\"password.errors?.required\">\n        Password is required!\n      </p>\n      <p class=\"caption status-danger\" *ngIf=\"password.errors?.minlength || password.errors?.maxlength\">\n        Password should contain\n        from {{ getConfigValue('forms.validation.password.minLength') }}\n        to {{ getConfigValue('forms.validation.password.maxLength') }}\n        characters\n      </p>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group\">\n    <label class=\"label\" for=\"input-re-password\">Repeat password:</label>\n    <input nbInput\n           [(ngModel)]=\"user.confirmPassword\"\n           #rePass=\"ngModel\"\n           type=\"password\"\n           id=\"input-re-password\"\n           name=\"rePass\"\n           placeholder=\"Confirm Password\"\n           fullWidth\n           fieldSize=\"large\"\n           [status]=\"rePass.dirty ? (rePass.invalid || password.value != rePass.value  ? 'danger' : 'success') : 'basic'\"\n           [required]=\"getConfigValue('forms.validation.password.required')\"\n           [attr.aria-invalid]=\"rePass.invalid && rePass.touched ? true : null\">\n    <ng-container *ngIf=\"rePass.invalid && rePass.touched\">\n      <p class=\"caption status-danger\" *ngIf=\"rePass.errors?.required\">\n        Password confirmation is required!\n      </p>\n      <p class=\"caption status-danger\" *ngIf=\"password.value != rePass.value && !rePass.errors?.required\">\n        Password does not match the confirm password.\n      </p>\n    </ng-container>\n  </div>\n\n  <div class=\"form-control-group accept-group\" *ngIf=\"getConfigValue('forms.register.terms')\">\n    <nb-checkbox name=\"terms\" [(ngModel)]=\"user.terms\" [required]=\"getConfigValue('forms.register.terms')\">\n      Agree to <a href=\"#\" target=\"_blank\"><strong>Terms & Conditions</strong></a>\n    </nb-checkbox>\n  </div>\n\n  <button nbButton\n          fullWidth\n          status=\"primary\"\n          size=\"large\"\n          [disabled]=\"submitted || !form.valid\"\n          [class.btn-pulse]=\"submitted\">\n    Register\n  </button>\n</form>\n\n<section *ngIf=\"socialLinks && socialLinks.length > 0\" class=\"links\" aria-label=\"Social sign in\">\n  or enter with:\n  <div class=\"socials\">\n    <ng-container *ngFor=\"let socialLink of socialLinks\">\n      <a *ngIf=\"socialLink.link\"\n         [routerLink]=\"socialLink.link\"\n         [attr.target]=\"socialLink.target\"\n         [attr.class]=\"socialLink.icon\"\n         [class.with-icon]=\"socialLink.icon\">\n        <nb-icon *ngIf=\"socialLink.icon; else title\" [icon]=\"socialLink.icon\"></nb-icon>\n        <ng-template #title>{{ socialLink.title }}</ng-template>\n      </a>\n      <a *ngIf=\"socialLink.url\"\n         [attr.href]=\"socialLink.url\"\n         [attr.target]=\"socialLink.target\"\n         [attr.class]=\"socialLink.icon\"\n         [class.with-icon]=\"socialLink.icon\">\n        <nb-icon *ngIf=\"socialLink.icon; else title\" [icon]=\"socialLink.icon\"></nb-icon>\n        <ng-template #title>{{ socialLink.title }}</ng-template>\n      </a>\n    </ng-container>\n  </div>\n</section>\n\n<section class=\"another-action\" aria-label=\"Sign in\">\n  Already have an account? <a class=\"text-link\" routerLink=\"../login\">Log in</a>\n</section>\n", styles: ["/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host .title{margin-bottom:2rem}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.NbAuthService }, { type: undefined, decorators: [{
                    type: Inject,
                    args: [NB_AUTH_OPTIONS]
                }] }, { type: i0.ChangeDetectorRef }, { type: i2.Router }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVnaXN0ZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vc3JjL2ZyYW1ld29yay9hdXRoL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnRzIiwiLi4vLi4vLi4vLi4vLi4vc3JjL2ZyYW1ld29yay9hdXRoL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50Lmh0bWwiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUNILE9BQU8sRUFBRSx1QkFBdUIsRUFBcUIsU0FBUyxFQUFFLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUU5RixPQUFPLEVBQUUsZUFBZSxFQUFvQixNQUFNLG9CQUFvQixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQzs7Ozs7OztBQVlsRCxNQUFNLE9BQU8sbUJBQW1CO0lBWTlCLFlBQXNCLE9BQXNCLEVBQ0csVUFBVSxFQUFFLEVBQ3JDLEVBQXFCLEVBQ3JCLE1BQWM7UUFIZCxZQUFPLEdBQVAsT0FBTyxDQUFlO1FBQ0csWUFBTyxHQUFQLE9BQU8sQ0FBSztRQUNyQyxPQUFFLEdBQUYsRUFBRSxDQUFtQjtRQUNyQixXQUFNLEdBQU4sTUFBTSxDQUFRO1FBYnBDLGtCQUFhLEdBQVcsQ0FBQyxDQUFDO1FBQzFCLGlCQUFZLEdBQVEsRUFBRSxDQUFDO1FBQ3ZCLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFFdEIsY0FBUyxHQUFHLEtBQUssQ0FBQztRQUNsQixXQUFNLEdBQWEsRUFBRSxDQUFDO1FBQ3RCLGFBQVEsR0FBYSxFQUFFLENBQUM7UUFDeEIsU0FBSSxHQUFRLEVBQUUsQ0FBQztRQUNmLGdCQUFXLEdBQXVCLEVBQUUsQ0FBQztRQU9uQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsOEJBQThCLENBQUMsQ0FBQztRQUN6RSxJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMsNkJBQTZCLENBQUMsQ0FBQztRQUN2RSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMseUJBQXlCLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsV0FBVyxHQUFHLElBQUksQ0FBQyxjQUFjLENBQUMseUJBQXlCLENBQUMsQ0FBQztJQUNwRSxDQUFDO0lBRUQsUUFBUTtRQUNOLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUM7UUFFdEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBb0IsRUFBRSxFQUFFO1lBQ2pGLElBQUksQ0FBQyxTQUFTLEdBQUcsS0FBSyxDQUFDO1lBQ3ZCLElBQUksTUFBTSxDQUFDLFNBQVMsRUFBRSxFQUFFO2dCQUN0QixJQUFJLENBQUMsUUFBUSxHQUFHLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQzthQUN0QztpQkFBTTtnQkFDTCxJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQzthQUNsQztZQUVELE1BQU0sUUFBUSxHQUFHLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUN0QyxJQUFJLFFBQVEsRUFBRTtnQkFDWixVQUFVLENBQUMsR0FBRyxFQUFFO29CQUNkLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLENBQUMsUUFBUSxDQUFDLENBQUM7Z0JBQzdDLENBQUMsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7YUFDeEI7WUFDRCxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQzFCLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVELGNBQWMsQ0FBQyxHQUFXO1FBQ3hCLE9BQU8saUJBQWlCLENBQUMsSUFBSSxDQUFDLE9BQU8sRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7SUFDcEQsQ0FBQzs7Z0hBL0NVLG1CQUFtQiwrQ0FhVixlQUFlO29HQWJ4QixtQkFBbUIsbURDcEJoQyxvbU9BdUtBOzJGRG5KYSxtQkFBbUI7a0JBTi9CLFNBQVM7K0JBQ0UsYUFBYSxtQkFHTix1QkFBdUIsQ0FBQyxNQUFNOzswQkFlbEMsTUFBTTsyQkFBQyxlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuaW1wb3J0IHsgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksIENoYW5nZURldGVjdG9yUmVmLCBDb21wb25lbnQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcbmltcG9ydCB7IE5CX0FVVEhfT1BUSU9OUywgTmJBdXRoU29jaWFsTGluayB9IGZyb20gJy4uLy4uL2F1dGgub3B0aW9ucyc7XG5pbXBvcnQgeyBnZXREZWVwRnJvbU9iamVjdCB9IGZyb20gJy4uLy4uL2hlbHBlcnMnO1xuXG5pbXBvcnQgeyBOYkF1dGhTZXJ2aWNlIH0gZnJvbSAnLi4vLi4vc2VydmljZXMvYXV0aC5zZXJ2aWNlJztcbmltcG9ydCB7IE5iQXV0aFJlc3VsdCB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL2F1dGgtcmVzdWx0JztcblxuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduYi1yZWdpc3RlcicsXG4gIHN0eWxlVXJsczogWycuL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlVXJsOiAnLi9yZWdpc3Rlci5jb21wb25lbnQuaHRtbCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxufSlcbmV4cG9ydCBjbGFzcyBOYlJlZ2lzdGVyQ29tcG9uZW50IHtcblxuICByZWRpcmVjdERlbGF5OiBudW1iZXIgPSAwO1xuICBzaG93TWVzc2FnZXM6IGFueSA9IHt9O1xuICBzdHJhdGVneTogc3RyaW5nID0gJyc7XG5cbiAgc3VibWl0dGVkID0gZmFsc2U7XG4gIGVycm9yczogc3RyaW5nW10gPSBbXTtcbiAgbWVzc2FnZXM6IHN0cmluZ1tdID0gW107XG4gIHVzZXI6IGFueSA9IHt9O1xuICBzb2NpYWxMaW5rczogTmJBdXRoU29jaWFsTGlua1tdID0gW107XG5cbiAgY29uc3RydWN0b3IocHJvdGVjdGVkIHNlcnZpY2U6IE5iQXV0aFNlcnZpY2UsXG4gICAgICAgICAgICAgIEBJbmplY3QoTkJfQVVUSF9PUFRJT05TKSBwcm90ZWN0ZWQgb3B0aW9ucyA9IHt9LFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgY2Q6IENoYW5nZURldGVjdG9yUmVmLFxuICAgICAgICAgICAgICBwcm90ZWN0ZWQgcm91dGVyOiBSb3V0ZXIpIHtcblxuICAgIHRoaXMucmVkaXJlY3REZWxheSA9IHRoaXMuZ2V0Q29uZmlnVmFsdWUoJ2Zvcm1zLnJlZ2lzdGVyLnJlZGlyZWN0RGVsYXknKTtcbiAgICB0aGlzLnNob3dNZXNzYWdlcyA9IHRoaXMuZ2V0Q29uZmlnVmFsdWUoJ2Zvcm1zLnJlZ2lzdGVyLnNob3dNZXNzYWdlcycpO1xuICAgIHRoaXMuc3RyYXRlZ3kgPSB0aGlzLmdldENvbmZpZ1ZhbHVlKCdmb3Jtcy5yZWdpc3Rlci5zdHJhdGVneScpO1xuICAgIHRoaXMuc29jaWFsTGlua3MgPSB0aGlzLmdldENvbmZpZ1ZhbHVlKCdmb3Jtcy5sb2dpbi5zb2NpYWxMaW5rcycpO1xuICB9XG5cbiAgcmVnaXN0ZXIoKTogdm9pZCB7XG4gICAgdGhpcy5lcnJvcnMgPSB0aGlzLm1lc3NhZ2VzID0gW107XG4gICAgdGhpcy5zdWJtaXR0ZWQgPSB0cnVlO1xuXG4gICAgdGhpcy5zZXJ2aWNlLnJlZ2lzdGVyKHRoaXMuc3RyYXRlZ3ksIHRoaXMudXNlcikuc3Vic2NyaWJlKChyZXN1bHQ6IE5iQXV0aFJlc3VsdCkgPT4ge1xuICAgICAgdGhpcy5zdWJtaXR0ZWQgPSBmYWxzZTtcbiAgICAgIGlmIChyZXN1bHQuaXNTdWNjZXNzKCkpIHtcbiAgICAgICAgdGhpcy5tZXNzYWdlcyA9IHJlc3VsdC5nZXRNZXNzYWdlcygpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5lcnJvcnMgPSByZXN1bHQuZ2V0RXJyb3JzKCk7XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJlZGlyZWN0ID0gcmVzdWx0LmdldFJlZGlyZWN0KCk7XG4gICAgICBpZiAocmVkaXJlY3QpIHtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgcmV0dXJuIHRoaXMucm91dGVyLm5hdmlnYXRlQnlVcmwocmVkaXJlY3QpO1xuICAgICAgICB9LCB0aGlzLnJlZGlyZWN0RGVsYXkpO1xuICAgICAgfVxuICAgICAgdGhpcy5jZC5kZXRlY3RDaGFuZ2VzKCk7XG4gICAgfSk7XG4gIH1cblxuICBnZXRDb25maWdWYWx1ZShrZXk6IHN0cmluZyk6IGFueSB7XG4gICAgcmV0dXJuIGdldERlZXBGcm9tT2JqZWN0KHRoaXMub3B0aW9ucywga2V5LCBudWxsKTtcbiAgfVxufVxuIiwiPGgxIGlkPVwidGl0bGVcIiBjbGFzcz1cInRpdGxlXCI+UmVnaXN0ZXI8L2gxPlxuXG48bmItYWxlcnQgKm5nSWY9XCJzaG93TWVzc2FnZXMuZXJyb3IgJiYgZXJyb3JzPy5sZW5ndGggJiYgIXN1Ym1pdHRlZFwiIG91dGxpbmU9XCJkYW5nZXJcIiByb2xlPVwiYWxlcnRcIj5cbiAgPHAgY2xhc3M9XCJhbGVydC10aXRsZVwiPjxiPk9oIHNuYXAhPC9iPjwvcD5cbiAgPHVsIGNsYXNzPVwiYWxlcnQtbWVzc2FnZS1saXN0XCI+XG4gICAgPGxpICpuZ0Zvcj1cImxldCBlcnJvciBvZiBlcnJvcnNcIiBjbGFzcz1cImFsZXJ0LW1lc3NhZ2VcIj57eyBlcnJvciB9fTwvbGk+XG4gIDwvdWw+XG48L25iLWFsZXJ0PlxuXG48bmItYWxlcnQgKm5nSWY9XCJzaG93TWVzc2FnZXMuc3VjY2VzcyAmJiBtZXNzYWdlcz8ubGVuZ3RoICYmICFzdWJtaXR0ZWRcIiBvdXRsaW5lPVwic3VjY2Vzc1wiIHJvbGU9XCJhbGVydFwiPlxuICA8cCBjbGFzcz1cImFsZXJ0LXRpdGxlXCI+PGI+SG9vcmF5ITwvYj48L3A+XG4gIDx1bCBjbGFzcz1cImFsZXJ0LW1lc3NhZ2UtbGlzdFwiPlxuICAgIDxsaSAqbmdGb3I9XCJsZXQgbWVzc2FnZSBvZiBtZXNzYWdlc1wiIGNsYXNzPVwiYWxlcnQtbWVzc2FnZVwiPnt7IG1lc3NhZ2UgfX08L2xpPlxuICA8L3VsPlxuPC9uYi1hbGVydD5cblxuPGZvcm0gKG5nU3VibWl0KT1cInJlZ2lzdGVyKClcIiAjZm9ybT1cIm5nRm9ybVwiIGFyaWEtbGFiZWxsZWRieT1cInRpdGxlXCI+XG5cbiAgPGRpdiBjbGFzcz1cImZvcm0tY29udHJvbC1ncm91cFwiPlxuICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCIgZm9yPVwiaW5wdXQtbmFtZVwiPkZ1bGwgbmFtZTo8L2xhYmVsPlxuICAgIDxpbnB1dCBuYklucHV0XG4gICAgICAgICAgIFsobmdNb2RlbCldPVwidXNlci5mdWxsTmFtZVwiXG4gICAgICAgICAgICNmdWxsTmFtZT1cIm5nTW9kZWxcIlxuICAgICAgICAgICBpZD1cImlucHV0LW5hbWVcIlxuICAgICAgICAgICBuYW1lPVwiZnVsbE5hbWVcIlxuICAgICAgICAgICBwbGFjZWhvbGRlcj1cIkZ1bGwgbmFtZVwiXG4gICAgICAgICAgIGF1dG9mb2N1c1xuICAgICAgICAgICBmdWxsV2lkdGhcbiAgICAgICAgICAgZmllbGRTaXplPVwibGFyZ2VcIlxuICAgICAgICAgICBbc3RhdHVzXT1cImZ1bGxOYW1lLmRpcnR5ID8gKGZ1bGxOYW1lLmludmFsaWQgID8gJ2RhbmdlcicgOiAnc3VjY2VzcycpIDogJ2Jhc2ljJ1wiXG4gICAgICAgICAgIFtyZXF1aXJlZF09XCJnZXRDb25maWdWYWx1ZSgnZm9ybXMudmFsaWRhdGlvbi5mdWxsTmFtZS5yZXF1aXJlZCcpXCJcbiAgICAgICAgICAgW21pbmxlbmd0aF09XCJnZXRDb25maWdWYWx1ZSgnZm9ybXMudmFsaWRhdGlvbi5mdWxsTmFtZS5taW5MZW5ndGgnKVwiXG4gICAgICAgICAgIFttYXhsZW5ndGhdPVwiZ2V0Q29uZmlnVmFsdWUoJ2Zvcm1zLnZhbGlkYXRpb24uZnVsbE5hbWUubWF4TGVuZ3RoJylcIlxuICAgICAgICAgICBbYXR0ci5hcmlhLWludmFsaWRdPVwiZnVsbE5hbWUuaW52YWxpZCAmJiBmdWxsTmFtZS50b3VjaGVkID8gdHJ1ZSA6IG51bGxcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZnVsbE5hbWUuaW52YWxpZCAmJiBmdWxsTmFtZS50b3VjaGVkXCI+XG4gICAgICA8cCBjbGFzcz1cImNhcHRpb24gc3RhdHVzLWRhbmdlclwiICpuZ0lmPVwiZnVsbE5hbWUuZXJyb3JzPy5yZXF1aXJlZFwiPlxuICAgICAgICBGdWxsIG5hbWUgaXMgcmVxdWlyZWQhXG4gICAgICA8L3A+XG4gICAgICA8cCBjbGFzcz1cImNhcHRpb24gc3RhdHVzLWRhbmdlclwiICpuZ0lmPVwiZnVsbE5hbWUuZXJyb3JzPy5taW5sZW5ndGggfHwgZnVsbE5hbWUuZXJyb3JzPy5tYXhsZW5ndGhcIj5cbiAgICAgICAgRnVsbCBuYW1lIHNob3VsZCBjb250YWluc1xuICAgICAgICBmcm9tIHt7Z2V0Q29uZmlnVmFsdWUoJ2Zvcm1zLnZhbGlkYXRpb24uZnVsbE5hbWUubWluTGVuZ3RoJyl9fVxuICAgICAgICB0byB7e2dldENvbmZpZ1ZhbHVlKCdmb3Jtcy52YWxpZGF0aW9uLmZ1bGxOYW1lLm1heExlbmd0aCcpfX1cbiAgICAgICAgY2hhcmFjdGVyc1xuICAgICAgPC9wPlxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiZm9ybS1jb250cm9sLWdyb3VwXCI+XG4gICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIiBmb3I9XCJpbnB1dC1lbWFpbFwiPkVtYWlsIGFkZHJlc3M6PC9sYWJlbD5cbiAgICA8aW5wdXQgbmJJbnB1dFxuICAgICAgICAgICBbKG5nTW9kZWwpXT1cInVzZXIuZW1haWxcIlxuICAgICAgICAgICAjZW1haWw9XCJuZ01vZGVsXCJcbiAgICAgICAgICAgaWQ9XCJpbnB1dC1lbWFpbFwiXG4gICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXG4gICAgICAgICAgIHBhdHRlcm49XCIuK0AuKy4uK1wiXG4gICAgICAgICAgIHBsYWNlaG9sZGVyPVwiRW1haWwgYWRkcmVzc1wiXG4gICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICBmaWVsZFNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgIFtzdGF0dXNdPVwiZW1haWwuZGlydHkgPyAoZW1haWwuaW52YWxpZCAgPyAnZGFuZ2VyJyA6ICdzdWNjZXNzJykgOiAnYmFzaWMnXCJcbiAgICAgICAgICAgW3JlcXVpcmVkXT1cImdldENvbmZpZ1ZhbHVlKCdmb3Jtcy52YWxpZGF0aW9uLmVtYWlsLnJlcXVpcmVkJylcIlxuICAgICAgICAgICBbYXR0ci5hcmlhLWludmFsaWRdPVwiZW1haWwuaW52YWxpZCAmJiBlbWFpbC50b3VjaGVkID8gdHJ1ZSA6IG51bGxcIj5cbiAgICA8bmctY29udGFpbmVyICpuZ0lmPVwiZW1haWwuaW52YWxpZCAmJiBlbWFpbC50b3VjaGVkXCI+XG4gICAgICA8cCBjbGFzcz1cImNhcHRpb24gc3RhdHVzLWRhbmdlclwiICpuZ0lmPVwiZW1haWwuZXJyb3JzPy5yZXF1aXJlZFwiPlxuICAgICAgICBFbWFpbCBpcyByZXF1aXJlZCFcbiAgICAgIDwvcD5cbiAgICAgIDxwIGNsYXNzPVwiY2FwdGlvbiBzdGF0dXMtZGFuZ2VyXCIgKm5nSWY9XCJlbWFpbC5lcnJvcnM/LnBhdHRlcm5cIj5cbiAgICAgICAgRW1haWwgc2hvdWxkIGJlIHRoZSByZWFsIG9uZSFcbiAgICAgIDwvcD5cbiAgICA8L25nLWNvbnRhaW5lcj5cbiAgPC9kaXY+XG5cbiAgPGRpdiBjbGFzcz1cImZvcm0tY29udHJvbC1ncm91cFwiPlxuICAgIDxsYWJlbCBjbGFzcz1cImxhYmVsXCIgZm9yPVwiaW5wdXQtcGFzc3dvcmRcIj5QYXNzd29yZDo8L2xhYmVsPlxuICAgIDxpbnB1dCBuYklucHV0XG4gICAgICAgICAgIFsobmdNb2RlbCldPVwidXNlci5wYXNzd29yZFwiXG4gICAgICAgICAgICNwYXNzd29yZD1cIm5nTW9kZWxcIlxuICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxuICAgICAgICAgICBpZD1cImlucHV0LXBhc3N3b3JkXCJcbiAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcbiAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXG4gICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgICBmaWVsZFNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgIFtzdGF0dXNdPVwicGFzc3dvcmQuZGlydHkgPyAocGFzc3dvcmQuaW52YWxpZCAgPyAnZGFuZ2VyJyA6ICdzdWNjZXNzJykgOiAnYmFzaWMnXCJcbiAgICAgICAgICAgW3JlcXVpcmVkXT1cImdldENvbmZpZ1ZhbHVlKCdmb3Jtcy52YWxpZGF0aW9uLnBhc3N3b3JkLnJlcXVpcmVkJylcIlxuICAgICAgICAgICBbbWlubGVuZ3RoXT1cImdldENvbmZpZ1ZhbHVlKCdmb3Jtcy52YWxpZGF0aW9uLnBhc3N3b3JkLm1pbkxlbmd0aCcpXCJcbiAgICAgICAgICAgW21heGxlbmd0aF09XCJnZXRDb25maWdWYWx1ZSgnZm9ybXMudmFsaWRhdGlvbi5wYXNzd29yZC5tYXhMZW5ndGgnKVwiXG4gICAgICAgICAgIFthdHRyLmFyaWEtaW52YWxpZF09XCJwYXNzd29yZC5pbnZhbGlkICYmIHBhc3N3b3JkLnRvdWNoZWQgPyB0cnVlIDogbnVsbFwiPlxuICAgIDxuZy1jb250YWluZXIgKm5nSWY9XCJwYXNzd29yZC5pbnZhbGlkICYmIHBhc3N3b3JkLnRvdWNoZWRcIj5cbiAgICAgIDxwIGNsYXNzPVwiY2FwdGlvbiBzdGF0dXMtZGFuZ2VyXCIgKm5nSWY9XCJwYXNzd29yZC5lcnJvcnM/LnJlcXVpcmVkXCI+XG4gICAgICAgIFBhc3N3b3JkIGlzIHJlcXVpcmVkIVxuICAgICAgPC9wPlxuICAgICAgPHAgY2xhc3M9XCJjYXB0aW9uIHN0YXR1cy1kYW5nZXJcIiAqbmdJZj1cInBhc3N3b3JkLmVycm9ycz8ubWlubGVuZ3RoIHx8IHBhc3N3b3JkLmVycm9ycz8ubWF4bGVuZ3RoXCI+XG4gICAgICAgIFBhc3N3b3JkIHNob3VsZCBjb250YWluXG4gICAgICAgIGZyb20ge3sgZ2V0Q29uZmlnVmFsdWUoJ2Zvcm1zLnZhbGlkYXRpb24ucGFzc3dvcmQubWluTGVuZ3RoJykgfX1cbiAgICAgICAgdG8ge3sgZ2V0Q29uZmlnVmFsdWUoJ2Zvcm1zLnZhbGlkYXRpb24ucGFzc3dvcmQubWF4TGVuZ3RoJykgfX1cbiAgICAgICAgY2hhcmFjdGVyc1xuICAgICAgPC9wPlxuICAgIDwvbmctY29udGFpbmVyPlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiZm9ybS1jb250cm9sLWdyb3VwXCI+XG4gICAgPGxhYmVsIGNsYXNzPVwibGFiZWxcIiBmb3I9XCJpbnB1dC1yZS1wYXNzd29yZFwiPlJlcGVhdCBwYXNzd29yZDo8L2xhYmVsPlxuICAgIDxpbnB1dCBuYklucHV0XG4gICAgICAgICAgIFsobmdNb2RlbCldPVwidXNlci5jb25maXJtUGFzc3dvcmRcIlxuICAgICAgICAgICAjcmVQYXNzPVwibmdNb2RlbFwiXG4gICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXG4gICAgICAgICAgIGlkPVwiaW5wdXQtcmUtcGFzc3dvcmRcIlxuICAgICAgICAgICBuYW1lPVwicmVQYXNzXCJcbiAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJDb25maXJtIFBhc3N3b3JkXCJcbiAgICAgICAgICAgZnVsbFdpZHRoXG4gICAgICAgICAgIGZpZWxkU2l6ZT1cImxhcmdlXCJcbiAgICAgICAgICAgW3N0YXR1c109XCJyZVBhc3MuZGlydHkgPyAocmVQYXNzLmludmFsaWQgfHwgcGFzc3dvcmQudmFsdWUgIT0gcmVQYXNzLnZhbHVlICA/ICdkYW5nZXInIDogJ3N1Y2Nlc3MnKSA6ICdiYXNpYydcIlxuICAgICAgICAgICBbcmVxdWlyZWRdPVwiZ2V0Q29uZmlnVmFsdWUoJ2Zvcm1zLnZhbGlkYXRpb24ucGFzc3dvcmQucmVxdWlyZWQnKVwiXG4gICAgICAgICAgIFthdHRyLmFyaWEtaW52YWxpZF09XCJyZVBhc3MuaW52YWxpZCAmJiByZVBhc3MudG91Y2hlZCA/IHRydWUgOiBudWxsXCI+XG4gICAgPG5nLWNvbnRhaW5lciAqbmdJZj1cInJlUGFzcy5pbnZhbGlkICYmIHJlUGFzcy50b3VjaGVkXCI+XG4gICAgICA8cCBjbGFzcz1cImNhcHRpb24gc3RhdHVzLWRhbmdlclwiICpuZ0lmPVwicmVQYXNzLmVycm9ycz8ucmVxdWlyZWRcIj5cbiAgICAgICAgUGFzc3dvcmQgY29uZmlybWF0aW9uIGlzIHJlcXVpcmVkIVxuICAgICAgPC9wPlxuICAgICAgPHAgY2xhc3M9XCJjYXB0aW9uIHN0YXR1cy1kYW5nZXJcIiAqbmdJZj1cInBhc3N3b3JkLnZhbHVlICE9IHJlUGFzcy52YWx1ZSAmJiAhcmVQYXNzLmVycm9ycz8ucmVxdWlyZWRcIj5cbiAgICAgICAgUGFzc3dvcmQgZG9lcyBub3QgbWF0Y2ggdGhlIGNvbmZpcm0gcGFzc3dvcmQuXG4gICAgICA8L3A+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJmb3JtLWNvbnRyb2wtZ3JvdXAgYWNjZXB0LWdyb3VwXCIgKm5nSWY9XCJnZXRDb25maWdWYWx1ZSgnZm9ybXMucmVnaXN0ZXIudGVybXMnKVwiPlxuICAgIDxuYi1jaGVja2JveCBuYW1lPVwidGVybXNcIiBbKG5nTW9kZWwpXT1cInVzZXIudGVybXNcIiBbcmVxdWlyZWRdPVwiZ2V0Q29uZmlnVmFsdWUoJ2Zvcm1zLnJlZ2lzdGVyLnRlcm1zJylcIj5cbiAgICAgIEFncmVlIHRvIDxhIGhyZWY9XCIjXCIgdGFyZ2V0PVwiX2JsYW5rXCI+PHN0cm9uZz5UZXJtcyAmIENvbmRpdGlvbnM8L3N0cm9uZz48L2E+XG4gICAgPC9uYi1jaGVja2JveD5cbiAgPC9kaXY+XG5cbiAgPGJ1dHRvbiBuYkJ1dHRvblxuICAgICAgICAgIGZ1bGxXaWR0aFxuICAgICAgICAgIHN0YXR1cz1cInByaW1hcnlcIlxuICAgICAgICAgIHNpemU9XCJsYXJnZVwiXG4gICAgICAgICAgW2Rpc2FibGVkXT1cInN1Ym1pdHRlZCB8fCAhZm9ybS52YWxpZFwiXG4gICAgICAgICAgW2NsYXNzLmJ0bi1wdWxzZV09XCJzdWJtaXR0ZWRcIj5cbiAgICBSZWdpc3RlclxuICA8L2J1dHRvbj5cbjwvZm9ybT5cblxuPHNlY3Rpb24gKm5nSWY9XCJzb2NpYWxMaW5rcyAmJiBzb2NpYWxMaW5rcy5sZW5ndGggPiAwXCIgY2xhc3M9XCJsaW5rc1wiIGFyaWEtbGFiZWw9XCJTb2NpYWwgc2lnbiBpblwiPlxuICBvciBlbnRlciB3aXRoOlxuICA8ZGl2IGNsYXNzPVwic29jaWFsc1wiPlxuICAgIDxuZy1jb250YWluZXIgKm5nRm9yPVwibGV0IHNvY2lhbExpbmsgb2Ygc29jaWFsTGlua3NcIj5cbiAgICAgIDxhICpuZ0lmPVwic29jaWFsTGluay5saW5rXCJcbiAgICAgICAgIFtyb3V0ZXJMaW5rXT1cInNvY2lhbExpbmsubGlua1wiXG4gICAgICAgICBbYXR0ci50YXJnZXRdPVwic29jaWFsTGluay50YXJnZXRcIlxuICAgICAgICAgW2F0dHIuY2xhc3NdPVwic29jaWFsTGluay5pY29uXCJcbiAgICAgICAgIFtjbGFzcy53aXRoLWljb25dPVwic29jaWFsTGluay5pY29uXCI+XG4gICAgICAgIDxuYi1pY29uICpuZ0lmPVwic29jaWFsTGluay5pY29uOyBlbHNlIHRpdGxlXCIgW2ljb25dPVwic29jaWFsTGluay5pY29uXCI+PC9uYi1pY29uPlxuICAgICAgICA8bmctdGVtcGxhdGUgI3RpdGxlPnt7IHNvY2lhbExpbmsudGl0bGUgfX08L25nLXRlbXBsYXRlPlxuICAgICAgPC9hPlxuICAgICAgPGEgKm5nSWY9XCJzb2NpYWxMaW5rLnVybFwiXG4gICAgICAgICBbYXR0ci5ocmVmXT1cInNvY2lhbExpbmsudXJsXCJcbiAgICAgICAgIFthdHRyLnRhcmdldF09XCJzb2NpYWxMaW5rLnRhcmdldFwiXG4gICAgICAgICBbYXR0ci5jbGFzc109XCJzb2NpYWxMaW5rLmljb25cIlxuICAgICAgICAgW2NsYXNzLndpdGgtaWNvbl09XCJzb2NpYWxMaW5rLmljb25cIj5cbiAgICAgICAgPG5iLWljb24gKm5nSWY9XCJzb2NpYWxMaW5rLmljb247IGVsc2UgdGl0bGVcIiBbaWNvbl09XCJzb2NpYWxMaW5rLmljb25cIj48L25iLWljb24+XG4gICAgICAgIDxuZy10ZW1wbGF0ZSAjdGl0bGU+e3sgc29jaWFsTGluay50aXRsZSB9fTwvbmctdGVtcGxhdGU+XG4gICAgICA8L2E+XG4gICAgPC9uZy1jb250YWluZXI+XG4gIDwvZGl2PlxuPC9zZWN0aW9uPlxuXG48c2VjdGlvbiBjbGFzcz1cImFub3RoZXItYWN0aW9uXCIgYXJpYS1sYWJlbD1cIlNpZ24gaW5cIj5cbiAgQWxyZWFkeSBoYXZlIGFuIGFjY291bnQ/IDxhIGNsYXNzPVwidGV4dC1saW5rXCIgcm91dGVyTGluaz1cIi4uL2xvZ2luXCI+TG9nIGluPC9hPlxuPC9zZWN0aW9uPlxuIl19
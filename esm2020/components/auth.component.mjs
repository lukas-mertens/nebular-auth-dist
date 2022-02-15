/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component } from '@angular/core';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import * as i0 from "@angular/core";
import * as i1 from "../services/auth.service";
import * as i2 from "@angular/common";
import * as i3 from "@nebular/theme";
import * as i4 from "./auth-block/auth-block.component";
import * as i5 from "@angular/router";
export class NbAuthComponent {
    // showcase of how to use the onAuthenticationChange method
    constructor(auth, location) {
        this.auth = auth;
        this.location = location;
        this.destroy$ = new Subject();
        this.authenticated = false;
        this.token = '';
        this.subscription = auth.onAuthenticationChange()
            .pipe(takeUntil(this.destroy$))
            .subscribe((authenticated) => {
            this.authenticated = authenticated;
        });
    }
    back() {
        this.location.back();
        return false;
    }
    ngOnDestroy() {
        this.destroy$.next();
        this.destroy$.complete();
    }
}
NbAuthComponent.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbAuthComponent, deps: [{ token: i1.NbAuthService }, { token: i2.Location }], target: i0.ɵɵFactoryTarget.Component });
NbAuthComponent.ɵcmp = i0.ɵɵngDeclareComponent({ minVersion: "12.0.0", version: "13.0.0", type: NbAuthComponent, selector: "nb-auth", ngImport: i0, template: `
    <nb-layout>
      <nb-layout-column>
        <nb-card>
          <nb-card-header>
            <nav class="navigation">
              <a href="#" (click)="back()" class="link back-link" aria-label="Back">
                <nb-icon icon="arrow-back"></nb-icon>
              </a>
            </nav>
          </nb-card-header>
          <nb-card-body>
            <nb-auth-block>
              <router-outlet></router-outlet>
            </nb-auth-block>
          </nb-card-body>
        </nb-card>
      </nb-layout-column>
    </nb-layout>
  `, isInline: true, styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.visually-hidden{position:absolute!important;height:1px;width:1px;overflow:hidden;clip:rect(1px 1px 1px 1px);clip:rect(1px,1px,1px,1px)}.cdk-overlay-container,.cdk-global-overlay-wrapper{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000;display:flex;max-width:100%;max-height:100%}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:1}.cdk-high-contrast-active .cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.6}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.32)}.cdk-overlay-transparent-backdrop,.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing{opacity:0}.cdk-overlay-connected-position-bounding-box{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}.nb-global-scrollblock{position:static;width:auto;overflow:hidden}/*\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n *//*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}html,body{margin:0;padding:0}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template,[hidden]{display:none}/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host nb-card{margin:0;height:calc(100vh - 5rem)}:host .navigation .link{display:inline-block;text-decoration:none}:host .navigation .link nb-icon{font-size:2rem;vertical-align:middle}:host .links nb-icon{font-size:2.5rem}:host nb-card-body{display:flex;width:100%}:host nb-auth-block{margin:auto}@media (max-width: 767.98px){:host nb-card{border-radius:0;height:100vh}}:host ::ng-deep nb-layout .layout .layout-container .content .columns nb-layout-column{padding:2.5rem}@media (max-width: 767.98px){:host ::ng-deep nb-layout .layout .layout-container .content .columns nb-layout-column{padding:0}}\n"], components: [{ type: i3.NbLayoutComponent, selector: "nb-layout", inputs: ["center", "windowMode", "withScroll", "restoreScrollTop"] }, { type: i3.NbLayoutColumnComponent, selector: "nb-layout-column", inputs: ["left", "start"] }, { type: i3.NbCardComponent, selector: "nb-card", inputs: ["size", "status", "accent"] }, { type: i3.NbCardHeaderComponent, selector: "nb-card-header" }, { type: i3.NbIconComponent, selector: "nb-icon", inputs: ["icon", "pack", "options", "status", "config"] }, { type: i3.NbCardBodyComponent, selector: "nb-card-body" }, { type: i4.NbAuthBlockComponent, selector: "nb-auth-block" }], directives: [{ type: i5.RouterOutlet, selector: "router-outlet", outputs: ["activate", "deactivate", "attach", "detach"], exportAs: ["outlet"] }] });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.0.0", ngImport: i0, type: NbAuthComponent, decorators: [{
            type: Component,
            args: [{ selector: 'nb-auth', template: `
    <nb-layout>
      <nb-layout-column>
        <nb-card>
          <nb-card-header>
            <nav class="navigation">
              <a href="#" (click)="back()" class="link back-link" aria-label="Back">
                <nb-icon icon="arrow-back"></nb-icon>
              </a>
            </nav>
          </nb-card-header>
          <nb-card-body>
            <nb-auth-block>
              <router-outlet></router-outlet>
            </nb-auth-block>
          </nb-card-body>
        </nb-card>
      </nb-layout-column>
    </nb-layout>
  `, styles: ["/*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */.visually-hidden{position:absolute!important;height:1px;width:1px;overflow:hidden;clip:rect(1px 1px 1px 1px);clip:rect(1px,1px,1px,1px)}.cdk-overlay-container,.cdk-global-overlay-wrapper{pointer-events:none;top:0;left:0;height:100%;width:100%}.cdk-overlay-container{position:fixed;z-index:1000}.cdk-overlay-container:empty{display:none}.cdk-global-overlay-wrapper{display:flex;position:absolute;z-index:1000}.cdk-overlay-pane{position:absolute;pointer-events:auto;box-sizing:border-box;z-index:1000;display:flex;max-width:100%;max-height:100%}.cdk-overlay-backdrop{position:absolute;top:0;bottom:0;left:0;right:0;z-index:1000;pointer-events:auto;-webkit-tap-highlight-color:transparent;transition:opacity .4s cubic-bezier(.25,.8,.25,1);opacity:0}.cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:1}.cdk-high-contrast-active .cdk-overlay-backdrop.cdk-overlay-backdrop-showing{opacity:.6}.cdk-overlay-dark-backdrop{background:rgba(0,0,0,.32)}.cdk-overlay-transparent-backdrop,.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing{opacity:0}.cdk-overlay-connected-position-bounding-box{position:absolute;z-index:1000;display:flex;flex-direction:column;min-width:1px;min-height:1px}.cdk-global-scrollblock{position:fixed;width:100%;overflow-y:scroll}.nb-global-scrollblock{position:static;width:auto;overflow:hidden}/*\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n *//*!\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */html{box-sizing:border-box}*,*:before,*:after{box-sizing:inherit}html,body{margin:0;padding:0}html{line-height:1.15;-webkit-text-size-adjust:100%}body{margin:0}h1{font-size:2em;margin:.67em 0}hr{box-sizing:content-box;height:0;overflow:visible}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}img{border-style:none}button,input,optgroup,select,textarea{font-family:inherit;font-size:100%;line-height:1.15;margin:0}button,input{overflow:visible}button,select{text-transform:none}button,[type=button],[type=reset],[type=submit]{-webkit-appearance:button}button::-moz-focus-inner,[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner{border-style:none;padding:0}button:-moz-focusring,[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring{outline:1px dotted ButtonText}fieldset{padding:.35em .75em .625em}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{vertical-align:baseline}textarea{overflow:auto}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details{display:block}summary{display:list-item}template,[hidden]{display:none}/**\n * @license\n * Copyright Akveo. All Rights Reserved.\n * Licensed under the MIT License. See License.txt in the project root for license information.\n */:host nb-card{margin:0;height:calc(100vh - 5rem)}:host .navigation .link{display:inline-block;text-decoration:none}:host .navigation .link nb-icon{font-size:2rem;vertical-align:middle}:host .links nb-icon{font-size:2.5rem}:host nb-card-body{display:flex;width:100%}:host nb-auth-block{margin:auto}@media (max-width: 767.98px){:host nb-card{border-radius:0;height:100vh}}:host ::ng-deep nb-layout .layout .layout-container .content .columns nb-layout-column{padding:2.5rem}@media (max-width: 767.98px){:host ::ng-deep nb-layout .layout .layout-container .content .columns nb-layout-column{padding:0}}\n"] }]
        }], ctorParameters: function () { return [{ type: i1.NbAuthService }, { type: i2.Location }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmMvZnJhbWV3b3JrL2F1dGgvY29tcG9uZW50cy9hdXRoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OztHQUlHO0FBQ0gsT0FBTyxFQUFFLFNBQVMsRUFBYSxNQUFNLGVBQWUsQ0FBQztBQUlyRCxPQUFPLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDM0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLE1BQU0sQ0FBQzs7Ozs7OztBQTBCL0IsTUFBTSxPQUFPLGVBQWU7SUFTMUIsMkRBQTJEO0lBQzNELFlBQXNCLElBQW1CLEVBQVksUUFBa0I7UUFBakQsU0FBSSxHQUFKLElBQUksQ0FBZTtRQUFZLGFBQVEsR0FBUixRQUFRLENBQVU7UUFSL0QsYUFBUSxHQUFHLElBQUksT0FBTyxFQUFRLENBQUM7UUFJdkMsa0JBQWEsR0FBWSxLQUFLLENBQUM7UUFDL0IsVUFBSyxHQUFXLEVBQUUsQ0FBQztRQUtqQixJQUFJLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxzQkFBc0IsRUFBRTthQUM5QyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQzthQUM5QixTQUFTLENBQUMsQ0FBQyxhQUFzQixFQUFFLEVBQUU7WUFDcEMsSUFBSSxDQUFDLGFBQWEsR0FBRyxhQUFhLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDO0lBRUQsSUFBSTtRQUNGLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsT0FBTyxLQUFLLENBQUM7SUFDZixDQUFDO0lBRUQsV0FBVztRQUNULElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDckIsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLEVBQUUsQ0FBQztJQUMzQixDQUFDOzs0R0EzQlUsZUFBZTtnR0FBZixlQUFlLCtDQXJCaEI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0FtQlQ7MkZBRVUsZUFBZTtrQkF4QjNCLFNBQVM7K0JBQ0UsU0FBUyxZQUVUOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dBbUJUIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEFrdmVvLiBBbGwgUmlnaHRzIFJlc2VydmVkLlxuICogTGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLiBTZWUgTGljZW5zZS50eHQgaW4gdGhlIHByb2plY3Qgcm9vdCBmb3IgbGljZW5zZSBpbmZvcm1hdGlvbi5cbiAqL1xuaW1wb3J0IHsgQ29tcG9uZW50LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IExvY2F0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcblxuaW1wb3J0IHsgTmJBdXRoU2VydmljZSB9IGZyb20gJy4uL3NlcnZpY2VzL2F1dGguc2VydmljZSc7XG5pbXBvcnQgeyB0YWtlVW50aWwgfSBmcm9tICdyeGpzL29wZXJhdG9ycyc7XG5pbXBvcnQgeyBTdWJqZWN0IH0gZnJvbSAncnhqcyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25iLWF1dGgnLFxuICBzdHlsZVVybHM6IFsnLi9hdXRoLmNvbXBvbmVudC5zY3NzJ10sXG4gIHRlbXBsYXRlOiBgXG4gICAgPG5iLWxheW91dD5cbiAgICAgIDxuYi1sYXlvdXQtY29sdW1uPlxuICAgICAgICA8bmItY2FyZD5cbiAgICAgICAgICA8bmItY2FyZC1oZWFkZXI+XG4gICAgICAgICAgICA8bmF2IGNsYXNzPVwibmF2aWdhdGlvblwiPlxuICAgICAgICAgICAgICA8YSBocmVmPVwiI1wiIChjbGljayk9XCJiYWNrKClcIiBjbGFzcz1cImxpbmsgYmFjay1saW5rXCIgYXJpYS1sYWJlbD1cIkJhY2tcIj5cbiAgICAgICAgICAgICAgICA8bmItaWNvbiBpY29uPVwiYXJyb3ctYmFja1wiPjwvbmItaWNvbj5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9uYXY+XG4gICAgICAgICAgPC9uYi1jYXJkLWhlYWRlcj5cbiAgICAgICAgICA8bmItY2FyZC1ib2R5PlxuICAgICAgICAgICAgPG5iLWF1dGgtYmxvY2s+XG4gICAgICAgICAgICAgIDxyb3V0ZXItb3V0bGV0Pjwvcm91dGVyLW91dGxldD5cbiAgICAgICAgICAgIDwvbmItYXV0aC1ibG9jaz5cbiAgICAgICAgICA8L25iLWNhcmQtYm9keT5cbiAgICAgICAgPC9uYi1jYXJkPlxuICAgICAgPC9uYi1sYXlvdXQtY29sdW1uPlxuICAgIDwvbmItbGF5b3V0PlxuICBgLFxufSlcbmV4cG9ydCBjbGFzcyBOYkF1dGhDb21wb25lbnQgaW1wbGVtZW50cyBPbkRlc3Ryb3kge1xuXG4gIHByaXZhdGUgZGVzdHJveSQgPSBuZXcgU3ViamVjdDx2b2lkPigpO1xuXG4gIHN1YnNjcmlwdGlvbjogYW55O1xuXG4gIGF1dGhlbnRpY2F0ZWQ6IGJvb2xlYW4gPSBmYWxzZTtcbiAgdG9rZW46IHN0cmluZyA9ICcnO1xuXG4gIC8vIHNob3djYXNlIG9mIGhvdyB0byB1c2UgdGhlIG9uQXV0aGVudGljYXRpb25DaGFuZ2UgbWV0aG9kXG4gIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBhdXRoOiBOYkF1dGhTZXJ2aWNlLCBwcm90ZWN0ZWQgbG9jYXRpb246IExvY2F0aW9uKSB7XG5cbiAgICB0aGlzLnN1YnNjcmlwdGlvbiA9IGF1dGgub25BdXRoZW50aWNhdGlvbkNoYW5nZSgpXG4gICAgICAucGlwZSh0YWtlVW50aWwodGhpcy5kZXN0cm95JCkpXG4gICAgICAuc3Vic2NyaWJlKChhdXRoZW50aWNhdGVkOiBib29sZWFuKSA9PiB7XG4gICAgICAgIHRoaXMuYXV0aGVudGljYXRlZCA9IGF1dGhlbnRpY2F0ZWQ7XG4gICAgICB9KTtcbiAgfVxuXG4gIGJhY2soKSB7XG4gICAgdGhpcy5sb2NhdGlvbi5iYWNrKCk7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgdGhpcy5kZXN0cm95JC5uZXh0KCk7XG4gICAgdGhpcy5kZXN0cm95JC5jb21wbGV0ZSgpO1xuICB9XG59XG4iXX0=
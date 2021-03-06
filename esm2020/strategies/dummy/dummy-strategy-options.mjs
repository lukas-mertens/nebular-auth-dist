/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { NbAuthStrategyOptions } from '../auth-strategy-options';
import { NbAuthSimpleToken } from '../../services/token/token';
export class NbDummyAuthStrategyOptions extends NbAuthStrategyOptions {
    constructor() {
        super(...arguments);
        this.token = {
            class: NbAuthSimpleToken,
        };
        this.delay = 1000;
        this.alwaysFail = false;
    }
}
export const dummyStrategyOptions = new NbDummyAuthStrategyOptions();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZHVtbXktc3RyYXRlZ3ktb3B0aW9ucy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvYXV0aC9zdHJhdGVnaWVzL2R1bW15L2R1bW15LXN0cmF0ZWd5LW9wdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7R0FJRztBQUNILE9BQU8sRUFBRSxxQkFBcUIsRUFBbUIsTUFBTSwwQkFBMEIsQ0FBQztBQUNsRixPQUFPLEVBQUUsaUJBQWlCLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQztBQUUvRCxNQUFNLE9BQU8sMEJBQTJCLFNBQVEscUJBQXFCO0lBQXJFOztRQUNFLFVBQUssR0FBcUI7WUFDeEIsS0FBSyxFQUFFLGlCQUFpQjtTQUN6QixDQUFDO1FBQ0YsVUFBSyxHQUFZLElBQUksQ0FBQztRQUN0QixlQUFVLEdBQWEsS0FBSyxDQUFDO0lBQy9CLENBQUM7Q0FBQTtBQUVELE1BQU0sQ0FBQyxNQUFNLG9CQUFvQixHQUErQixJQUFJLDBCQUEwQixFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIEBsaWNlbnNlXG4gKiBDb3B5cmlnaHQgQWt2ZW8uIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuIFNlZSBMaWNlbnNlLnR4dCBpbiB0aGUgcHJvamVjdCByb290IGZvciBsaWNlbnNlIGluZm9ybWF0aW9uLlxuICovXG5pbXBvcnQgeyBOYkF1dGhTdHJhdGVneU9wdGlvbnMsIE5iU3RyYXRlZ3lUb2tlbiB9IGZyb20gJy4uL2F1dGgtc3RyYXRlZ3ktb3B0aW9ucyc7XG5pbXBvcnQgeyBOYkF1dGhTaW1wbGVUb2tlbiB9IGZyb20gJy4uLy4uL3NlcnZpY2VzL3Rva2VuL3Rva2VuJztcblxuZXhwb3J0IGNsYXNzIE5iRHVtbXlBdXRoU3RyYXRlZ3lPcHRpb25zIGV4dGVuZHMgTmJBdXRoU3RyYXRlZ3lPcHRpb25zIHtcbiAgdG9rZW4/OiBOYlN0cmF0ZWd5VG9rZW4gPSB7XG4gICAgY2xhc3M6IE5iQXV0aFNpbXBsZVRva2VuLFxuICB9O1xuICBkZWxheT86IG51bWJlciA9IDEwMDA7XG4gIGFsd2F5c0ZhaWw/OiBib29sZWFuID0gZmFsc2U7XG59XG5cbmV4cG9ydCBjb25zdCBkdW1teVN0cmF0ZWd5T3B0aW9uczogTmJEdW1teUF1dGhTdHJhdGVneU9wdGlvbnMgPSBuZXcgTmJEdW1teUF1dGhTdHJhdGVneU9wdGlvbnMoKTtcbiJdfQ==
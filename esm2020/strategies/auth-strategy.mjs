import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { deepExtend, getDeepFromObject } from '../helpers';
import { nbAuthCreateToken, NbAuthIllegalTokenError } from '../services/token/token';
export class NbAuthStrategy {
    // we should keep this any and validation should be done in `register` method instead
    // otherwise it won't be possible to pass an empty object
    setOptions(options) {
        this.options = deepExtend({}, this.defaultOptions, options);
    }
    getOption(key) {
        return getDeepFromObject(this.options, key, null);
    }
    createToken(value, failWhenInvalidToken) {
        const token = nbAuthCreateToken(this.getOption('token.class'), value, this.getName());
        // At this point, nbAuthCreateToken failed with NbAuthIllegalTokenError which MUST be intercepted by strategies
        // Or token is created. It MAY be created even if backend did not return any token, in this case it is !Valid
        if (failWhenInvalidToken && !token.isValid()) {
            // If we require a valid token (i.e. isValid), then we MUST throw NbAuthIllegalTokenError so that the strategies
            // intercept it
            throw new NbAuthIllegalTokenError('Token is empty or invalid.');
        }
        return token;
    }
    getName() {
        return this.getOption('name');
    }
    createFailResponse(data) {
        return new HttpResponse({ body: {}, status: 401 });
    }
    createSuccessResponse(data) {
        return new HttpResponse({ body: {}, status: 200 });
    }
    getActionEndpoint(action) {
        const actionEndpoint = this.getOption(`${action}.endpoint`);
        const baseEndpoint = this.getOption('baseEndpoint');
        return actionEndpoint ? baseEndpoint + actionEndpoint : '';
    }
    getHeaders() {
        const customHeaders = this.getOption('headers') ?? {};
        if (customHeaders instanceof HttpHeaders) {
            return customHeaders;
        }
        let headers = new HttpHeaders();
        Object.entries(customHeaders).forEach(([key, value]) => {
            headers = headers.append(key, value);
        });
        return headers;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1zdHJhdGVneS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvYXV0aC9zdHJhdGVnaWVzL2F1dGgtc3RyYXRlZ3kudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLFdBQVcsRUFBRSxZQUFZLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUlqRSxPQUFPLEVBQUUsVUFBVSxFQUFFLGlCQUFpQixFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQzNELE9BQU8sRUFBZSxpQkFBaUIsRUFBRSx1QkFBdUIsRUFBRSxNQUFNLHlCQUF5QixDQUFDO0FBRWxHLE1BQU0sT0FBZ0IsY0FBYztJQUlsQyxxRkFBcUY7SUFDckYseURBQXlEO0lBQ3pELFVBQVUsQ0FBQyxPQUFZO1FBQ3JCLElBQUksQ0FBQyxPQUFPLEdBQUcsVUFBVSxDQUFDLEVBQUUsRUFBRSxJQUFJLENBQUMsY0FBYyxFQUFFLE9BQU8sQ0FBQyxDQUFDO0lBQzlELENBQUM7SUFFRCxTQUFTLENBQUMsR0FBVztRQUNuQixPQUFPLGlCQUFpQixDQUFDLElBQUksQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQ3BELENBQUM7SUFFRCxXQUFXLENBQXdCLEtBQVUsRUFBRSxvQkFBOEI7UUFDM0UsTUFBTSxLQUFLLEdBQUcsaUJBQWlCLENBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxhQUFhLENBQUMsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDLENBQUM7UUFDekYsK0dBQStHO1FBQy9HLDZHQUE2RztRQUM3RyxJQUFJLG9CQUFvQixJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFFO1lBQzVDLGdIQUFnSDtZQUNoSCxlQUFlO1lBQ2YsTUFBTSxJQUFJLHVCQUF1QixDQUFDLDRCQUE0QixDQUFDLENBQUM7U0FDakU7UUFDRCxPQUFPLEtBQUssQ0FBQztJQUNmLENBQUM7SUFFRCxPQUFPO1FBQ0wsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2hDLENBQUM7SUFjUyxrQkFBa0IsQ0FBQyxJQUFVO1FBQ3JDLE9BQU8sSUFBSSxZQUFZLENBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFUyxxQkFBcUIsQ0FBQyxJQUFVO1FBQ3hDLE9BQU8sSUFBSSxZQUFZLENBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsQ0FBQyxDQUFDO0lBQzdELENBQUM7SUFFUyxpQkFBaUIsQ0FBQyxNQUFjO1FBQ3hDLE1BQU0sY0FBYyxHQUFXLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxNQUFNLFdBQVcsQ0FBQyxDQUFDO1FBQ3BFLE1BQU0sWUFBWSxHQUFXLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDNUQsT0FBTyxjQUFjLENBQUMsQ0FBQyxDQUFDLFlBQVksR0FBRyxjQUFjLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUM3RCxDQUFDO0lBRVMsVUFBVTtRQUNsQixNQUFNLGFBQWEsR0FBcUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDeEYsSUFBSSxhQUFhLFlBQVksV0FBVyxFQUFFO1lBQ3hDLE9BQU8sYUFBYSxDQUFDO1NBQ3RCO1FBRUQsSUFBSSxPQUFPLEdBQUcsSUFBSSxXQUFXLEVBQUUsQ0FBQztRQUNoQyxNQUFNLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxFQUFFLEVBQUU7WUFDckQsT0FBTyxHQUFHLE9BQU8sQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQ3ZDLENBQUMsQ0FBQyxDQUFDO1FBQ0gsT0FBTyxPQUFPLENBQUM7SUFDakIsQ0FBQztDQUNGIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSHR0cEhlYWRlcnMsIEh0dHBSZXNwb25zZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbi9odHRwJztcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tICdyeGpzJztcbmltcG9ydCB7IE5iQXV0aFJlc3VsdCB9IGZyb20gJy4uL3NlcnZpY2VzL2F1dGgtcmVzdWx0JztcbmltcG9ydCB7IE5iQXV0aFN0cmF0ZWd5T3B0aW9ucyB9IGZyb20gJy4vYXV0aC1zdHJhdGVneS1vcHRpb25zJztcbmltcG9ydCB7IGRlZXBFeHRlbmQsIGdldERlZXBGcm9tT2JqZWN0IH0gZnJvbSAnLi4vaGVscGVycyc7XG5pbXBvcnQgeyBOYkF1dGhUb2tlbiwgbmJBdXRoQ3JlYXRlVG9rZW4sIE5iQXV0aElsbGVnYWxUb2tlbkVycm9yIH0gZnJvbSAnLi4vc2VydmljZXMvdG9rZW4vdG9rZW4nO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTmJBdXRoU3RyYXRlZ3kge1xuICBwcm90ZWN0ZWQgZGVmYXVsdE9wdGlvbnM6IE5iQXV0aFN0cmF0ZWd5T3B0aW9ucztcbiAgcHJvdGVjdGVkIG9wdGlvbnM6IE5iQXV0aFN0cmF0ZWd5T3B0aW9ucztcblxuICAvLyB3ZSBzaG91bGQga2VlcCB0aGlzIGFueSBhbmQgdmFsaWRhdGlvbiBzaG91bGQgYmUgZG9uZSBpbiBgcmVnaXN0ZXJgIG1ldGhvZCBpbnN0ZWFkXG4gIC8vIG90aGVyd2lzZSBpdCB3b24ndCBiZSBwb3NzaWJsZSB0byBwYXNzIGFuIGVtcHR5IG9iamVjdFxuICBzZXRPcHRpb25zKG9wdGlvbnM6IGFueSk6IHZvaWQge1xuICAgIHRoaXMub3B0aW9ucyA9IGRlZXBFeHRlbmQoe30sIHRoaXMuZGVmYXVsdE9wdGlvbnMsIG9wdGlvbnMpO1xuICB9XG5cbiAgZ2V0T3B0aW9uKGtleTogc3RyaW5nKTogYW55IHtcbiAgICByZXR1cm4gZ2V0RGVlcEZyb21PYmplY3QodGhpcy5vcHRpb25zLCBrZXksIG51bGwpO1xuICB9XG5cbiAgY3JlYXRlVG9rZW48VCBleHRlbmRzIE5iQXV0aFRva2VuPih2YWx1ZTogYW55LCBmYWlsV2hlbkludmFsaWRUb2tlbj86IGJvb2xlYW4pOiBUIHtcbiAgICBjb25zdCB0b2tlbiA9IG5iQXV0aENyZWF0ZVRva2VuPFQ+KHRoaXMuZ2V0T3B0aW9uKCd0b2tlbi5jbGFzcycpLCB2YWx1ZSwgdGhpcy5nZXROYW1lKCkpO1xuICAgIC8vIEF0IHRoaXMgcG9pbnQsIG5iQXV0aENyZWF0ZVRva2VuIGZhaWxlZCB3aXRoIE5iQXV0aElsbGVnYWxUb2tlbkVycm9yIHdoaWNoIE1VU1QgYmUgaW50ZXJjZXB0ZWQgYnkgc3RyYXRlZ2llc1xuICAgIC8vIE9yIHRva2VuIGlzIGNyZWF0ZWQuIEl0IE1BWSBiZSBjcmVhdGVkIGV2ZW4gaWYgYmFja2VuZCBkaWQgbm90IHJldHVybiBhbnkgdG9rZW4sIGluIHRoaXMgY2FzZSBpdCBpcyAhVmFsaWRcbiAgICBpZiAoZmFpbFdoZW5JbnZhbGlkVG9rZW4gJiYgIXRva2VuLmlzVmFsaWQoKSkge1xuICAgICAgLy8gSWYgd2UgcmVxdWlyZSBhIHZhbGlkIHRva2VuIChpLmUuIGlzVmFsaWQpLCB0aGVuIHdlIE1VU1QgdGhyb3cgTmJBdXRoSWxsZWdhbFRva2VuRXJyb3Igc28gdGhhdCB0aGUgc3RyYXRlZ2llc1xuICAgICAgLy8gaW50ZXJjZXB0IGl0XG4gICAgICB0aHJvdyBuZXcgTmJBdXRoSWxsZWdhbFRva2VuRXJyb3IoJ1Rva2VuIGlzIGVtcHR5IG9yIGludmFsaWQuJyk7XG4gICAgfVxuICAgIHJldHVybiB0b2tlbjtcbiAgfVxuXG4gIGdldE5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gdGhpcy5nZXRPcHRpb24oJ25hbWUnKTtcbiAgfVxuXG4gIGFic3RyYWN0IGF1dGhlbnRpY2F0ZShkYXRhPzogYW55KTogT2JzZXJ2YWJsZTxOYkF1dGhSZXN1bHQ+O1xuXG4gIGFic3RyYWN0IHJlZ2lzdGVyKGRhdGE/OiBhbnkpOiBPYnNlcnZhYmxlPE5iQXV0aFJlc3VsdD47XG5cbiAgYWJzdHJhY3QgcmVxdWVzdFBhc3N3b3JkKGRhdGE/OiBhbnkpOiBPYnNlcnZhYmxlPE5iQXV0aFJlc3VsdD47XG5cbiAgYWJzdHJhY3QgcmVzZXRQYXNzd29yZChkYXRhPzogYW55KTogT2JzZXJ2YWJsZTxOYkF1dGhSZXN1bHQ+O1xuXG4gIGFic3RyYWN0IGxvZ291dCgpOiBPYnNlcnZhYmxlPE5iQXV0aFJlc3VsdD47XG5cbiAgYWJzdHJhY3QgcmVmcmVzaFRva2VuKGRhdGE/OiBhbnkpOiBPYnNlcnZhYmxlPE5iQXV0aFJlc3VsdD47XG5cbiAgcHJvdGVjdGVkIGNyZWF0ZUZhaWxSZXNwb25zZShkYXRhPzogYW55KTogSHR0cFJlc3BvbnNlPE9iamVjdD4ge1xuICAgIHJldHVybiBuZXcgSHR0cFJlc3BvbnNlPE9iamVjdD4oeyBib2R5OiB7fSwgc3RhdHVzOiA0MDEgfSk7XG4gIH1cblxuICBwcm90ZWN0ZWQgY3JlYXRlU3VjY2Vzc1Jlc3BvbnNlKGRhdGE/OiBhbnkpOiBIdHRwUmVzcG9uc2U8T2JqZWN0PiB7XG4gICAgcmV0dXJuIG5ldyBIdHRwUmVzcG9uc2U8T2JqZWN0Pih7IGJvZHk6IHt9LCBzdGF0dXM6IDIwMCB9KTtcbiAgfVxuXG4gIHByb3RlY3RlZCBnZXRBY3Rpb25FbmRwb2ludChhY3Rpb246IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgYWN0aW9uRW5kcG9pbnQ6IHN0cmluZyA9IHRoaXMuZ2V0T3B0aW9uKGAke2FjdGlvbn0uZW5kcG9pbnRgKTtcbiAgICBjb25zdCBiYXNlRW5kcG9pbnQ6IHN0cmluZyA9IHRoaXMuZ2V0T3B0aW9uKCdiYXNlRW5kcG9pbnQnKTtcbiAgICByZXR1cm4gYWN0aW9uRW5kcG9pbnQgPyBiYXNlRW5kcG9pbnQgKyBhY3Rpb25FbmRwb2ludCA6ICcnO1xuICB9XG5cbiAgcHJvdGVjdGVkIGdldEhlYWRlcnMoKTogSHR0cEhlYWRlcnMge1xuICAgIGNvbnN0IGN1c3RvbUhlYWRlcnM6IE5iQXV0aFN0cmF0ZWd5T3B0aW9uc1snaGVhZGVycyddID0gdGhpcy5nZXRPcHRpb24oJ2hlYWRlcnMnKSA/PyB7fTtcbiAgICBpZiAoY3VzdG9tSGVhZGVycyBpbnN0YW5jZW9mIEh0dHBIZWFkZXJzKSB7XG4gICAgICByZXR1cm4gY3VzdG9tSGVhZGVycztcbiAgICB9XG5cbiAgICBsZXQgaGVhZGVycyA9IG5ldyBIdHRwSGVhZGVycygpO1xuICAgIE9iamVjdC5lbnRyaWVzKGN1c3RvbUhlYWRlcnMpLmZvckVhY2goKFtrZXksIHZhbHVlXSkgPT4ge1xuICAgICAgaGVhZGVycyA9IGhlYWRlcnMuYXBwZW5kKGtleSwgdmFsdWUpO1xuICAgIH0pO1xuICAgIHJldHVybiBoZWFkZXJzO1xuICB9XG59XG4iXX0=
/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
export * from './auth.options';
export * from './auth.module';
export * from './auth.routes';
export * from './components/auth.component';
export * from './components/auth-block/auth-block.component';
export * from './components/login/login.component';
export * from './components/logout/logout.component';
export * from './components/register/register.component';
export * from './components/request-password/request-password.component';
export * from './components/reset-password/reset-password.component';
export * from './services/auth.service';
export * from './services/auth-result';
export * from './services/interceptors/jwt-interceptor';
export * from './services/interceptors/simple-interceptor';
export * from './services/token/token';
export * from './services/token/token-storage';
export * from './services/token/token.service';
export * from './services/token/token-parceler';
export * from './strategies/auth-strategy';
export * from './strategies/auth-strategy-options';
export * from './strategies/dummy/dummy-strategy';
export * from './strategies/dummy/dummy-strategy-options';
export * from './strategies/password/password-strategy';
export * from './strategies/password/password-strategy-options';
export * from './strategies/oauth2/oauth2-strategy';
export * from './strategies/oauth2/oauth2-strategy.options';
export * from './models/user';
export * from './helpers';
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHVibGljX2FwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9mcmFtZXdvcmsvYXV0aC9wdWJsaWNfYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7O0dBSUc7QUFDSCxjQUFjLGdCQUFnQixDQUFDO0FBQy9CLGNBQWMsZUFBZSxDQUFDO0FBQzlCLGNBQWMsZUFBZSxDQUFDO0FBRTlCLGNBQWMsNkJBQTZCLENBQUM7QUFDNUMsY0FBYyw4Q0FBOEMsQ0FBQztBQUM3RCxjQUFjLG9DQUFvQyxDQUFDO0FBQ25ELGNBQWMsc0NBQXNDLENBQUM7QUFDckQsY0FBYywwQ0FBMEMsQ0FBQztBQUN6RCxjQUFjLDBEQUEwRCxDQUFDO0FBQ3pFLGNBQWMsc0RBQXNELENBQUM7QUFDckUsY0FBYyx5QkFBeUIsQ0FBQztBQUN4QyxjQUFjLHdCQUF3QixDQUFDO0FBQ3ZDLGNBQWMseUNBQXlDLENBQUM7QUFDeEQsY0FBYyw0Q0FBNEMsQ0FBQztBQUMzRCxjQUFjLHdCQUF3QixDQUFDO0FBQ3ZDLGNBQWMsZ0NBQWdDLENBQUM7QUFDL0MsY0FBYyxnQ0FBZ0MsQ0FBQztBQUMvQyxjQUFjLGlDQUFpQyxDQUFDO0FBQ2hELGNBQWMsNEJBQTRCLENBQUM7QUFDM0MsY0FBYyxvQ0FBb0MsQ0FBQztBQUNuRCxjQUFjLG1DQUFtQyxDQUFDO0FBQ2xELGNBQWMsMkNBQTJDLENBQUM7QUFDMUQsY0FBYyx5Q0FBeUMsQ0FBQztBQUN4RCxjQUFjLGlEQUFpRCxDQUFDO0FBQ2hFLGNBQWMscUNBQXFDLENBQUM7QUFDcEQsY0FBYyw2Q0FBNkMsQ0FBQztBQUM1RCxjQUFjLGVBQWUsQ0FBQztBQUU5QixjQUFjLFdBQVcsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCBBa3Zlby4gQWxsIFJpZ2h0cyBSZXNlcnZlZC5cbiAqIExpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4gU2VlIExpY2Vuc2UudHh0IGluIHRoZSBwcm9qZWN0IHJvb3QgZm9yIGxpY2Vuc2UgaW5mb3JtYXRpb24uXG4gKi9cbmV4cG9ydCAqIGZyb20gJy4vYXV0aC5vcHRpb25zJztcbmV4cG9ydCAqIGZyb20gJy4vYXV0aC5tb2R1bGUnO1xuZXhwb3J0ICogZnJvbSAnLi9hdXRoLnJvdXRlcyc7XG5cbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9hdXRoLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvYXV0aC1ibG9jay9hdXRoLWJsb2NrLmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9sb2dvdXQvbG9nb3V0LmNvbXBvbmVudCc7XG5leHBvcnQgKiBmcm9tICcuL2NvbXBvbmVudHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9yZXF1ZXN0LXBhc3N3b3JkL3JlcXVlc3QtcGFzc3dvcmQuY29tcG9uZW50JztcbmV4cG9ydCAqIGZyb20gJy4vY29tcG9uZW50cy9yZXNldC1wYXNzd29yZC9yZXNldC1wYXNzd29yZC5jb21wb25lbnQnO1xuZXhwb3J0ICogZnJvbSAnLi9zZXJ2aWNlcy9hdXRoLnNlcnZpY2UnO1xuZXhwb3J0ICogZnJvbSAnLi9zZXJ2aWNlcy9hdXRoLXJlc3VsdCc7XG5leHBvcnQgKiBmcm9tICcuL3NlcnZpY2VzL2ludGVyY2VwdG9ycy9qd3QtaW50ZXJjZXB0b3InO1xuZXhwb3J0ICogZnJvbSAnLi9zZXJ2aWNlcy9pbnRlcmNlcHRvcnMvc2ltcGxlLWludGVyY2VwdG9yJztcbmV4cG9ydCAqIGZyb20gJy4vc2VydmljZXMvdG9rZW4vdG9rZW4nO1xuZXhwb3J0ICogZnJvbSAnLi9zZXJ2aWNlcy90b2tlbi90b2tlbi1zdG9yYWdlJztcbmV4cG9ydCAqIGZyb20gJy4vc2VydmljZXMvdG9rZW4vdG9rZW4uc2VydmljZSc7XG5leHBvcnQgKiBmcm9tICcuL3NlcnZpY2VzL3Rva2VuL3Rva2VuLXBhcmNlbGVyJztcbmV4cG9ydCAqIGZyb20gJy4vc3RyYXRlZ2llcy9hdXRoLXN0cmF0ZWd5JztcbmV4cG9ydCAqIGZyb20gJy4vc3RyYXRlZ2llcy9hdXRoLXN0cmF0ZWd5LW9wdGlvbnMnO1xuZXhwb3J0ICogZnJvbSAnLi9zdHJhdGVnaWVzL2R1bW15L2R1bW15LXN0cmF0ZWd5JztcbmV4cG9ydCAqIGZyb20gJy4vc3RyYXRlZ2llcy9kdW1teS9kdW1teS1zdHJhdGVneS1vcHRpb25zJztcbmV4cG9ydCAqIGZyb20gJy4vc3RyYXRlZ2llcy9wYXNzd29yZC9wYXNzd29yZC1zdHJhdGVneSc7XG5leHBvcnQgKiBmcm9tICcuL3N0cmF0ZWdpZXMvcGFzc3dvcmQvcGFzc3dvcmQtc3RyYXRlZ3ktb3B0aW9ucyc7XG5leHBvcnQgKiBmcm9tICcuL3N0cmF0ZWdpZXMvb2F1dGgyL29hdXRoMi1zdHJhdGVneSc7XG5leHBvcnQgKiBmcm9tICcuL3N0cmF0ZWdpZXMvb2F1dGgyL29hdXRoMi1zdHJhdGVneS5vcHRpb25zJztcbmV4cG9ydCAqIGZyb20gJy4vbW9kZWxzL3VzZXInO1xuXG5leHBvcnQgKiBmcm9tICcuL2hlbHBlcnMnO1xuIl19
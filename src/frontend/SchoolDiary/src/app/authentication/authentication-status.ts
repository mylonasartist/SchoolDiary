export class AuthenticationStatus {
    readonly authenticated: boolean;
    readonly errorMessage: string;

    constructor(authenticated: boolean, errorMessage?: string) {
        this.authenticated = authenticated;
        this.errorMessage = errorMessage;
    }
}

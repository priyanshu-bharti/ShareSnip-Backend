export {};

declare global {
    namespace Express {
        interface Request {
            oidc: any;
        }
    }
}

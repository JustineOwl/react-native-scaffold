import bugsnag from '../config/bugsnag';

/**
 * Sends error to bugsnag dashboard.
 * IF DEV environment just shows error and doesn't send it to bugsnag.
 * @param {any} error   Error to send.
 */
export const notifyError = (error: any) => {
    if (__DEV__) {
        console.warn(error);
    } else {
        bugsnag.notify(new Error(error));
    }
};

/**
 * Sends error to bugsnag dashboard with additional message.
 * IF DEV environment just shows error and doesn't send it to bugsnag.
 * @param {any} error     Error to send.
 * @param {string} message   Additional message.
 */
export const notifyWithMessage = (error: any, message: string) => {
    if (__DEV__) {
        console.warn(message, error);
    } else {
        bugsnag.notify(new Error(error), report => {
            report.errorMessage = message;
        });
    }
};

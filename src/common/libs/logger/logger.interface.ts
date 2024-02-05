export interface ILogger {
	warn(message: string, ...args: unknown[]): void,
	error(message: string, error: Error, ...args: unknown[]): void,
	info(message: string, ...args: unknown[]): void,
	debug(message: string, ...args: unknown[]):void
}

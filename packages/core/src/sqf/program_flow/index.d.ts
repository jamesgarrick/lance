/**
 * Suspends code execution for given time in seconds. The sleep precision is given by a framerate,
 * the delay given is the minimal delay expected. Must be called inside of an async context.
 *
 * @remarks
 * - This command will suspend the code for at least the given amount of time, and can be way more if the script scheduler is busy.
 * - This command will suspend the script as the game gets paused in single player (and will resume with it). To avoid this, use {@link uiSleep}.
 *
 * @param delay - The number of seconds to sleep. Must be non-negative.
 * @returns A promise that resolves after the delay has elapsed.
 *
 * @throws {Error} If called outside of an async context.
 *
 * @example
 * ```ts
 * await sleep(1);
 * hint("1 second passed");
 * await sleep(2);
 * hint("3 seconds total");
 * ```
 *
 * @see {@link uiSleep} for a pause-independent alternative.
 * @since 0.50
 */
export declare function sleep(delay: number): Promise<void>;

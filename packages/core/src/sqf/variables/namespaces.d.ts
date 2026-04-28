/**
 * Returns the global namespace attached to mission.
 *
 * @since 0.50
 *
 * @see {@link https://community.bistudio.com/wiki/missionNamespace missionNamespace}
 */
export declare const missionNamespace: SqfNamespace;
export declare const missionProfileNamespace: SqfNamespace;
export declare const parsingNamespace: SqfNamespace;
export declare const uiNamespace: SqfNamespace;

/**
 * This namespace has the same lifetime as profileNamespace
 * but is also connected to the mission it is saved from.
 * See saveMissionProfileNamespace for more details.
 *
 * @since 2.10
 *
 * @see {@link https://community.bistudio.com/wiki/missionProfileNamespace missionProfileNamespace}
 */
export declare const missionProfileNamespace: SqfNamespace;

/**
 * Returns the global namespace attached to the active user profile.
 *
 * @remarks
 * - Use setVariable and getVariable to save and load data to and from this Namespace.
 * - A variable can be deleted by setting its value to nil.
 * - By default the variables set in this namespace will exist while the game is running,
 *   and variables are saved persistently when the game is closed.
 * - Saving can also be forced by using saveProfileNamespace to prevent data loss on e.g game crash.
 *
 * @since 0.50
 *
 * @see {@link https://community.bistudio.com/wiki/profileNamespace profileNamespace}
 */
export declare const profileNamespace: SqfNamespace;

/**
 * Returns local Namespace attached to the mission.
 *
 * @remarks
 * - Has the same lifetime as missionNamespace but variables **cannot be broadcasted** out of
 * or into this namespace in multiplayer and will not be serialized when game is saved.
 * - A variable can be deleted by setting its value to nil.
 * - UI variables can be safely stored in this namespace.
 * - Use allVariables command to save the variables elsewhere if required.
 *
 * @since 2.00
 *
 * @see {@link https://community.bistudio.com/wiki/localNamespace localNamespace}
 */
export declare const localNamespace: SqfNamespace;

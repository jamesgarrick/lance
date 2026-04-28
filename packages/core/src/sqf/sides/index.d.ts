
// !TODO - needs fixing to new primitive types
/**
 * Arma Side Types
 *
 * | Id | Side          | Description                                                                                      | Commands                    | Can CreateCenter | String Version   |
 * |----|---------------|--------------------------------------------------------------------------------------------------|-----------------------------|------------------|------------------|
 * | 1  | BLUFOR        | The BLUFOR (Blue Forces) side.                                                                   | `west`, `blufor`            | ✓                | `"WEST"`         |
 * | 0  | OPFOR         | The OPFOR (Opposing Forces) side.                                                                | `east`, `opfor`             | ✓                | `"EAST"`         |
 * | 2  | Independent   | The Independent Forces/Guerilla side.                                                            | `resistance`, `independent` | ✓                | `"GUER"`         |
 * | 3  | Civilian      | The civilian side.                                                                               | `civilian`                  | ✓                | `"CIV"`          |
 * | 9  | Ambient Life  | Animals like fish, rabbits and snakes.                                                           | `sideAmbientLife`           | ✗                | `"AMBIENT LIFE"` |
 * | 8  | Empty         | Empty buildings placed in the Eden Editor.                                                       | `sideEmpty`                 | ✗                | `"EMPTY"`        |
 * | 6  | Friendly      | Friendly sides.                                                                                  | `sideFriendly`              | ✗                | `"FRIENDLY"`     |
 * | 5  | Enemy         | Enemy side.                                                                                      | `sideEnemy`                 | ✗                | `"ENEMY"`        |
 * | 4  | Unknown       | Used when the side of a unit is unknown, e.g. for spotted targets with insufficient information. | `sideUnknown`               | ✗                | `"UNKNOWN"`      |
 * | 7  | Logic         | Side of Game Logics and Modules.                                                                 | `sideLogic`                 | ✓                | `"LOGIC"`        |
 *
 * @see {@link https://community.bistudio.com/wiki/Side_Relations Side Relations}
 * @see {@link https://community.bistudio.com/wiki/faction Factions}
 * @see {@link https://community.bistudio.com/wiki/Category:Command_Group:_Sides Command Group: Sides}
 */
export declare class Side<TName extends SideName = SideName>
  implements SqfValue<"Side">
{
  readonly __sqfKind?: "Side";
  readonly name?: TName;
}

/**
 * West (BLUFOR) side.
 *
 * Alias:
 * - `blufor`
 *
 * @since 0.50
 *
 * @see {@link https://community.bistudio.com/wiki/west west}
 * @see {@link https://community.bistudio.com/wiki/faction Factions}
 */
export declare const west: Side<"west">;

/**
 * Pre-defined variable for the blufor side.
 *
 * Alias:
 * - `west`
 *
 * @since 0.50
 */
export declare const blufor: Side<"west">;

/**
 * Pre-defined variable for the eastern side.
 *
 * Alias:
 * - `opfor`
 *
 * @since 0.50
 */
export declare const east: Side<"east">;

/**
 * Pre-defined variable for the opfor side.
 *
 * Alias:
 * - `east`
 *
 * @since 0.50
 */
export declare const opfor: Side<"east">;

/**
 * Pre-defined variable for the resistance side.
 *
 * Alias:
 * - `independent`
 *
 * @since 0.50
 */
export declare const resistance: Side<"independent">;

/**
 * Pre-defined variable for the independent side.
 *
 * Alias:
 * - `resistance`
 *
 * @since 0.50
 */
export declare const independent: Side<"independent">;

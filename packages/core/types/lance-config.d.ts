import type { MagazineClassName } from "@lance/core";
import { WeaponClassName } from "../src/cfg/cfg-weapons-weapons";

export interface LanceConfig {
	build?: {
		entrypoint?: string;
		tag?: string;
		outDir?: string;
		tsConfig?: string;
		typesPackage?: string;
		typesPackageRoot?: string;
		sourceRoot?: string;
	};
	mission?: Record<string, unknown>;

  /** Mission author's name. The default loading screen shows this
   * string below the `onLoadName` in a smaller font prefixed by "by ". */
  author?: string;

  /** String (usually mission name) shown during
   * {@link https://community.bistudio.com/wiki/Loading_Screens mission loading}.
   * The string is shown in a slightly larger font above the loadScreen.
   * The {@link https://community.bistudio.com/wiki/Description.ext#onLoadMission onLoadMission}
   * text is placed below the load screen and the
   * {@link https://community.bistudio.com/wiki/Description.ext#header header gameType}
   * determines the game type on top of the box.
   *
   * */
  onLoadName?: string;

  /** Displays a message while the mission is loading.
   *
   * Note that a mission that takes very little time to
   * load will only display the message for a short time. */
  onLoadMission?: string;

  /** The picture to be shown while the mission is loaded.
   *
   * The path is relative to the mission folder. Must be in PAA file format.
   *
   *
   * 2:1 aspect ratio (different aspect are rendered correctly as well, but won't cover the whole area).
   * Ideally 1024x512 pixels. */
  loadScreen?: string;

  Header: {
    /**
     * **Game type** is a simplified category describing what a mission is about.
     *
     * `Unkown` - Undefined Game Mode
     *
     * `DM` - Deathmatch
     *
     * `CTF` - Capture the Flag
     *
     * `Coop` - Cooperative Mission
     *
     * `CTI` - Capture the Island
     *
     * `SC` - Sector control
     *
     * `TDM` - Team Deathmatch
     *
     * `RPG` - Role-Playing Game
     *
     * `Sandbox` - Sandbox
     *
     * `KOTH` - King of the Hill
     *
     * `LastMan` - Last Man Standing
     *
     * `Survive` - Survival
     *
     * `Zeus` - Zeus
     *
     * `Support` - Support
     *
     * `EndGame` - End Game
     *
     * `Apex` - Campaign - Apex Protocol
     *
     * `Escape` - Escape
     *
     * `Patrol` - Combat Patrol
     *
     * `Vanguard` - Vanguard
     *
     * `Warlords` - Warlords
     */
    gameType?: "Unkown" | "DM" | "CTF" | "Coop" | "CTI" | "SC" | "TDM" | "RPG" | "Sandbox" | "KOTH" | "LastMan" | "Survive" | "Zeus" | "Support" | "EndGame" | "Apex" | "Escape" | "Patrol" | "Vanguard" | "Warlords";

    /** Minimum number of players the mission supports. */
    minPlayers?: number;

    /** Maximum number of players the mission supports. */
    maxPlayers?: number;
  }

  /** Displays a message while the intro is loading. */
  onLoadIntro?: string;

  /** Define whether you will see the time and date
   * displayed while the intro loads.
   *
   * Default: `false`
   */
  onLoadIntroTime?: boolean;

  /** Mission name displayed in the mission selection menu. */
  briefingName?: string;

  /** Path to image which will be displayed when the mission is highlighted
   * on the mission selection screen.
   *
   * Image should be .paa format and in 2:1 aspect ratio – ideally 1024×512 (Arma 3).
   */
  overviewPicture?: string;

  /** Text to be displayed below the overviewPicture on the
   * mission select screen when the mission is locked from
   * play.
   */
  overViewTextLocked?: string;

  // respawn/revive
  /**
   * Set soilders nd vehicles respawn type.
   *
   * **"NONE"** - No respawn.
   *
   * **"BIRD"** - Respawn as a seagull.
   *
   * **"INSTANT"** - Respawn just where you died.
   *
   * **"BASE"** - Respawn at the base.
   *
   * A respawn marker is needed. If no marker
   * is defined, respawn behavior will be the same as `"INSTANT"`.
   *
   * Marker role names:
   * - Unit respawn: respawn_`SIDE`
   * - Vehicle respawn: respawn_vehicle_`SIDE`
   *
   * Any suffix will allow multiple random respawn points.
   *
   * **"GROUP"** - Respawn in your group. If there is no remaining AI,
   * you will become a seagull.
   *
   * **"SIDE"** - Respawn into an AI unit on your side.
   *
   * If there is no AI left, you will become a seagull.
   *
   * With this respawn type, team swtich is also available to any
   * AI controlled playable units.
   */
  respawn?: "NONE" | "BIRD" | "INSTANT" | "BASE" | "GROUP" | "SIDE";

  /**
   * Set vehicle respawn type. If `respawnVehicle` is not defined,
   * the `respawn` value is used.
   *
   * **"NONE"** - No respawn.
   *
   * **"INSTANT"** - Respawn just where you died.
   *
   * **"BASE"** - Respawn at the base.
   *
   * A respawn marker is needed. If no marker
   * is defined, respawn behavior will be the same as `"INSTANT"`.
   *
   * Marker role names:
   * - Unit respawn: respawn_`SIDE`
   * - Vehicle respawn: respawn_vehicle_`SIDE`
   *
   * Any suffix will allow multiple random respawn points.
   */
  respawnVehicle?: "NONE" | "INSTANT" | "BASE";

  /** Enable or disable the respawn button in the menu for `INSTANT` and `BASE` respawn types. */
  respawnButton?: boolean;

  /** Set respawn delay in seconds. */
  respawnDelay?: number;

  /** Show the scoreboard and respawn countdown timer for a player
   * if he is killed with respawn type `BASE`.
   * */
  respawnDialog?: number;

  /**
   * Respawn a player when he joins the game. Available only
   * for `INSANT` and `BASE` respawn types.
   *
   * `-1` - Don't respawn on start. Don't run respawn script on start.
   *
   *  `0` - Don't respawn on start. Run respawn script on start.
   *
   *  `1` - Respawn on start. Run respawn script on start.
   */
  respawnOnStart?: -1 | 0 | 1;

  // TODO! respawnTemplates
  //

  /** Set weapons players will receive upon respawn. `respawnMagazines` has to be defined as well. */
  respawnWeapons?: WeaponClassName[];

  /** Set weapons WEST players will receive upon respawn. `respawnMagazinesWEST` has to be defined as well. */
  respawnWeaponsWEST?: WeaponClassName[];

  /** Set weapons EAST players will receive upon respawn. `respawnMagazinesEAST` has to be defined as well. */
  respawnWeaponsEAST?: WeaponClassName[];

  /** Set weapons GUER players will receive upon respawn. `respawnMagazinesGUER` has to be defined as well. */
  respawnWeaponsGUER?: WeaponClassName[];

  /** Set weapons CIV players will receive upon respawn. `respawnMagazinesCIV` has to be defined as well. */
  respawnWeaponsCIV?: WeaponClassName[];

  /** Set magazines players will receive upon respawn. `respawnWeapons` has to be defined as well. */
  respawnMagazines?: MagazineClassName[];

  /** Set magazines WEST players will receive upon respawn. `respawnWeaponsWEST` has to be defined as well. */
  respawnMagazinesWEST?: MagazineClassName[];

  /** Set magazines EAST players will receive upon respawn. `respawnWeaponsEAST` has to be defined as well. */
  respawnMagazinesEAST?: MagazineClassName[];

  /** Set magazines GUER players will receive upon respawn. `respawnWeaponsGUER` has to be defined as well. */
  respawnMagazinesGUER?: MagazineClassName[];

  /** Set magazines CIV players will receive upon respawn. `respawnWeaponsCIV` has to be defined as well. */
  respawnMagazinesCIV?: MagazineClassName[];

  /**
   * Define is `Revive mode` is enabled.
   *
   * `0` - disabled
   *
   * `1` - enabled
   *
   * `2` - controlled by player attributes.
   */
  reviveMode?: 0 | 1 | 2;

  /**
   * Define the revive unconscious state mode.
   *
   * `0` - basic mode
   *
   * `1` - advanced mode
   *
   * `2` - realistic
   *
   * See {@link https://community.bistudio.com/wiki/Arma_3:_Revive#Damage_Modeling damage model}
   * for more detailed information.
   */
  reviveUnconsciousStateMode?: 0;

  /**
   * Define if only a medic (or a unit with
   * medic {@link https://community.bistudio.com/wiki/setUnitTrait trait} can perform a revive.)
   *
   * Default: `false`
   *
   */
  reviveRequiredTrait?: boolean;

  /**
   * Define if a medical item is required to begin a revive process.
   *
   * `0` - none
   *
   * `1` - medkit
   *
   * `2` - medkit or first aid kit
   */
  reviveRequiredItems?: 0 | 1 | 2;

  /** Define if a first aid kit is consumed on reviving a teammate. */
  reviveRequiredItemsFakConsumed?: boolean;

  /** Define the speed multiplier for revive performed by medic. */
  reviveMedicSpeedMultiplier?: number;

  /** The time in seconds it takes to revive an incapacitated unit.
   *
   * Having a Medikit will halve this time. */
  reviveDelay?: number;

  /**
   * The time in seconds it takes for an incapacitated unit to force their respawn.
   *
   * Default: `3`
   */
  reviveForceRespawnDelay?: number;

  /**
   * The time in seconds it takes for an incapacitated unit to bleed out.
   *
   * Default: `120`
   */
  reviveBleedOutDelay?: number;

  /**
   * Usage unsure.
   */
  enablePlayerAddRespawn?: boolean;

  // TODO! - CfgRespawnInventory - maybe use generator code for this
  // TODO! - CfgRespawnTemplates
  // TODO! - CfgRoles


  // player UI

  /**
   * Some of the feedback effects in Arma 3 are scripted and executed by
   * functions_f\feedback\fn_feedbackMain.fsm. Those include being hit,
   * pulsation, dirt from explosion, choking etc. Adding overrideFeedback
   * with value > 0 will stop feedback FSM from executing, allowing mission/mod
   * makers to script their own, custom effects. The param is first checked in
   * the mission config and then mod config. If mission config has this param
   * set to 0, it will force default feedback handling without possibility to
   * override it by mods. Do not set this param unless you are planning to
   * enforce feedback one way or another.
   *
   *  0: force default handling, 1+: allow custom handling. Default: not set
   */
  overrideFeedback?: boolean;

  /**
   * Enables/disables IGUI elements
   *
   * @remarks
   * Using this parameter will disable showHUD command entirely.
   */
  showHUD?: boolean | {
    /** Scripted HUD (same as showHUD command) */
    scriptedHUD: boolean;
    /** Vehicle and unit info */
    vehicleUnitInfo: boolean;
    /** Vehicle radar */
    vehicleRadar: boolean;
    /** Vehicle compass */
    vehicleCompass: boolean;
    /** Tank direction indicator */
    tankDirectionIndicator: boolean;
    /** Commanding menu */
    commandingMenu: boolean;
    /** Group info bar */
    groupInfoBar: boolean;
    /** HUD weapon cursors */
    hudWeaponCursors: boolean;
    /** Vehicle display panels */
    vehicleDisplayPanels: boolean;
    /** "x killed by y" systemChat messages */
    killedSystemChat: boolean;
    /** Force show drawIcon3D icons */
    forceShowDrawIcon3DIcons: boolean;
  }

  /** Defines if the compass is visible. */
  showCompass?: boolean;
  /** Enables/disables the GPS. */
  showGPS?: boolean;

  /** Defines if the map is shown after the mission starts. */
  showMap?: boolean;

  /** Defines if the watch is visible. */
  showWatch?: boolean;

  /** Enables/disables the UAV feed. */
  showUAVFeed?: boolean;

  /**
   * Overrides the haze quality.
   *
   * Forces haze quality and in MP has priority over the server 'overrideHazeQuality' option.
   *
   * 0 - VeryLow
   *
   * 1 - Low
   *
   * 2 - Standard
   *
   * -1 - Do not force
   *
   * @since 2.16
   */
  overrideHazeQuality?: number;
}

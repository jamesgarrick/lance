export interface LanceConfig {
	name: string;
	version: string;
	type: "mission" | "library";
	private?: boolean;
	exports?: string | string[];
	include?: string[];
  dependencies?: { [name: string]: string };

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

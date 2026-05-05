
export interface ServerConfig {
  /** Password to protect admin access. */
  passwordAdmin?: string;

  /** Password required to conenct to server  */
  password?: string;

  /**
   * Password required by alternate syntax of serverCommand
   *  server-side scripting
   */
  serverCommandPassword?: string;

  /** Hostname of the server visible in game browser */
  hostname?: string;

  /** The maximum number of players that can connect to server.
   * The final number will be lesser between number given here
   * and number of mission slots.
   */
  maxPlayers?: number;

  /** Message of the day (MOTD) for the server. Each element is a line of text. */
  motd?: [string, string];

  /** Interval (in seconds) at which the MOTD should be updated. */
  motdInterval?: number;

  /** List of admin UUIDs. */
  admins?: string[];

  /** List of headless client IPs. */
  headlessClients?: string[];

  /** List of local client IPs.
   *
   * Indicates clients with unlimited bandwidth and nearly no latency.
   */
  localClient?: string[];

  /**
   * Whitelisted clients ignore the rules defined by allowedFilePatching
   * and verifySignatures, allowing them to join the server with any mods
   * of their choice. Signature errors are still logged by the server upon
   * connection.
   */
  filePatchingExceptions?: string[];

  /**
   * Percentage of votes needed to confirm a vote
   */
  voteThreshold?: number;

  /**
   * Number of mission players required to start voting process
   */
  voteMissionPlayers?: number;

  /** Voting command permissions. */
  allowedVoteCmds?: [string, boolean, boolean, number][];

  /** Commands available to voted-in admin. */
  allowedVotedAdminCmds?: [string, boolean, boolean][];

  /** Do not allow duplicate game IDs. */
  kickduplicate?: number;

  /** Force server into LAN mode for local testing. */
  loopback?: boolean | number;

  /** Automatically create router port mapping via UPNP/IGD. */
  upnp?: boolean | number;

  /**
   * Prevent or allow file patching for clients.
   * 0 = none, 1 = headless clients only, 2 = all clients
   */
  allowedFilePatching?: 0 | 1 | 2;

  /** Extensions allowed by loadFile. */
  allowedLoadFileExtensions?: string[];

  /** Extensions allowed by preprocessFile and preprocessFileLineNumbers. */
  allowedPreprocessFileExtensions?: string[];

  /** Extensions allowed by htmlLoad. */
  allowedHTMLLoadExtensions?: string[];

  /** URIs/URLs allowed by htmlLoad. */
  allowedHTMLLoadURIs?: string[];

  /** Max ping value before action is taken. */
  MaxPing?: number;

  /** Max packet loss value before action is taken. */
  MaxPacketLoss?: number;

  /** Max desync value before action is taken. */
  MaxDesync?: number;

  /** Wait time before disconnecting client after traffic loss. */
  DisconnectTimeout?: number;

  /**
   * Per-network-limit action flags.
   * 0 = log, 1 = kick
   */
  kickClientsOnSlowNetwork?: [number, number, number, number];

  /** Log players' bandwidth/desync diagnostics periodically. */
  enablePlayerDiag?: number;

  /** Warn if server-side callExtension exceeds this time (ms). */
  callExtReportLimit?: number;

  /**
   * Delay before kicked player can return.
   * kickID: 0 manual, 1 connectivity, 2 BattlEye, 3 harmless
   */
  kickTimeout?: [number, number][];

  /** Voting timeout in seconds. */
  votingTimeOut?: number | [number, number];

  /** Role selection timeout in seconds. */
  roleTimeOut?: number | [number, number];

  /** Briefing timeout in seconds. */
  briefingTimeOut?: number | [number, number];

  /** Debriefing timeout in seconds. */
  debriefingTimeOut?: number | [number, number];

  /** Lobby idle timeout in seconds. */
  lobbyIdleTimeout?: number;

  /** Restart process after this many mission ends. */
  missionsToServerRestart?: number;

  /** Shutdown process after this many mission ends. */
  missionsToShutdown?: number;

  /** Auto-start next mission from cycle. */
  autoSelectMission?: boolean;

  /** Start/select mission randomly from cycle. */
  randomMissionOrder?: boolean;

  /**
   * Disable specific channel features.
   * channelID, text, voice, mapMarkers, drawOnMap
   */
  disableChannels?: [number, boolean, boolean, boolean?, boolean?][];

  /** Addon signature verification mode. */
  verifySignatures?: number;

  /** Outdated: require same -mod startup parameter as server. */
  equalModRequired?: number;

  /** Enable or disable drawing/markers in map. */
  drawingInMap?: boolean;

  /** Enable or disable VoN. */
  disableVoN?: number;

  /** VoN codec quality. */
  vonCodecQuality?: number;

  /** VoN codec type. */
  vonCodec?: number;

  /** Skip role selection lobby for joining players. */
  skipLobby?: boolean;

  /** Ignore glasses set in player profile when false. */
  allowProfileGlasses?: boolean;

  /** Zeus composition script permission level. */
  zeusCompositionScriptLevel?: 0 | 1 | 2;

  /** Dedicated server console log file name/path. */
  logFile?: string;

  /** Command executed when duplicate ID is detected. */
  doubleIdDetected?: string;

  /** Command executed when user connects. */
  onUserConnected?: string;

  /** Command executed when user disconnects. */
  onUserDisconnected?: string;

  /** Command executed on hacked data detection. */
  onHackedData?: string;

  /** Command executed on different data detection. */
  onDifferentData?: string;

  /** Command executed on unsigned data detection. */
  onUnsignedData?: string;

  /** Command executed when user is kicked. */
  onUserKicked?: string;

  /** Command executed at regular interval. */
  regularCheck?: string;

  /** Enable or disable BattlEye anti-cheat. */
  BattlEye?: number;

  /** RPT timestamp format. */
  timeStampFormat?: "none" | "short" | "full" | "";

  /** Force flight model: 0 player choice, 1 AFM, 2 SFM. */
  forceRotorLibSimulation?: 0 | 1 | 2;

  /** Keep mission running when all clients disconnect. */
  persistent?: number;

  /** Minimum required client build number. */
  requiredBuild?: number;

  /** Enable or disable analytics reporting. */
  statisticsEnabled?: number;

  /** Enforce selected server difficulty preset. */
  forcedDifficulty?: string;

  /** Limit missions available for admin mission change. */
  missionWhitelist?: string[];

  /** Maximum Steam query packet length. */
  steamProtocolMaxDataSize?: number;

  /** Log object-not-found messages. */
  logObjectNotFound?: boolean | number;

  /** Parse mission description.ext on mission load. */
  skipDescriptionParsing?: boolean | number;

  /** Continue mission load even when load errors occur. */
  ignoreMissionLoadErrors?: boolean | number;

  /** Guaranteed message queue threshold for #monitor dump. */
  queueSizeLogG?: number;

  /** Seconds to wait for Arma Units data during connection. */
  armaUnitsTimeout?: number;

  /** Force haze quality in MP clients. */
  overrideHazeQuality?: -1 | 0 | 1 | 2;

  /** Optional anti-flood limits. */
  antiFlood?: {
    /** Evaluation cycle time in seconds. */
    cycleTime: number;
    /** Soft message limit per cycle. */
    cycleLimit: number;
    /** Hard message limit per cycle. */
    cycleHardLimit: number;
    /** Kick when flood limit is exceeded. */
    enableKick: boolean | number;
  };

  /** Base URL for HTTP mission file download. */
  missionHTTPDownloadBaseURL?: string;
}

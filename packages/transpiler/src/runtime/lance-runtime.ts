/** Global state initializer — must run before any LANCE_fnc_waitAndExecute calls. */
export const LANCE_RUNTIME_INIT_SQF = `LANCE_pfh_waitData = [];`.trimEnd();

/**
 * LANCE_fnc_waitAndExecute
 * Executes _callback after _delay seconds using a per-frame handler.
 * No spawn — fully unscheduled.
 * Parameters: [_callback: Code, _args: Array, _delay: Number]
 */
export const LANCE_FNC_WAIT_AND_EXECUTE_SQF = `\
params ["_callback", "_args", "_delay"];
private _startTime = time;
private _id = addMissionEventHandler ["EachFrame", {
    if (_thisScriptedEventHandler >= count LANCE_pfh_waitData) exitWith {};
    private _d = LANCE_pfh_waitData select _thisScriptedEventHandler;
    if (isNil "_d") exitWith {};
    _d params ["_startTime", "_delay", "_cb", "_cbArgs"];
    if (time - _startTime >= _delay) then {
        LANCE_pfh_waitData set [_thisScriptedEventHandler, nil];
        removeMissionEventHandler ["EachFrame", _thisScriptedEventHandler];
        _cbArgs call _cb;
    };
}];
while {_id >= count LANCE_pfh_waitData} do { LANCE_pfh_waitData pushBack nil; };
LANCE_pfh_waitData set [_id, [_startTime, _delay, _callback, _args]];`;

export const LANCE_RUNTIME_FILES: ReadonlyArray<{ path: string; content: string }> = [
  { path: "functions/LANCE/fn_init.sqf", content: LANCE_RUNTIME_INIT_SQF },
  { path: "functions/LANCE/fn_waitAndExecute.sqf", content: LANCE_FNC_WAIT_AND_EXECUTE_SQF },
];

export const LANCE_RUNTIME_FUNCTION_FILES = [
  { functionName: "init", outputPath: "functions/LANCE/fn_init.sqf", category: "LANCE", tag: "LANCE" },
  { functionName: "waitAndExecute", outputPath: "functions/LANCE/fn_waitAndExecute.sqf", category: "LANCE", tag: "LANCE" },
] as const;

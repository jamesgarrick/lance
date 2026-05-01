/** Global state initializer — must run before any LANCE_fnc_waitAndExecute calls. */
export const LANCE_RUNTIME_INIT_SQF = `LANCE_pfh_waitData = [];`.trimEnd();

/**
 * LANCE_fnc_waitAndExecute
 * Executes _callback after _delay seconds using a per-frame handler.
 * No spawn — fully unscheduled.
 *
 * The fired callback is wrapped in try/catch so an error thrown post-await
 * still reaches LANCE_fnc_handleError. Spec §14.6.3.
 *
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
        try {
            _cbArgs call _cb;
        } catch {
            [_exception, "<async continuation>"] call LANCE_fnc_handleError;
        };
    };
}];
while {_id >= count LANCE_pfh_waitData} do { LANCE_pfh_waitData pushBack nil; };
LANCE_pfh_waitData set [_id, [_startTime, _delay, _callback, _args]];`;

/**
 * LANCE_fnc_handleError
 * Logs an uncaught error to diag_log + systemChat. Spec §14.7.
 *
 * Parameters: [_exception: HashMap, _source: String]
 *   _exception is the structured throw payload (see spec §14.3); falls back
 *   gracefully when the payload isn't a HashMap (e.g. a stray bare-value throw
 *   from non-Lance SQF code that the compiler couldn't catch at compile time).
 */
export const LANCE_FNC_HANDLE_ERROR_SQF = `\
params ["_exception", ["_source", "<unknown>"]];

private _class = "Error";
private _message = "<no message>";
private _origin = _source;

if (_exception isEqualType createHashMap) then {
    _class = _exception getOrDefault ["__class", _class];
    _message = _exception getOrDefault ["message", _message];
    _origin = _exception getOrDefault ["source", _source];
} else {
    _message = str _exception;
};

private _line = format ["[lance] %1 in %2: %3", _class, _origin, _message];
diag_log _line;
systemChat _line;`;

export const LANCE_RUNTIME_FILES: ReadonlyArray<{
	path: string;
	content: string;
}> = [
	{ path: "functions/LANCE/fn_init.sqf", content: LANCE_RUNTIME_INIT_SQF },
	{
		path: "functions/LANCE/fn_waitAndExecute.sqf",
		content: LANCE_FNC_WAIT_AND_EXECUTE_SQF,
	},
	{
		path: "functions/LANCE/fn_handleError.sqf",
		content: LANCE_FNC_HANDLE_ERROR_SQF,
	},
];

export const LANCE_RUNTIME_FUNCTION_FILES = [
	{
		functionName: "init",
		outputPath: "functions/LANCE/fn_init.sqf",
		category: "LANCE",
		tag: "LANCE",
	},
	{
		functionName: "waitAndExecute",
		outputPath: "functions/LANCE/fn_waitAndExecute.sqf",
		category: "LANCE",
		tag: "LANCE",
	},
	{
		functionName: "handleError",
		outputPath: "functions/LANCE/fn_handleError.sqf",
		category: "LANCE",
		tag: "LANCE",
	},
] as const;

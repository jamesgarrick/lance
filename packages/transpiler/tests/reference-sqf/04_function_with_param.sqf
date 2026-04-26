setMode = {
  params ["_mode"];
  player setBehaviour _mode;
};

"AWARE" call setMode;

import type {
  PositionAGL,
  SqfCommand,
  SqfString,
} from "./primitives";
import type { Person } from "./objects";
import type { SqfStructuredText, SqfTask, SqfTeamMember } from "./world";

export type SqfTaskState =
  | "None"
  | "Created"
  | "Assigned"
  | "Succeeded"
  | "Failed"
  | "Canceled";

export type SqfTaskDescription = readonly [
  description: SqfString | SqfStructuredText,
  title: SqfString,
  waypointLabel: SqfString,
];

export type SqfTaskDestination = PositionAGL;
export type SqfTaskCustomData = readonly [
  iconPath: SqfString,
  tooltip: SqfString,
  description: SqfString,
];
export type SqfTaskTypeName = SqfString;

declare module "./objects" {
  interface Person<TKind extends string = "Person"> {
    createSimpleTask(name: SqfString, parentTask?: SqfTask): SqfTask;
    getSimpleTasks(): readonly SqfTask[];
    getCurrentTask(): SqfTask;
    setCurrentTask(task: SqfTask): SqfCommand;
  }
}

/** Creates a local simple task for the given unit. */
export declare function createSimpleTask(
  unit: Person,
  name: SqfString,
  parentTask?: SqfTask,
): SqfTask;
/** Returns the current task of the given unit. */
export declare function currentTask(unit: Person): SqfTask;
/** Returns all uncompleted tasks for the given team member. */
export declare function currentTasks(teamMember: SqfTeamMember): readonly SqfTask[];
/** Returns the simple tasks assigned to the given unit. */
export declare function simpleTasks(unit: Person): readonly SqfTask[];
/** Removes a simple task. */
export declare function removeSimpleTask(task: SqfTask): SqfCommand;
/** Sets the current task for the given unit. */
export declare function setCurrentTask(unit: Person, task: SqfTask): SqfCommand;
/** Sets the description triplet of a simple task. */
export declare function setSimpleTaskDescription(
  task: SqfTask,
  description: SqfTaskDescription,
): SqfCommand;
/** Sets the destination position of a simple task. */
export declare function setSimpleTaskDestination(
  task: SqfTask,
  destination: SqfTaskDestination,
): SqfCommand;
/** Cancels the destination attached to a simple task. */
export declare function cancelSimpleTaskDestination(task: SqfTask): SqfCommand;
/** Attaches a task type identifier to a simple task. */
export declare function setSimpleTaskType(
  task: SqfTask,
  type: SqfTaskTypeName,
): SqfCommand;
/** Returns the type identifier of a task. */
export declare function taskType(task: SqfTask): SqfTaskTypeName;
/** Returns the task description triplet. */
export declare function taskDescription(task: SqfTask): SqfTaskDescription;
/** Returns the current task destination position. */
export declare function taskDestination(task: SqfTask): SqfTaskDestination;
/** Returns the task name. */
export declare function taskName(task: SqfTask): SqfString;
/** Returns the parent of the task. */
export declare function taskParent(task: SqfTask): SqfTask;
/** Returns the child tasks of the task. */
export declare function taskChildren(task: SqfTask): readonly SqfTask[];
/** Returns whether the task is completed. */
export declare function taskCompleted(task: SqfTask): boolean;
/** Returns whether the task is flagged as always visible. */
export declare function taskAlwaysVisible(task: SqfTask): boolean;
/** Sets whether a simple task should remain visible. */
export declare function setSimpleTaskAlwaysVisible(
  task: SqfTask,
  visible: boolean,
): SqfCommand;
/** Sets custom icon and text data for the task UI. */
export declare function setSimpleTaskCustomData(
  task: SqfTask,
  customData: SqfTaskCustomData,
): SqfCommand;
/** Returns the custom UI data attached to a task, or an empty array. */
export declare function taskCustomData(task: SqfTask): SqfTaskCustomData | readonly [];
/** Sets the state of a task. */
export declare function setTaskState(
  task: SqfTask,
  state: SqfTaskState,
): SqfCommand;
/** Returns the current task state. */
export declare function taskState(task: SqfTask): SqfTaskState;

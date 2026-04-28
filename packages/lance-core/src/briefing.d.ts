import type { SqfCommand, SqfDate, SqfString } from "./primitives";
import type { Person } from "./objects";
import type { SqfDiaryRecord, SqfTask } from "./world";
import type { SqfTaskState } from "./tasks";

export type DiarySubjectName = SqfString;
export type DiarySubjectDisplayName = SqfString;
export type DiarySubjectPicturePath = SqfString;

export type DiaryRecordTextInfo =
  | SqfString
  | readonly [
      title: SqfString,
      text: SqfString,
      icon?: DiarySubjectPicturePath,
    ];

export type DiaryRecordUpdate = readonly [
  title: SqfString,
  text: SqfString,
  icon?: DiarySubjectPicturePath,
];

export type DiarySubjectInfo = readonly [
  name: DiarySubjectName,
  displayName: DiarySubjectDisplayName,
  picture: DiarySubjectPicturePath,
  countRecords: number,
  isReadOnly: boolean,
  isSelected: boolean,
];

export type DiaryRecordInfo = readonly [
  id: SqfString,
  title: SqfString,
  text: SqfString,
  icon: DiarySubjectPicturePath,
  task: SqfTask,
  taskState: SqfTaskState | "",
  showTitle: boolean,
  date: SqfDate,
  record: SqfDiaryRecord,
];

declare module "./objects" {
  interface Person<TKind extends string = "Person"> {
    createDiarySubject(
      subject: DiarySubjectName,
      displayName: DiarySubjectDisplayName,
      picture?: DiarySubjectPicturePath,
    ): number;
    hasDiarySubject(subject: DiarySubjectName): boolean;
    getDiarySubjects(): readonly DiarySubjectInfo[];
    getDiaryRecords(subject: DiarySubjectName): readonly DiaryRecordInfo[];
    createDiaryRecord(
      subject: DiarySubjectName,
      textInfo: DiaryRecordTextInfo,
      task?: SqfTask,
      taskState?: SqfTaskState | "",
      showTitle?: boolean,
    ): SqfDiaryRecord;
    removeDiaryRecord(
      subject: DiarySubjectName,
      record: SqfDiaryRecord,
    ): void;
    removeDiarySubject(subject: DiarySubjectName): void;
    selectDiarySubject(subject: DiarySubjectName): void;
    setDiaryRecordText(
      subject: DiarySubjectName,
      record: SqfDiaryRecord,
      text: DiaryRecordUpdate,
    ): void;
    setDiarySubjectPicture(
      subject: DiarySubjectName,
      picture: DiarySubjectPicturePath,
    ): SqfCommand;
  }
}

/** Creates a custom diary subject for the given unit. */
export declare function createDiarySubject(
  unit: Person,
  subject: DiarySubjectName,
  displayName: DiarySubjectDisplayName,
  picture?: DiarySubjectPicturePath,
): number;
/** Checks whether a diary subject exists for the given unit. */
export declare function diarySubjectExists(
  unit: Person,
  subject: DiarySubjectName,
): boolean;
/** Returns all diary subjects available to the given unit. */
export declare function allDiarySubjects(unit: Person): readonly DiarySubjectInfo[];
/** Returns all diary records in a subject for the given unit. */
export declare function allDiaryRecords(
  unit: Person,
  subject: DiarySubjectName,
): readonly DiaryRecordInfo[];
/** Creates a diary record and returns the created diary handle. */
export declare function createDiaryRecord(
  unit: Person,
  subject: DiarySubjectName,
  textInfo: DiaryRecordTextInfo,
  task?: SqfTask,
  taskState?: SqfTaskState | "",
  showTitle?: boolean,
): SqfDiaryRecord;
/** Removes a diary record from the given subject. */
export declare function removeDiaryRecord(
  unit: Person,
  subject: DiarySubjectName,
  record: SqfDiaryRecord,
): void;
/** Removes a diary subject and all of its records. */
export declare function removeDiarySubject(
  unit: Person,
  subject: DiarySubjectName,
): void;
/** Selects a diary subject page without opening the map by itself. */
export declare function selectDiarySubject(
  unit: Person,
  subject: DiarySubjectName,
): void;
/** Replaces the title, text, and optional icon of a diary record. */
export declare function setDiaryRecordText(
  unit: Person,
  subject: DiarySubjectName,
  record: SqfDiaryRecord,
  text: DiaryRecordUpdate,
): void;
/** Sets the picture shown for a diary subject. */
export declare function setDiarySubjectPicture(
  unit: Person,
  subject: DiarySubjectName,
  picture: DiarySubjectPicturePath,
): SqfCommand;

import type { SqfString } from "../primitives";
import { goggles, vest, handgunWeapon, primaryWeapon, secondaryWeapon, addVest, linkItem } from "../sqf/person/inventory";


export class Person {
  get goggles(): SqfString { return goggles(this); }
  get vest(): SqfString { return vest(this); }
  get handgunWeapon(): SqfString { return handgunWeapon(this); }
  get primaryWeapon(): SqfString { return primaryWeapon(this); }
  get secondaryWeapon(): SqfString { return secondaryWeapon(this); }

  addVest(vestClass: SqfString) { return addVest(this, vestClass); }
  linkItem(item: SqfString) { return linkItem(this, item); }
}

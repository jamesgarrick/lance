import { goggles, vest, handgunWeapon, primaryWeapon, secondaryWeapon, addVest, linkItem } from "../sqf/person/inventory";


export class Person {
  get goggles(): string { return goggles(this); }
  get vest(): string { return vest(this); }
  get handgunWeapon(): string { return handgunWeapon(this); }
  get primaryWeapon(): string { return primaryWeapon(this); }
  get secondaryWeapon(): string { return secondaryWeapon(this); }

  addVest(vestClass: string) { return addVest(this, vestClass); }
  linkItem(item: string) { return linkItem(this, item); }
}

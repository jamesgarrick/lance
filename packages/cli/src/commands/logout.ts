import { Command } from "@oclif/core";
import { readRc, writeRc } from "../lib/auth";

export default class Logout extends Command {
  static override id = "logout";
  static override description = "Clear stored token";

  async run(): Promise<void> {
    const rc = await readRc();
    delete rc.token;
    await writeRc(rc);
    this.log("Logged out.");
  }
}

import { injectable } from "inversify";
import { IWeapon, IThrowableWeapon } from "../interfaces";

@injectable() // 关键点1
export class Katana implements IWeapon {
    public hit() {
        return "Slit... slash!";
    }
}

@injectable() // 关键点1
export class Shuriken implements IThrowableWeapon {
    public throw() {
        return "Flick... shhhh!";
    }
}
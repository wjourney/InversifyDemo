import { injectable, inject } from "inversify";
import { IWarrior, IWeapon, IThrowableWeapon } from "../interfaces";
import { TYPES } from "../common/types";

@injectable()
export class Ninja implements IWarrior {
    private _katana: IWeapon;
    private _shuriken: IThrowableWeapon;

    // 使用构造函数注入
    public constructor(
        @inject(TYPES.Weapon) katana: IWeapon,
        @inject(TYPES.ThrowableWeapon) shuriken: IThrowableWeapon
    ) {
        this._katana = katana;
        this._shuriken = shuriken;
    }

    public fight(): string {
        return this._katana.hit();
    }

    public sneak(): string {
        return this._shuriken.throw();
    }
}
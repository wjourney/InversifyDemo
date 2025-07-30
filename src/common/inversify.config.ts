import { Container } from "inversify";
import { TYPES } from "./types";
import { IWarrior, IWeapon, IThrowableWeapon } from "../interfaces";
import { Ninja } from "../entities/warrior";
import { Katana, Shuriken } from "../entities/weapons";

const myContainer = new Container();

// 绑定服务
// 当请求 IWarrior (TYPES.Warrior) 时，返回一个 Ninja 实例
myContainer.bind<IWarrior>(TYPES.Warrior).to(Ninja);

// 当请求 IWeapon (TYPES.Weapon) 时，返回一个 Katana 实例
myContainer.bind<IWeapon>(TYPES.Weapon).to(Katana);

// 当请求 IThrowableWeapon (TYPES.ThrowableWeapon) 时，返回一个 Shuriken 实例
myContainer.bind<IThrowableWeapon>(TYPES.ThrowableWeapon).to(Shuriken);

export { myContainer };
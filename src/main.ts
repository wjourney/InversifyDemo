import "reflect-metadata";
import { myContainer } from "./common/inversify.config";
import { TYPES } from "./common/types";
import { IWarrior } from "./interfaces";

// 从容器中“解析”或“获取”一个 IWarrior 的实例
// 容器会自动创建 Ninja，并发现它需要 Katana 和 Shuriken，
// 于是容器也创建这两个依赖，并注入到 Ninja 的构造函数中。
const ninja = myContainer.get<IWarrior>(TYPES.Warrior);

console.log(ninja.fight()); // 输出: Slit... slash!
console.log(ninja.sneak()); // 输出: Flick... shhhh!

// 更换武器，只需要修改 inversify.config.ts，而不需要动 Warrior 的代码
// 比如我们新增一个 Axe 类，然后在 config 中把 TYPES.Weapon 绑定到 Axe 即可。
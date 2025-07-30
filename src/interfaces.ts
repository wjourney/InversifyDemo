export interface IWeapon {
    hit(): string;
}

export interface IThrowableWeapon {
    throw(): string;
}

export interface IWarrior {
    fight(): string;
    sneak(): string;
}
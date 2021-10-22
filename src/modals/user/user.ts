
export class User {

  private _nickname!: string;
  private _email!: string;
  private _lastname!: string;
  private _firstname!: string;
  private _address!: string;
  private _postalCode!: string;
  private _city!: string;

  get nickname(): string {
    return this._nickname;
  }

  set nickname(value: string) {
    this._nickname = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get lastname(): string {
    return this._lastname;
  }

  set lastname(value: string) {
    this._lastname = value;
  }

  get firstname(): string {
    return this._firstname;
  }

  set firstname(value: string) {
    this._firstname = value;
  }

  get address(): string {
    return this._address;
  }

  set address(value: string) {
    this._address = value;
  }

  get postalCode(): string {
    return this._postalCode;
  }

  set postalCode(value: string) {
    this._postalCode = value;
  }

  get city(): string {
    return this._city;
  }

  set city(value: string) {
    this._city = value;
  }
}

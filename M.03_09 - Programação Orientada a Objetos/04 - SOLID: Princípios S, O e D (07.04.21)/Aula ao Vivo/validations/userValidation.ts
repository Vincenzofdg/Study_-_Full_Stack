const OK_ROLES = [ 'admin', 'user', 'owner' ]

export default class UserValidation {

  public static validateEmail(email: string): boolean {
    const emailRegex = /\S+@\S+\.\S/;
    return emailRegex.test(email)
  }
  public static validatePassword(password: string): boolean {
    //const passwordRegex = new RegExp(`\d[${length}]`);
    const passwordRegex = /^\d+$/;
    return passwordRegex.test(password);
  }
  public static validateRole(role: string, option: string[] = [ 'user', 'admin' ]): boolean {
    return option.includes(role);
  }

  public static validateUser(email: string, password: string, role: string): boolean {
    return (
      this.validateEmail(email) &&
      this.validatePassword(password) &&
      this.validateRole(role, OK_ROLES)
    )
  }
}

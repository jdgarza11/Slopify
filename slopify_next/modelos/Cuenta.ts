class Cuenta{
    public cuenta_Correo: string;
    public cuenta_Nombre: string;
    public cuenta_Contraseña: string;

    constructor(cuenta_Correo: string, cuenta_Nombre: string, cuenta_Contraseña: string) {
        this.cuenta_Correo = cuenta_Correo;
        this.cuenta_Nombre = cuenta_Nombre;
        this.cuenta_Contraseña = cuenta_Contraseña;
    }
}
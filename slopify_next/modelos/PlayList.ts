class PlayList{
    public playlist_ID: number;
    public playlist_Nombre: string;
    public cuenta_Correo: string;

    constructor(playlist_ID: number, playlist_Nombre: string, cuenta_Correo: string) {
        this.playlist_ID = playlist_ID;
        this.playlist_Nombre = playlist_Nombre;
        this.cuenta_Correo = cuenta_Correo;
    }
}
class Album {
    public album_ID: number;
    public album_Nombre: string;
    public album_fecha: Date;

    constructor(album_ID: number, album_Nombre: string, album_fecha: Date) {
        this.album_ID = album_ID;
        this.album_Nombre = album_Nombre;
        this.album_fecha = album_fecha;
    }

}
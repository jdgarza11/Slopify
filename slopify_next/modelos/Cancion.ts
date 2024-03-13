class Cancion{
    public cancion_ID: number;
    public Año: Date;
    public cancion_Nombre: string;
    public audioRuta: string;
    public album_ID: number;

    constructor(cancion_ID: number, Año: Date, cancion_Nombre: string, audioRuta: string, album_ID: number) {
        this.cancion_ID = cancion_ID;
        this.Año = Año;
        this.cancion_Nombre = cancion_Nombre;
        this.audioRuta = audioRuta;
        this.album_ID = album_ID;
    }
}
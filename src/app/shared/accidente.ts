export class Accidente {
  id: number;
  nombre: string;
  descripcion: string;
  tipo: string;
  severidad: string;
}

export const Severidad = ['Critica', 'Alta', 'Media', 'Baja'];
export const AccidenteTipo = ['Fatalidad', 'AccidenteDePersonal', 'DanioAPropiedad', 'MedioAmbiente', 'Incidente'];

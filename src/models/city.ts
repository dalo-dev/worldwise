type Position = {
  lat: number;
  lng: number;
};

export interface CityI {
  cityName: string;
  country: string;
  date: string;
  emoji: string;
  id: string;
  notes: string;
  position: Position;
}

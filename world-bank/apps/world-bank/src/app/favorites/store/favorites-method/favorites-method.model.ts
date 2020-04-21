export interface FavoritesMethod {
  id: string;
  name: string;
}

export interface FavoritesMethods {
  list: FavoritesMethod[];
  preferredId: string;
}

/* eslint-disable linebreak-style */
/* eslint-disable no-trailing-spaces */
/* eslint-disable indent */
/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
const itActsAsFavoriteRestoModel = (favoriteResto) => {
  it('should return the Resto that has been added', async () => {
    favoriteResto.putResto({ id: 1 });
    favoriteResto.putResto({ id: 2 });

    expect(await favoriteResto.getResto(1)).toEqual({ id: 1 });
    expect(await favoriteResto.getResto(2)).toEqual({ id: 2 });
    expect(await favoriteResto.getResto(3)).toEqual(undefined);
  });
   
    it('should refuse a Resto from being added if it does not have the correct property', async () => {
      favoriteResto.putResto({ aProperty: 'property' });
   
      expect(await favoriteResto.getAllResto()).toEqual([]);
    });
   
    it('can return all of the Restos that have been added', async () => {
      // Menambahkan beberapa Resto ke daftar favorit
      await favoriteResto.putResto({ id: 1 });
      await favoriteResto.putResto({ id: 2 });
    
      // Memastikan semua Resto ada di dalam daftar favorit
      expect(await favoriteResto.getAllResto()).toEqual([{ id: 1 }, { id: 2 }]);
    });
   
    it('should remove favorite Resto', async () => {
      // Menambahkan Resto ke daftar favorit
      await favoriteResto.putResto({ id: 2 });
    
      // Menghapus Resto dengan ID 2 dari daftar favorit
      await favoriteResto.deleteResto(2);
    
      // Memastikan Resto dengan ID 2 sudah dihapus
      expect(await favoriteResto.getAllResto()).toEqual([]);
    });
   
    it('should handle request to remove a Resto even though the Resto has not been added', async () => {
      // Menghapus Resto dengan ID 4 yang seharusnya tidak ada di dalam daftar favorit
      await favoriteResto.deleteResto(4);
    
      // Memastikan daftar favorit tetap kosong
      expect(await favoriteResto.getAllResto()).toEqual([]);
    });
  };
   
  // eslint-disable-next-line import/prefer-default-export
  export { itActsAsFavoriteRestoModel };

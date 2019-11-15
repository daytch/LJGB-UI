const Endpoint = {
  DATA_HOME: '/Barang/GetAllForHomePage',
  DATA_KOTA: '/Kota/GetAllForDropdown',
  DATA_KOTA_ALL: '/Kota/GetAllKotaWithoutFilter',
  DATA_MERK: '/Merk/GetAll',
  DATA_BARANG: '/ModelBarang/GetAll',
  DATA_TYPE: '/TypeBarang/GetAll',
  DATA_DETAIL: '/Barang/GetBarangDetail',
  DATA_MERK_BY_ID_KOTA: '/Merk/GetMerkByKotaID',
  DATA_BRAND_BY_ID_MERK: '/ModelBarang/GetModelWithMerkID',
  DATA_TYPE_BY_ID_BRAND: '/TypeBarang/GetTypeByKotaIDMerkIDModelID',
  DATA_ALL_FILTER: '/TypeBarang/GetTypeByKotaIDMerkIDModelID',
  DATA_DETAIL: '/Barang/GetModelWithID',
  DATA_SEARCH: '/Barang/GetBarangByHomeParameter'
};

export default Endpoint;

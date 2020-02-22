const Endpoint = {
  DATA_MASTER: '/CMS/GetAllMaster',
  DATA_HOME: '/Barang/GetAllForHomePage',
  DATA_KOTA: '/Kota/GetAllForDropdown',
  DATA_PROVINSI: '/Provinsi/GetAllForDropdown',
  DATA_KOTA_ALL: '/Kota/GetAllKotaWithoutFilter',
  DATA_MERK: '/Merk/GetAll',
  DATA_BARANG: '/ModelBarang/GetAll',
  DATA_TYPE: '/TypeBarang/GetAll',
  DATA_DETAIL: '/Barang/GetBarangDetail',
  DATA_MERK_BY_ID_KOTA: '/Merk/GetMerkByKotaID',
  DATA_BRAND_BY_ID_MERK: '/ModelBarang/GetModelWithMerkID',
  DATA_TYPE_BY_ID_BRAND: '/TypeBarang/GetTypeByKotaIDMerkIDModelID',
  DATA_ALL_FILTER: '/TypeBarang/GetTypeByKotaIDMerkIDModelID',
  // DATA_DETAIL_: '/Barang/GetModelWithID',
  DATA_SEARCH: '/Barang/GetBarangByHomeParameter',
  DATA_ALL_ASK: '/Barang/GetAllAsksById',
  DATA_ALL_BID: '/Barang/GetAllBidsById',
  DATA_POSITION_ASK: '/Barang/GetAskPosition',
  DATA_WARNA_BY_ID: '/Warna/GetAllWithoutFilter',
  PROCESS_DATA_ASK: '/NegoBarang/SubmitAsk',
  PROCESS_DATA_BID: '/NegoBarang/SubmitBid',
  PROCESS_DATA_SELL: '/Transaction/SubmitSell',
  // PROCESS_DATA_SELL: '/Transaction/SubmitSellFrontEnd',
  PROCESS_DATA_BUY: '/Transaction/SubmitBuy',
  DATA_TRANSACTION: '/Barang/GetPhotoAndWarnaByID',
  DATA_TRX: '/Transaction/GetListBidAndBuy',
  DATA_USER: '/User/GetPost',

  DATA_SIGNUP: '/Auth/Register',
  DATA_LOGIN: '/Auth/Login',

  DATA_POSITION_BID: '/Barang/GetBidPosition',
  FORGOT_PASSWORD: '/Auth/ForgotPassword',
  CHANGE_PASSWORD: '/Auth/ChangePassword',
  ACTIVATE_ACC: '/Auth/ActivateAccount'
};

export default Endpoint;

export default {
  state: {
    isProcessing: false,
    error: null,
  },
  getters: {
    getIsProcessing: (state) => state.isProcessing,
    getError: (state) => state.error,
  },
  mutations: {
    SET_PROCESSING(state, payload) {
      state.isProcessing = payload;
    },
    SET_ERROR(state, payload) {
      state.error = payload;
    },
    CLEAR_ERROR(state) {
      state.error = null;
    },
  },
  actions: {},
};

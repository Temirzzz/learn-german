import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";

export default {
  state: {
    user: {
      isAuthenticated: false,
      uid: null,
    },
  },
  getters: {
    getUserAuth: (state) => state.user.isAuthenticated,
  },
  mutations: {
    SET_USER(state, payload) {
      state.user.isAuthenticated = true;
      state.user.uid = payload;
    },
    UNSET_USER(state) {
      state.user = {
        isAuthenticated: false,
        uid: null,
      };
    },
  },
  actions: {
    SIGNUP({ commit }, payload) {
      const auth = getAuth();
      commit("SET_PROCESSING", true);
      commit("CLEAR_ERROR");
      createUserWithEmailAndPassword(auth, payload.email, payload.password)
        .then((user) => {
          // TODO Лишний commit?
          commit("SET_USER", user.user.uid);
        })
        .catch((error) => {
          // Берем из generalModul на прямую, без импорта самого модуля
          commit("SET_PROCESSING", false);
          commit("SET_ERROR", error.message);
        })
        .finally(commit("SET_PROCESSING", false));
    },
    SIGNIN({ commit }, payload) {
      const auth = getAuth();
      commit("SET_PROCESSING", true);
      commit("CLEAR_ERROR");
      signInWithEmailAndPassword(auth, payload.email, payload.password)
        .then((user) => {
          // TODO Лишний commit?
          commit("SET_USER", user.user.uid);
        })
        .catch((error) => {
          commit("SET_PROCESSING", false);
          commit("SET_ERROR", error.message);
        })
        .finally(commit("SET_PROCESSING", false));
    },
    STATE_CHANGED({ commit }, payload) {
      if (payload) {
        commit("SET_USER", payload.uid);
      } else {
        commit("UNSET_USER");
      }
    },
    SIGN_OUT() {
      const auth = getAuth();
      signOut(auth);
    },
  },
};

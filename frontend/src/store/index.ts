import { createStore } from 'vuex'

export default createStore({
  state: {
    isAuthentication : false,
    token : ''
  },
  getters: {
  },
  mutations: {
    onStart(state) {
      let token = localStorage.getItem('token');
      if (token){
        state.isAuthentication = true;
        state.token = token
      }else{
        state.isAuthentication = false;
        state.token = ''
      }
    },
    
    login(state,token) {
      if (token){
          state.isAuthentication = true;
          state.token = token
          localStorage.setItem("token",token)
        }else{
          state.isAuthentication = false;
          state.token = ''
          localStorage.removeItem("token")
        }
    },

    logout(state) {
        state.isAuthentication = false;
        state.token = ''
        localStorage.removeItem("token")
    }

  },
  actions: {
  },
  modules: {
  }
})

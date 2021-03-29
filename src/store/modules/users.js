import HTTP from './axiosDefault';
import config from '../../config.js';

const state = {
  users: [],
  selectedUser: {},
  called: false
};
const getters = {
  users: state => {
    return state.users;
  },
  selectedUser: state => {
    return state.selectedUser;
  },
  called: state =>{
    return state.called;
  }
};
const actions = {
  initUsers: ({ commit }) => {
    HTTP.get(config.endpoints.users).then(
      response => {
        commit("SET_USERS", response.data);
        commit("SET_CALL_MADE")
      }
    ).catch(error => {
      console.log(error)
      commit("SET_CALL_MADE")
    })
  },
  getSelectedUser: ({ commit }, key) => {
    HTTP.get(config.endpoints.users + '/' + key).then(
      response => {
        commit("SET_SELECTED_USER", response.data);
        commit("SET_CALL_MADE")
      }
    ).catch(error => {
      console.log(error)
      commit("SET_CALL_MADE")
    })
  },
  resetCall: ({ commit }) => {    
    commit("RESET_CALL");    
  },
  setCall:({commit})=>{
    commit("SET_CALL_MADE")
  }
}

const mutations = {
  SET_USERS(state, users) {
    state.users = users;
  },
  SET_SELECTED_USER(state, selectedUser) {

    selectedUser.phone='6'+Math.random().toString().slice(2,10);
    state.selectedUser = selectedUser
  },
  RESET_CALL(state){
    state.called=false
  },
  SET_CALL_MADE(state){
    state.called=true
  }
}

export default {
  state,
  getters,
  actions,
  mutations
};

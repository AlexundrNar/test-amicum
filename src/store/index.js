import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    theme: false,

    person: [
      {
        id: 1,
        name: "Наряднов Александр Евгеньевич",
        born: "05.06.1988",
        tab: "ГОКИ 0000",
        spec: "Электрослесарь (слесарь дежурный и по ремонту оборудования) I разряда",
        briefing: null,
        examiner: false,
        tests: 43,
        testsMax: 100,
        expiration: "2023/10/15",
        notification: 9
      },
      {
        id: 2,
        name: "Иванова Юлия Олеговна",
        born: "16.02.2000",
        tab: "не ГОКИ 5555",
        spec: "биоинженер", 
        briefing: false,
        examiner: null,
        tests: 85,
        testsMax: 100,
        expiration: "2023/11/01",
        notification: 5
      },
    ],
  },
  getters: {
    themeCurrent(state) {
      return state.theme
    },
    person(state) {
      return state.person
    },
  }
});

export default store

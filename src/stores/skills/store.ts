import { observable, makeAutoObservable } from "mobx";
import { Iskill, manager, tool } from "./type";

const jsonFile: Iskill[] = require('../../assets/jsons/skils.json')
//const initialTools = jsonFile[0].tools
//console.log('initialTools', initialTools)

//const store = observable({
export const store = makeAutoObservable({
  skills: <Iskill[]>jsonFile,
  //skills: <Iskill[]>[],
  //tools: <tool[]>[],
  tools: <any>function () { return jsonFile[0].tools; },
  managers: <manager[]>jsonFile[0].stateManagers,
  currentSkill: <Iskill | null>null,
  currentTool: <tool | null>null,
  currentManager: <manager | null>null,
  showElement: <any>null,
  currentCat: <string>'',

  // get double() {
  //   return this.tools = jsonFile[0].tools
  // },

  get getTools() {
    return jsonFile[0].tools
  },

  setTools(action: tool[]) {
    this.tools = action
  },
  setManagers(action: manager[]) {
    this.managers = action
  },
  setCurrentSkill(action: Iskill) {
    this.currentSkill = action
  },
  setCurrentManager(action: manager | null) {
    this.currentManager = action
  },
  setCurrentTool(action: tool | null) {
    this.currentTool = action
  },

  setSelectItem(cat: string, action: any) {
    store.currentSkill = action
    store.showElement = action
    store.currentCat = cat
  },

  setClearManagersTools() {
    this.tools = []
    this.managers = []
  },

  setManagersTools() {
    // this.tools = store.currentSkill?.tools
    // this.managers = store.currentSkill?.stateManagers
  },


  setCurrentItem(cat: string, action: any) {

    // store.tools = [];
    // store.managers = [];

    store.currentSkill = action
    store.showElement = action
    store.tools = action.tools
    store.managers = action.stateManagers
    store.currentCat = cat


    // if (action.tools) {
    //   store.tools = [];
    //   action.tools.map((obj: tool) => {
    //     console.log(obj)
    //     store.tools.push(obj)
    //     //store.tools = (() => [...store.tools, obj]) as any
    //   })
    // };

    //this.setTools([]);
    //this.setManagers([]);
    //this.setCurrentTool(null);
    //this.setCurrentManager(null);
    // this.setCurrentSkill(lkm);
    // this.setTools(lkm.tools);
    // this.setManagers(lkm.stateManagers);

    // this.currentSkill = action
    // this.tools = action.tools
    // this.managers = action.stateManagers

    // if (lkm.tools) {
    //   lkm.tools.map((obj: tool) => {
    //     this.setTools(() => [...this.tools, obj])
    //   })
    // };

    // if (lkm.stateManagers) {
    //   lkm.stateManagers.map((obj: manager) => {
    //     this.setManagers(() => [...this.managers, obj])
    //   })
    // };

  },

  setClearItem() {
    //store.skills = jsonFile
    store.tools = []
    store.managers = []
    //store.currentSkill = null
    store.currentTool = null
    store.currentManager = null
    store.showElement = null
    store.currentCat = ''
  },

});

//export default store;
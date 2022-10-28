import { observable } from "mobx";

const store = observable({
  showExplosion: false,
  changeShowExplosion(action: boolean) {
    this.showExplosion = action
  },
});

export default store;
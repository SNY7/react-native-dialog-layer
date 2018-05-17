import { observable, action, computed } from 'mobx';

class DialogLayerStore {
  @observable queue = [];
  @computed get next() {
    return this.queue.length ? this.queue[0] : undefined;
  }
  @action shift() {
    this.queue.shift();
  }
  @action add(title, message, buttons) {
    this.queue.push({
      title,
      message,
      buttons,
    });
  }
}

export const dialogLayerStore = new DialogLayerStore();

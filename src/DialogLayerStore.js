import { observable, action, computed } from 'mobx';

class DialogLayerStore {
  @observable queue = [];
  @computed get next() {
    return this.queue.length ? this.queue[0] : undefined;
  }
  @action shift() {
    this.queue.shift();
    console.log('queue shift', this.queue.toJS());
  }
  @action add(title, message, buttons) {
    this.queue.push({
      title,
      message,
      buttons,
    });
    console.log('queue push', this.queue.toJS());
  }
}

export const dialogLayerStore = new DialogLayerStore();

import { EventEmitter } from "events";
import Dispatcher from "./appDispatcher";
import actionTypes from "./actionTypes";

const CHANGE_EVENT = "change";
let _products = [];

class ProductsStore extends EventEmitter {
  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  }

  removeChangeListener(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

  emitChange() {
    this.emit(CHANGE_EVENT);
  }

  getProducts() {
    return _products;
  }

}

const store = new ProductsStore();

Dispatcher.register(action => {
  switch (action.actionType) {
    case actionTypes.DELETE_PRODUCT:
      _products = _products.filter(
        product => product.id !== parseInt(action.id, 10)
      );
      store.emitChange();
      break;
    case actionTypes.CREATE_PRODUCT:
      _products.push(action.product);
      store.emitChange();
      break;
    case actionTypes.UPDATE_PRODUCT:
      _products = _products.map(product =>
        product.id === action.product.id ? action.product : product
      );
      store.emitChange();
      break;
    case actionTypes.LOAD_PRODUCTS:
      _products = action.products;
      store.emitChange();
      break;
    default:
    // nothing to do here
  }
});

export default store;

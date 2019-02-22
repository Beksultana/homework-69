export const CARD_ADD = "CARD_ADd";
export const CARD_REMOVE = "CARD_ADd";
export const addCard = (prodName, price) => ({type: CARD_ADD, prodName, price});
export const removeCard = (prodName, price) => ({type: CARD_REMOVE, prodName, price});
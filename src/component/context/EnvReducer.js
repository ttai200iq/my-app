export const INITSTATE = {
  status: false,

  button: {
    btntype: "Inching",
    coloron: "#000000",
    coloroff: "#000000",
    bgon: "#008000",
    bgoff: "#ff0000",
    texton: "Bật",
    textoff: "Tắt",
    cal: "0",
    w: "161px",
    h: "83px",
    sizeon: "10px",
    sizeoff: "16px",
    txtcoloron: "#000000",
    txtcoloroff: "#000000",
    type: "button",
  },

  bardata: {
    id: 1,
    min: "0",
    max: "100",
    color: "blue",
    scale: 25,
    realdata: 30,
    type: "bar",
  },

  type: "Button",
};

const EnvReducer = (state, action) => {
  switch (action.type) {
    case "SET_BTN":
      return {
        ...state,
        button: action.payload,
      };
    case "SET_STATUS":
      return {
        ...state,
        status: action.payload,
      };
    case "SET_BARDATA":
      return {
        ...state,
        bar: action.payload,
      };
    case "SET_TYPE":
      return {
        ...state,
        type: action.payload,
      };
    default:
      throw new Error("type no valid");
  }
};

export default EnvReducer;

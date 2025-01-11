import { EVENTS_DEFAULT } from "@holywater-tech/ads-builder/framework/components/EventsDispatcher";
import Screen from "../Screen";

export const EVENTS = {
  ...EVENTS_DEFAULT,
  ON_SUBMIT_CLICK: "onSubmitClick",
  ON_SHUFFLE_CLICK: "onShuffleClick",
  ON_DESELECT_CLICK: "onDeselectClick",
  ON_BUTTON_CLICK_START: "onButtonClickStart",
  HAPPY: "happy",
  SHOW_DRESS_ITEM: "setItems",
  SHOW_NEXT_ITEM: "onChangeScene",
  REMOVE_ITEM: "removeItem",
  CHANGE_SCENE: "onChangeScene",
  CHANGE_HAIR: "onChangeHair" /* your custom events */,
};

export const LAYERS_DEPTH = {
  TITLE: 5,
  ITEM_GLOW: 35,
  ITEM_BASE: 34,
  ITEM: 30,
  MISTAKES: 33,
  HAND_TUTORIAL: 44,
};

export const POSITION = {
  choices: Screen.phoneProportions ? [0, 350, 0, 480] : [0, 350, 0, 480],
  mistakes: Screen.phoneProportions ? [0, 160, 0, 270] : [0, 160, 0, 270],
  buttons: Screen.phoneProportions ? [0, 250, 0, 350] : [0, 250, 0, 350],
  messageTitle: Screen.phoneProportions ? [0, -100, 0, -80] : [0, -100, 0, -70],
  level: Screen.phoneProportions ? [0, 0, 0, 0] : [0, 0, 0, 0],
};
export const SCALE = {
  choices: Screen.phoneProportions
    ? [0.8, 0.8, 0.8, 0.8]
    : [0.8, 0.8, 0.8, 0.8],
  mistakes: Screen.phoneProportions ? [0, 180, 0, 180] : [0, 180, 0, 230],
  buttons: Screen.phoneProportions ? [0, 250, 0, 300] : [0, 250, 0, 350],
  title: Screen.phoneProportions
    ? [0.22, 0.22, 0.22, 0.22]
    : [0.22, 0.22, 0.22, 0.22],
  level: Screen.phoneProportions ? [0, 0, 0, 0] : [0, 0, 0, 0],
};

export const POSITION4x4 = [
  { x: -250, y: 200 },
  { x: -80, y: 200 },
  { x: 90, y: 200 },
  { x: 260, y: 200 },
  { x: -250, y: 70 },
  { x: -80, y: 70 },
  { x: 90, y: 70 },
  { x: 260, y: 70 },
  { x: -250, y: -60 },
  { x: -80, y: -60 },
  { x: 90, y: -60 },
  { x: 260, y: -60 },
  { x: -250, y: -190 },
  { x: -80, y: -190 },
  { x: 90, y: -190 },
  { x: 260, y: -190 },
];
export const WORDS = [
  "mullet",
  "tape",
  "pretender",
  "twerp",
  "squirt",
  "shrimp",
  "mohawk",
  "cross",
  "catfish",
  "pipsqueak",
  "meat",
  "buzz_cut",
  "herring",
  "afro",
  "fraudster",
  "impersonator",
];

export const PAIR_WORDS = [
  { title: "star", words: ["MULLET", "MOHAWK", "BUZZ CUT", "AFRO"] },
  {
    title: "instrument",
    words: ["CATFISH", "FRAUDSTER", "IMPERSONATOR", "PRETENDER"],
  },
  { title: "cats", words: ["SHRIMP", "PIPSQUEAK", "SQUIRT", "TWERP"] },
  { title: "brown", words: ["HERRING", "CROSS", "TAPE", "MEAT"] },
];

export const SHEETS = {
  ITEM_BASE: "btn",
  ITEM_GLOW: "btn_tap",
  HAND_TUTORIAL: "hand_tutorial",
};

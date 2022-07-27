import React from "react";
import { newGuid } from "utils/guid";
import { ReactComponent as ArrowDown } from "../Assets/icons/ArrowDown.svg";
import { ReactComponent as ArrowLeft } from "../Assets/icons/ArrowLeft.svg";
import { ReactComponent as ArrowRight } from "../Assets/icons/ArrowRight.svg";
import { ReactComponent as Center } from "../Assets/icons/Center.svg";
import { ReactComponent as Checkbox } from "../Assets/icons/Checkbox.svg";
import { ReactComponent as Close } from "../Assets/icons/Close.svg";
import { ReactComponent as Copy } from "../Assets/icons/Copy.svg";
import { ReactComponent as Edit } from "../Assets/icons/Edit.svg";
import { ReactComponent as Exit } from "../Assets/icons/Exit.svg";
import { ReactComponent as Home } from "../Assets/icons/Home.svg";
import { ReactComponent as Minus } from "../Assets/icons/Minus.svg";
import { ReactComponent as Plus } from "../Assets/icons/Plus.svg";
import { ReactComponent as Search } from "../Assets/icons/Search.svg";
import { ReactComponent as Spinner } from "../Assets/icons/Spinner.svg";
import { ReactComponent as Telegram } from "../Assets/icons/Telegram.svg";
import { ReactComponent as Visibility } from "../Assets/icons/Visibility.svg";
import { ReactComponent as VisibilityOff } from "../Assets/icons/VisibilityOff.svg";

export type IconType =
  | "ArrowDown"
  | "ArrowLeft"
  | "ArrowRight"
  | "Center"
  | "Checkbox"
  | "Close"
  | "Copy"
  | "Edit"
  | "Exit"
  | "Home"
  | "Minus"
  | "Plus"
  | "Search"
  | "Spinner"
  | "Telegram"
  | "Visibility"
  | "VisibilityOff";

export const iconTypes = new Map([
  ["ArrowDown", <ArrowDown key={newGuid()} />],
  ["ArrowLeft", <ArrowLeft key={newGuid()} />],
  ["ArrowRight", <ArrowRight key={newGuid()} />],
  ["Center", <Center key={newGuid()} />],
  ["Checkbox", <Checkbox key={newGuid()} />],
  ["Close", <Close key={newGuid()} />],
  ["Copy", <Copy key={newGuid()} />],
  ["Edit", <Edit key={newGuid()} />],
  ["Exit", <Exit key={newGuid()} />],
  ["Home", <Home key={newGuid()} />],
  ["Minus", <Minus key={newGuid()} />],
  ["Plus", <Plus key={newGuid()} />],
  ["Search", <Search key={newGuid()} />],
  ["Spinner", <Spinner key={newGuid()} />],
  ["Telegram", <Telegram key={newGuid()} />],
  ["Visibility", <Visibility key={newGuid()} />],
  ["VisibilityOff", <VisibilityOff key={newGuid()} />],
]);

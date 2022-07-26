import React, { memo } from "react";
import classNames from "classnames";
import "./tabs.scss";

export interface ITab {
  id: string | number;
  label?: string | number | React.ReactNode;
}

export interface ITabsProps {
  className?: string;
  selectedId: string | number;
  tabs: ITab[];
  variant?: "normal" | "outlined" | "filled";
  onClick: (id: string | number) => void;
}

const TabsComponent: React.FC<ITabsProps> = ({
  className,
  selectedId,
  tabs,
  variant= "normal",
  onClick,
}) => {
  return (
    <div className={classNames("Tabs", className)}>
      {tabs &&
        tabs.map(tab => (
          <div
            className={classNames("Tab", {
              Tab__selected: tab.id === selectedId,
            }, [`tabs--${variant}`].join(" "))}
            key={tab.id}
            onClick={() => onClick(tab.id)}
          >
            <div
              className={classNames("TabLabel", {
                TabLabel__selected: tab.id === selectedId,
              })}
            >
              {tab.label}
            </div>
          </div>
        ))}
    </div>
  );
};

export const Tabs = memo(TabsComponent);
import { ITabs, Tabs as Parent } from './components/Tabs';
import { TabsButton } from './components/TabsButton';
import { TabsList } from './components/TabsList';
import { TabsPanel } from './components/TabsPanel';
import { TabsPanelContainer } from './components/TabsPanelContainer';
import React from 'react';

interface ITabsCompound extends React.FC<ITabs> {
  Button: typeof TabsButton;
  PanelContainer: typeof TabsPanelContainer;
  Panel: typeof TabsPanel;
  List: typeof TabsList;
}

const Tabs = Parent as ITabsCompound;

Tabs.Button = TabsButton;
Tabs.Panel = TabsPanel;
Tabs.PanelContainer = TabsPanelContainer;
Tabs.List = TabsList;

Object.freeze(Tabs);

export { Tabs };

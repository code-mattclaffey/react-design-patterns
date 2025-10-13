import { Children, cloneElement, isValidElement } from 'react';
import { useTabs } from './Tabs';
import { TabsPanel } from './TabsPanel';

interface ITabsPanelContainerProps {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}

export const TabsPanelContainer = ({
  children,
  className
}: ITabsPanelContainerProps) => {
  const { activeTabIndex } = useTabs();

  const tabPanels = Children.map(children, (child, index) => {
    if (!isValidElement(child)) return null;

    // ✅ Only allow TabsPanel components
    if (child.type !== TabsPanel) {
      throw new Error(
        'TabsPanelContainer only accepts <TabsPanel /> components as children.'
      );
    }

    return cloneElement(child, {
      // @ts-ignore
      id: `tabs-panel-${index}`,
      hidden: activeTabIndex !== index,
      ariaLabelledBy: `tabs-button-${index}`,
      isSelected: activeTabIndex === index
    });
  });

  return <div className={className}>{tabPanels}</div>;
};

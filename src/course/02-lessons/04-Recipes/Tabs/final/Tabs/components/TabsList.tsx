import {
  Children,
  cloneElement,
  isValidElement,
  useRef
} from 'react';
import { useTabs } from './Tabs';
import { TabsButton } from './TabsButton';

interface ITabsListProps {
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}

export const TabsList = ({
  children,
  className = ''
}: ITabsListProps) => {
  const { activeTabIndex, setActiveTabIndex, id } = useTabs();
  const totalButtons = useRef<number>(0);
  // amazonq-ignore-next-line

  const handleOnKeyUp = (
    event: React.KeyboardEvent<HTMLButtonElement>
  ) => {
    const index = parseInt(
      event.currentTarget
        .getAttribute('id')
        ?.replace('tabs-button-', '')!,
      10
    );

    if (event.code === 'Home') {
      setActiveTabIndex(0);
      return;
    }

    if (event.code === 'End') {
      setActiveTabIndex(totalButtons.current - 1);
      return;
    }

    if (event.code === 'ArrowRight') {
      if (index === totalButtons.current - 1) {
        setActiveTabIndex(0);
      } else {
        setActiveTabIndex(index + 1);
      }
    } else if (event.code === 'ArrowLeft') {
      if (index === 0) {
        setActiveTabIndex(totalButtons.current - 1);
      } else {
        setActiveTabIndex(index - 1);
      }
    }
  };

  const tabList = Children.map(children, (child, index) => {
    if (!isValidElement(child)) return null;

    // ✅ Only allow TabsButton components
    if (child.type !== TabsButton) {
      throw new Error(
        'TabsList only accepts <TabsButton /> components as children.'
      );
    }

    return cloneElement(child, {
      // @ts-ignore
      id: `${id}-tabs-button-${index}`,
      ariaControls: `${id}-tabs-panel-${index}`,
      isSelected: activeTabIndex === index,
      onClick: () => {
        setActiveTabIndex(index);

        // @ts-ignore
        if (child.props.onClick) {
          // @ts-ignore
          child.props.onClick();
        }
      },
      onKeyUp: handleOnKeyUp,
      className:
        activeTabIndex === index
          ? // @ts-ignore
            child.props.activeClassName
          : // @ts-ignore
            child.props.className
    });
  });

  totalButtons.current = tabList?.length ?? 0;

  return <div className={className}>{tabList}</div>;
};

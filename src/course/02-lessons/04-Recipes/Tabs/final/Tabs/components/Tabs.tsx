import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState
} from 'react';

const TabsContext = createContext<{
  activeTabIndex: number;
  setActiveTabIndex: Dispatch<SetStateAction<number>>;
  id: string;
} | null>(null);

export interface ITabs {
  children: React.ReactNode | React.ReactNode[];
  initialActiveTabIndex?: number;
  label: string;
  className?: string;
  id: string;
}

export const Tabs = ({
  children,
  initialActiveTabIndex = 1,
  label,
  className = '',
  id
}: ITabs) => {
  const [activeTabIndex, setActiveTabIndex] = useState<number>(
    initialActiveTabIndex
  );

  return (
    <TabsContext.Provider
      value={{ activeTabIndex, setActiveTabIndex, id }}
    >
      <div role="tablist" aria-label={label} className={className}>
        {children}
      </div>
    </TabsContext.Provider>
  );
};

export const useTabs = () => {
  const context = useContext(TabsContext);

  if (!context) {
    throw new Error('You need to use this within the TabsContext');
  }

  return context;
};

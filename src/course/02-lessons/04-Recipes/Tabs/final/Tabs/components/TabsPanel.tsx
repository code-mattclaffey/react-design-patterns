export interface ITabsPanel {
  ariaLabelledBy?: string;
  id?: string;
  isSelected?: boolean;
  children: React.ReactNode | React.ReactNode[];
  className?: string;
}

export const TabsPanel = ({
  ariaLabelledBy,
  id,
  isSelected,
  children,
  className = ''
}: ITabsPanel) => {
  return (
    <div
      role="tabpanel"
      aria-labelledby={ariaLabelledBy}
      id={id}
      hidden={!isSelected}
      tabIndex={0}
      className={className}
    >
      {children}
    </div>
  );
};

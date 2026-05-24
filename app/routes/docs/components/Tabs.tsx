import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";
import React, { createContext, useContext, useEffect, useState } from "react";

/**
 * Context for the Tabs
 * @param value - The current tab value
 * @param setValue - Function to set the current tab value
 */
const TabsContext = createContext<{
  value: string;
  setValue: (value: string) => void;
}>({
  value: "",
  setValue: () => {},
});

/** ---------------------------------------------------------------------------
 * Tabs Component
 ---------------------------------------------------------------------------- */
/**
 * Tabs component
 * Wraps all the entire tabs component
 * @param className - Class name for the tabs
 * @param children - Children for the tabs
 * @param defaultValue - Default value for the tabs
 * @param onValueChange - Function to call when the value changes -- if you use this, then the parent component will need to be a client component
 * @example
 * <Tabs defaultValue="base" onValueChange={() => {}}>
 *   <TabsList>
 *     <TabsTrigger value="base">Base</TabsTrigger>
 *     <TabsTrigger value="accent">Accent</TabsTrigger>
 *   </TabsList>
 *   <TabsContent value="base">Base Content</TabsContent>
 *   <TabsContent value="accent">Accent Content</TabsContent>
 * </Tabs>
 */
const Tabs = ({
  className = "",
  children,
  defaultValue = "",
  onValueChange = () => {},
}: {
  className?: string;
  children: React.ReactNode;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
}) => {
  const [value, setValue] = useState(defaultValue);
  const contextValue = { value, setValue };

  useEffect(() => {
    onValueChange(value);
  }, [value]);

  return (
    <TabsContext.Provider value={contextValue}>
      <div className={cn(className)}>{children}</div>
    </TabsContext.Provider>
  );
};

/** ---------------------------------------------------------------------------
 * TabsList Component
 ---------------------------------------------------------------------------- */
const tabsListVariants = cva("flex gap-5 border-b border-montana mb-5", {
  variants: {
    orientation: {
      horizontal: "flex-row",
      vertical: "flex-col",
    },
  },
  defaultVariants: {
    orientation: "horizontal",
  },
});

export type TabsListVariantProps = VariantProps<typeof tabsListVariants>;

/**
 * TabsList Component
 * @param children - Children for the tabs list
 * @param className - Class name for the tabs list
 * @param orientation - Orientation for the tabs list
 * @example
 * <TabsList>
 *   <TabsTrigger value="base">Base</TabsTrigger>
 *   <TabsTrigger value="accent">Accent</TabsTrigger>
 * </TabsList>
 */
const TabsList = ({
  children,
  className,
  orientation = "horizontal",
}: {
  children: React.ReactNode;
  className?: string;
  orientation?: TabsListVariantProps["orientation"];
}) => {
  return (
    <div className={cn(tabsListVariants({ orientation }), className)}>
      {children}
    </div>
  );
};

/** ---------------------------------------------------------------------------
 * TabsTrigger Component
 ---------------------------------------------------------------------------- */
const TabsTriggerVariants = cva("px-2 pb-[6px] -mb-[1px]", {
  variants: {
    variant: {
      default: "text-blue-bayoux hover:text-white",
      active: "text-white font-bold border-b border-white",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

/**
 * TabsTrigger Component
 * @param children - Children for the tabs trigger
 * @param className - Class name for the tabs trigger
 * @param disabled - Whether the tabs trigger is disabled
 * @param value - Value for the tabs trigger, matches the value of the TabsContent
 * @example
 * <TabsTrigger value="base">Base</TabsTrigger>
 */
const TabsTrigger = ({
  children,
  className = "",
  disabled = false,
  value,
}: {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  value: string;
}) => {
  const { setValue } = useContext(TabsContext);
  const { value: currentValue } = useContext(TabsContext);
  return (
    <button
      disabled={disabled}
      onClick={() => setValue(value)}
      className={cn(
        TabsTriggerVariants({
          variant: value === currentValue ? "active" : "default",
        }),
        className,
      )}
    >
      {children}
    </button>
  );
};

/** ---------------------------------------------------------------------------
 * TabsContent Component
 ---------------------------------------------------------------------------- */
/**
 * TabsContent Component
 * @param children - Children for the tabs content
 * @param value - Value for the tabs content, matches the value of the TabsTrigger
 * @example
 * <TabsContent value="base">Base Content</TabsContent>
 */
const TabsContent = ({
  children,
  value,
}: {
  children: React.ReactNode;
  value: string;
}) => {
  const { value: currentValue } = useContext(TabsContext);
  if (value !== currentValue) return null;
  return <div>{children}</div>;
};

export { Tabs, TabsList, TabsTrigger, TabsContent };

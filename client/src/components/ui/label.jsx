import * as React from "react";
import * as LabelPrimitive from "@radix-ui/react-label";

const Label = React.forwardRef(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={`text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-gray-700 dark:text-gray-300 ${className}`}
    {...props}
  />
));
Label.displayName = "Label";

export { Label };

import { forwardRef } from "react";
import { cn } from "@/lib/utils";

const OuterContainer = forwardRef(function OuterContainer(
  props: React.ComponentPropsWithoutRef<'div'> & { children?: React.ReactNode }
) {
  return (
    <div {...props}>
      <div className="mx-auto max-w-7xl lg:px-8">
        {props.children}
      </div>
    </div>
  );
});

const InnerContainer = forwardRef(function InnerContainer(
  props: React.ComponentPropsWithoutRef<'div'> & { children?: React.ReactNode }
) {
  return (
    <div {...props}>
      <div className="mx-auto max-w-2xl lg:max-w-5xl">
        {props.children}
      </div>
    </div>
  );
});

export const Container = {
  Outer: null,
  Inner: null
};

// Assign the components to the Container object
Container.Outer = OuterContainer;
Container.Inner = InnerContainer;

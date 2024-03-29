import classnames from "classnames";
import { Color } from "../types";

import type { HTMLAttributes, ReactNode } from "react";
import { getVariant } from "../common";

export interface ChipProps extends HTMLAttributes<HTMLSpanElement> {
	children?: ReactNode;
	className?: string;
	fullWidth?: boolean;
	outline?: boolean;
	small?: boolean;
	variant?: Color;
}

export const Chip = ({
	children,
	className,
	fullWidth,
	outline,
	small,
	variant,
    ...props
}: ChipProps) => {
	const variantClass = getVariant(variant || "primary");

	const classNames = classnames({
		"block relative rounded-full outline-none whitespace-nowrap px-6 py-2 w-fit border-2": true,
		[variantClass]: variant,
		"rounded-full": true,
		"!bg-transparent text-black border-2": outline,
		"!text-md !px-4 !py-1": small,
		"w-full text-center": fullWidth,
		[className || ""]: true,
	});

	return <span className={classNames} {...props}>{children || "\u00A0"}</span>;
};

Chip.defaultProps = {
	fullWidth: false,
	outline: false,
	small: false,
	variant: "primary" as Color,
};

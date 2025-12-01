import { Popover as MuiPopover, PopoverProps as MuiPopoverProps } from '@mui/material';
import { forwardRef } from 'react';

// Re-export the original Material UI props interface
export type PopoverProps = MuiPopoverProps;

export const Popover = forwardRef<HTMLDivElement, PopoverProps>((props, ref) => {
    return <MuiPopover ref={ref} {...props} />;
});

Popover.displayName = 'Popover';

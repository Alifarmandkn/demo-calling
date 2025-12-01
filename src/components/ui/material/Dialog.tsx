import { Dialog as MuiDialog, DialogProps as MuiDialogProps } from '@mui/material';
import { forwardRef } from 'react';

// Re-export the original Material UI props interface
export type DialogProps = MuiDialogProps;

export const Dialog = forwardRef<HTMLDivElement, DialogProps>((props, ref) => {
    return <MuiDialog ref={ref} {...props} />;
});

Dialog.displayName = 'Dialog';

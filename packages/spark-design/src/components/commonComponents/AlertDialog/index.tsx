import PCAlertDialog from './pc';
import MobileAlertDialog from './mobile';
import type { AlertDialogProps } from './pc';

type AlertDialogStaticProps = Omit<AlertDialogProps, 'type' | 'open'>;

const AlertDialog: {
  (props: AlertDialogProps): JSX.Element;
  success: (props?: AlertDialogStaticProps) => void;
  info: (props?: AlertDialogStaticProps) => void;
  warning: (props?: AlertDialogStaticProps) => void;
  error: (props?: AlertDialogStaticProps) => void;
  confirm: (props?: AlertDialogStaticProps) => void;
} = MOBILE ? MobileAlertDialog : PCAlertDialog;

export default AlertDialog;
export type { AlertDialogProps };

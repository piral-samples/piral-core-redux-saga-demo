export type NotificationType = 'error' | 'warn' | 'info';

export interface NotificationData {
    type: NotificationType;
    title: string;
    text: string;
}

export interface NotificationEntry extends NotificationData {
    id: number;
}

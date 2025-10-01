export enum orderStatus {
    PENDING = 'PENDING',
    DELIVERED = 'DELIVERED',
    CANCELED = 'CANCELED'
}

export const OrdersStatusList = [
    orderStatus.PENDING,
    orderStatus.DELIVERED,
    orderStatus.CANCELED
]
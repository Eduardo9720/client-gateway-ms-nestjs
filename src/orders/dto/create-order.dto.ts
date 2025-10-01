import { Type } from "class-transformer";
import { IsBoolean, IsEnum, IsNumber, IsOptional, IsPositive } from "class-validator";
import { OrdersStatusList, orderStatus } from "./emun/order.enum";


export class CreateOrderDto {

    @IsNumber()
    @IsPositive()
    @Type(() => Number)
    public totalAmount: number;

    @IsNumber()
    @IsPositive()
    @Type(() => Number)
    public totalItems: number;

    @IsEnum(OrdersStatusList, {
        message: `Possible status order are ${OrdersStatusList}`
    })
    @IsOptional()
    public status: orderStatus = orderStatus.PENDING;

    @IsBoolean()
    @IsOptional()
    public paid: boolean = false;
}

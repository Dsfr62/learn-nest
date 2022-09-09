import { Controller, Get, Post, Patch, Delete, Body, Param } from "@nestjs/common";
import { CustomerService } from "./customer.service";
import { CreateCustomerDto } from "./dto/create-customer.dto";
import { UpdateCustomerDto } from "./dto/update-customer.dto";

@Controller("Customer")
export class CustomerController {
    constructor(private readonly customerService: CustomerService) {}

    @Get()
    getCustomers() {
        return this.customerService.findAll();
    }
    
    @Get(":id")
    getCustomer(@Param("id") id: string) {
        return this.customerService.findOne(id);
    }

    @Post()
    createCustomer(@Body() createCustomerDto: CreateCustomerDto) {
        return this.customerService.create(createCustomerDto);
    }

    @Patch(":id")
    updateCustomer(@Param("id") id: string, @Body() updateCustomerDto: UpdateCustomerDto) {
        return this.customerService.update(id, updateCustomerDto);
    }

    @Delete(":id")
    deleteCustomer(@Param("id") id: string) {
        return this.customerService.remove(id);
    }
}
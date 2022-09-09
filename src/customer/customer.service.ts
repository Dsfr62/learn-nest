import { Injectable } from "@nestjs/common";
import { CreateCustomerDto } from "./dto/create-customer.dto";
import { Customer } from "./entitites/customer.entity";
import { UpdateCustomerDto } from "./dto/update-customer.dto";

@Injectable()
export class CustomerService {

    private readonly customers: Customer[] = [
        {
            id: 1,
            name: "John Doe",
            age: 24
        }
    ];

    findAll(): Customer[] {
        return this.customers;
    }

    create(createCustomerDto: CreateCustomerDto): string {
        this.customers.push({
            id: createCustomerDto.id,
            name: createCustomerDto.name,
            age: createCustomerDto.age
        });
        return `${createCustomerDto.name} created`;
    }

    findOne(id: string): string {
        const customer = this.customers.find(customer => customer.id == parseInt(id));
        if (customer == undefined) {
            throw new Error(`#${id} doesn't exists.`) 
        }
        const { name, age } = customer;
        return `id: ${id}\nname: ${name}\nage: ${age}`;
    }

    update(id: string, updateCustomerDto: UpdateCustomerDto): string {
        const customer = this.customers.find(customer => customer.id == parseInt(id));
        if (customer == undefined) {
            throw new Error(`#${id} doesn't exists.`) 
        }
        const index = this.customers.indexOf(customer);
        this.customers[index] = updateCustomerDto;
        return `${customer.name} is now ${updateCustomerDto.name}`;
    }

    remove(id: string): string {
        const customer = this.customers.find(customer => customer.id == parseInt(id));
        if (customer == undefined) {
            throw new Error(`#${id} doesn't exists.`) 
        }
        const index = this.customers.indexOf(customer);
        this.customers.splice(index);
        return `${customer.name} removed!`;
    }
}
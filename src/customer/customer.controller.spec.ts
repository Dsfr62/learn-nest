import { CustomerController } from "./customer.controller";
import { CustomerService } from "./customer.service";
import { Customer } from "./entitites/customer.entity";

const customers = [{
    id: 1,
    name: "Eduardo",
    age: 18
}]

describe("CustomerController Test", () => {
    let customerController: CustomerController;
    let customerService: CustomerService;

    beforeEach(() => {
        customerService = new CustomerService();
        customerController = new CustomerController(customerService);
    });

    describe("getCustomers", () => {
        it("Should return an array of customers", () => {
            const result = customers;
            jest.spyOn(customerService, "findAll").mockImplementation(() => result);
            expect(customerController.getCustomers()).toBe(result)
        });
    });

})
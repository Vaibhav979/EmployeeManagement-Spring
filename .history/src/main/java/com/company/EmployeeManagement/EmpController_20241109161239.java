package com.company.EmployeeManagement;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class EmpController {

    // DependencyInjection:- object is made by IOC(Inversion of Control)
    @Autowired
    EmployeeService employeeService;

    @GetMapping("employees")
    public List<Employee> getAllEmployees() {
        return employeeService.readEmployees();
    }

    @PostMapping("employees")
    public String createEmployee(@RequestBody Employee employee) {
        return employeeService.createEmployee(employee);
    }

    @DeleteMapping("employees/{id}")
    public String deleteEmployee(@PathVariable long id) { // PathVariable is used to fetch data from the url
        if (employeeService.deleteEmployee(id))
            return "Deleted Successfully";

        return "Not Found";
    }

    @PutMapping()

}

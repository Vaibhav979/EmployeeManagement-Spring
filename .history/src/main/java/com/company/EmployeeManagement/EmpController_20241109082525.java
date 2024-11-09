package com.company.EmployeeManagement;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
public class EmpController {

    // List<Employee> employees = new ArrayList<>();
    EmployeeService
    @GetMapping("employees")
    public List<Employee> getAllEmployees() {
        return employees;
    }

    @PostMapping("employees")
    public String createEmployee(@RequestBody Employee employee) {
        // employees.add(employee);
        EmployeeService.createEmployee(employee);
        return "Saved Successfully";
    }

}

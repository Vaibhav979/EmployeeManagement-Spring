package com.company.EmployeeManagement;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
public class EmpController {
    
    @GetMapping("path")
    public List<Employee> getAllEmp(@RequestParam String param) {
        return new String();
    }
    
}

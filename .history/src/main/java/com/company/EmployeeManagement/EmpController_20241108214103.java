package com.company.EmployeeManagement;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.*;

@RestController
public class EmpController {

    @GetMapping("path")
    public List<Employee> getAllEmployees() {
        List<Employee> employees = new ArrayList<>();
        return new String();
    }

}

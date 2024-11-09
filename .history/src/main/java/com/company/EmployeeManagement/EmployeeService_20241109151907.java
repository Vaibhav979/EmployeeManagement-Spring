package com.company.EmployeeManagement;

import java.util.List;

public interface EmployeeService {
    String createEmployee(Employee employee);

    List<Employee> readEmployees();

    boolean deleteEmployee(Llong id);
}

package com.company.EmployeeManagement;

import java.util.List;

public interface EmployeeService {
    Employee createEmplloyee(Employee employee);
    List<Employee> readEmployees();
    boolean deleteEmployee(Long id);
}

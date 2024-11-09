public interface EmployeeService {
    Employee createEmplloyee(Employee employee);
    List<Employee> readEmployees();
    boolean deleteEmployee(Long id);
}

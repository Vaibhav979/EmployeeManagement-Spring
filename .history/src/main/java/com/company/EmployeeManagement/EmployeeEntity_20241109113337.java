package com.company.EmployeeManagement;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "emp_db")
public class EmployeeEntity {
    private Long id;
    private String name;
    private String phone;
    private String email;
}

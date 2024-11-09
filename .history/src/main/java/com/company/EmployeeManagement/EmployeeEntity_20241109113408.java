package com.company.EmployeeManagement;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Data
@Entity
@Table(name = "emp_db")  //table name
public class EmployeeEntity {
    @Id
    private Long id;
    private String name;
    private String phone;
    private String email;
}

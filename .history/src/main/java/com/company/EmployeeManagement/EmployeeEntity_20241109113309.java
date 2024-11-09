package com.company.EmployeeManagement;

import jakarta.persistence.Entity;
import lombok.Data;

@Data
@Entity
@
public class EmployeeEntity {
    private Long id;
    private String name;
    private String phone;
    private String email;
}

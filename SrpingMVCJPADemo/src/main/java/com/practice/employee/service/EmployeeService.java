package com.practice.employee.service;

import java.util.List;

import com.practice.employee.entity.Employee;

/**
 * @author ahmshaik
 *
 */
public interface EmployeeService {

	void addEmployee(Employee employee);

	List<Employee> listEmployees();
	
	void updateEmployee(Employee employee);
}

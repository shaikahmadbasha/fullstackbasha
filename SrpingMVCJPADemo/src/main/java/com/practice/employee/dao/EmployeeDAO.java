/**
 * 
 */
package com.practice.employee.dao;

import java.util.List;

import com.practice.employee.entity.Employee;

/**
 * @author ahmshaik
 *
 */
public interface EmployeeDAO {

	void addEmployee(Employee employee);

	List<Employee> listEmployees();
	
	void updateEmployee(Employee employee);
	
}

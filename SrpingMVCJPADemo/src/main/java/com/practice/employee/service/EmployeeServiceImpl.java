/**
 * 
 */
package com.practice.employee.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.practice.employee.dao.EmployeeDAO;
import com.practice.employee.entity.Employee;

/**
 * @author ahmshaik
 *
 */
@Service
public class EmployeeServiceImpl implements EmployeeService {

	@Autowired
	private EmployeeDAO employeeDAO;

	@Transactional
	@Override
	public void addEmployee(Employee employee) {
		employeeDAO.addEmployee(employee);
	}

	@Transactional
	@Override
	public List<Employee> listEmployees() {
		return employeeDAO.listEmployees();
	}

	@Transactional
	@Override
	public void updateEmployee(Employee employee) {
		employeeDAO.updateEmployee(employee);
	}
	
	@Transactional
	@Override
	public void deleteEmployee(Employee employee) {
		employeeDAO.deleteEmployee(employee);
	}
}

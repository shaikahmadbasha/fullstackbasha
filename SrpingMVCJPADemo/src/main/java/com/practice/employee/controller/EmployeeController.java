/**
 * 
 */
package com.practice.employee.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.practice.employee.entity.Employee;
import com.practice.employee.service.EmployeeService;

/**
 * @author ahmshaik
 *
 */
@RestController
@EnableAutoConfiguration
public class EmployeeController {

	@Autowired
	private EmployeeService employeeService;

	@RequestMapping("/listEmployees")
	public List<Employee> listEmployees() {
		List<Employee> empList = employeeService.listEmployees();
		System.out.println("******************* emp list : " + empList);
		return empList;
	}

	@RequestMapping("/addEmployee")
	public void addEmployee(@RequestBody Employee employee) {
		System.out.println("******************* Adding employee : " + employee);
		employeeService.addEmployee(employee);
	}

	@RequestMapping("/editEmployee")
	public void editEmployee(@RequestBody Employee employee) {
		System.out.println("******************* Update employee : " + employee);
		employeeService.updateEmployee(employee);
	}

	@RequestMapping("/deleteEmployee")
	public void deleteEmployee(@RequestBody Employee employee) {
		System.out.println("******************* Delete employee : " + employee);
		employeeService.deleteEmployee(employee);
	}
	
}

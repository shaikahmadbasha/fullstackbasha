/**
 * 
 */
package com.practice.employee;

import org.springframework.context.annotation.AnnotationConfigApplicationContext;

import com.practice.employee.config.AppConfig;
import com.practice.employee.entity.Employee;
import com.practice.employee.service.EmployeeService;

/**
 * @author ahmshaik
 *
 */
public class Test {

	public static void main(String args[]) {
		AnnotationConfigApplicationContext context = null;
		try {
			context = new AnnotationConfigApplicationContext(AppConfig.class);

			EmployeeService empService = context.getBean(EmployeeService.class);

			empService.addEmployee(new Employee("Ahmad Basha", "ahmad@gmail.com", "Hyderabad", "9999999999"));

			System.out.println(empService.listEmployees());

		} catch (Exception excep) {
			excep.printStackTrace();
		} finally {
			context.close();
		}
	}

}

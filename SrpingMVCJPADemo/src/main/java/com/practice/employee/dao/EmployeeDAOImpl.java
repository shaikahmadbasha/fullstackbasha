package com.practice.employee.dao;

import java.util.List;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.CriteriaUpdate;
import javax.persistence.criteria.Root;

import org.springframework.stereotype.Repository;
import org.springframework.util.StringUtils;

import com.practice.employee.entity.Employee;

@Repository
public class EmployeeDAOImpl implements EmployeeDAO {

	@PersistenceContext
	private EntityManager entityManager;

	@Override
	public void addEmployee(Employee employee) {
		entityManager.persist(employee);
	}

	@Override
	public List<Employee> listEmployees() {
		CriteriaQuery<Employee> criteriaQuery = entityManager.getCriteriaBuilder().createQuery(Employee.class);
		Root<Employee> root = criteriaQuery.from(Employee.class);
		return entityManager.createQuery(criteriaQuery).getResultList();
	}
	
	@Override
	public void updateEmployee(Employee employee) {
		CriteriaBuilder cb = entityManager.getCriteriaBuilder();
		CriteriaUpdate<Employee> update = entityManager.getCriteriaBuilder().createCriteriaUpdate(Employee.class);
		Root<Employee> root = update.from(Employee.class);

		if (!StringUtils.isEmpty(employee.getName())) {
			update.set("name", employee.getName());
		}
		
		if (!StringUtils.isEmpty(employee.getEmail())) {
			update.set("email", employee.getEmail());
		}
		
		if (!StringUtils.isEmpty(employee.getAddress())) {
			update.set("address", employee.getAddress());
		}
		
		if (!StringUtils.isEmpty(employee.getTelephone())) {
			update.set("telephone", employee.getTelephone());
		}
		
		update.where(cb.equal(root.get("id"), employee.getId()));
		entityManager.createQuery(update).executeUpdate();
		
		System.out.println("*** updated **************");
	}

}

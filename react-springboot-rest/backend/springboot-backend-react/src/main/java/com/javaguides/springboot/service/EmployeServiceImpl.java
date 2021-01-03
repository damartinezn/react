package com.javaguides.springboot.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.javaguides.springboot.exception.ResourceNotFoundException;
import com.javaguides.springboot.model.Employee;
import com.javaguides.springboot.repository.EmployeeRepository;

@Service
public class EmployeServiceImpl implements EmployeeService {

	@Autowired
	private EmployeeRepository employeeDAO;

	@Override
	@Transactional(readOnly = true)
	public List<Employee> employeeFindAll() {
		return (List<Employee>) employeeDAO.findAll();
	}

	@Override
	@Transactional
	public Employee save(Employee employee) {
		return employeeDAO.save(employee);
	}

	@Override
	@Transactional(readOnly = true)
	public Employee getEmployeeById(Long id) {
		return employeeDAO.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id " + id.toString()));
	}

	@Override
	@Transactional
	public Employee updateEmployee(Employee employee) {		
		return employeeDAO.save(employee);
	}

	@Override
	@Transactional
	public void deleteEmployee(Long id) {
		 employeeDAO.deleteById(id);				
	}

}

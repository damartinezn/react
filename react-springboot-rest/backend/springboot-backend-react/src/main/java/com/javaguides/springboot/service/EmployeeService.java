package com.javaguides.springboot.service;

import java.util.List;

import com.javaguides.springboot.model.Employee;

public interface EmployeeService {
		public List<Employee> employeeFindAll();
		public Employee save(Employee employee);
		public Employee getEmployeeById(Long id);
		public Employee updateEmployee(Employee employee);
		public void deleteEmployee(Long id);
}

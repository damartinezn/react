package com.javaguides.springboot.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.javaguides.springboot.model.Employee;
import com.javaguides.springboot.service.EmployeeService;

@CrossOrigin(origins    = {"http://localhost:3000"})
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {

	@Autowired
	private EmployeeService employeeService;
	
	
	@GetMapping("/employees")
	public List<Employee> getAllEmployees(){
		return employeeService.employeeFindAll();
	}
	
	@PostMapping("/employees")
	public Employee createEmployee(@RequestBody Employee employee) {
		System.out.println(employee);
		return employeeService.save(employee);
	}
	
	@GetMapping("/employees/{id}")
	public ResponseEntity<Employee> getEmployeeById(@PathVariable Long id){
		return ResponseEntity.ok(employeeService.getEmployeeById(id));
	}
	
	@PutMapping("/employees/{id}")
	public ResponseEntity<Employee> updateEmployee(@PathVariable Long id, @RequestBody Employee employeeEdit){
		Employee employee = employeeService.getEmployeeById(id);
		
		employee.setFirstName(employeeEdit.getFirstName());
		employee.setLastName(employeeEdit.getLastName());
		employee.setEmailId(employeeEdit.getEmailId());
		
		employee = employeeService.updateEmployee(employee);
				
		return ResponseEntity.ok(employee);
	}
	
	@DeleteMapping("/employees/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteEmployee(@PathVariable Long id){
		Employee employee = employeeService.getEmployeeById(id);
		Map<String, Boolean> response = new HashMap<String, Boolean>();
		if (employee != null) {			
			employeeService.deleteEmployee(id);			
			response.put("Deleted", Boolean.TRUE);
			
		}else {
			response.put("Error", Boolean.FALSE);
		}		 
		return ResponseEntity.ok(response);
	}
}

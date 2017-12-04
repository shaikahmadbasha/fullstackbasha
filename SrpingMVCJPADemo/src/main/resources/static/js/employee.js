
/**
 * Global variables.
 */
GlobalVariables = {
	editEmpId : ""
	
};

/**
 * End points.
 */
GlobalEndPoints = {
	imageContext : "images/",
	listEmployees : "/employee/listEmployees",
	addEmployee : "/employee/addEmployee",
	editEmployee : "/employee/editEmployee",
	deleteEmployee : "/employee/deleteEmployee"
};

/**
 * 
 */
Employee = {

	listEmployees : function () {
		if(Stubs.isStubEnabled("initListEmployees")) {
			Employee.initListEmployeesResp(Stubs.initListEmployeesData);
		} else {
			AjaxCall.postJSONReq('', GlobalEndPoints.listEmployees, Employee.initListEmployeesResp, Common.failed);
		}
	},
	initListEmployeesResp : function(responseData) {
		GlobalVariables.empList = responseData;
		
		$('#listEmpTable tr').remove();
		var trHTML = '';
		$.each(responseData, function(i, item) {
			trHTML += '<tr><td>' + item.id + '</td><td>' + item.name + '</td><td>' + item.email + '</td><td>' + item.telephone + '</td><td>' + item.address +'</td><td>' + '<a href="javascript:void(0)" style="cursor: pointer; cursor: hand;" onclick="Employee.openEditEmployeeModal(' + "'" +item.id  + "'"+ ')">Edit</a>&nbsp&nbsp&nbsp&nbsp<a href="javascript:void(0)" style="cursor: pointer; cursor: hand;" onclick="Employee.deleteEmployee(' + "'" +item.id  + "'"+ ')">Delete</a>' +'</td></tr>';
		});
		
		
		$('#listEmpTable').append(trHTML);
	},
	
	openAddEmployeeModal : function () {
		$("#addEmployeeModal").modal('show'); 
	},
	
	openEditEmployeeModal : function (editEmpId) {
		GlobalVariables.editEmpId = editEmpId;
		$.each(GlobalVariables.empList, function(index, result) {
		  if(result.id == editEmpId) {
			  $("#empNameEdit").val(result.name);
			  $("#empTelephoneEdit").val(result.telephone);
			  $("#empEmailEdit").val(result.email);
			  $("#empAddressEdit").val(result.address);
		  }    
	   });
		$("#editEmployeeModal").modal('show'); 
	},
	
	addEmployee	 : function () {
		employee = {};
		employee.name = $("#empName").val();
		employee.telephone = $("#empTelephone").val();
		employee.email = $("#empEmail").val();
		employee.address = $("#empAddress").val();
		
		
		var addEmployeeReqJson = JSON.stringify(employee);
		
		if(Stubs.isStubEnabled("addEmploye")) {
			Employee.addEmployeeSuccess(Stubs.addEmployeStubData);
		} else {
			AjaxCall.postJSONReq(addEmployeeReqJson, GlobalEndPoints.addEmployee, Employee.addEmployeeSuccess, Common.failed);
			Utils.notify("Added Your Details Successfully!", "success");
		}	
	
	},
	
	editEmployee	 : function (empId) {
		employee = {};
		employee.id = GlobalVariables.editEmpId;
		employee.name = $("#empNameEdit").val();
		employee.telephone = $("#empTelephoneEdit").val();
		employee.email = $("#empEmailEdit").val();
		employee.address = $("#empAddressEdit").val();
		
		
		var addEmployeeReqJson = JSON.stringify(employee);
		
		if(Stubs.isStubEnabled("addEmploye")) {
			Employee.editEmployeeSuccess(Stubs.addEmployeStubData);
		} else {
			AjaxCall.postJSONReq(addEmployeeReqJson, GlobalEndPoints.editEmployee, Employee.editEmployeeSuccess, Common.failed);
			Utils.notify("Edited Your Details Successfully!", "success");
		}	
	
	},

		
	deleteEmployee : function (empId) {
		employee = {};
		employee.id = empId;
			
		
		var deleteEmployeeReqJson = JSON.stringify(employee);
		
		if(Stubs.isStubEnabled("deleteEmployee")) {
			Employee.addEmployeeSuccess(Stubs.deleteEmployeeStubData);
		} else {
			AjaxCall.postJSONReq(deleteEmployeeReqJson, GlobalEndPoints.deleteEmployee, Employee.deleteEmployeeSuccess, Common.failed);
			Utils.notify("Deleted Your Details Successfully!", "success");
		}
	},
	
	addEmployeeSuccess : function () {
		Employee.listEmployees();
	},
	
	deleteEmployeeSuccess : function () {
		Employee.listEmployees();
	}, 
	
	editEmployeeSuccess : function () {
		Employee.listEmployees();
	}, 
	
	aboutme : function() {
		$('#maincontainer').css("display","none");
		$('#aboutme').css("display","block");
		$('html, body').animate({scrollTop: $("#topstart").offset().top}, 500);
	},
	
};



/**
 * Get 
 */
EmployeeInvocations = {
		
	initListEmployees : function() {
		Employee.listEmployees();
	},
	
	initAddEmployee : function() {
		$('#addEmployeeForm').validator().on('submit', function (e) {
			if (e.isDefaultPrevented()) {
				
			} else {
				e.preventDefault();
				Employee.addEmployee();
			}
		});
	},
	
	
	initEditEmployees : function() {
		$('#editEmployeeForm').validator().on('submit', function (e) {
			if (e.isDefaultPrevented()) {
				
			} else {
				e.preventDefault();
				Employee.editEmployee();
			}
		});
	},
	
	initDeleteEmployees : function() {

	}

	

};

/**
 * All utility methods
 */
Utils = {
	
	notify : function(messaage, type) {
		if("warning" === type) {
			$.notify({message: messaage, icon: 'glyphicon glyphicon-warning-sign'},{type: 'danger'	});
		} else if("success" === type) {
			$.notify({message: messaage, icon: 'glyphicon glyphicon-ok'},{type: 'success'	});
		} else {
			$.notify({message: messaage, icon: 'glyphicon glyphicon-warning-sign'},{type: 'danger'	});
		}
	}
}


/**
 * Startup Initializations
 */
Initializer = {
		
	initListEmployees : function() {
		EmployeeInvocations.initListEmployees();
	},
	
	initAddEmployee : function() {
		EmployeeInvocations.initAddEmployee();
	},
	
	initEditEmployees : function() {
		EmployeeInvocations.initEditEmployees();
	},
	
	initDeleteEmployees : function() {
		EmployeeInvocations.initDeleteEmployees();
	}


};

/**
 * When page loads
 */
$(document).ready(function(){
	Initializer.initListEmployees();
	Initializer.initAddEmployee();
	Initializer.initEditEmployees();
	Initializer.initDeleteEmployees();
}); 
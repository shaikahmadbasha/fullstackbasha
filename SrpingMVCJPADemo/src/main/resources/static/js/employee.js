
/**
 * Global variables.
 */
GlobalVariables = {

	
};

/**
 * End points.
 */
GlobalEndPoints = {
	imageContext : "images/",
	listEmployees : "/listEmployees.do",
	addEmployee : "/addEmployee.do",
	editEmployee : "/editEmployee.do"	
};

/**
 * 
 */
Employee = {

	initListEmployeesResp : function(responseData) {
		
		var trHTML = '';
		$.each(responseData.body.employeesList, function(i, item) {
			trHTML += '<tr><td>' + item.id + '</td><td>' + item.name + '</td><td>' + item.email + '</td><td>' + item.telephone + '</td><td>' + item.address +'</td><td>' + 'Edit-Delete' +'</td></tr>';
		});
		
		$('#listEmpTable').append(trHTML);
	},
	
	initMenuCategoriesResp : function(responseData) {

	},
	
	
	
	
	aboutme : function() {
		$('#maincontainer').css("display","none");
		$('#aboutme').css("display","block");
		$('html, body').animate({scrollTop: $("#topstart").offset().top}, 500);
	},
	
};






/**
 * All utility methods
 */
Utils = {
	findAndRemove : function(array, property, value) {
	   $.each(array, function(index, result) {
		  if(result[property] == value) {
			  //Remove from array
			  array.splice(index, 1);
		  }    
	   });
	},
	
	notify : function(messaage, type) {
		if("warning" === type) {
			$.notify({message: messaage, icon: 'glyphicon glyphicon-warning-sign'},{type: 'danger'	});
		} else if("success" === type) {
			$.notify({message: messaage, icon: 'glyphicon glyphicon-ok'},{type: 'success'	});
		} else {
			$.notify({message: messaage, icon: 'glyphicon glyphicon-warning-sign'},{type: 'danger'	});
		}
	},
	
	last4Chars : function (str) {
		var last4chars = str;
		
		if(str) {
			last4chars = str.substring(str.length-4);
		}
		
		return last4chars;
	}
}


/**
 * Get 
 */
EmployeeInvocations = {
		
	initListEmployees : function() {
		if(Stubs.isStubEnabled("initListEmployees")) {
			Employee.initListEmployeesResp(Stubs.initListEmployeesData);
		} else {
			AjaxCall.postJSONReq('', GlobalEndPoints.listEmployees, Employee.initListEmployeesResp, Common.failed);
		}
	},
		
	initAddEmployee : function() {

	},
	
	initEditEmployees : function() {

	},
	
	initDeleteEmployees : function() {

	}

	

};

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
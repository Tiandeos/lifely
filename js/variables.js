var intro_disabled = true;
var country = random_country();


var USER  = {
	'name':random_name(),
	'country':country,
	'age':216,
	'status':'None',
	'assets':[],//temp assets | will be much more complex in future
	'education':{
		'degrees':{
			'SAMPLE':{
				cgpa:10,
				grade:'A+',
				remark:'',
			}
		}	
	},

	'job':{
		'name':'Unemployed',
		'salary':0,
		'promotions':0,
		'duration':0,
		'previousJobs':{

		}

	}
}



var BANK = {
	"balance":0,
	"id":randint(10000000,99999999),
	"loan":0,
	"hasLoan":false,
	"transactions":0,
	'transactionsList':[]
}






var money = 1000;
var health;
var morale;
var intellect;
var looks;
var karma = 0;
var isStudent = false;
var student_months = 0;
var total_student_loan = 0;
var total_years = 0;
var isJailed = false;

var totalLibVisits = 0;
var totalGymVisits = 0;
var jobQualified = false;
var hasJob = false;
var hasLoan = false;
var salary = 0;
var student_months = 0;
var student_has_loan = false;
var student_fees = 0;
var hasDisease = false;
var hasDepression = false;
var disease_count = 0;
var disease_severity = false;
var DISEASE = false;
var jailDuration = 0;
var jailDurationSpent = 0;
var alertsCount = 0;




// BUDGET RELATED
var setBudgetAmount = 250;
var budgetAmount = 250;
var monthsSinceLastBudgetUpdate = 0;






var swalBackground = "#333"
var Swal = Swal.mixin({
	background:swalBackground,
	heightAuto:false
})





const buttons = {

	profile:`<button id="profile" class="btn-lg main-btn btn-secondary" onclick="profile()"> <i class="fas fa-user-alt"></i>&nbsp;Profile</button>`,

}

const HTML = {

	actions:document.querySelector('#actions-btn'),
	activities:document.querySelector('#activities-btn'),
}






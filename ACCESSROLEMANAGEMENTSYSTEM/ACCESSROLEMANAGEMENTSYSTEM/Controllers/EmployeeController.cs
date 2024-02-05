using ACCESSROLEMANAGEMENTSYSTEM.DTOs;
using ACCESSROLEMANAGEMENTSYSTEM.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace ACCESSROLEMANAGEMENTSYSTEM.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmployeeController : ControllerBase
    {
        private readonly ARMSContext _context;
        public EmployeeController(ARMSContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<List<Employee>>> GetEmployees()
        {
            var data = await _context.Employees.ToListAsync();
            return Ok(data);
        }


        [HttpGet("EmpAdID")]
        public IActionResult Getbyid(string empAdId)
        {
            //var result = _context.Employees.Where(x => x.EmpAdid == empAdId);

            //var res = _context.OtherEntitlementOwnerMapping.ToList();

           
            var result = _context.Employees.Where(x => x.EmpAdid == empAdId).
                Join(_context.OtherEntitlementOwnerMapping,
                e => e.OtherEntitlementOwnerMappingSrNo,
                o => o.SrNo,
                (e, o) => new
                {
                    EmpAdid = e.EmpAdid,
                    EmployeeName = e.EmployeeName,
                    BusinessUnit = e.BusinessUnit,
                    CorporateDesignation = e.CorporateDesignation,
                    FunctionalDesignation = e.FunctionalDesignation,
                    IsActive = e.IsActive,
                    Type = o.Type

                }).ToList();

            //var res = _context.OtherEntitlementOwnerMapping.ToList();

            return Ok(result);
        }


        // New Post Method

        [HttpPost("add")]
        public IActionResult Add([FromBody] Employee emp)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            // Check if an employee with the same EmpAdid already exists
            var existingEmployee = _context.Employees.FirstOrDefault(x => x.EmpAdid == emp.EmpAdid);
            if (existingEmployee != null)
            {
                return BadRequest($"Employee with ADID {emp.EmpAdid} already exists.");
            }

            // Add new employee
            _context.Employees.Add(emp);
            _context.SaveChanges();

            return CreatedAtAction(nameof(Add), new { id = emp.EmpAdid }, emp);
        }





        [HttpPut("EmpAdid")]
        public IActionResult Update(string EmpAdid, [FromBody] EmployeeModel emp)
        {

            try
            {
                if (!ModelState.IsValid)
                {
                    return BadRequest(ModelState);
                }
                var obj = _context.Employees.Where(x => x.EmpAdid == EmpAdid).FirstOrDefault();

                //var obj=_context.Employees.Where(w=>w.EmpAdid==emp.EmpAdid).SingleOrDefault();
                if (obj != null)
                {
                    obj.EmployeeName = emp.EmployeeName;
                    obj.BusinessUnit = emp.BusinessUnit;
                    obj.CorporateDesignation = emp.CorporateDesignation;
                    obj.FunctionalDesignation = emp.FunctionalDesignation;
                    obj.IsActive = emp.IsActive;
                   // obj.OtherEntitlementOwnerMappingSrNo = emp.OtherEntitlementOwnerMappingSrNo;

                    // new add 

                    _context.Entry(obj).State = EntityState.Modified;
                    _context.SaveChanges();
                    return Ok(obj);                         // Return the updated entity


                }
                else
                {
                    // Handle the case where the employee doesn't exist.

                    return NotFound($"Employee with ADID {EmpAdid} not found.");

                }
            }
            catch (Exception ex)
            {

                throw;
            }
        


    }

       [HttpGet("withQueryParams")]
       // [HttpGet]
        public  IActionResult VerifyMethod([FromQuery] string empAdid, [FromQuery] string type)
        {
            var employee = _context.Employees.Include(x => x.OtherEntitlementOwnerMapping)
               .FirstOrDefault(x => x.EmpAdid == empAdid && x.OtherEntitlementOwnerMapping.Type == type);

            if (employee == null)
            {
                return NotFound($"Employee with ID {empAdid} and type {type} not found.");
            }

           return Ok(employee);

        }
        [HttpDelete("EmpAdId")]
        public IActionResult DeleteByEmpAdId([FromQuery] string empAdid, [FromQuery] int SrNo) 
        {
            
       
            var obj = _context.Employees.Where(w => w.EmpAdid==empAdid && w.OtherEntitlementOwnerMappingSrNo== SrNo).FirstOrDefault();
            if (obj != null) 
            { 
                _context.Employees.Remove(obj);
                _context.SaveChanges();
            }
            

            var child_obj= _context.OtherEntitlementOwnerMapping.Where(o=> o.SrNo==SrNo).FirstOrDefault();

            if(child_obj!= null)
            {
                _context.OtherEntitlementOwnerMapping.Remove(child_obj);
                _context.SaveChanges();
            }

            return Ok(new { obj, child_obj });

        }
    }
}

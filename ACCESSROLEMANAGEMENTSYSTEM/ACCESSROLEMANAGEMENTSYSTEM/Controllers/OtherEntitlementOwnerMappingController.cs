using ACCESSROLEMANAGEMENTSYSTEM.Models;
using ACCESSROLEMANAGEMENTSYSTEM.ViewModel;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System;

namespace ACCESSROLEMANAGEMENTSYSTEM.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OtherEntitlementOwnerMappingController : ControllerBase
    {
        private readonly ARMSContext _context;

        public OtherEntitlementOwnerMappingController(ARMSContext context)
        {
            _context = context;
        }
        [HttpGet]

        public async Task<ActionResult<List<OtherEntitlementOwnerMapping>>> GetOEOMapping()
        {
            var data = await _context.OtherEntitlementOwnerMapping.ToListAsync();
            return Ok(data);
        }

        [HttpGet("SrNo")]
        public IActionResult Getbyid(int SrNo)
        {
            var result = _context.OtherEntitlementOwnerMapping.Where(x => x.SrNo == SrNo);

            return Ok(result);
        }

        [HttpGet("New")]
        public IActionResult GetEmployeeDetails(string empId)
        {
            var emp = _context.Employees.Where(x => x.EmpAdid == empId).Include(x => x.OtherEntitlementOwnerMapping).
                ToList();
            return Ok(emp);
            
        }

        [HttpPut("Type")]
        public async Task<ActionResult> UpdateData(string Type, [FromBody] OtherEntitlementOwnerMapping oeom)
        {

            if (Type != oeom.Type)
            {
                return BadRequest();
            }

            var existingEntity = await _context.OtherEntitlementOwnerMapping.FirstOrDefaultAsync(x => x.Type == Type);
            if (existingEntity == null)
            {

                return NotFound();
            }

            // Update only the ModifiedOn and ModifiedBy fields
            existingEntity.ModifiedOn = DateTime.UtcNow;
            existingEntity.ModifiedBy = oeom.ModifiedBy;
            existingEntity.Active = oeom.Active;

            // Mark the entity as modified and save changes

            _context.Entry(existingEntity).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return Ok();

        }
        [HttpPost("UpdateIsActive")]

        public async Task<IActionResult> UpdateEmployeeIsActive([FromBody] OtherEntitlementOwnerMapping request)
        {
            var entitlement = await _context.OtherEntitlementOwnerMapping
            .FirstOrDefaultAsync(e => e.Type == request.Type);


            if (entitlement == null)
            {
                return NotFound("OtherEntitlementOwnerMapping not found with the provided Type.");
            }
            var employee = await _context.Employees
            .FirstOrDefaultAsync(e => e.EmpAdid == request.EmpAdId &&
                                      e.OtherEntitlementOwnerMappingSrNo == entitlement.SrNo);

            if (employee == null)
            {
                return NotFound("Employee not found with the provided EmpAdid and Type.");
            }

            employee.IsActive = request.Active;

            // Save changes
            _context.Employees.Update(employee);
            await _context.SaveChangesAsync();

            return Ok("Employee Is Active updated successfully.");

        }
    }



}

































